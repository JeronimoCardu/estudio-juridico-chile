import { geistMono, geistSans } from "@/lib/fonts";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="px-6 lg:px-30 my-16 lg:my-30 flex flex-col lg:flex-row gap-10 lg:gap-18">
      <Image
        className="w-full lg:w-auto object-cover rounded-sm"
        width={500}
        height={400}
        src="/img/empresario.jpg"
        alt="Socio del estudio jurídico Valdés & Co."
      />
      <div className="flex w-full lg:w-2/5 flex-col space-y-6 lg:space-y-8 py-4 text-xl">
        <p className="text-secondary text-sm tracking-widest uppercase">Nuestra Historia</p>
        <h2 className={`text-4xl sm:text-5xl lg:text-7xl text-primary ${geistMono.className}`}>
          Defensa Boutique, Cercanía Humana
        </h2>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
          Somos una firma moderna con sede en Santiago de Chile, nacida de la
          necesidad de ofrecer un servicio legal que combine el rigor de las
          grandes firmas con la atención personalizada de un estudio boutique.
          <br />
          <br />
          En Valdés &amp; Co., no somos solo sus abogados; somos sus socios
          estratégicos. Creemos que la transparencia y la comunicación directa
          son los pilares de un resultado exitoso. Nuestro equipo senior se
          involucra en cada etapa, garantizando que su caso reciba la
          profundidad analítica que merece.
        </p>
        <div className={`flex gap-10 pt-4 ${geistMono.className}`}>
          <p className="text-3xl lg:text-4xl text-primary font-bold">
            15+{" "}
            <br />
            <span className={`text-lg lg:text-xl font-light ${geistSans.className}`}>
              Años de Experiencia
            </span>
          </p>
          <p className="text-3xl lg:text-4xl text-primary font-bold">
            98%{" "}
            <br />
            <span className={`text-lg lg:text-xl font-light ${geistSans.className}`}>
              Casos de Éxito
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
