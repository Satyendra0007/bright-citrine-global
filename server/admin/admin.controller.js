const Contact = require("../contact/contact.model")
const { validationResult, matchedData } = require("express-validator")

module.exports.fetchAllContactData = async (req, res) => {
  try {
    const allMessages = await Contact.find().lean()
    return res.status(200).json(allMessages)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ messsage: "Internal Server Error !" })
  }
}


module.exports.deleteMessage = async (req, res) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array() })
  }
  try {
    const data = matchedData(req)
    const message = await Contact.findById(data.id)
    if (!message) {
      return res.status(404).json({ message: "message not found" })
    }
    const deleteMessage = await Contact.findByIdAndDelete(data.id)
    res.status(200).json({ message: "Message Deleted!" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error " })
  }
}

module.exports.markAsRead = async (req, res) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array() })
  }
  try {
    const data = matchedData(req)
    const message = await Contact.findById(data.id)
    if (!message) {
      return res.status(404).json({ message: "message not found" })
    }
    const updatedMessage = await Contact.findByIdAndUpdate(data.id, { isRead: true }, { new: true })
    res.status(200).json({ message: "Marked As read !" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error " })
  }
}
