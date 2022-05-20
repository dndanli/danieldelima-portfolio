import skill from "../styles/skillCard.module.scss";

type SkillCardProps = {
  skillType: string;
  skills: string[];
};
const SkillCard = ({ skills, skillType }: SkillCardProps) => {
  return (
    <div className={skill.container}>
      <h2>{skillType}</h2>
      <ul className={skill.skills__list}>
        {skills.map((skill: any, index: number) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};
export default SkillCard;
