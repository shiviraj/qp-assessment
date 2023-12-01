import {OrderRequest} from "../controllers";
import {ProductService} from "./ProductService";
import Order from "../models/Order";

export class OrderService {
    private productService: ProductService

    constructor(productService: ProductService) {
        this.productService = productService
    }

    async createOrder(orderRequest: OrderRequest): Promise<Order> {
        const orders = await Promise.all(orderRequest.products.map(async product => {
            return await this.productService.getOrderDetails(product)
        }))
        const totalAmount = orders.reduce((total, order) => total + order.subTotal, 0)
        return await Order.create({totalAmount, products: orders})
    }
}

export type ProductOrder = { productId: number, quantity: number, subTotal: number }

