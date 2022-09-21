class GiftRecord {
    listAll() {
        return [
            {
                id:'abc',
                name: 'Lalka',
                count: 5,
            },
            {
                id:'123',
                name: 'Autko',
                count: 10,
            },
            {
                id:'1ad',
                name: 'Zestaw młody majsterkowicz',
                count: 2,
            },
        ];
    }
}

module.exports = {
    GiftRecord,
}