const Character = require('../controllers/characterController');
const Time = require('../controllers/timeController');


const getAllCharacters = async () => {

  try {
    const allCharacters = Character.getAllCharacters();
    return allCharacters;
  }
  catch (error) {
    throw error;
  }

};


const getAllTimes = async () => {

  try {
    const allTimes = Time.getAllTimes();
    return allTimes;
  }
  catch (error) {
    throw error;
  }

};


const createNewTime = async (newTime) => {
  try {
    const createdTime = await Time.createNewTime(newTime)
    return createdTime
  }
  catch (error) {
    throw error
  }
}


module.exports = {

  getAllCharacters,
  getAllTimes,
  createNewTime,
}