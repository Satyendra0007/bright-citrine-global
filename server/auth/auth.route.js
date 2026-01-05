const express = require("express")
const authController = require("./auth.controller")
const userMiddleware = require("./user.middleware")
const { body } = require("express-validator")

const router = express.Router()

router.route("/login").post(
  body("email")
    .notEmpty().withMessage("email can't be empty")
    .isEmail().withMessage("email field must be an email "),
  body("password")
    .notEmpty().withMessage("password can't be empty")
    .isString().withMessage("password must be a string"),
  authController.logIn
)

router.route("/signup").post(
  body("name")
    .notEmpty().withMessage("name can't be empty")
    .isString().withMessage("name must be a string "),
  body("email")
    .notEmpty().withMessage("email can't be empty")
    .isEmail().withMessage("email field must be an email "),
  body("phone")
    .notEmpty().withMessage("phone can't be empty")
    .isString().withMessage("phone must be a string ")
    .isLength({ min: 10, max: 10 }).withMessage("phone must be 10 charectors long"),
  body("password")
    .notEmpty().withMessage("password can't be empty")
    .isString().withMessage("password must be a string")
    .isLength({ min: 8 }).withMessage("passoword must be atlest 8 charector long"),
  authController.signUp
)

router.route("/user").get(userMiddleware, authController.getUserData)


module.exports = router