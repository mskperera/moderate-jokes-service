const axios = require("axios");
const {
  getJokeTypes_srv,
  getNewJoke_srv,
  updateJoke_srv,
  approveJoke_srv,
  rejectJoke_srv,
  addNewJoke_srv,
  submitToDeliverJokes_srv,
} = require("../services/joke");

exports.getNewJoke = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    const response = await getNewJoke_srv(token);
    res.json(response);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

exports.updateJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, typeId } = req.body;
    const body = { content, typeId };

    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    const response = await updateJoke_srv(token, body, id);
    res.json(response);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

exports.approveJoke = async (req, res) => {
  try {
    const { id } = req.params;

    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    const response = await approveJoke_srv(token, id);
    res.json(response);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

exports.rejectJoke = async (req, res) => {
  try {
    const { id } = req.params;

    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    const response = await rejectJoke_srv(token, id);
    res.json(response);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

exports.getJokeTypes = async (req, res) => {
  try {
    const response = await getJokeTypes_srv();
    res.json(response);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.addNewJoke = async (req, res) => {
  try {

    const body=req.body;
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    const response = await addNewJoke_srv(token,body);
    res.json(response);
  } catch (err) {
    res.status(400).json(JSON.parse(err));
  }
};

exports.submitToDeliverJokes = async (req, res) => {
  try {

    const { id } = req.params;

    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    const response = await submitToDeliverJokes_srv(token,id);
    res.json(response);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

