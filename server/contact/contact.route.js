const express = require("express")
const router = express.Router()
const contactController = require("./contact.controller")
const { body } = require("express-validator")

router.route("/").post(
  body("name")
    .notEmpty().withMessage("name can't be empty")
    .isString().withMessage("name must be string "),
  body("email")
    .notEmpty().withMessage("email can't be empty")
    .isEmail().withMessage("email field must be an email "),
  body("phone")
    .notEmpty().withMessage("phone can't be empty")
    .isString().withMessage("phone should be string ")
    .isLength(10).withMessage("phone must have 10 digit"),
  body("subject")
    .notEmpty().withMessage("subject can't be empty")
    .isString().withMessage("subject must be string "),
  body("message")
    .optional()
    .isString().withMessage("message must be string "),
  contactController.sendMessage
)

module.exports = router