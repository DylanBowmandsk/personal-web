import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="flex flex-col items-center justify-center px-4 md:px-20 lg:px-40 bg-stone-950 text-zinc-100">
      <h1 className="py-20 text-4xl poppins-light text-violet-400" data-aos="fade-right">{"Work"}</h1>

      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-46 items-center mb-24">
        <div className="flex-1 text-zinc-100 font-light" data-aos="fade-right">
          <h2 className="text-3xl poppins-semibold mb-2 text-violet-400">Self-Employed</h2>
          <div className="mb-4 border-b border-zinc-700">
            <h3 className="inline text-lg font-medium text-xl">Web3 Developer</h3>
            <span className="ml-2 text-sm text-zinc-400">2024 – 2025</span>
          </div>
          <p className="text-lg poppins-regular">
            Working from the Solana blockchain, I developed bots for token launches that distributed supply to wallets, as well as volume bots to inflate trading activity.
            These helped tokens hit the #1 trending spots on listing platforms. On the non-technical side, I contributed to community growth through marketing and engagement strategy,
            and by working closely with investors, community managers, and key opinion leaders. I’ve been part of the launch team for multiple tokens that reached million-dollar
            market caps, cementing my position in the ecosystem.
          </p>
        </div>

        <div className="flex-1 flex justify-end items-center" data-aos="fade-left">
          <div className="w-[480px] h-[280px] overflow-hidden rounded-xl shadow-lg">
            <Image src="/blockchain-image.PNG" width={800} height={800} alt="Web3 Project Visual" className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl gap-46 items-center mb-24">
        <div className="flex-1 flex justify-start items-center" data-aos="fade-right">
          <div className="w-[480px] h-[280px] overflow-hidden rounded-xl shadow-lg">
            <Image src="/genius-image.png" width={800} height={800} alt="Genius SSLC" className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1 text-zinc-100 font-light"data-aos="fade-left">
          <h2 className="text-3xl poppins-semibold mb-2 text-violet-400">Genius SSLC</h2>
          <div className="mb-4 border-b border-zinc-700">
            <h3 className="inline text-lg font-medium text-xl">Software Engineer</h3>
            <span className="ml-2 text-sm text-zinc-400">2023 – 2024</span>
          </div>
          <p className="text-lg poppins-regular">
            In this role I specialized in C# with some Vue/JavaScript web development and heavy SQL work.
            My focus was the Adept product, a debt CRM used by (redacted). My daily tasks varied: adding features, fixing bugs, and creating data importers/exporters.
            We followed solid DevOps practices—proper Git management, testing, approvals, and task tracking. This role matured me as a developer and helped me thrive
            in a robust, well-run team.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-46 items-center mb-24">
        <div className="flex-1 text-zinc-100 font-light" data-aos="fade-right">
          <h2 className="text-3xl poppins-semibold mb-2 text-violet-400">Peter Vardy</h2>
          <div className="mb-4 border-b border-zinc-700">
            <h3 className="inline text-lg font-medium text-xl">Application Developer</h3>
            <span className="ml-2 text-sm text-zinc-400">2022 – 2023</span>
          </div>
          <p className="text-lg poppins-regular">
            At Peter Vardy I was in a mid-level role, primarily working with Python and the Microsoft Power Platform.
            I built several internal tools—like a web scraper (Python/React), a personal development planner, and other sign-off-based apps.
            I also developed Python RPA scripts to automate department workflows and frequently presented my work to board members, including Mr. Vardy.
          </p>
        </div>

        <div className="flex-1 flex justify-end items-center" data-aos="fade-left">
          <div className="w-[480px] h-[280px] overflow-hidden rounded-xl shadow-lg">
            <Image src="/pv-image.PNG" width={800} height={800} alt="Peter Vardy Office" className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
