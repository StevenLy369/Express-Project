"use strict";

const express = require("express");
const cartitems = require("./cart-items");
const router = express.Router();

router.get("/cartitems", (req, res) => {
    res.json(cartitems);
});










module.exports = router;