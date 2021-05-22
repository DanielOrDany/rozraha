import { Sequelize } from "sequelize";

const usersShema = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
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

export default usersShema;