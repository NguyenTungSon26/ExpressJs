const express = require("express");
const router = express.Router();

// Import Controller
const reversesController = require("../apps/controllers/reverses");
const chunkController = require("../apps/controllers/chunk");
const uniqController = require("../apps/controllers/uniq");
const uniqArrObjController = require("../apps/controllers/uniqArrObj");
const groupbyController = require("../apps/controllers/groupby");
const trimAll = require("../apps/controllers/trim");
const mapkeyController = require("../apps/controllers/mapkey");

router.post("/chunk", chunkController);
router.post("/reveres", reversesController);
router.post("/uniq", uniqController);
router.post("/uniq2", uniqArrObjController);
router.post("/groupby", groupbyController);
router.post("/trim", trimAll);
router.post("/mapkey", mapkeyController);

module.exports = router;
