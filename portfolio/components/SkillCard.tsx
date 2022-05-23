import skill from "../styles/skillCard.module.scss";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion } from "framer-motion";

type SkillCardProps = {
  skillType: string;
  skills: string[];
  variants: any;
};

const SkillCard = ({ skills, skillType, variants }: SkillCardProps) => {
  return (
    <motion.div className={skill.container} variants={variants}>
      <h2 className={skill.type}>{skillType}</h2>
      <ul className={skill.skills__list}>
        {skills.map((skill: any, index: number) => {
          return (
            <li key={index}>
              <IoCheckmarkCircle
                style={{
                  marginRight: "0.3rem",
                  fontSize: "1.2rem",
                  color: "#e60067",
                }}
              />
              {skill}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
export default SkillCard;
