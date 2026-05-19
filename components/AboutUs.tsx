import { geistMono, geistSans } from "@/app/layout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="px-30 my-30 flex gap-18">
      <Image
        className=""
        width={500}
        height={200}
        src="/img/empresario.jpg"
        alt={""}
      />
      <div className="flex w-2/5 flex-col space-y-8 py-4 text-xl">
        <p className="text-secondary">NUESTRA HISTORIA</p>
        <h2 className={`text-7xl text-primary ${geistMono.className}`}>
          Defensa Boutique, Cercanía Humana
        </h2>
        <p className='text-gray-600'>
          Somos una firma moderna con sede en Santiago de Chile, nacida de la
          necesidad de ofrecer un servicio legal que combine el rigor de las
          grandes firmas con la atención personalizada de un estudio boutique.{" "}
          <br />
          <br />
          En Valdés & Co., no somos solo sus abogados; somos sus socios
          estratégicos. Creemos que la transparencia y la comunicación directa
          son los pilares de un resultado exitoso. Nuestro equipo senior se
          involucra en cada etapa, garantizando que su caso reciba la
          profundidad analítica que merece.
        </p>
        <div className={`flex gap-10 my-10 ${geistMono.className}`}>
          <p className='text-4xl text-primary font-bold'>
            15+ <br />
            <span className={`text-xl font-light ${geistSans.className}`}>
              {" "}
              Años de Experiencia
            </span>
          </p>
          <p className='text-4xl text-primary font-bold'>
            98% <br />{" "}
            <span className={`text-xl font-light ${geistSans.className}`}> Casos de Éxitos</span>
          </p>
        </div>
      </div>
    </section>
  );
}
