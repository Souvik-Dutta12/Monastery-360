import mongoose from 'mongoose';

const monasterySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  virtualTourUrl: {
    type: String
  },
  history: {
    type: String
  },
  features: [{
    type: String
  }],
  openingHours: {
    type: String
  },
  contactInfo: {
    phone: String,
    email: String,
    website: String
  },
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  averageRating: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

// Calculate average rating before saving
monasterySchema.pre('save', function(next) {
  if (this.ratings.length > 0) {
    this.averageRating = this.ratings.reduce((sum, item) => sum + item.rating, 0) / this.ratings.length;
  }
  next();
});

const Monastery = mongoose.model('Monastery', monasterySchema);

export default Monastery;