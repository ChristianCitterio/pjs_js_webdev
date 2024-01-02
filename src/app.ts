import express, { Express, Request, Response } from "express";
import cors from "cors";
import { corsOptions } from "./configs";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());

app.get("/healthz", (req: Request, res: Response) => {
  res.status(200).send({message: "OK"});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
