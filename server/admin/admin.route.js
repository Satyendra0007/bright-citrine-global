const express = require('express')
const adminController = require("./admin.controller")
const { param } = require("express-validator")
const adminMiddleware = require("./admin.middleware")
const userMiddleware = require("../auth/user.middleware")

const router = express.Router()

router.route("/contact").get(
  userMiddleware,
  adminMiddleware,
  adminController.fetchAllContactData
)

router.route("/contact/:id")
  .delete(
    userMiddleware,
    adminMiddleware,
    param("id")
      .notEmpty().withMessage("id can't be empty ")
      .isString().withMessage("id must be a string "),
    adminController.deleteMessage
  )
  .patch(
    userMiddleware,
    adminMiddleware,
    param("id")
      .notEmpty().withMessage("id can't be empty ")
      .isString().withMessage("id must be a string "),
    adminController.markAsRead
  )

module.exports = router