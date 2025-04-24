import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='contact' className="bg-zinc-900 text-white py-8 text-zinc-300">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-zinc-300">
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/DylanBowmandsk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-bowman-9b2924b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <p className="text-lg">
            <a href="tel:+44747441989" className="hover:underline">
              Phone: +44747441989
            </a>
          </p>
          <p className="text-lg">
            <a href="mailto:dylanbowmandsk@gmail.com" className="hover:underline">
              Email: dylanbowmandsk@gmail.com
            </a>
          </p>
        </div>

        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dylan Bowman. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;