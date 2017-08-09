const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const port = 3001;
const connectionString = require('./config').dbConnection
const questions_controller = require("./questions_controller")
const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
};

massive( connectionString ).then(function(dbInstance){
  app.set("db", dbInstance)
}) //connects database to server.

app.use(express.static(__dirname + '/public'))
app.use( bodyParser.json() );
app.use( cors(corsOptions) );


app.get('/api/question/:id', function(req, res, next){
  var db = req.app.get('db');
  db.get_question([req.params.id])
  .then(response => res.status(200).json(response))
  .catch(err => res.status(404).json(err))
})

// app.post("/api/question", questions_controller.create);
// app.get("/api/questions", questions_controller.getAll);
// app.get("/api/question/:id", questions_controller.getOne);
// app.put("/api/question/:id", questions_controller.update);
// app.delete("/api/question/:id", questions_controller.delete);

app.listen(port, () => {
  console.log("I'm listening")
})