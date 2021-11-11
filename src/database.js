const { Pool } = require('pg')

const pool = new Pool({
    host: 'ec2-107-20-127-127.compute-1.amazonaws.com',
    user: 'ubyjfmbtniworz',
    password: '1a3d0d3e9e9f96ce392229a7fe9e40f3f3a0e2ff724d0a44c0a4cd97790a643e',
    database: 'dcf6g2l4lae1s5',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

module.exports = pool;