class ChildRecord {
    listAll() {
        return [
            {
                id:'abc',
                name: 'Ania',
                gift: 'Lalka',
            },
            {
                id:'123',
                name: 'Piotrek',
                gift: 'Autko',
            },
            {
                id:'1ad',
                name: 'Zdzisiu',
                gift: 'Zestaw młody majsterkowicz',
            },
        ];
    }
}

module.exports = {
    ChildRecord,
}