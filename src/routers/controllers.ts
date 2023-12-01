import {AdminController, UserController} from "../controllers";
import {OrderService, ProductService} from "../services";

const productService = new ProductService();
const orderService = new OrderService(productService);
export const adminController = new AdminController(productService)
export const userController = new UserController(productService, orderService)
