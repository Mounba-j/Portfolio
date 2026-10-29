import {
  Eclipse,
  Home,
  FolderKanban,
  UserRound,
  SquareActivity,
  Sun,
} from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-center md:justify-between item center p-4 ">
      <a className="flex items-center font-bold text-3xl md:text-xl">
        <Eclipse size={24} className="mr-2 " color="#f3a508ff " />
        Moun <span className="text-accent">De√ </span>
      </a>

      <ul className="hidden md:flex space-x-4 shadow-xl">
        <li>
          <a href="#" className="btn btn-sm btn-ghost ">
            <Home size={12} />
            Accueil
          </a>
        </li>

        <li>
          <a href="#" className="btn btn-sm btn-ghost ">
            <FolderKanban size={12} />
            Mes projets
          </a>
        </li>

        <li>
          <a href="#" className="btn btn-sm btn-ghost ">
            <UserRound size={12} />À propos
          </a>
        </li>

        <li>
          <a href="#" className="btn btn-sm btn-ghost ">
            <SquareActivity size={12} />
            Mes expériences
          </a>
          
        </li>
      </ul>
      <button className="bnt bnt-sm">{<Sun/>}</button>
    </div>
  );
}

export default NavBar
