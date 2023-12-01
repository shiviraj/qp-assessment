import {ProductService} from "../services";
import Product from "../models/Product";

export class AdminController {
    private productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService
    }

    addProduct(product: Product): Promise<Product> {
        return this.productService.addProduct(product)
    }

    getProducts(): Promise<Product[]> {
        return this.productService.getProducts()
    }

    async deleteProduct(id: string): Promise<{ status: true }> {
        await this.productService.deleteById(id);
        return {status: true}
    }

    updateProductDetails(id: string, product: Partial<Product>) {
        return this.productService.updateProductDetails(id, product)
    }
}
