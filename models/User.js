const {
  imports: { mongoose }
} = require('./imports');
const UserSchema = mongoose.Schema({
  _id: {
    type: String,
    require: true
  },
  firstName: {
    require: true,
    type: String
  },
  password: { require: true, type: String, min: 5 },
  lastName: String,
  email: { require: true, type: String },
  mobile: String
});
const User = mongoose.model('users', UserSchema);
module.exports = User;
