module.exports = {
  Admins: ["1208965142621069432", "UserID"], //DEV'S
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || "+",
  Port: 80, //Which port website gonna be hosted
  SupportServer: "", // Support Server Link
  Token: process.env.Token || "MTIxNTI4NDQ5NDE5ODYzNjU3NQ.GO_Zo8.ovRWb60kOO7IdGutNUvXD2riQedQEzL-oAEr8k", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1215284494198636575", 
  ClientSecret: process.env.Discord_ClientSecret || "9ZAbRqkotIyWjzGLhUaVRttYlpyOqBWk", 
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true, 
  DefaultVolume: 100,
  CallbackURL: "/api/callback", 
  "24/7": false,
  CookieSecret: "Pikachu is cute",
  IconURL:
    "https://media.tenor.com/sce9SDRey4EAAAAi/disc.gif",
  EmbedColor: "RANDOM", 
  Permissions: 2205281600, 
  Website: process.env.Website || "http://127.0.0.1/",

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  Lavalink: {
    id: "Main",
    host: "lavalink2.devamop.in", 
    port: 8830, 
    pass: "DevamOP", 
    secure: false, 
    retryAmount: 200, 
    retryDelay: 40, 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "a4171cdcbe7d4dc89282879ecdd2bf5f", 
    ClientSecret: process.env.Spotify_ClientSecret || "182c6f593d62415397075bad9c5232ae", 
  },


 

};
