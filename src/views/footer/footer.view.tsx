import { FaLinkedin, FaGithub } from "react-icons/fa";

function FooterView() {
  return (
    <footer className="flex jc-between ai-center p-4">
      <div>
        <span>Made with React | ThreeJs</span>
      </div>

      <div className="flex gap-2">
        <a
          className="scale-hover"
          target="_blank"
          href="https://www.linkedin.com/in/mathieu-b-5766b3230/"
        >
          <FaLinkedin size={30} color="#0072b1" />
        </a>

        <a
          className="scale-hover"
          target="_blank"
          href="https://github.com/BlMathieu"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
}

export { FooterView };
