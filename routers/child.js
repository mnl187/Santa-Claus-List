const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");
const {GiftRecord} = require("../records/gift.record");
const {ValidationError} = require("../utils/errors");

const childRouter = Router();

childRouter
    .get('/', async (req, res) => {
        const childrenlist = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();

        res.render('children/list', {
            childrenlist,
            giftsList,
        })

    })
    .post('/', async (req, res) => {
        const newChild = new ChildRecord(req.body)
        await newChild.insert();

        res.redirect('/child');
    })
    .patch('/gift/:childId', async (req, res) => {
        const child = await ChildRecord.getOne(req.params.childId);

        if (child === null) {
            throw new ValidationError('Nie znaleziono dziecka o podanym ID');
        }

        const gift = req.body.giftId === '' ? null :await GiftRecord.getOne(req.body.giftId);

        child.giftId = gift?.id ?? null;
        await child .update();

        res.redirect('/child');
    });

module.exports = {
    childRouter,
};