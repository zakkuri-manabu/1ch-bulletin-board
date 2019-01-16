var Message = require('../models/Message')
var async = require('async')
var Mongoose = require('mongoose')

exports.message_detail_get = function(req, res) {

    Message.findById(req.params.id)
    .exec(function (err, message) {
      if (err) { return next(err); }
      // Successful, so render.
      res.render('message_detail', {title: 'message_detail', data: message});
    })
}

exports.message_create_get = function(req, res) {
    res.render('message_create', {title: 'message_create'});
}

exports.message_create_post = function(req, res) {
    var message = new Message (
        {
            text: req.body.text,
        }
    )
    
    message.save(function (err) {
            if (err) {
                return nex(err);
            }
            res.redirect('/');
        }  
    );
}

exports.message_edit_get = function(req, res) {
    
    Message.findById(req.params.id)
    .exec(function (err, message) {
      if (err) { return next(err); }
      // Successful, so render.
      res.render('message_edit', {title: 'message_edit', data: message});
    })
}

exports.message_edit_post = function(req, res) {
    Message.findByIdAndUpdate(req.params.id, {text: req.body.text})
    .exec(function (err, message) {
      if (err) { return next(err); }
      // Successful, so render.
      res.redirect(`/message/detail/${req.params.id}`);
    })
}

exports.message_delete_get = function(req, res) {
    
    Message.findById(req.params.id)
    .exec(function (err, message) {
      if (err) { return next(err); }
      // Successful, so render.
      res.render('message_delete', {title: 'message_delete', data: message});
    })
}

exports.message_delete_post = function(req, res) {

    Message.findByIdAndRemove(req.params.id)
    .exec(function (err, message) {
      if (err) { return next(err); }
      // Successful, so render.
      res.redirect('/');
    })
}