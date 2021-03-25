const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/todo", {
   useNewUrlParser: true,
   useUnifiedTopology: true
 });
