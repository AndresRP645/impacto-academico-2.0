import 'dotenv/config';

module.exports = {
    database: {
        host: process.env.HOST || 'aws.connect.psdb.cloud', 
        user: process.env.USER || '24pdskc067rprju2p2p9',
        password: process.env.PASSWD || 'pscale_pw_5HCfyH9l8YRdJuHRUOUyZ6xTtdr25Wi1KtomXmtDNOB',
        database: process.env.DB || 'impactoacademico',
        ssl:{
            rejectUnauthorized: true
        }
    }
}
