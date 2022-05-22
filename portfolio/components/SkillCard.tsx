import skill from "../styles/skillCard.module.scss";
import { IoCheckmarkCircle } from "react-icons/io5";

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
          return (
            <li key={index}>
              <IoCheckmarkCircle
                style={{ marginRight: "0.3rem", fontSize: "1.2rem" }}
              />
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SkillCard;
