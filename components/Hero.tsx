import { geistMono } from "@/lib/fonts";

export default function Hero() {
  return (
    <section className="hero bg-cover bg-center min-h-screen flex items-center justify-start">
      <div className="w-full px-6 lg:pl-30 lg:w-1/2 text-white py-20 lg:py-0">
        <h1 className={`${geistMono.className} text-4xl sm:text-5xl lg:text-7xl font-bold mb-6`}>
          Excelencia Legal con Visión Humana
        </h1>
        <p className="text-base sm:text-lg lg:text-xl">
          En Valdés &amp; Co. transformamos la complejidad jurídica en soluciones
          claras y personalizadas. Tu tranquilidad es nuestra prioridad.
        </p>
        <button className="btn mt-8 px-6 py-3 bg-secondary text-primary hover transition-colors hover:bg-amber-200 cursor-pointer duration-300">
          <a href="#contact">Contáctanos</a>
        </button>
      </div>
    </section>
  );
}
