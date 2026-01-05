const User = require("../auth/user.model")

const adminMiddleware = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.userData.userId)
    if (currentUser.isAdmin) {
      next()
    }
    else {
      return res.status(400).json({ message: "You don't have authorization to access !" })
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" })
  }
}

module.exports = adminMiddleware