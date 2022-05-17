import { MailAdapter, SendMailData} from "../mail-adapters"
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "59c6e3fce81aa7",
      pass: "d1e0759c0313a1"
    }
});






export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject,body}: SendMailData) {


      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedback.com>',
        to: 'Lucas Bispo <lukaobispo@gmail.com>',
        subject: 'Novo feedback',
        html:body
    
    });
    }
}