const {Router} = require("express");
const {GiftRecord} = require("../records/gift.record");

const giftRouter = Router();

giftRouter
    .get('/', async (req, res) => {
        const giftList = await GiftRecord.listAll();
        res.render('gift/list', {
            giftList,
        });

    })
    .post('/', async (req, res) => {
        const data = {
            ...req.body,
            count: Number(req.body.count),
        };
        res.render('gift/list', {
            giftList,
        });

    });

module.exports = {
    giftRouter,
};