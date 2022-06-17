import mongoose from "mongoose"

const resSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
})

const ResModel = mongoose.model('ResModel', resSchema)

export default ResModel