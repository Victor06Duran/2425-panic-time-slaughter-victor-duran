
const Character = require('../models/Character');

const service = require("../services/service");

//Controller Functions

const getCharacters = async (req, res) => {


  try {

    const allCharacters = await service.getAllCharacters();

    if (allCharacters.length === 0) {
      return res.status(404).send({ message: 'No characters found!' });
    }
    res.send({ status: "OK", data: allCharacters });

  } catch (error) {

    res
      .status(error?.status || 500)
      .send({
        status: "FAILED",
        message: "ERROR while handling the petition:",
        data: { error: error?.message || error }
      });

  }

};



//Functions to interact with the database


const getAllCharacters = async (req,res) => {
  try {
    
    const allPlayers = await Character.find();


    console.log('All Characters: ', allPlayers);
    res.send({ status: "OK", data: allPlayers });

    } catch (error) {
      console.error('Error retrieving all Characters(getAllCharacter):', error);
      res.status(error?.status || 500).send({
        status: "FAILED",
        message: "Error retrieving all Characters",
        data: { error: error?.message || error }
      });
    }
}


module.exports = {
  getCharacters,
  getAllCharacters,

}