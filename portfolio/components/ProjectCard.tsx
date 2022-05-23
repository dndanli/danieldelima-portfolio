import projectCard from "../styles/projectCard.module.scss";
import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";
import { PropsObj } from "../interfaces/ProjectCardProps";

type CardProps = {
  dataObject: PropsObj;
};

const ProjectCard = (dataObject: CardProps) => {
  return (
    <div className={projectCard.container}>
      <div className={projectCard.content}>
        <h2 className={projectCard.date}>{dataObject.dataObject.date}</h2>
        <h2 className={projectCard.title}>
          {dataObject.dataObject.projectName} |{" "}
          {dataObject.dataObject.projectPurpose}
        </h2>
        <h3 className={projectCard.description}>
          {dataObject.dataObject.projectDescription}
        </h3>

        <div className={projectCard.stack}>
          {dataObject.dataObject.stack.map((obj: any, index: number) => {
            return <p key={index}>{obj}</p>;
          })}
        </div>

        <div className={projectCard.actions}>
          {dataObject.dataObject.projectUrl ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={dataObject.dataObject.projectUrl}
            >
              <Button text="View" external={false} />
            </a>
          ) : null}
          {dataObject.dataObject.videoUrl ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={dataObject.dataObject.videoUrl}
            >
              <Button text="Video" external={false} />
            </a>
          ) : null}
          {dataObject.dataObject.sourceUrl ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={dataObject.dataObject.sourceUrl}
            >
              <Button text="Code" external={false} />
            </a>
          ) : null}
        </div>
        <div className={projectCard.image__wrapper}>
          <Image
            src={dataObject.dataObject.projectImage}
            alt={dataObject.dataObject.projectName}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
