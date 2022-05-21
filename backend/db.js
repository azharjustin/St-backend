
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

require('dotenv').config({path:'.env'});

// let url=process.env.url;
const url =
  "mongodb://stackdata:welcome123@cluster0-shard-00-00.b68sv.mongodb.net:27017,cluster0-shard-00-01.b68sv.mongodb.net:27017,cluster0-shard-00-02.b68sv.mongodb.net:27017/stackoverflow?authSource=admin&replicaSet=atlas-12h1ih-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

// let server = http.createServer((req,res)=>{
//   console.log("reqest send");
//   res.writeHead(200,{"content-type": "text/plain"});
//   res.end("hai");
// });
// server.listen(url => {
//   console.log("server is listen");
// });
  
  module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
