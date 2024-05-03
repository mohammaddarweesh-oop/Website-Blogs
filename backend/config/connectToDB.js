const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connection To Database  mongodb.../`);
  } catch (error) {
    console.log("Connection Failed To mongodb", error);
  }
};
