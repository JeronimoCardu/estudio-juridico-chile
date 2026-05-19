import { geistMono, geistSans } from "@/lib/fonts";
import { GiCrucifix } from "react-icons/gi";
import { RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

const navLinks = ["Servicios", "Nosotros", "Testimonios", "Contacto"];
const legalLinks = ["Aviso Legal", "Política de Privacidad", "Términos y Condiciones", "Carreras"];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="px-6 lg:px-30 pt-16 pb-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + tagline */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <GiCrucifix size={20} className="text-white" />
            <div>
              <p className={`text-white text-sm font-bold tracking-widest uppercase ${geistMono.className}`}>
                Valdés &amp; Co
              </p>
              <p className={`text-white/40 text-xs tracking-widest uppercase ${geistMono.className}`}>
                Estudio Jurídico
              </p>
            </div>
          </div>
          <p className={`text-white/50 text-sm leading-relaxed ${geistSans.className}`}>
            Excelencia jurídica con un enfoque moderno y humano en el corazón de Chile.
          </p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-5">
          <h4 className={`text-secondary text-base font-semibold ${geistMono.className}`}>
            Navegación
          </h4>
          <ul className={`flex flex-col gap-3 ${geistSans.className}`}>
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-5">
          <h4 className={`text-secondary text-base font-semibold ${geistMono.className}`}>
            Legal
          </h4>
          <ul className={`flex flex-col gap-3 ${geistSans.className}`}>
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Horario */}
        <div className="flex flex-col gap-5">
          <h4 className={`text-secondary text-base font-semibold ${geistMono.className}`}>
            Horario
          </h4>
          <div className={`flex flex-col gap-1 text-white/50 text-sm ${geistSans.className}`}>
            <p>Lunes a Viernes: 09:00 - 18:30</p>
            <p>Sábados: Previa Cita</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors"
            >
              <RiInstagramLine size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors"
            >
              <RiLinkedinLine size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 lg:px-30 py-6">
        <p className={`text-center text-white/40 text-xs ${geistSans.className}`}>
          © 2024 Valdés &amp; Co. Estudio Jurídico. Santiago, Chile. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
