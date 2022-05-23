import Scroll from "react-scroll";
import { motion, useAnimation } from "framer-motion";

import Button from "../components/Button";
import Polygon from "../components/Polygon";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import Navigation from "../components/layout/Navigation";

import home from "../styles/home.module.scss";
import { projectData } from "../components/data/project-data";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillItem = {
  hidden: {
    opacity: 0,
    y: 200,
    x: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    x: 200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Home = () => {
  return (
    <div>
      <div className={home.home__hero} id="top">
        <div className={home.polygon__wrapper}>
          <Polygon />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            },
          }}
        >
          <h1 className={home.header1} id={home.greeting}>
            Hey, I&apos;m Daniel
          </h1>
          <h2 className={home.header2}>Software Developer</h2>
          <p className={home.text}>
            Experienced in web development, building beautiful frontends, and
            high quality backend servers.
          </p>
          <div className={home.buttons}>
            <Scroll.Link to="contact" smooth={true} offset={-50} duration={500}>
              <Button text={"Contact Me"} external={false} />
            </Scroll.Link>
          </div>
        </motion.div>
      </div>

      <div className={home.skills__content} id="skills">
        <h1 className={home.header1}>Skills</h1>
        <motion.div
          className={home.skills__wrapper}
          variants={container}
          initial="hidden"
          exit="exit"
          whileInView="show"
        >
          <SkillCard
            variants={skillItem}
            skillType="Languages"
            skills={[
              "JavaScript",
              "Typescript",
              "Java",
              "Python",
              "C++",
              "SQL",
              "Html",
              "CSS/SCSS",
            ]}
          />

          <SkillCard
            variants={skillItem}
            skillType="Frameworks"
            skills={["ReactJs", "NextJs", "NodeJs", "Express", "Spring"]}
          />
          <SkillCard
            variants={skillItem}
            skillType=" Technologies"
            skills={["Heroku", "Vercel", "Git", "Linux"]}
          />
          <SkillCard
            variants={skillItem}
            skillType="Spoken Languages"
            skills={["English", "Portuguese"]}
          />
        </motion.div>
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
