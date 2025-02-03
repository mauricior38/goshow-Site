import logoCanalRural from "../assets/clientes/logoCanalRural.png";
import logoCavaloCrioulo from "../assets/clientes/logoCavaloCrioulo.png";
import logoMangalarga from "../assets/clientes/logoMarchador.png";
import logoGirolando from "../assets/clientes/logoGirolando.png";
import logoLanceRural from "../assets/clientes/logoLanceRural.png";
import logoRadioSul from "../assets/clientes/logoRadioSul.png";
import logoAlRight from "../assets/clientes/logoAlRight.png";
import logoCanaldoCriador from "../assets/clientes/logoCanalDoCriador.png";

export default function Partners() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl" id="clientes">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight mt-10 text-center text-gray-900 dark:text-white md:text-4xl">
          Clientes
        </h2>
        {/* <p className="mb-4 text-base font-light text-center text-gray-500 md:text-xl sm:px-14 md:px-24 lg:px-56 xl:px-72">

        </p> */}

        <div className="mt-6 space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 xl:gap-8 md:space-y-0 md:mb-8 md:mt-12">
          <a className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
            <img src={logoCanalRural} alt="logoCanalRural" />
          </a>
          <a className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
            <img src={logoCavaloCrioulo} alt="logoCavaloCrioulo" />
          </a>
          <a className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
            <img src={logoMangalarga} alt="logoMangalarga" />
          </a>
          <a className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
            <img src={logoGirolando} alt="logoGirolando" />
          </a>
          <a className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
            <img src={logoLanceRural} alt="logoLanceRural" />
          </a>
          <a className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
            <img src={logoRadioSul} alt="logoRadioSul" />
          </a>
          <a className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
            <img src={logoAlRight} alt="logoAlRight" />
          </a>
          <a className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
            <img src={logoCanaldoCriador} alt="logoCanaldoCriador" />
          </a>
        </div>
      </div>
    </section>
  );
}
