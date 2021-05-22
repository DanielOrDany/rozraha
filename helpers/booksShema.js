import { Sequelize } from "sequelize";

const booksShema = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    creator: {
        type: Sequelize.STRING,
        allowNull: true
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    deleted_at: {
        type: Sequelize.BIGINT,
        allowNull: true
    }
};

export default booksShema;