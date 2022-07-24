const adminexp = require('../model/adminmod')
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");


exports.admin = (req, res) => {
    const encryptedString = cryptr.encrypt(req.body.password);
    const passwordel = cryptr.decrypt(encryptedString);
    adminexp.insertMany(
        {
            email: req.body.email,
            username: req.body.username,
            password: encryptedString,
        })
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    success: "Admin registeration success!",
                    message: data
                })
            }
            else {
                res.json({ message: 'Somethings went wrong!' })
            }
        }).catch(error => {
            console.log(error)
        })
}

