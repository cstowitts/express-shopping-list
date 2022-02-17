const express = require("express");
const { items } = require("./fakeDb");

const router = new express.Router();


router.get("/", function (req, res) {

    return res.json(items);
})


router.post("/", function (req, res) {
    const newItem = {
        name: req.body.name,
        price: parseFloat(req.body.price)
    };

    items.push(newItem);
    debugger
    return res.json({ added: newItem });
})

// router.get("items/:name", function())




module.exports = router;