const dotenv = require('dotenv')
const express = require('express')
const connectDB = require('./backend/db/db')
var cookieParser = require('cookie-parser')
const loginRoute = require('./backend/routes/loginRoute')
const path = require('path')
const address = require('./backend/routes/addressRoute')
const catagory = require('./backend/routes/catagoryRoutes')
const post = require('./backend/routes/postRoute')
const fileUpload = require('express-fileupload')

dotenv.config()

connectDB()

const app = express()
app.use(
  express.json({
    limit: '50mb',
  }),
)
app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
  }),
)
app.use(
  fileUpload({
    useTempFiles: true,
  }),
)

app.use(cookieParser())

const PORT = process.env.PORT || 5000

app.use('/api/v1/login', loginRoute)
app.use('/api/v1/address', address)
app.use('/api/v1/catagory', catagory)
app.use('/api/v1/post', post)
app.post('/api/v1/logout', (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
  })
  return res.status(200).json({msg: 'Logout Successfully'})
})

// serve static assets

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
)
