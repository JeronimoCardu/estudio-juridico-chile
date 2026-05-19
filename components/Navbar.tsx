import { geistMono, geistSans } from "@/app/layout";
import { GiCrucifix } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav
      className={`navbar  bg-neutral py-6 px-30 flex items-center justify-between `}
    >
      <div className="navbar__logo flex items-center">
        <GiCrucifix size={32} className="mr-2" />
        <h1 className={`${geistMono.className} text-xl font-bold`}>
          Estudio Jurídico Chile
        </h1>
      </div>
      <ul
        className={` navbar__links flex items-center justify-center space-x-6`}
      >
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#about">Nosotros</a>
        </li>
        <li className="bg-primary text-white px-4 py-2 ">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
