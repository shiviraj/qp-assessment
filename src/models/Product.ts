import {DataTypes, Model} from "sequelize";
import {sequelize} from "../db/sequelize";

class Product extends Model {
    public id!: number;
    public name!: string;
    public price!: number;
    public quantity!: number;
}

Product.init({
        id: {type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true,},
        name: {type: DataTypes.STRING, allowNull: false,},
        price: {type: DataTypes.DECIMAL(10, 2), allowNull: false,},
        quantity: {type: DataTypes.INTEGER, allowNull: false,},
    },
    {tableName: 'products', sequelize,}
)

export default Product
