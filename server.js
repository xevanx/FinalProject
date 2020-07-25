const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
// const User = require('./server/models/User')
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./server/routes/index');
const bodyParser = require('body-parser')

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// app.use(express.json());
app.use(cors())

// const uri = process.env.ATLAS_URI;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB

mongoose.connect("mongodb+srv://root:toor@cluster0.it7v6.mongodb.net/playgames?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB Atlas on ' + PORT))
.catch(err => console.log(err));



// Add routes, both API and view
app.use(routes);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

