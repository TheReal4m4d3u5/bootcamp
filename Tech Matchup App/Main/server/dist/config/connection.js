import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup');
const db = mongoose.connection;
export default db;