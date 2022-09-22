const {createPool} = require("mysql2/promise");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_stanta_gifts',
    namedPlaceholders: true,
    decimalNumbers: true,
});

module.exports = {
    pool,
}