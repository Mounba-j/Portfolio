import Title from "../title";
import skills from "./skills";

import google from "../assets/google.webp"
import meta from "../assets/meta.png"
import alfajar from "../assets/alfajar.png";




const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    compagny: " google",
    period: "2022 - 2023",
    description: [
      " evelopper des nouvelles fonctionnalités pour les applications web en utilisant React et Redux.",
      " Collaborer avec les équipes de conception et de développement pour créer des interfaces utilisateur attrayantes et fonctionnelles.",
    ],
    image: google,
  },
  {
    id: 2,
    role: "Frontend Developer",
    compagny: " Meta",
    period: "2023 - 2024",
    description: [
      " Développer des applications web performantes et réactives en utilisant React et Next.js.",
      " Collaborer avec les équipes de conception et de développement pour créer des interfaces utilisateur attrayantes et fonctionnelles.",
    ],
    image: meta,
  },
  {
    id: 3,
    role: "flutter Developer",
    compagny: "alfajar",
    period: "2024 - 2025",
    description: [
      " Développer des applications mobiles performantes et réactives en utilisant Flutter.",
      " Collaborer avec les équipes de conception et de développement pour créer des interfaces utilisateur attrayantes et fonctionnelles.",
    ],
    image: alfajar,
  },
];



const Experiences = () => {
  return (
    <div>
      <Title Title="Experiences" />
      <div>
        <div className="flex flex-wrap gap-4 justify-center items-center md: w-1/3 mt-4 md: mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center items-center flex-col "
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <p className="text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className=" md: ml-4 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col md:flex-row gap-4 p-4 border border-accent rounded-lg"
            >
              <img
                src={experience.image}
                alt={experience.compagny}
                className="object-cover rounded-lg h-24 w-24"
              />
              <div>
                <h3 className="text-lg font-bold">{experience.role}</h3>
                <p className="text-accent">{experience.compagny}</p>
                <p className="text-sm text-muted-foreground">
                  {experience.period}
                </p>
                <ul className="list-disc list-inside mt-2">
                  {experience.description.map((desc, index) => (
                    <li key={index} className="text-sm">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
