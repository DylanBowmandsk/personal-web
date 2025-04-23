const About = () => {
    return(
        <div className="flex flex-col items-center justify-center px-70 bg-stone-950 text-zinc-100">
            <h1 className="py-20 poppins-bold text-4xl text-violet-400">About Me</h1>
            <div className="flex">
                <div className="flex-1 poppins-regular">
                    <p className="py-2">I'm a software developer from Glasgow, Scotland who specialises in full stack development as well as automating business processes with hands on experience in blockchain technologies.</p>
                    <p className="py-2">I have over 7 years proven experience developing software with multiple technologies. I'm dedicated to improving my current skill set as well as learning new skills whenever i see a new and exciting oppourtinity pop up.
                        I believe that we are never done learning and there is always room for improvement</p>
                    <p className="py-2">My core skills fall under React/next.js/tailwind/mongodb and .Net/SQL. I also strongly advocate for automation with Python and have previously used flask for web development.</p>
                    <p className="py-2">Outside of development i'm interested in digital media, finance and family</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
          <div className="w-36 h-36 rounded-full bg-zinc-300 flex items-center justify-center text-zinc-500 text-3xl font-semibold">
            DB
          </div>
                </div>
            </div>
        </div>

    )
}

export default About