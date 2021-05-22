import { Sequelize } from "sequelize";

const database = new Sequelize("rozraha", "root", "", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

export default database;
