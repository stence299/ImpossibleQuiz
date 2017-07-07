const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const port = 3000;
const connectionString = "postgres://markus@localhost/Questions"
const questions_controller = require("./questions_controller")
const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
};

massive( connectionString ).then(function(dbInstance){
  app.set("db", dbInstance)
})

app.use(express.static(__dirname + '/public'))
app.use( bodyParser.json() );
app.use( cors(corsOptions) );

app.post("/api/question", questions_controller.create);
app.get("/api/questions", questions_controller.getAll);
app.get("/api/question/:id", questions_controller.getOne);
app.put("/api/question/:id", questions_controller.update);
app.delete("/api/question/:id", questions_controller.delete);

app.listen(port, () => {
  console.log("I'm listening")
})