export default {
    port: process.env.port || 1234,
    env: process.env.NODE_ENV || 'development',
    db: {
        development: {
            hostname: 'localhost',
            username: 'root',
            password: '',
            database: 'mysql'
        },
        production: {
            hostname: '',
            username: '',
            password: '',
            database: ''
        }
    }
    
}