import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide full name."],
    },
    email: {
      type: String,
      index: true,
      required: [true, "Please provide email address."],
      unique: true,
    },
    phone: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    timeZone: {
      type: String,
    },
    currency: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
    },
    privacy: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Roles'
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
