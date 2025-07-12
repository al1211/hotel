const express = require("express");
const app = express();
const ConnectDb = require("./db");
const MenuRoutes=require("./routes/MenuItem")
const PersonRoutes=require('./routes/person');

ConnectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/menu',MenuRoutes);
app.use("/person",PersonRoutes);

app.listen(3000, () => {
  console.log("server is running");
});
