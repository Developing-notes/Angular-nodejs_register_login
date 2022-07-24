var mongoose = require('mongoose')
url = "mongodb://localhost:27017/node-angular";
mongoose.connect(url, (err, db) => {
    if (err) throw err
    else {
        console.log('db connect')
    }
})

module.exports = mongoose