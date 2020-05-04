const axios = require("axios");

const api = {
  getUser: async function (username) {
   // const accessToken = process.env.accessToken;
    const githubQueryURL = `https://api.github.com/users/${username}`;
    console.log(githubQueryURL);

    const gitResponse = await axios.get(githubQueryURL);
    return gitResponse.data;
  }
}



module.exports = api;
