import { Sequelize } from 'sequelize';
const sequelize = new Sequelize("rozraha", "root", "lfybkjshf", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const users = sequelize.define('users', {
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
        allowNull: false
    }
}, {
    tableName: 'users',
    sequelize
    // Other model options go here
});

const books = sequelize.define('books', {
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
        allowNull: false
    }
}, {
    tableName: 'books',
    sequelize
    // Other model options go here
});


const orders = sequelize.define('orders', {
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
        allowNull: false
    },
    created_at: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'orders',
    sequelize
    // Other model options go here
});

export default sequelize;