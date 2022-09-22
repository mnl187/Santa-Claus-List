const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/errors");

class GiftRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Nazwa prezentu musi mieć od 3 do 55 znaków.')
        }
        if (!obj.count || obj.count < 1 || obj.count > 999999) {
            throw new ValidationError('Liczba sztuk prezentów powinna się zmieścić w przedziale 1 - 999999.')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `gifts`");
    return results;
    }
}


module.exports = {
    GiftRecord,
}