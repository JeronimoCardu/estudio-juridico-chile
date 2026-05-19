import { geistMono, geistSans } from "@/app/layout";

const testimonials = [
  {
    initials: "MC",
    name: "María C. González",
    role: "Cliente Particular",
    quote:
      '"La dedicación del equipo de Valdés & Co. superó todas mis expectativas. En un proceso de divorcio complejo, su apoyo fue técnico y emocionalmente invaluable."',
  },
  {
    initials: "JR",
    name: "Juan Pablo Rojas",
    role: "Director, Inversiones JR",
    quote:
      '"Como pyme, encontrar asesoría tributaria que hable nuestro idioma fue clave. Su estrategia nos permitió ordenar el patrimonio familiar de forma sólida."',
  },
  {
    initials: "AL",
    name: "Andrés Lagos",
    role: "Empresario",
    quote:
      '"Profesionalismo de primer nivel. Resolvieron un litigio civil que llevaba años estancado en apenas unos meses. La comunicación fue impecable."',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-tertiary py-24 px-30">
      <div className="text-center mb-16">
        <p
          className={`text-secondary text-xs tracking-widest uppercase mb-4 ${geistSans.className}`}
        >
          Confianza de Nuestros Clientes
        </p>
        <h2 className={`text-5xl text-primary ${geistMono.className}`}>
          Experiencias de Éxito
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-16">
        {testimonials.map((t) => (
          <div
            key={t.initials}
            className="bg-white rounded-xl p-8 flex flex-col gap-6 shadow-sm"
          >
            <span
              className={`text-6xl text-secondary/50 font-bold leading-none ${geistMono.className}`}
            >
              99
            </span>
            <p
              className={`text-gray-500 italic text-sm leading-relaxed flex-1 ${geistSans.className}`}
            >
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-neutral flex items-center justify-center shrink-0">
                <span
                  className={`text-primary text-xs font-bold ${geistMono.className}`}
                >
                  {t.initials}
                </span>
              </div>
              <div>
                <p
                  className={`text-primary font-bold text-sm ${geistSans.className}`}
                >
                  {t.name}
                </p>
                <p className={`text-gray-400 text-xs ${geistSans.className}`}>
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
