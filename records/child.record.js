const {pool} = require("../utils/db");

class ChildRecord {
        static async listAll() {
            const [results] = await pool.execute("SELECT * FROM `children` ORDER BY `name`");
            return results;
    }
}

module.exports = {
    ChildRecord,
}