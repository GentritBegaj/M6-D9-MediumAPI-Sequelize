const express = require("express");
const Article = require("../../db").Article;
const Review = require("../../db").Review;
const Category = require("../../db").Category;
const { Sequelize } = require("sequelize");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Article.findAll();
      res.send(data);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Article.create(req.body);
      res.send(data);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

module.exports = router;
