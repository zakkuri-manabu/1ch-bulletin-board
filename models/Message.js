var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = mongoose.Schema.Types.ObjectId;

var MessageSchema = new Schema(
  {
    text: {type: String, maxlength: 1000}
  }
);

// Virtual for article's URL
MessageSchema
.virtual('url')
.get(function () {
  return '/message/detail/' + this._id;
});

//Export model
module.exports = mongoose.model('Message', MessageSchema);
