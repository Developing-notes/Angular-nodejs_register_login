var mongoose = require('../config/config');
const newschema = new mongoose.Schema({
    //write schema
    fromTokenAddress: {
        type: String
    },
    toTokenAddress: {
        type: String
    },
    pairTokenAddress: {
        type: String
    },

    fromTokenSymbol: {
        type: String
    },
    toTokenSymbol: {
        type: String
    }
});
module.exports = mongoose.model("createliquidity", newschema); //collection create


