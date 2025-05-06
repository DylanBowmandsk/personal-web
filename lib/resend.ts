"use server"

import { Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async () => {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'dylanbowmandsk@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });
}