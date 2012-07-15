var express = require("express");

var app = express.createServer();

app.configure(function () {

  app.use(express.logger());
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));

});

app.configure('production', function () {

  app.use(express.errorHandler());

});

app.set('view engine', 'jade');
app.set("view options", { layout: false });

app.get("/", function(req, res) {
  res.send("hello");
});

app.listen(process.env.PORT);