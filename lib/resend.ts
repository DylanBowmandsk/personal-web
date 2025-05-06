"use server"

import { Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (name: string,email: string,message: string) => {
    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "dylanbowmandsk@gmail.com",
        subject: "New mail from portfolio website",
        html: `<p> ${name}</p><p>${email}</p><p>${message}</p>`
      });
}