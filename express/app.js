const express = require('express')
const app = express()

const nodemailer = require('nodemailer')

require('dotenv').config()

const html = `
<h1>Roadworthy Enquiry</h1>
<p>This is a very good test</p>
`

async function main() {

    const mail = nodemailer.createTransport({
    host: process.env.smtp_server,
    port: process.env.smtp_port,
    secure: false,
    auth: {
        user: process.env.smtp_user,
        pass: process.env.smtp_pass
        }
    })

    const info = await mail.sendMail({
        from: 'matt@aatechnology.com.au',
        to: 'matt@aatechnology.com.au',
        subject: 'email from my node app',
        html: html
    })

    console.log('message sent: ' + info)

}

main()
.catch(e => console.log(e))

// app.get("/", (req, res) => {
//     res.send('hello world')
// })


// const port = process.env.port

// app.listen(port, () => {
//     console.log(`express running on port ${port}`)
// })