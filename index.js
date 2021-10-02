//-----------------------Packages-------------------------
const express = require("express");
const app = express();
//-------------------Create Server------------------------
app.set('trust proxy', true);
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/")
  console.log(`ERROR 404 in ${decodeURIComponent(_.path)}`)
});
app.listen(3039);
console.log('Listening on PORT 3039')