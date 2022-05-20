import projectCard from "../styles/projectCard.module.scss";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  projectImage: StaticImageData;
  stack: string[];
  //  where the project is hosted
  projectUrl?: string;
  //   where the project's source code is hosted
  sourceUrl?: string;
  videoUrl?: string;
};

const ProjectCard = ({
  projectImage,
  projectName,
  stack,
  projectDescription,
  projectUrl,
  sourceUrl,
  videoUrl,
}: ProjectCardProps) => {
  return (
    <div className={projectCard.container}>
      <Image
        src={projectImage}
        alt={projectName}
        className={projectCard.image}
      />
      <div className={projectCard.content}>
        <h2 className={projectCard.title}>{projectName}</h2>
        <h3 className={projectCard.description}>{projectDescription}</h3>

        <div className={projectCard.stack}>
          {stack.map((obj: any, index: number) => {
            return <li key={index}>{obj}</li>;
          })}
        </div>

        <div className={projectCard.actions}>
          {projectUrl ? (
            <a target="_blank" rel="noopener noreferrer" href={projectUrl}>
              <h2 style={{ color: "#c471f5" }}>View it live</h2>
            </a>
          ) : null}
          {videoUrl ? (
            <a target="_blank" rel="noopener noreferrer" href={videoUrl}>
              <h2 style={{ color: "#c471f5" }}>Video</h2>
            </a>
          ) : null}
          {sourceUrl ? (
            <a target="_blank" rel="noopener noreferrer" href={sourceUrl}>
              <h2 style={{ color: "#c471f5" }}>Source code</h2>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
