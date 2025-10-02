import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  monastery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monastery',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  maxParticipants: {
    type: Number,
    required: true
  },
  currentParticipants: {
    type: Number,
    default: 0
  },
  guide: {
    name: String,
    bio: String,
    image: String
  },
  isVirtual: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;