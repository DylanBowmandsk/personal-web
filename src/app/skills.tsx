import {FaReact,FaJava,FaPython,FaNodeJs,FaGitAlt,FaAndroid} from "react-icons/fa"
import {SiDotnet,SiFirebase,SiMongodb,SiMysql,SiJavascript, SiExpress} from "react-icons/si"
  
  const skills = [
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: '.NET', icon: <SiDotnet className="text-indigo-300" /> },
    { name: 'Java', icon: <FaJava className="text-red-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'SQL', icon: <SiMysql className="text-sky-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-emerald-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
    { name: 'Android', icon: <FaAndroid className="text-lime-400" /> },
    { name: 'Express', icon: <SiExpress className="text-lime-400" /> },
  ];
const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-20 bg-stone-950 text-zinc-100">
      <h1 className="text-4xl text-violet-400 font-light poppins-light mb-10">{"Skills"}</h1>
      
      <div className="text-3xl poppins-regular text-zinc-300 mb-6">{"Development Skills"}</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-stone-900 p-6 rounded-xl shadow-md hover:text-violet-400 transition-colors duration-300"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <div className="text-lg font-medium">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;