var express = require("express");
var router = express.Router();
var shell = require("shelljs");
var path = require("path");
var slash = require("slash");
const _ = require("lodash");

const dirTree = require("./displayTree");
const { json } = require("express");
const { Console } = require("console");
const { SSL_OP_PKCS1_CHECK_1 } = require("constants");

var path1;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", async function (req, res, next) {
  var url = req.body.url;
  console.log(req.body, "params <<<<<<<<<<<<<<<<<<<");
  //res.send(req);
  // var url = "https://github.com/jinalthakkar24/ionic_todo"
  console.log("splited==", url);
  path1 = slash(path.join(__dirname, "../../"));
  var splitUrl = url.split("/").pop();
  console.log("splited==", splitUrl);
  var updatedPath = path1 + splitUrl;
  console.log("updated path==", updatedPath);
  shell.cd(path1);
  await shell.exec(`git clone ${url}`);
  console.log("cloning successfully done");

  // (async ()=>{
  //    var dd=await printDirectoryTree(updatedPath)
  //    var spliting = dd.split('\n');
  //   // var spliting = spliting.join(" \n ");
  //    // var formattedString = spliting.split(",").join("<br />")
  //    console.log("spiting",spliting);
  //    dd=JSON.stringify(dd);
  //   res.send(dd);

  //   // res.render('monacoTree',{data:spliting});

  // })()
  //json converter
  var dd;
  var jsonArray = [];
  (async () => {
    dd = await dirTree(splitUrl);
    console.log("json data--", dd);
     var ddd = JSON.stringify(dd);
    

    res.send(ddd);

    //res.render("monacoTree", { data: dd });
  })();

  //==================================================
});

module.exports = router;
