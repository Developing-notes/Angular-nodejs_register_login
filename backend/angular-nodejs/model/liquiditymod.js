var mongoose = require('../config/config');
const newschema = new mongoose.Schema({
    //write schema
    tokenAddress: {
        type: String,
    },
    tokenName: {
        type: String
    },
    tokenDecimal: {
        type: String
    },
    tokenSymbol: {
        type: String
    }
});
module.exports = mongoose.model("liquidity", newschema); //collection create


