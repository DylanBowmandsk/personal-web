import Image from "next/image"

const About = () => {
    return(
        <div id="about" className="flex flex-col items-center justify-center px-70 bg-stone-950 text-zinc-100 pb-40">
            <h1 className="py-20 .poppins-light text-4xl text-violet-400">About Me</h1>
            <div className="flex">
                <div className="flex-1 poppins-regular text-zinc-300 text-xl" data-aos="fade-right">
                    <p className="py-2">{"I'm a software developer from Glasgow, Scotland who specialises in full stack development as well as automating business processes with hands on experience in blockchain technologies."}</p>
                    <p className="py-2">{"I have over 7 years proven experience developing software with multiple technologies. I'm dedicated to improving my current skill set as well as learning new skills whenever i see a new and exciting oppourtinity pop up. I believe that we are never done learning and there is always room for improvement"}</p>
                    <p className="py-2">{"My core skills fall under .Net/SQL and React/next.js/tailwind/mongodb. I also strongly advocate for automation with Python and have previously used flask for web development."}</p>
                    <p className="py-2">{"Outside of development i'm interested in digital media, finance and family"}</p>
                </div>
                <div className="flex-1 flex items-center justify-center" data-aos="flip-up">
                    <div className="w-74 h-74 bg-white flex items-center justify-center rounded-full overflow-hidden">
                        <Image
                        src="/pfp.PNG"
                        width={800}
                        height={800}
                        alt="Picture of the author"
                        className="rounded-full object-cover w-full h-full border-solid border-5 border-zinc-100"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About