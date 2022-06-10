const express = require("express");
const router = express.Router();
const DESTINATION_PATH = require('../data/destinations.json');
const { getDestinationList, getDestinationsByCategory } = require("../controller/destinations")

router.get("/", (req, res) => {
    res.send(DESTINATION_PATH)
})

router.get("/:category", (req, res) => {
    const moodSelected = DESTINATION_PATH.filter(function(el){
        return el.category === req.params.category
    })
    res.send(moodSelected) 
});

module.exports = router;