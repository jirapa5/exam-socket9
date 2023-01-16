var express = require("express");
var app = express();

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/weekday/:inputDate", (req, res, next) => {
  //   if (!req.params.inputDate) {
  //     res.send("Please input date.");
  //   }
  var inputDate = req.params.inputDate;
  console.log("input date: " + inputDate);
  console.log(typeof inputDate);
  let year = inputDate.substring(0, 4);
  if (Number(year) < 1900) {
    res.send("Range of year is from 1900 afterward.");
  }
  var date = new Date(inputDate);
  console.log("new date: " + date);
  console.log(date instanceof Date && !isNaN(date));
  console.log(date instanceof Date);
  console.log("check value : " + !isNaN(date));

  let day = date.getDay();

  console.log(day);
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //   res.json({
  //     "day of week": "xxx",
  //   });
  res.json({ dayOfWeek: dayOfWeek[day] });
});
