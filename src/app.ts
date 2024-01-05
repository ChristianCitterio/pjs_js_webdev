import express, { Express, Request, Response } from "express";
import cors from "cors";
import jwt from 'jsonwebtoken';
import { corsOptions } from "./configs";
import { router as categoriesRouter } from "./routers/categoriesRouter";
import { router as productsRouter } from "./routers/productsRouter";
import { router as ordersRouter } from "./routers/ordersRouter";
import { router as usersRouter } from "./routers/usersRouter";
import { verifyData, verifyToken } from "./middlewares/loginMiddlewares";

const app: Express = express();
const port = process.env.PORT || 3000;
const key = process.env.SECRET_KEY || "secretkey";

app.use(cors(corsOptions));
app.use(express.json());

app.get("/healthz", (req: Request, res: Response) => {
  res.status(200).json({message: "OK"});
});

app.post("/login", (req: Request, res: Response) => {
  const testUser = {
    id: "1",
    username: "name",
    password: "as13hnc023inc209"
  };
  jwt.sign({ testUser }, key, (err: any, token: any) => {
    res.status(200).json({ token });
  });
});

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
