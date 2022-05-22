import { StaticImageData } from "next/image";

export interface PropsObj {
  projectName: string;
  projectPurpose: string;
  projectDescription: string;
  projectImage: StaticImageData;
  stack: string[];
  //  where the project is hosted
  projectUrl?: string;
  //   where the project's source code is hosted
  sourceUrl?: string;
  videoUrl?: string;
  date: string;
}
