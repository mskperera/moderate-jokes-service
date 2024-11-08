const { default: axios } = require("axios");

exports.getJokeTypes_srv = async () => {
  try {
    // Make the request to the other endpoint
    const response = await axios.get("http://localhost:3333/jokes/types");

    return response.data;
  } catch (err) {
    throw err;
  }
};

exports.getNewJoke_srv = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:8002/api/jokes/newJoke",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Error fetching new joke:", err);
    throw err;
  }
};

exports.updateJoke_srv = async (token, payload, jokeId) => {
  try {
    const response = await axios.put(
      `http://localhost:8002/api/jokes/update/${jokeId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Error fetching new joke:", err);
    throw err;
  }
};

exports.approveJoke_srv = async (token, jokeId) => {
  try {
    const response = await axios.put(
      `http://localhost:8002/api/jokes/approve/${jokeId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Error fetching new joke:", err);
    throw err;
  }
};

exports.rejectJoke_srv = async (token, jokeId) => {
  try {
    const response = await axios.delete(
      `http://localhost:8002/api/jokes/reject/${jokeId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Error fetching new joke:", err);
    throw err;
  }
};


exports.addNewJoke_srv = async (token, payload) => {
  try {
    const response = await axios.post(
      `http://localhost:3333/jokes/newJoke`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Error fetching new joke:", err.response.data);
    throw  JSON.stringify(err.response.data);
  }
};


exports.submitToDeliverJokes_srv = async (token, jokeId) => {
  try {
    const approveResponse = await exports.approveJoke_srv(token,jokeId);

    const payload={...approveResponse.joke,type:approveResponse.joke.type,content:approveResponse.joke.content}
    const addNewResponse = await exports.addNewJoke_srv(token, payload);

    return {message:"Approved and submitted to the Deliver Jokes",joke:addNewResponse};
  } catch (err) {
    console.error("Error in submitToDeliverJokes:", err);
    throw err;
  }
};
