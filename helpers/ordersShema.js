import { Sequelize } from "sequelize";

const ordersShema = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    pre_order_value: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    order_value: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    user_id: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    book_id: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    expired_at: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    returned_at: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    created_at: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
};

export default ordersShema;