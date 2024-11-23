import dotenv from 'dotenv';
dotenv.config();
console.log("DB_URL:", process.env.DB_URL);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
try {
    const dbUrl = new URL(process.env.DB_URL || '');
    console.log('DB URL is valid:', dbUrl);
}
catch (error) {
    console.error('Invalid DB_URL format:', error);
}
import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { TicketFactory } from './ticket.js';
const sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    dialectOptions: {
        decimalNumbers: true,
    },
});
sequelize.authenticate()
    .then(() => console.log('Database connection established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));
const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);
User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
Ticket.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser' });
export { sequelize, User, Ticket };
