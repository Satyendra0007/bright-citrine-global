require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDb = require("./utils/db")
const adminRoute = require("./admin/admin.route")
const contactRoute = require('./contact/contact.route')
const authRoute = require("./auth/auth.route")

const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URI,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
}))

app.use("/api/auth", authRoute)
app.use("/api/contact", contactRoute)
app.use("/api/admin", adminRoute)

app.get("/", (req, res) => {
  res.send("hello world !")
})

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("App is running on Port", PORT)
  })
}).catch((error) => {
  console.log(error)
  console.log("Failed to Connect ")
})
