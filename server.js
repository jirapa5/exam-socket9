var express = require("express");
var app = express();

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.get("/api/weekday/:inputDate", (req, res, next) => {
  var inputDate = req.params.inputDate;
  console.log(inputDate.length);
  if (inputDate.length < 10) {
    res.json({ error: "Input date format must be 'YYYY-MM-DD'." });
  }

  let year = inputDate.substring(0, 4);

  if (Number(year) < 1900) {
    res.json({ error: "Range of year is from 1900 afterward." });
  }
  var date = new Date(inputDate);
  //   console.log("new date: " + date);
  //   console.log(date instanceof Date);
  //   console.log("check value : " + !isNaN(date));

  if (date instanceof Date && !isNaN(date)) {
    let day = date.getDay();

    const dayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    res.json({ dayOfWeek: dayOfWeek[day] });
  } else {
    res.json({ error: "Input date is invalid." });
  }
});
