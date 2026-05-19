import { MdFamilyRestroom } from "react-icons/md";
import { GiHammerDrop } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { PiSuitcaseSimple } from "react-icons/pi";
import SaberMasBtn from "./SaberMasBtn";
import { geistMono } from "@/lib/fonts";

const cards = [
  {
    icon: <MdFamilyRestroom size={48} />,
    title: "Derecho de Familia",
    desc: "Acompañamiento empático en procesos de divorcio, pensiones y cuidado personal.",
  },
  {
    icon: <GiHammerDrop size={48} />,
    title: "Derecho Civil",
    desc: "Protección de tus bienes, contratos y litigios con rigor técnico.",
  },
  {
    icon: <BsBank size={48} />,
    title: "Derecho Tributario",
    desc: "Estrategias fiscales sólidas para tu patrimonio o empresa.",
  },
  {
    icon: <PiSuitcaseSimple size={48} />,
    title: "Derecho Laboral",
    desc: "Asesoría experta en relaciones laborales y cumplimiento normativo.",
  },
];

export default function Specialties() {
  return (
    <section className="px-6 lg:px-30 my-16 lg:my-30">
      <div className="flex flex-col md:grid md:grid-cols-2 items-start md:items-center gap-4 mb-10">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl ${geistMono.className}`}>
          Nuestras Áreas de Especialización
        </h2>
        <p className="text-gray-600 md:text-right text-sm lg:text-base">
          Ofrecemos asesoría técnica de alto nivel con un enfoque artesanal para
          cada caso.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="border border-gray-400 shadow-xl flex flex-col gap-4 p-8 hover:border-secondary transition-all hover:-translate-y-2 duration-300"
          >
            {card.icon}
            <h3 className={`${geistMono.className} text-2xl`}>{card.title}</h3>
            <p className="text-gray-700">{card.desc}</p>
            <SaberMasBtn />
          </div>
        ))}
      </div>
    </section>
  );
}
