export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" gap-4">
        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl">Saas - csv</h1>
          <h2 className="text-2xl">
            Proyecto de software como servicio para la gestión, visualización y
            almacenamiento de archivos csv
          </h2>
        </div>
        <div className="max-w-3xl mb-10">
          <h3 className="text-xl font-semibold">Objetivos</h3>
          <p>
            El objetivo principal de este proyecto es crear una aplicación web
            que permita a los usuarios cargar archivos csv, visualizarlos y
            almacenarlos en una base de datos siempre y cuando tengan una cuenta
            de usuario. En resumen, se busca crear una aplicación web que
            permita a los usuarios gestionar archivos csv de forma sencilla y
            segura.
          </p>
        </div>
        <div className="max-w-3xl mb-10">
<h3 className="text-xl font-semibold">Metas a lograr</h3>
        <ul className="list-decimal list-inside">
          <li>Creación de una página principal (home page)</li>
          <li>Creación de una página de inicio de sesión y registro </li>
          <li>Creación de una página de perfil de usuario (dashboard)</li>
          <li>Creación de una página de administrador</li>
          <li>Creación de una página para cargar archivos csv</li>
          <li>Creación de una página para visualizar archivos csv</li>
        </ul>
</div>
      </main>
    </div>
  );
}
