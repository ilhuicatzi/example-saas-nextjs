import { Button } from "@/components/ui/button";
import { ChartExample } from "@/components/common/ChartExample";

function HeroSection() {
  return (
    <section id="hero" className="flex">
        <article className="max-w-3xl p-8 rounded-lg">
          <h1 className="text-5xl font-medium mb-10">
            Visualiza, Analiza y Comparte
          </h1>
          <p className="text-xl">
            MyViewCSV es una aplicación web que te permite visualizar, analizar
            y compartir archivos CSV de manera sencilla.
          </p>
          <p className="mt-8 text-xl">
            Guarda tus archivos CSV en la nube y accede a ellos desde cualquier dispositivo.
          </p>
          <div className="mt-8 flex justify-start items-center gap-3">
            <Button>Cargar CSV</Button>
            <Button variant="secondary" className="ml-4">
              Ver Demo
            </Button>
          </div>
        </article>
        <article>
          <ChartExample />
        </article>
      </section>
  )
}

export default HeroSection