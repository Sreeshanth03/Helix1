const { body, validationResult } = require("express-validator");
const User_Validator = [
  body("name").isString().trim().withMessage("Name is required"),
  body("mobile").isNumeric().withMessage("Mobile Number is required"),
  body("email").isEmail().withMessage("E-Mail is required"),
  body("address").isString().trim().withMessage("Address is required"),
  body("country").isString().trim().withMessage("Country is required"),
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      const err = {
        message: "Validation Error",
        status: 400,
      };
      next(err);
    }
    next();
  },
];
module.exports={User_Validator}