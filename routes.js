"use strict";

const express = require("express");
// const cartItems = require("./cart-items");
const items = express.Router();
const pool = require("./connection");

function selectAll(res) {
  pool
    .query("select * from shoppingcartlist  order by id")
    .then(result => res.json(result.rows));
}
items.get("/cart-items", (req, res) => {
  selectAll(res);
});

items.post("/cart-items", (req, res) => {
  pool
    .query(
      "insert into shoppingcartlist (product, price, quantity) values ( $1::text, $2::int, $3::int)",
      [req.body.product, req.body.price, req.body.quantity]
    )
    .then(() => {
      selectAll(res);
    });
});

items.put("/cart-items/:id", (req, res) => {
  pool
    .query(
      "update shoppingcartlist set id=$1::int, product=$2::text, price=$3::int, quantity=$4::int where id=$5::int",
      [
        req.body.id,
        req.body.product,
        req.body.price,
        req.body.quantity,
        Number(req.params.id)
      ]
    )
    .then(() => {
      selectAll(res);
    });
});

items.delete("/cart-items/:id", (req, res) => {
  pool
    .query("delete from shoppingcartlist where id = $1::int;", 
    [Number(req.params.id)])
    .then(() => {
      selectAll(res);
    });
});

module.exports = items;
