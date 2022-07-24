const { check, validationResult } = require("express-validator");
// adminelValidation
exports.useremail = [
    check("email")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Email is required")
        .isEmail()
        .normalizeEmail()
        .withMessage("Email Pattern Only"),]

exports.username = [
    check("username")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Username required!")
];


exports.userpassword = [
    check("password")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Password required!")
        // .isLength({ min: 6, max: 10 })
        // .withMessage("Min 6 and Max 10 ")
        .matches("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
        .withMessage("min 6 char max 10 char one caps one symbol and 1 number"),

    check("confirm_password")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Confirmpassword required!")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("confirm password at the same password");
            }
            return true;
        }),
];

exports.password = [
    check("password")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Password required!")
        .matches("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
        .withMessage("min 6 char max 10 char one caps one symbol and 1 number"),
]


exports.firstname = [
    check("first_name")
        .trim()
        .not()
        .isEmpty()
        .withMessage("First Name is required!")
]

exports.lastname = [
    check("last_name")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Last Name is required!")
]

exports.gender = [
    check("gender")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Gender is required")
        .isIn(['male', 'female'])
        .withMessage('Male or Female is required!')

]
exports.dob = [
    check("dob")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Dob is required")
]

exports.mobilenumber = [
    check("mobile_number")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Mobile number is required")
        .isNumeric().withMessage("Numeric value only!")
        .isLength({ min: 10, max: 15 }).withMessage("Min 10 number or Max 15 number!"),
]

exports.role = [
    check("role")
        .trim()
        .not()
        .isEmpty()
        .withMessage("role is required")
]

exports.covert2obj = function (email) {
    return { email }
}

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array();
    if (!result.length) return next();
    const error = result[0].msg;
    res.json({ success: false, message: error });
};


