const express = require('express')
const urlShortenRouter = require('./routes/urlShorten')
const cors = require('cors')
const app = express();


// app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.use("/",urlShortenRouter)
app.listen(3000, ()=> {
    console.log("App listening to port 3000");
})