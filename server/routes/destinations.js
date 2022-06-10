const express = require("express");
const router = express.Router();
const DESTINATION_PATH = "";
const { getDestinationList, getDestinationsByCategory } = require("../controller/destinations")

router.get("/", getDestinationList);
router.get("/:category", getDestinationsByCategory);

module.exports = router;