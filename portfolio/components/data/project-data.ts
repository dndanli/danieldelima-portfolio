import { PropsObj } from "../../interfaces/ProjectCardProps";
import image1 from "../../public/images/my-movie-list.png";
import image2 from "../../public/images/decide-my-meal.png";
import image4 from "../../public/images/health-promotion.png";

export const projectData: PropsObj[] = [
  {
    projectName: "Decide My Meal",
    projectPurpose: "Decide what to eat and where to eat",
    date: "2022",
    projectDescription:
      "Pick a city and state and proceed to enter foods you would like to try. And with the click of a button, decide my meal will pick a random food for you from your list of choices, and the nearest restaurent to your location.",

    stack: [
      "TypeScript",
      "ReactJs",
      "Styled Components",
      "Nodejs",
      "Express",
      "TomTom API",
      "Heroku",
    ],
    projectImage: image2,
    projectUrl: "https://decidemymeal.com",
    sourceUrl: "https://github.com/dndanli/decide-my-meal",
  },
  {
    projectName: "Health Promotion",
    projectPurpose: "Check users' Blood pressure levels and BMI index ",
    date: "2021",
    projectDescription:
      "Enter your age, weight, height(inches) Systolic and Diastolic blood pressure. A health score will then be shown on a scale along with blood pressure warnings and diet recommendations. (built with a team of 4 students)",
    stack: ["Java", "Spring Boot", "AWS", "MySQL", "JavaScript", "HTML", "CSS"],
    projectImage: image4,
    sourceUrl: "https://github.com/tsorteberg/HealthPromotion",
    videoUrl: "https://www.youtube.com/watch?v=a4vElq9no4A",
  },
  {
    projectName: "My movie list",
    projectPurpose:
      "Discover, review, and keep track of the latest movie and tv shows.",
    date: "2022",
    projectDescription:
      "A movie and tv show recommendation platform. Discover, review and keep track of any titles. (Coming soon).",
    stack: [
      "TypeScript",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "The MovieDB API",
      "ReactJs",
      "Styled Components",
    ],
    projectImage: image1,
  },
];
