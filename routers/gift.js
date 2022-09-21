const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");

const giftRouter = Router();

giftRouter
    .get('/', (req, res) => {
        // const childrenlist = ChildRecord.listAll();
        res.render('gift/list', {
            // childrenlist,
        })

    });

module.exports = {
    giftRouter,
};