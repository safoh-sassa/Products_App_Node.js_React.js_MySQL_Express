import { Sequelize } from "sequelize";
 
const db = new Sequelize('products', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;