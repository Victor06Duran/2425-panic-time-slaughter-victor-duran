const Time = require('../models/Time');
const service = require("../services/service");

//Controller Functions

const getAllDays = async (req, res) => {
  const day = req.query.day_number;
  const condition = day ? { day: { $regex: new RegExp(day), $options: "i" } } : {};

  try {
    const data = await Time.find(condition);
    return res.json(data);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Error retrieving all days",
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


const createDay = async (req, res) => {
  const body = req.body
  const newTime = {
    _id: body._id,
    name: body.name,
    day_number: body.day_number,
    day_week: body.day_week,
    km_traveled: body.km_traveled,
    km_total: body.km_total
  }
  try {
      const data = await Time.create(newTime);
      return res.json(data);
  } catch (err) {
      res.status(500).send({
          message:
              err.message || "Error while creating a new day"
      });
  }
};


module.exports = {

  getAllTimes,
  createDay,
  getAllDays,
  createTime,
}