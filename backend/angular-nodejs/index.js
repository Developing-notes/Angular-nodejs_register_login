const express = require('express');
const app = express()
const userfile = require("./controller/usercon")
const adminfile = require('./controller/admincon')
const config = require('./config/config');
const bodyParser=require('body-parser')
require('dotenv').config()



const cors = require('cors')
app.use(cors())
app.use(express.json());
port = 8000
app.use('/admin', adminfile)
app.use('/user', userfile)

app.listen(port, (req, res) => {
  console.log("server start " + port);
});

