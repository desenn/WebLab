const express = require('express');
var router = express.Router();
const app = express();
const port = 3000;
//const uri = "mongodb+srv://deborahsenn:rpUi87cDVMCZQk1o@radarcluster.riviubm.mongodb.net/?retryWrites=true&w=majority&appName=RadarCluster";

const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose").default;
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.radar = require("./radar.model.js")(mongoose);

module.exports = db;


app.get('/', (req, res) => {
  res.send('API des Technologie Radar');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = router;

