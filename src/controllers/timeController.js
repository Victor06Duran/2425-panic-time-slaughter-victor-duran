const Time = require('../models/Time');


//Controller Functions

const getTimes = async (req, res) => {


  try {

    const allTimes = await service.getAllTimes();

    if (allTimes.length === 0) {
      return res.status(404).send({ message: 'No days found!' });
    }
    res.send({ status: "OK", data: allTimes });

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


const createTime = async (req, res) => {
  const body = req.body;
  console.log(body);

  const newTime = {
    name: body.name,
    day_number: body.day_number,
    day_week: body.day_week,
    km_traveled: body.km_traveled,
    km_total: body.km_total
  }

  try {
    const createdTime = await service.createNewTime(newTime)
    res.status(201).send({ status: 'OK', data: createdTime })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({
        status: '',
        message: "ERROR while handling the petition:",
        data: { error: error?.message || error }
      })
  }
}



//DB Functions


const getAllTimes = async () => {

  try {
    const times = await Time.find();
    return times;
  }
  catch (error) {
    throw error;
  }

};


const createNewTime = async (newTime) => {
  try {
    let timeToInsert = new Time(newTime)
    const createdTime = await timeToInsert.save()
    return createdTime
  } catch (error) {
    throw error
  }
};

module.exports = {

  getAllTimes,
  createNewTime,
  getTimes,
  createTime,
}