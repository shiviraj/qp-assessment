import express, {Response, Request, NextFunction} from 'express';
import router from "./router";
import logger from 'logging-starter/lib/logger';

const app = express();

app.use(express.json())
app.get("/", (_req: Request, res: Response) => {
    res.send({message: 'you have just arrived at qp-assessment server'})
})

app.use("/api", router)

app.use("*", (_req: Request, res: Response) => {
    res.status(405).send({message: 'Method no found'})
})

export default app
