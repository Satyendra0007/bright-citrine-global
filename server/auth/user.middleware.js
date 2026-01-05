const jwt = require("jsonwebtoken")

const userMiddleware = async (req, res, next) => {

  const token = req.header("Authorization")
  if (!token) {
    return res.status(400).json({ message: "Authorization Token Not Provided !" })
  }

  try {
    const authToken = token.replace("Bearer", "").trim()
    const payload = jwt.verify(authToken, process.env.SECURITY_KEY);
    req.userData = payload
    next()
  }
  catch (error) {
    console.log(error)
    res.status(400).json({ message: "Invalid Token !" })
  }
}

module.exports = userMiddleware