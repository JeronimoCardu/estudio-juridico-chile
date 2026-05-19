import { geistMono, geistSans } from "@/app/layout";
import { MdOutlineLocationOn, MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const contactInfo = [
  {
    icon: <MdOutlineLocationOn size={20} />,
    label: "Dirección",
    value: "Av. Apoquindo 4500, Oficina 1202, Las Condes, Santiago.",
  },
  {
    icon: <MdOutlineEmail size={20} />,
    label: "Email",
    value: "contacto@valdesyco.cl",
  },
  {
    icon: <MdOutlinePhone size={20} />,
    label: "Teléfono",
    value: "+56 2 2345 6789",
  },
];

export default function Contact() {
  return (
    <section className="bg-tertiary py-24 px-30">
      <div className="flex gap-16 items-start">
        {/* Left */}
        <div className="w-2/5 flex flex-col gap-10 pt-4">
          <h2 className={`text-5xl text-primary ${geistMono.className}`}>
            Hablemos de su Caso
          </h2>
          <p className={`text-secondary text-sm leading-relaxed ${geistSans.className}`}>
            Rellene el formulario y un especialista de nuestro equipo se pondrá
            en contacto con usted en menos de 24 horas hábiles.
          </p>
          <div className="flex flex-col gap-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-secondary mt-0.5">{item.icon}</span>
                <div>
                  <p className={`text-primary font-bold text-sm ${geistSans.className}`}>
                    {item.label}
                  </p>
                  <p className={`text-gray-500 text-sm ${geistSans.className}`}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form card */}
        <div className="flex-1 bg-white rounded-xl p-10 shadow-sm flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <label className={`text-primary text-sm font-semibold ${geistSans.className}`}>
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Ej: Juan Pérez"
                className={`border-b border-gray-200 py-2 text-sm text-gray-400 outline-none placeholder:text-gray-300 ${geistSans.className}`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className={`text-primary text-sm font-semibold ${geistSans.className}`}>
                Email
              </label>
              <input
                type="email"
                placeholder="email@ejemplo.com"
                className={`border-b border-gray-200 py-2 text-sm text-gray-400 outline-none placeholder:text-gray-300 ${geistSans.className}`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className={`text-primary text-sm font-semibold ${geistSans.className}`}>
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="+56 9 ..."
                className={`border-b border-gray-200 py-2 text-sm text-gray-400 outline-none placeholder:text-gray-300 ${geistSans.className}`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className={`text-secondary text-sm font-semibold ${geistSans.className}`}>
                Especialidad de Interés
              </label>
              <select
                defaultValue=""
                className={`border-b border-gray-200 py-2 text-sm text-gray-400 outline-none appearance-none bg-transparent ${geistSans.className}`}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option>Derecho de Familia</option>
                <option>Derecho Civil</option>
                <option>Derecho Tributario</option>
                <option>Derecho Laboral</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className={`text-primary text-sm font-semibold ${geistSans.className}`}>
              Mensaje
            </label>
            <textarea
              rows={3}
              placeholder="Cuéntenos brevemente sobre su situación..."
              className={`border-b border-gray-200 py-2 text-sm text-gray-400 outline-none resize-none placeholder:text-gray-300 ${geistSans.className}`}
            />
          </div>

          <button
            type="button"
            className={`w-full bg-primary text-white py-4 text-sm tracking-widest uppercase font-semibold hover:bg-primary/90 transition-colors ${geistMono.className}`}
          >
            Solicitar Consulta
          </button>
        </div>
      </div>
    </section>
  );
}
