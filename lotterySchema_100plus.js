const mongoose = require('mongoose');

const lotterySchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true
  },
  drawDate: {
    type: Date,
    required: true
  },
  prizeAmount: {
    type: Number,
    required: true
  },
  ticketPrice: {
    type: Number,
    required: true
  },
  winningNumbers: {
    type: [Number],
    required: true
  },
  additionalNumbers: {
    type: [Number],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Lottery = mongoose.model('Lottery', lotterySchema);

module.exports = Lottery;