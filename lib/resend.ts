"use server"

import { Resend} from "resend"
const apiKey = process.env.RESEND_API_KEY
const resend = new Resend(apiKey)

export const sendEmail = async (name: string,email: string,message: string) => {
  try{
    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "dylanbowmandsk@gmail.com",
        subject: "New mail from portfolio website",
        html: `<p> ${name}</p><p>${email}</p><p>${message}</p>`
      });
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        return { error: error.message };
      } else {
        return { error: "An unknown error occurred" };
      }
  }
}