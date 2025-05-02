import {FaReact,FaJava,FaPython,FaNodeJs,FaGitAlt,FaAndroid, FaDocker, FaAws } from "react-icons/fa"
import {SiDotnet,SiFirebase,SiMongodb,SiMysql,SiJavascript,SiExpress,SiKubernetes, SiVuedotjs,  } from "react-icons/si"
import { VscAzure } from "react-icons/vsc";

  const languages = [
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: '.NET', icon: <SiDotnet className="text-indigo-300" /> },
    { name: 'Java', icon: <FaJava className="text-red-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'SQL', icon: <SiMysql className="text-sky-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-emerald-400" /> },
  ];
  const frameworks = [
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
    { name: 'Vue.js', icon: <SiVuedotjs  className="text-emerald-600" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    { name: 'Express', icon: <SiExpress className="text-lime-400" /> },
    { name: 'Android', icon: <FaAndroid className="text-lime-400" /> },
  ];

  const operations = [
    { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-400" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
    { name: 'Azure', icon: <VscAzure className="text-blue-400" /> },
  ];
const Skills = () => {    

  return (
    <div id="skills" className="flex flex-col items-center justify-center px-10 py-20 bg-stone-950 text-zinc-100">
      <h1 className="text-4xl text-violet-400 font-light poppins-light mb-10" data-aos="fade-right">{"Skills"}</h1>
      
      <div className="text-3xl poppins-regular text-zinc-300 mb-6" data-aos="fade-up">{"Development Skills"}</div>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-6 w-full max-w-4xl mb-8" data-aos="fade-up">
        {languages.map((language) => (
          <div
            key={language.name}
            className="flex flex-col items-center justify-center bg-stone-900 p-6 rounded-xl shadow-md hover:text-violet-400 transition-colors duration-300"
          >
            <div className="text-5xl mb-3">{language.icon}</div>
            <div className="text-lg font-medium">{language.name}</div>
          </div>
        ))}
      </div>

      <div className="text-3xl poppins-regular text-zinc-300 mb-6" data-aos="fade-up">{"Frameworks"}</div>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-6 w-full max-w-4xl mb-8" data-aos="fade-up">
        {frameworks.map((framework) => (
          <div
            key={framework.name}
            className="flex flex-col items-center justify-center bg-stone-900 p-6 rounded-xl shadow-md hover:text-violet-400 transition-colors duration-300"
          >
            <div className="text-5xl mb-3">{framework.icon}</div>
            <div className="text-lg font-medium">{framework.name}</div>
          </div>
        ))}
      </div>
      
      <div className="text-3xl poppins-regular text-zinc-300 mb-6" data-aos="fade-up">{"Operations"}</div>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-6 w-full max-w-4xl mb-8" data-aos="fade-up">
        {operations.map((operation) => (
          <div
            key={operation.name}
            className="flex flex-col items-center justify-center bg-stone-900 p-6 rounded-xl shadow-md hover:text-violet-400 transition-colors duration-300"
          >
            <div className="text-5xl mb-3">{operation.icon}</div>
            <div className="text-lg font-medium">{operation.name}</div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Skills;