const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    profilePhoto: {
      type: String,
      default: {
        url: "https://www.istockphoto.com/en/vector/person-gray-photo-placeholder-man-gm1202059657-344949544",
        publicId: null,
      },
    },
    bio: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAdminVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    // add to properties CreatedAt , UpdatedAt
    timestamps: true,
  }
);


