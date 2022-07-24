const userexp = require('../model/usermod')
const adminexp = require('../model/adminmod')
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
const cloudinary = require("../utils/cloudinary");
const jwt = require("jsonwebtoken");

// secretkey_generate_your_input_start
const ukey = require("crypto").randomBytes(20).toString("hex");
const middexp = require('../middleware/userval')
const liquidityexp = require('../model/liquiditymod')
const createtokenexp = require('../model/createliquidity')


var tokenvalidate
exports.register = (req, res) => {
  const encryptedString = cryptr.encrypt(req.body.password);
  const passwordel = cryptr.decrypt(encryptedString);
  userexp.insertMany(
    {
      email: req.body.email,
      username: req.body.username,
      password: encryptedString,
    },
    function (err, data) {
      if (err) {
        res.json({
          status: false,
          success: 'Already User!'
        });
      }
      else {
        res.json({
          status: true,
          success: 'Registration Success!', message: data
        });
      }
    }
  );
}

// admin&usercommonlogin_method
exports.login = (req, res) => {
  var email = req.body.email;

  adminexp.findOne({ email: email }, function (err, data) {
    if (err) throw err
    else if (data == null) {
      userexp.findOne({ email: email }, function (err, data) {
        if (err) throw err
        else if (data == null) {
          res.json({
            status: false,
            message: "Invalid E-Mail or Password"
          })
        }
        else {
          var password = data.password
          const passwordel = cryptr.decrypt(password);
          if (passwordel == req.body.password) {
            const user = middexp.covert2obj(email); //parameterpass
            jwt.sign({ user: user }, ukey,
              { expiresIn: "60m" }, (err, token) => {
                console.log("🚀 ~ file: userexp.js ~ line 63 ~ token", token)
                res.json({
                  userstatus: 1,
                  message: "Login success!",
                  success: data,
                  token: token
                })
                tokenvalidate = token;

              })


          }
          else {
            res.json({
              status: false, message:
                "Invalid E-Mail or Password"
            })


          }
        }

      })

    }
    else if (data != null) {
      adminexp.findOne({ email: email }, function (err, data) {
        if (err) throw err
        else if (data == null) {
          res.json({ status: false, message: "Invalid E-Mail or Password" })

        }
        else {
          var password = data.password
          const passwordel = cryptr.decrypt(password);

          if (passwordel == req.body.password) {
            const user = middexp.covert2obj(email); //parameterpass
            jwt.sign({ user: user }, ukey,
              { expiresIn: "60m" }, (err, token) => {
                res.json({
                  adminstatus: 0, message: "Login success!",
                  success: data,
                  token: token
                })
                tokenvalidate = token;
              })
          }
          else {
            res.json({ status: false, message: "Invalid E-Mail or Password" })
          }
        }
      })
    }
    else {
      res.json({ message: "Both condition is not valid!" })
    }
  })
}

// jwtauthentication
exports.userverify = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  console.log("🚀 ~ file: userexp.js ~ line 130 ~ req.headers", req.headers)
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    // decodeemail_method
    var decDetail = jwt.decode(req.token);
    var email = decDetail.user.email;
    if (tokenvalidate == req.token) {
      jwt.verify(req.token, ukey, function (err, data) {
        if (err) res.json({ status: false, message: err });
        else {
          // middleware use the method
          req.Email = email;
          next();
        }
      });
    }

    else {
      res.json({ status: false, message: `Token expired!,login again!` });
    }
  } else {
    res.json({ status: false, message: `Token Empty!` });
  }
};

exports.getUser = (req, res) => {
  userexp.find({}, function (err, data) {
    if (err) {
      res.json({ message: err });
    }
    else {
      res.json({ success: data })
    }
  })

};

exports.userprofile = (req, res) => {
  userexp.findOne({ _id: req.body.id }, function (err, data) {
    if (err) {
      res.json({ message: err });
    }
    else if (data == null) {
      res.json({ message: "no one found!" })
    }
    else {
      res.json({ success: data })
    }
  })
}




exports.updateProfile = async (req, res) => {
  if (req.file) {
    //  res.json({status:true,message:req.file})    
    console.log(req.file)
    var filepath = req.file.path
    const result = await cloudinary.uploader.upload(filepath)
    userexp.findOneAndUpdate({ email: req.body.email },
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile_number: req.body.mobile_number,
        gender: req.body.gender,
        dob: req.body.dob, role: req.body.role,
        profile_image: result.secure_url,

      }, function (err, data) {
        if (err) throw err
        else if (data == null) {
          res.json({ status: false, message: 'No one found!' })
        }
        else if (data != null) {
          res.json({ status: true, message: 'Your profile is update success!' })
        }
        else {
          res.json({ status: 404, message: 'Somethings went wrong!' })
        }
      })
  }

}


exports.kycUpdate = async (req, res) => {
  // kyc_image
  const url = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file
    const result = await cloudinary.uploader.upload(path)
    url.push(result.secure_url)
  }
  userexp.findOneAndUpdate({ email: req.body.email },
    {
      aadharfront_image: url[0],
      aadharback_image: url[1],
      selfie_image: url[2],
    }, function (err, data) {
      if (err) throw err
      else if (data == null) {
        res.json({ status: false, message: 'No one found!' })
      }
      else if (data != null) {
        res.json({ status: true, message: 'Your kyc is update success!' })
      }
      else {
        res.json({ status: 404, message: 'Somethings went wrong!' })
      }
    })
}




exports.tokenCreate = (req, res) => {
  liquidityexp.insertMany({
    tokenAddress: req.body.tokenAddress,
    tokenName: req.body.tokenName,
    tokenDecimal: req.body.tokenDecimal,
    tokenSymbol: req.body.tokenSymbol
  }, function (err, data) {
    if (err) {
      res.json({ message: err })
    }
    else {
      res.json({ success: data })
    }
  })
}


exports.getToken = (req, res) => {
  liquidityexp.find({}, function (err, data) {
    if (err) throw err
    else if (data.length == 0) {
      res.json({ status: false, message: 'no one found!' })
    }
    else {
      res.json({ status: true, message: data })
    }
  })
}



exports.liquidityList = (req, res) => {
  createtokenexp.insertMany({
    fromTokenAddress: req.body.fromTokenAddress,
    toTokenAddress: req.body.toTokenAddress,
    pairTokenAddress: req.body.pairTokenAddress,
    fromTokenSymbol: req.body.fromTokenSymbol,
    toTokenSymbol: req.body.toTokenSymbol

  }, function (err, data) {
    if (err) {
      res.json({ message: err })
    }
    else {
      res.json({ success: data })
    }
  })
}










exports.liquidityRecords = (req, res) => {
  createtokenexp.find({}, function (err, data) {
    if (err) throw err
    else if (data.length == 0) {
      res.json({ status: false, message: 'no one found!' })
    }
    else {
      res.json({ status: true, message: data })
    }
  })
}
