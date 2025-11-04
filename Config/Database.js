const mongoose = require("mongoose");
require("dotenv").config();
async function ConnectionDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName:process.env.DATABASE_NAME,
     
    });
     
    console.log("The Database is connected to the Helix");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { ConnectionDB };
