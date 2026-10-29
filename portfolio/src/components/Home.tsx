import { Mail } from "lucide-react"
import profil from "../assets/profil.webp"
const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center item-center my-10 md:my-32">
      <div className="flex flex-col">

        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0 "  > 
          Bonjour, <br /> Je suis Moubarak <br />@
          <span className="text-accent">MounDev</span>
        </h1>

        <p className="my-4 text-sm text-center md: text-left">
          Je suis un développeur <br />
          web et mobile avec deux ans d'expérience. <br />
          J'utlise React , Node.js et Flutter. <br />
          Contacter-moi au bésoin .{" "}
        </p>
        <a className="btn btn-accent md:w-fit" href="#">
          <Mail /> Contacter-moi
        </a>

      </div>

      <div className="md:ml-60">
        <img
        src={profil} alt="Profil image" className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
      style={{
      borderRadius: "30% 70% 70% 30% / 33% 42% 38% 33%"
      }}
      />
      </div>
    </div>
  );
}

export default Home