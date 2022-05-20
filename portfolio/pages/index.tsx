import Scroll from "react-scroll";

import Button from "../components/Button";
import Polygon from "../components/Polygon";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import Navigation from "../components/layout/Navigation";

import image1 from "../public/images/my-movie-list.png";
import image2 from "../public/images/decide-my-meal.png";
import image3 from "../public/images/dango-tracker.png";
import image4 from "../public/images/health-promotion.png";

import home from "../styles/home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={home.home__hero} id="home">
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
            <Button text={"Contact Me"} />
          </Scroll.Link>
        </div>
      </div>

      <div className={home.skills__content} id="skills">
        <h1 className={home.header1}>Skills</h1>
        <SkillCard
          skillType="Languages"
          skills={[
            "JavaScript",
            "Typescript",
            "Java",
            "C++",
            "Python",
            "SQL",
            "Html",
            "CSS/SCSS",
          ]}
        />

        <SkillCard
          skillType="Frameworks & Technologies"
          skills={[
            "ReactJs",
            "NextJs",
            "NodeJs",
            "Express",
            "Spring",
            "Django",
            "Heroku",
            "Vercel",
            "Git",
            "Linux",
          ]}
        />
        <SkillCard
          skillType="Spoken Languages"
          skills={["English", "Portuguese"]}
        />
      </div>
      <div className={home.projects__content} id="projects">
        <h1 className={home.header1}>Projects</h1>

        <div className={home.projects__wrapper}>
          <ProjectCard
            projectName={"My movie list"}
            projectDescription={
              "Currently maintaining and building a web platform where users can review and keep track of their favorite movies and TV shows (Coming soon)."
            }
            stack={[
              "TypeScript",
              "Nodejs",
              "Express",
              "PostgreSQL",
              "The MovieDB API",
              "ReactJs",
              "Styled Components",
            ]}
            projectImage={image1}
          />
          <ProjectCard
            projectName={"Health Promotion"}
            projectDescription={
              "a web application to check users' Blood pressure levels and BMI index (built in a team of 4 students)"
            }
            stack={[
              "Java",
              "Spring Boot",
              "AWS",
              "MySQL",
              "JavaScript",
              "HTML",
              "CSS",
            ]}
            projectImage={image4}
            sourceUrl={"https://github.com/tsorteberg/HealthPromotion"}
            videoUrl={"https://www.youtube.com/watch?v=a4vElq9no4A"}
          />
          <ProjectCard
            projectName={"Expenses Tracker"}
            projectDescription={"An expenses tracker made with Django."}
            stack={["Python", "Django", "SQLite3", "HTML", "CSS", "JavaScript"]}
            projectImage={image3}
            sourceUrl={"https://github.com/dndanli/Expenses-tracker"}
          />
          <ProjectCard
            projectName={"Decide My Meal"}
            projectDescription={
              "A website to help you decide what to eat and where to eat."
            }
            stack={[
              "TypeScript",
              "ReactJs",
              "Styled Components",
              "Nodejs",
              "Express",
              "TomTom API",
              "Heroku",
            ]}
            projectImage={image2}
            projectUrl={"http://decidemymeal.com"}
            sourceUrl={"https://github.com/dndanli/decide-my-meal"}
          />
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
          <h2>danielfcdelima@gmail.com</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
          >
            <Button text={"LinkedIn"} />
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
