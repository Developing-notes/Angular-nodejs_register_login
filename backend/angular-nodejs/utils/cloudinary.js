const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: "dw33k",
    api_key: "124513894337375",
    api_secret: "9pZYTk8YCKD0FlR_TjRvD3HPzj8"
})
module.exports = cloudinary