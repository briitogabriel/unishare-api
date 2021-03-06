const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  title: String,
  city: {
    type: String,
    maxlength: 2,
  },
  location: String,
  value: Number,
  description: String,
  pictures: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, {timestamps:true})

module.exports = mongoose.model('Room', RoomSchema);