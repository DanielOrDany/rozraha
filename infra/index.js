import { Sequelize } from 'sequelize';

import booksShema from '../helpers/booksShema.js';
import oredersShema from '../helpers/ordersShema.js';
import usersShema from '../helpers/usersShema.js';
import database from './db.js';

const sequelize = database;

sequelize.define('users', {
    ...usersShema
}, {
    tableName: 'users',
    sequelize
    // Other model options go here
});

sequelize.define('books', {
    ...booksShema
}, {
    tableName: 'books',
    sequelize
    // Other model options go here
});


sequelize.define('orders', {
    ...oredersShema
}, {
    tableName: 'orders',
    sequelize
    // Other model options go here
});

export default sequelize;