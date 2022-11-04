import { Sequelize } from "sequelize";
 
const db = new Sequelize('code_sample', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;