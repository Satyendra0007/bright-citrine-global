const Contact = require("./contact.model")
const { validationResult, matchedData } = require("express-validator")

module.exports.sendMessage = async (req, res) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array() })
  }
  try {
    const data = matchedData(req)
    const newMessage = await Contact.create(data)
    res.status(200).json({ message: "Message Sent! " })
  } catch (error) {
    console.error(error)
    res.send(500).json("Internal server error")
  }
}