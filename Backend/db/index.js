const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_DB_URL)
.then(()=> console.log("connected to mongoose"))
.catch(e=> console.log(e.message))

const UrlSchema = new mongoose.Schema({
    tag: String,
    url: String,
})

const Url = mongoose.model("url",UrlSchema)

module.exports = {
    Url
}