const fs = require("fs");
const DESTINATION_PATH = "";

function getDestinationList(req, res) {
    fs.readFile(DESTINATION_PATH, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    })
}

function getDestinationsByCategory(req, res) {
    fs.readFile(DESTINATION_PATH, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const destinations = JSON.parse(data);
            const destinationsFound = destinations.filter((destination) => destination.category == req.params.category)
            res.json(destinationsFound);
        }
    })
}

module.exports = { getDestinationList, getDestinationsByCategory };