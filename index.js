const express       = require( "express"); 
const mongoose      = require('mongoose'); 
const router = require("./src/routes/characterRoutes");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3005;


app.use("characters", router);
app.use("times", router);
async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URL + process.env.DB);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
    console.log('Succesfully connected to MongoDB Database!')
  }
  catch (error) {
    console.log(`ERROR while trying to connect to the Database: ${error.message}`);
  }
}

start();