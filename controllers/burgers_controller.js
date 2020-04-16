const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burger", function(req, res) {
    burger.insertOne(req.body.burgerName, function(data) {
        res.json({id: data.insertId});
    });
});

router.put("/api/burger/:id", function(req, res) {
    burger.updateOne(req.params.id, true, function(data) {
        if(data.changedRows === 0) {
            return res.status(404).end();
        }

        res.status(200).end();
    });
});

// Export routes for server.js to use.
module.exports = router;