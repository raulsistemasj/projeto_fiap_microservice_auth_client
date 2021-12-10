const mongoose = require("mongoose");

const url = "ADICIONAR URL DO MONGODB"

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.Promise = global.Promise;

module.exports = mongoose;