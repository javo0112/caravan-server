import mongoose from 'mongoose';
import config from '../config';

const options = {
    dbName: config.db.name,
};

const connectionString = `mongodb://${config.db.host}:${config.db.port}/`;

const initDbConnection = () => mongoose.connect(connectionString, options).then(() => {
    console.log(`Database connected at ${config.db.host}:${config.db.port} (${config.db.name})`);
}).catch((err) => {
    console.log(`Database connection failed: ${err}`);
    throw new Error(err);
});

export default initDbConnection;