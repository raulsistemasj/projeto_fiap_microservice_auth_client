const mongoose = require("mongoose");

const url = "mongodb+srv://mbafiap:fiap101210@cluster0.qpnsf.mongodb.net/projetomicroservicelogin?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.Promise = global.Promise;

module.exports = mongoose;