var Message = require('../models/Message')
var async = require('async')
var Mongoose = require('mongoose')

exports.index_list = function(req, res) {
    /*async.parallel([
        function(callback) {
            Message.find({}).sort([[]]).exec(callback);
        }
    ],
    function(err, results){
        if(err){
            res.render('index', {title: "index_list", data: err})
        }else{
            res.render('index', {title: "index_list", data: results})
        }
    })*/

    Message.find()
    .exec(function (err, message) {
      if (err) { return next(err); }
      // Successful, so render.
      res.render('index', { title: 'index_list', data:  message});
    })

}
