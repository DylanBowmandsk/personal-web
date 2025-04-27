const Splash = () => {
    return(
<div className="flex flex-col items-center justify-center min-h-screen bg-stone-950">
  <div className="">
    <h1 className="poppins-bold text-5xl text-zinc-100 fadeLeft">{"Hello. I am "}<span className="text-violet-400">{"Dylan Bowman"}</span></h1>
    <h1 className="opacity-0 poppins-regular text-4xl text-zinc-100 fadeBottom"><span className="text-violet-400">{"Developer"}</span>{" and blockchain enthusiast"}</h1>
  </div>
  <a href="#about">
    <div 
      className="flex items-center animate-bounce justify-center mt-80 w-14 h-14 bg-violet-400 rounded-full shadow-lg hover:bg-violet-500 transition cursor-pointer"
      data-aos-delay="1000"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
    >
      <svg className="w-10 h-10 text-white" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v16m0 0l-6-6m6 6l6-6" />
      </svg>
    </div>
  </a>
</div>
    )
}

export default Splash