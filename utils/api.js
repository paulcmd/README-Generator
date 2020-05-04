const axios = require("axios");

const api = {
  getUser: async function (username) {
    const githubQueryURL = `https://api.github.com/users/${username}`;
    console.log(githubQueryURL);
    // gets github user's data from url
    const gitResponse = await axios.get(githubQueryURL);
    return gitResponse.data;
  }
}



module.exports = api;
