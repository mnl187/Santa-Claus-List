const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");
const {GiftRecord} = require("../records/gift.record");

const childRouter = Router();

childRouter
    .get('/', (req, res) => {
        const childrenlist = ChildRecord.listAll();
        const giftList = GiftRecord.listAll();

        res.render('children/list', {
            childrenlist,
            giftList,
        })

    });

module.exports = {
    childRouter,
};