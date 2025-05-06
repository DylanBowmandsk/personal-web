import { sendEmail } from "../../lib/resend"

const Contact = () => {

    const send = () => {
        sendEmail()
    }

    return(
        <div className="flex flex-col items-center justify-center px-10 py-20 bg-stone-950 text-zinc-100">
            <h1 className="text-4xl text-violet-400 font-light poppins-light mb-10" data-aos="fade-right">{"Contact me"}</h1>
            <form action={send}>
                <div className="flex flex-col">
                    <input type="text" name="name" id="name" placeholder="name" className="border-b-1 h-14 w-140 text-xl border-solid mb-4"/>
                    <input type="text" name="mail" id="email" placeholder="email" className="border-b-1  h-14 text-xl border-solid mb-4"/>
                    <input type="text" name="message" id="message" placeholder="your message" className="border-b-1 h-14 text-xl border-solid mb-4"/>
                </div>
                <button type="submit" className="rounded-full bg-violet-400 hover:bg-violet-500 text-white poppins-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200">Send</button>
            </form>
        </div>
    )
}

export default Contact