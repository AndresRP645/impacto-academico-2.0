import 'dotenv/config';

module.exports = {
    database: {
        host: process.env.HOST, 
        user: process.env.USER,
        password: process.env.PASSWD,
        database: process.env.DB,
        ssl:{
            rejectUnauthorized: true
        }
    }
}
