import {Sequelize} from "sequelize";

const db = new Sequelize('mikroid','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;