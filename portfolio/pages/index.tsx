import Scroll from "react-scroll";

import Button from "../components/Button";
import Polygon from "../components/Polygon";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import Navigation from "../components/layout/Navigation";

import home from "../styles/home.module.scss";
import { projectData } from "../components/data/project-data";

const Home = () => {
  return (
    <div>
      <div className={home.home__hero} id="top">
        <div className={home.polygon__wrapper}>
          <Polygon />
        </div>
        <h1 className={home.header1} id={home.greeting}>
          Hey, I&apos;m Daniel
        </h1>
        <h2 className={home.header2}>Software Developer</h2>
        <p className={home.text}>
          Experienced in web development, building beautiful frontends, and high
          quality backend servers.
        </p>
        <div className={home.buttons}>
          <Scroll.Link to="contact" smooth={true} offset={-50} duration={500}>
            <Button text={"Contact Me"} external={false} />
          </Scroll.Link>
        </div>
      </div>

      <div className={home.skills__content} id="skills">
        <h1 className={home.header1}>Skills</h1>
        <div className={home.skills__wrapper}>
          <SkillCard
            skillType="Languages"
            skills={[
              "JavaScript",
              "Typescript",
              "Java",
              "C++",
              "SQL",
              "Html",
              "CSS/SCSS",
            ]}
          />

          <SkillCard
            skillType="Frameworks"
            skills={["ReactJs", "NextJs", "NodeJs", "Express", "Spring"]}
          />
          <SkillCard
            skillType=" Technologies"
            skills={["Heroku", "Vercel", "Git", "Linux"]}
          />
          <SkillCard
            skillType="Spoken Languages"
            skills={["English", "Portuguese"]}
          />
        </div>
      </div>
      <div className={home.projects__content} id="projects">
        <h1 className={home.header1}>Projects</h1>

        <div className={home.projects__wrapper}>
          {projectData.map((data: any, index: number) => {
            return (
              <div key={index}>
                <ProjectCard dataObject={data} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={home.contact} id="contact">
        <h2 className={home.header1}>Lets talk</h2>
        <h3>
          I would love to answer your questions and discuss my experiences as a
          developer.
        </h3>
        <h3>Simply shoot me an email or contact me on Linkedin.</h3>
        <div className={home.contact__links}>
          <h2 className={home.contact__email}>danielfcdelima@gmail.com</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
          >
            <Button text={"LinkedIn"} external={true} />
          </a>
        </div>
      </div>

      <div className={home.navigation__wrapper}>
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
