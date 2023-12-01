import {OrderService, ProductService} from "../services";
import Product from "../models/Product";
import Order from "../models/Order";

export class UserController {
    private productService: ProductService;
    private orderService: OrderService;

    constructor(productService: ProductService, orderService: OrderService) {
        this.productService = productService
        this.orderService = orderService
    }

    getProducts(): Promise<Product[]> {
        return this.productService.getProducts()
    }

    orderProducts(orderRequest: OrderRequest): Promise<Order> {
        return this.orderService.createOrder(orderRequest)
    }
}

export type OrderRequest = { products: Array<{ productId: number, quantity: number }> }
