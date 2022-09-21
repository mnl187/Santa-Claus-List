const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");
const {GiftRecord} = require("../records/gift.record");

const childRouter = Router();

childRouter
    .get('/', (req, res) => {
        const childrenlist = ChildRecord.listAll();
        const giftsList = GiftRecord.listAll();

        res.render('children/list', {
            childrenlist,
            giftsList,
        })

    });

module.exports = {
    childRouter,
};