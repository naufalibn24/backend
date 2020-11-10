const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoose = require ('mongoose');
const connectingURL = 'mongodb://assigment3:assigment3@ds133358.mlab.com:33358/heroku_1x1k1nrg';
const databaseName = 'Betta-Fish';

module.exports = function () {
  mongoose.connect (
    connectingURL,
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true},
    (error, client) => {
      if (error) {
        return console.log ('DB TIDAK CONNECT');
      }
      console.log ('DB CONNECT');
    }
  );
};
