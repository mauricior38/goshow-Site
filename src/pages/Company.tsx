import {
  Eye,
  Handshake,
  Target,
} from "lucide-react";

export default function Company() {
  return (
    <section className="bg-white z-auto">
      <div className="items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6" id="company">
        <div className="col-span-2 items-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 mb-10 pt-20 sm:pt-2">
          <div className="flex flex-col items-center sm:items-start">
            <Target size={50} />
            <h3 className="mb-2 mt-2 text-2xl font-bold">Missão</h3>
            <p className="font-light text-gray-500">
              Oferecer soluções de transmissão ao vivo de alta qualidade, com
              excelência e inovação, atendendo de forma personalizada às
              necessidades de cada cliente em todos os segmentos de mídia.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <Eye size={50} />
            <h3 className="mb-2 mt-2 text-2xl font-bold">Visão</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Ser a principal referência em soluções de transmissão ao vivo no
              Brasil, reconhecida pela qualidade, inovação e agilidade no
              atendimento até 2030.
            </p>
          </div>

          <div className=" col-span-2 flex flex-col items-center sm:items-start">
            <Handshake size={50} />
            <h3 className="mb-2 mt-2  text-2xl font-bold">Valores</h3>
            <p className="font-light mt-2  text-gray-500">
              Ser reconhecida como a líder em soluções de transmissão ao vivo no
              Brasil, destacando-se pela excelência, inovação e eficiência no
              atendimento até 2030.
            </p>
          </div>
        </div>

        <div className="col-span-2 mb-8">
          
          <h2 className="mt-3 mb-4 text-3xl tracking-tight font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            São mais de <span className="text-5xl text-red-600">500</span> transmissões por ano
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Realizamos mais de 500 transmissões por ano em todo o Brasil,
            oferecendo soluções de alta tecnologia e segurança operacional. Com
            excelência e agilidade, garante a qualidade em cada evento,
            atendendo diversos clientes de forma personalizada.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-red-700">
            <div>
              <a
                href="#servicos"
                className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
              >
                Conheça mais alguns de nossos serviços
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
