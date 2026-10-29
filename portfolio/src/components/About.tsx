import Title from "../title";
import profil from "../assets/profil.webp";
import aboutSection from "./AboutSection";


  

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32">
      <Title Title="A propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img
            src={profil}
            alt="Profil image"
            className="w-96 object-cover obect-cover rounded-xl shadow-xl"
          />
        </div>

        <div className="md:ml-4 space-y-4">
          {aboutSection.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl" >
              <div className="mb-2 md:mb-0">
                {section.icon}
                </div>

              <div className=" md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold  mb-1">
                  {section.titre}
                </h2>
                 <p className="text-sm ml-1">{section.description}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default About