//-----------------------Packages-------------------------
const express = require("express");
const app = express();
const router = express.Router();
//-------------------Create Server------------------------
app.set('trust proxy', true);
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/")
  console.log(`ERROR 404 in ${decodeURIComponent(_.path)}`)
});
router.get('/faq', (res, req) => {
  res.render('faq.ejs')
})
app.listen(3039);
console.log('Listening on PORT 3039')