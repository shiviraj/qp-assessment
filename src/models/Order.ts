import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/sequelize";

class Order extends Model {
    public id!: number;
    public totalAmount!: number;
    public products!: Array<{ productId: number, quantity: number, subtotal: number }>;
}

Order.init({
        id: {type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true,},
        totalAmount: {type: DataTypes.DECIMAL(10, 2), allowNull: false,},
        products: {type: DataTypes.JSON, allowNull: false,}
    },
    {tableName: 'orders', sequelize,}
)

export default Order
