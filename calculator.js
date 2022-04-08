var express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var sum = num1+num2;

  res.send(sum);

})
app.get("/bmi", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmi", function(req, res){
  var weight =paserFloat(req.body.Weight);
  var height = parserFloat(req.body.Height);
  var bmi = weight/(height * height);
  res.send(bmi);
})
app.listen(4000, function(){
  console.log("sever started");
})
