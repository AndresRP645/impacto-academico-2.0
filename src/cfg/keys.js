import 'dotenv/config';

module.exports = {
    database: {
        host: process.env.HOST || 'localhost', 
        userdb: process.env.USER || 'root',
        password: process.env.PASSWD || '',
        database: process.env.DB || 'impactoacademico',
        /*ssl:{
            rejectUnauthorized: true
        }*/
    }
}
