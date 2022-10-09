const express = require("express");
const { demoFunction } = require("../controller/index.controller");

const router = express.Router();

router.route("/demo/:color").get(demoFunction);

module.exports = router;
