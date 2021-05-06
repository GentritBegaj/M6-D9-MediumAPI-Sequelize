const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    // dialectOptions:{
    //   ssl:{
    //     require:true, 
    //     rejectUnauthorized:false
    //   }
    // }
    }
)
  
const Category = require("./categories")(sequelize, DataTypes);
const Article = require("./articles")(sequelize, DataTypes);
const Review = require("./reviews")(sequelize, DataTypes);

Article.hasMany(Review)
Review.belongsTo(Article)

Category.hasMany(Article)
Article.belongsTo(Category)

sequelize
    .authenticate()
    .then(() => console.log("Connection established"))
    .catch((e) => console.log("Connection failed ", e));

module.exports = { sequelize, Article, Review, Category };
