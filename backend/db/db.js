const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const connectWithMongo = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log(`Mongodb connected: ${connectWithMongo.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB
