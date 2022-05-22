import navigation from "../../styles/navigation.module.scss";
import Scroll from "react-scroll";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={navigation.container}>
      <ul>
        <Scroll.Link to="top" smooth={true} offset={-50} duration={500}>
          <h3>Top</h3>
        </Scroll.Link>

        <Scroll.Link to="skills" smooth={true} offset={-45} duration={500}>
          <h3>Skills</h3>
        </Scroll.Link>

        <Scroll.Link to="projects" smooth={true} offset={-48} duration={500}>
          <h3>Projects</h3>
        </Scroll.Link>

        <Scroll.Link to="contact" smooth={true} offset={50} duration={500}>
          <h3>Contact</h3>
        </Scroll.Link>
      </ul>
    </div>
  );
};
export default Navigation;
