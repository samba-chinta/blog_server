import express from 'express'

import ResModel from '../models/res-model.js'
// import sendmail from '../helpers/mail.js'

const router = express.Router()

router.post('/sendresponse', async (req, res) => {
  const {name, email, message} = req.body
  const resp = {
    name,
    email,
    message
  }
  ResModel.create(resp)
  .then((val) => {
    // sendmail(resp)
    res.status(200).json({
      status: 200,
      message: "Successfully sent the message to Author",
    })
  })
  .catch((err) => {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  })
})

export default router