import express from 'express'
import nodemailer from 'nodemailer'

import { prisma } from './prisma';

const app = express();

app.use(express.json());



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "59c6e3fce81aa7",
      pass: "d1e0759c0313a1"
    }
});




app.post('/feedbacks', async (req, res) => {

    const {type, comment, screenshot} = req.body;


    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    transport.sendMail({
        from: 'Equipe Feedget <oi@feedback.com>',
        to: 'Lucas Bispo <lukaobispo@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-fammily: sans-serif; font-size: 16px; color: #111">`,
            `<p> Tipo do Feedback: ${type}</p>`,
            `<p> Tipo do Feedback: ${comment}</p>`,
            `</div>`
        ].join('\n')

    });
    
    return res.status(201).json(feedback);
})


app.listen(3333,()=>{
    console.log('HTTP server running');
});