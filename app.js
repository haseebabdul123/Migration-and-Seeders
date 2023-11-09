const express = require("express");

const app = express();

const userCtrl = require("./Controllers/userCtrl");

const port = 3001;

app.get("/colleges", userCtrl.collage_list);

app.listen(port, () => {
  console.log(`App is Running at http://localhost:${port}`);
});
