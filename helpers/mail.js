import nodemailer from 'nodemailer'

const sendmail = (payload) => {
  let transported = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "samba.chinta@gmail.com",
      pass: "pbicdrsfvrlmfvbg"
    }
  })

  const mailOptions = {
    from: "samba.chinta@gmail.com",
    to: payload.email,
    subject: "Greetings from Samba Chinta",
    text: `Dear ${payload.email}, your message is received. Thank You :)`,
  }

  transported.sendMail(mailOptions, (err, info) => {
    if(err) console.log(err)
    else console.log(info)
  })
}

export default sendmail