const User = require("./user.model")
const { validationResult, matchedData } = require("express-validator")

module.exports.signUp = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array() })
  }

  try {
    const data = matchedData(req)
    const user = await User.findOne({ email: data.email })
    if (user) {
      return res.status(400).json({ message: "Email Already Exists Kindly Login ! " })
    }
    const newUser = await User.create({ ...data })
    res.status(200).json({ message: "Accout Created Successfully ", token: newUser.generateToken() })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Intenal Server Error !" })
  }
}


module.exports.logIn = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array() })
  }

  try {
    const data = matchedData(req)
    const user = await User.findOne({ email: data.email })
    if ((user) && (await user?.validatePassword(data.password)) && user.isAdmin) {
      res.status(200).json({ message: "Logged in SuccessFully ", token: user.generateToken() })
    }
    else {
      res.status(400).json({ message: "Invalid Email or Password " })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error " })
  }

}

module.exports.getUserData = async (req, res) => {
  try {
    const userData = await User.findById(req.userData.userId, {
      password: 0
    })
    if (!userData) {
      return res.status(404).json({ message: "no user Found" })
    }
    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}


