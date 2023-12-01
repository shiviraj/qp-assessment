import express, {Request, Response} from "express";
import {userController} from "./controllers";
import '../utils/response'

const userRouter = express.Router()

userRouter.get("/products", (_req: Request, res: Response) => {
    userController.getProducts()
        .sendSuccessResponse(res)
        .sendFailureResponseWithNoError(res)
})

userRouter.post("/order", (req: Request, res: Response) => {
    userController.orderProducts(req.body)
        .sendSuccessResponse(res)
        .sendFailureResponseWithNoError(res)
})

export default userRouter
