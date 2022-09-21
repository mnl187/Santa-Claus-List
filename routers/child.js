const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");

const childRouter = Router();

childRouter
    .get('/', (req, res) => {
        const childrenlist = ChildRecord.listAll();
        res.render('children/list', {
            childrenlist,
        })

    });

module.exports = {
    childRouter,
};