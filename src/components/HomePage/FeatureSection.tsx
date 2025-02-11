import { ChartNoAxesCombinedIcon, Share2Icon, SparkleIcon, CloudyIcon} from "lucide-react";

function FeatureSection() {
  return (
    <section>
    <h2 className="text-4xl font-medium">Características</h2>
    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <li className="flex items-start gap-4">
        <ChartNoAxesCombinedIcon className="h-8 w-8 text-blue-500" />
        <div>
          <h3 className="text-xl font-medium">Visualiza archivos CSV</h3>
          <p>Visualiza archivos CSV de manera sencilla.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <SparkleIcon className="h-8 w-8 text-blue-500" />
        <div>
          <h3 className="text-xl font-medium">Analiza los datos</h3>
          <p>Analiza los datos de tus archivos CSV.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <Share2Icon className="h-8 w-8 text-blue-500" />
        <div>
          <h3 className="text-xl font-medium">Comparte archivos CSV</h3>
          <p>Comparte tus archivos CSV con otras personas.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <CloudyIcon className="h-8 w-8 text-blue-500" />
        <div>
          <h3 className="text-xl font-medium">Guarda en la nube</h3>
          <p>Guarda tus archivos CSV en la nube.</p>
        </div>
      </li>
    </ul>
  </section>
  )
}

export default FeatureSection