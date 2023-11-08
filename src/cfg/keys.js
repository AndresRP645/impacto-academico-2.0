import 'dotenv/config';

module.exports = {
    database: {
        host: process.env.HOST || 'aws.connect.psdb.cloud', 
        user: process.env.USER || '9wnwo5cmego52sw0cbb0',
        password: process.env.PASSWD || 'pscale_pw_Tfjax8WHPotYUkU87zUaMCq7TkRGJFM37Zi9s75DGNF',
        database: process.env.DB || 'impactoacademico',
        ssl:{
            rejectUnauthorized: true
        }
    }
}
