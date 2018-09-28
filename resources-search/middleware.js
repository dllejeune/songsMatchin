const request = require("request");

const API = "https://api.deezer.com/user/2529/playlists";

module.exports = (req, res, next) => {
  res.header("X-Hello", "World");

  if (req.url == "/playlists") {
    request.get(API, (e, r, b) => res.end(b));
  }else if (req.url.includes("/tracks")){
    const id = req.url.split('/')[2]

    request.get(`https://api.deezer.com/playlist/${id}/tracks`, (e, r, b) => res.end(b));
  }
  else{
    next();
  }

};


