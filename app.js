require("dotenv").config();
const express = require("express");
const app = express();
const ConnectDb = require("./db");
const MenuRoutes=require("./routes/MenuItem")
const PersonRoutes=require('./routes/person');

ConnectDb();
const PORT=process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/menu',MenuRoutes);
app.use("/person",PersonRoutes);


app.listen(PORT, () => {
  console.log(` ${PORT} server is running`);
});
