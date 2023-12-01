import express, {Request, Response} from "express";
import {adminController} from "./controllers";
import '../utils/response'

const adminRouter = express.Router()

adminRouter.post('/products', async (req: Request, res: Response) => {
    adminController.addProduct(req.body)
        .sendSuccessResponse(res, 201)
        .sendFailureResponseWithNoError(res)
});

adminRouter.get('/products', async (_req: Request, res: Response) => {
    adminController.getProducts()
        .sendSuccessResponse(res)
        .sendFailureResponseWithNoError(res)
});

adminRouter.delete('/products/:id', async (req: Request, res: Response) => {
    adminController.deleteProduct(req.params.id as string)
        .sendSuccessResponse(res)
        .sendFailureResponseWithNoError(res)
});

adminRouter.put('/products/:id', async (req: Request, res: Response) => {
    adminController.updateProductDetails(req.params.id, req.body)
        .sendSuccessResponse(res)
        .sendFailureResponseWithNoError(res)
});

adminRouter.patch('/products/:id/inventory', async (req: Request, res: Response) => {
    adminController.updateProductDetails(req.params.id, {quantity: req.body.quantity})
        .sendSuccessResponse(res)
        .sendFailureResponseWithNoError(res)
});

export default adminRouter
