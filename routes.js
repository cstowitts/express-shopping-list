const express = require("express");
const items = require("./fakeDb");

const router = new express.Router();




router.get("/items", function (req, res){

    return res.json(items);
})


router.post("/items", function(req, res){
    
    items.push(req.body);
    return res.json({added: req.body});
})

// router.get("items/:name", function())




module.exports = {
    router
};