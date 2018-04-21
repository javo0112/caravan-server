
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
if(!process.env.NODE_ENV) console.log('NODE_ENV not set, using dev config as fallback');
const env = process.env.NODE_ENV || 'dev';


const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 3000,
        host: process.env.DEV_APP_HOST || 'localhost',
    },
    db: {
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        host: process.env.DEV_DB_HOST || 'localhost',
        name: process.env.DEV_DB_NAME || 'caravan-dev'
    }
}

const prod = {
    app: {
        port: parseInt(process.env.PROD_APP_PORT) || 3020,
        host: process.env.PROD_APP_HOST || 'localhost',
    },
    db: {
        port: parseInt(process.env.PROD_DB_PORT) || 27017,
        host: process.env.PROD_DB_HOST || 'localhost',
        name: process.env.PROD_DB_NAME || 'caravan-prod'
    }
}

const config = {
    dev,
    prod,
}

export default config[env];