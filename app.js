///This is a test
const express = require("express");
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", function(request, response) {
  response.sendFile(__dirname + "/views/about.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT||3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

