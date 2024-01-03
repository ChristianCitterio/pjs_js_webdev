import express, { Express, Request, Response } from "express";
import cors from "cors";
import { corsOptions } from "./configs";
import { router as categoriesRouter } from "./routers/categoriesRouter";
import { router as productsRouter } from "./routers/productsRouter";
import { router as ordersRouter } from "./routers/ordersRouter";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());

app.get("/healthz", (req: Request, res: Response) => {
  res.status(200).json({message: "OK"});
});

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
