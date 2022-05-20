import about from "../styles/about.module.scss";
const About = () => {
  return (
    <div className={about.about__content}>
      <h1 className={about.about__header}>Who am I?</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        veritatis ratione eveniet adipisci dicta mollitia quibusdam magni, ab
        minima laboriosam.
      </p>
    </div>
  );
};

export default About;
