import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
// User Schema
const user_schema = new mongoose.Schema({
 name: {
    type: String,
    required: [true, 'First name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email address',
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  location: {
    type: String,
    default: "India",
  },
});

//middlewares
user_schema.pre('save',async function(){
  const salt=await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt);
});

// Exporting the User Model
export default mongoose.model('User', user_schema);
