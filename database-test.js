#! /usr/bin/env node

console.log('This script populates some test themes, instances, versions, problems, solutions to database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
/*var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}*/

var async = require('async')

var Message = require('./models/Message')

//Set up mongoose connection
var mongoose = require('mongoose');
var config = require('./config.json');
var mongoDB = config.url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var messages = [];


function messageCreate(text, cb) {
  var message = new Message (
    {
      text: text,
    }
  )

  message.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Message: ' + message);
    messages.push(message)
    cb(null, message)
  }  );
}


function createMessages(cb) {
    async.parallel([
          function(callback) {
            messageCreate('This is sample message-1', callback);
          },
          function(callback) {
            messageCreate('This is sample message-2', callback);
          },
          function(callback) {
            messageCreate('This is sample message-3', callback);
          },
          function(callback) {
            messageCreate('This is sample message-4', callback);
          },
          function(callback) {
            messageCreate('This is sample message-5', callback);
          }
        ],
        // optional callback
        cb);
}


async.series([
    createMessages,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(results);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
