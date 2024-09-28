const express = require("express");
const { handle_generate_newshort_url } = require("../controllers/url");
const router = express.Router();

router.post('/', handle_generate_newshort_url);

module.exports = router;
