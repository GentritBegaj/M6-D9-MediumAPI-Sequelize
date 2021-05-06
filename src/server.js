const express = require("express");
const db = require("./db");
const cors = require("cors");
const articlesRoutes = require("./services/articles");
// const reviewsRoutes = require("./services/reviews")
// const categoriesRoutes = require("./services/categories")

const server = express();

server.use(cors());
server.use(express.json());
server.use("/articles", articlesRoutes);
// server.use("/reviews", reviewsRoutes);
// server.use("/categories", categoriesRoutes);

db.sequelize.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () =>
    console.log("Server is running on port ", process.env.PORT || 3001)
  );
});
