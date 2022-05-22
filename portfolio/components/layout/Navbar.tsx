import Scroll from "react-scroll";

import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

import navbar from "../../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={navbar.wrapper}>
      <Scroll.Link to="top" smooth={true} offset={-50} duration={500}>
        <h2 className={navbar.logo}>DDL</h2>
      </Scroll.Link>

      <ul className={navbar.list}>
        <li>
          <Scroll.Link to="skills" smooth={true} offset={-45} duration={500}>
            Skills
          </Scroll.Link>
        </li>

        <li>
          <Scroll.Link to="projects" smooth={true} offset={-48} duration={500}>
            Projects
          </Scroll.Link>
        </li>
        <li>
          <Scroll.Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Scroll.Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
          >
            <FaLinkedin className={navbar.socials__icon} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dndanli"
          >
            <FaGithubAlt className={navbar.socials__icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
