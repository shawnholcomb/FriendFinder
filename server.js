var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('assets'))

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});