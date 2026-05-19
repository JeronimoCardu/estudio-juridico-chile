import { geistMono } from "../app/layout";

export default function Hero() {
  return (
    <section className="hero bg-cover bg-center h-screen flex items-center justify-start">
      <div className="hero-content w-1/2 pl-30 text-white">
        <h1 className={`${geistMono.className} text-7xl font-bold mb-4`}>
          Excelencia Legal con Visión Humana
        </h1>
        <p className='text-xl'>
          En Valdés & Co. transformamos la complejidad jurídica en soluciones
          claras y personalizadas. Tu tranquilidad es nuestra prioridad.
        </p>
        <button className="btn mt-6 px-6 py-3 bg-secondary text-primary hover transition-colors hover:bg-amber-200 cursor-pointer duration-300">
          <a href="#contact">Contáctanos</a>
        </button>
      </div>
    </section>
  );
}
