import Product from "../models/Product";
import {DataNotFoundError} from "../exceptions/DataNotFoundError";
import {ProductOrder} from "./OrderService";

export class ProductService {

    addProduct(product: Product): Promise<Product> {
        return Product.create({...product})
    }

    getProducts(): Promise<Product[]> {
        return Product.findAll()
    }

    async deleteById(id: string): Promise<void> {
        const product = await this.findById(id);
        return product.destroy();
    }

    private async findById(id: string): Promise<Product> {
        const product = await Product.findByPk(id);
        if (product) {
            return product;
        }
        throw new DataNotFoundError();
    }

    async updateProductDetails(id: string, productDetails: Partial<Product>): Promise<Product> {
        const product = await this.findById(id);
        return product.update({...productDetails})
    }

    async getOrderDetails({productId, quantity}: { productId: number; quantity: number }): Promise<ProductOrder> {
        const product = await this.findById(productId.toString());
        return {productId, quantity, subTotal: product.price * quantity}
    }
}
