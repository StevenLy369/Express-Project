"use strict";

const express = require("express");
const cartItems = require("./cart-items");
const items = express.Router();


items.get("/cart-items", (req, res) => {
    res.json(cartitems.getAllItems());
});

items.post("/cart-items", (req, res) => {
    console.log(req.body);
    cartList.push(req.body);
});


items.put("/cart-items/:id", (req, res) => {
    ItemList.splice(cartitems.findIndex(element => element.name === req.params.name), 1, req.body);
    res.json(cartItems);
    console.log(req.body, req.params.id);
});

items.delete("/cart-items/:id", (req, res) => {
    
    ItemList.splice(cartItems.findIndex(element => element.name === req.params.name), 1);
    res.json(cartItems);
    console.log(req.params.id);
});


module.exports = items;











