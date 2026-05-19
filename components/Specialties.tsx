import { MdFamilyRestroom } from "react-icons/md";
import { GiHammerDrop } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { PiSuitcaseSimple } from "react-icons/pi";
import SaberMasBtn from "./SaberMasBtn";
import { geistMono } from "@/app/layout";

export default function Specialties() {
  return (
    <section className="px-30 my-30">
      <div className="grid grid-cols-2 items-center mb-10">
        <h2 className={`text-5xl ${geistMono.className}`}>
          Nuestras Áreas de Especialización
        </h2>
        <p className="text-gray-600 text-right">
          Ofrecemos asesoría técnica de alto nivel con un enfoque artesanal para
          cada caso.
        </p>
      </div>
      <div className="flex justify-between gap-8">
        <div className="border border-gray-400 shadow-xl flex flex-col gap-4 w-1/4 p-8 hover:border-secondary transition-all hover:-translate-y-2 duration-300">
          <MdFamilyRestroom size={48} />
          <h3 className={`${geistMono.className} text-2xl`}>
            Derecho de Familia
          </h3>
          <p className="text-gray-700">
            Acompañamiento empático en procesos de divorcio, pensiones y cuidado
            personal.
          </p>
          <SaberMasBtn />
        </div>
        <div className="border border-gray-400 shadow-xl flex flex-col gap-4 w-1/4 p-8 hover:border-secondary transition-all hover:-translate-y-2 duration-300">
          <GiHammerDrop size={48} className="group-hover:" />
          <h3 className={`${geistMono.className} text-2xl`}>Derecho civil</h3>
          <p className="text-gray-700">
            Protección de tus bienes, contratos y litigios con rigor técnico.
          </p>
          <SaberMasBtn />
        </div>
        <div className="border border-gray-400 shadow-xl flex flex-col gap-4 w-1/4 p-8 hover:border-secondary transition-all hover:-translate-y-2 duration-300">
          <BsBank size={48} className="group-hover:" />
          <h3 className={`${geistMono.className} text-2xl`}>
            Derecho Tribunario
          </h3>
          <p className="text-gray-700">
            Estrategias fiscales sólidas para tu patrimonio o empresa.
          </p>
          <SaberMasBtn />
        </div>
        <div className="border border-gray-400 shadow-xl flex flex-col gap-4 w-1/4 p-8 hover:border-secondary transition-all hover:-translate-y-2 duration-300">
          <PiSuitcaseSimple size={48} className="group-hover:" />
          <h3 className={`${geistMono.className} text-2xl`}>Derecho Laboral</h3>
          <p className="text-gray-700">
            Asesoría experta en relaciones laborales y cumplimiento normativo.
          </p>
          <SaberMasBtn />
        </div>
      </div>
    </section>
  );
}
