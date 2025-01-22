const express       = require( "express"); 
const mongoose      = require('mongoose'); 

require('dotenv').config();

const PORT = process.env.PORT || 3005;


class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}`)
    );
  }

  async database() {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./src/routes/routes"));
  }
}
module.exports = new App().express;