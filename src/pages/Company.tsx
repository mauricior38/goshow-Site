import { Eye, Handshake, Target } from "lucide-react";

export default function Company() {
  return (
    <section className="bg-white z-auto border-t-4 border-red-500">
      <div
        className="items-center py-20 sm:p-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6"
        id="company"
      >
        <div className="col-span-4 border-l-8 border-red-500 pl-6">
          <h1 className="mt-3 mb-4 text-3xl tracking-tight font-extrabold tracking-tight text-gray-900 md:text-4xl sm:w-[650px]">
            São mais de <span className="text-5xl text-red-600">500</span>{" "}
            transmissões por ano e <span className="text-5xl text-red-600">15 anos</span> de experiência.
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Estamos a mais de 15 anos no mercado de captação, gravação e
            transmissão ao vivo. Neste tempo acompanhamos a evolução da
            tecnologia e oferecemos sempre aos nossos clientes o que melhor
            existe no mercado. Sempre de com uma visão para o futuro, nos
            transformamos além de uma empresa de captação e transmissão, também
            uma empresa de desenvolvimento, onde assim conseguimos atender
            nossos clientes e parceiros em todas as pontas que a tecnologia de
            vídeo exite, garantindo sempre a segurança da operação.
          </p>
        </div>

        <div className="col-span-4 items-center space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0 ">
          <div className="flex flex-col items-center sm:items-start">
            <Target size={50} />
            <h2 className="mb-2 mt-2 text-2xl font-bold">Missão</h2>
            <p className="font-light text-gray-500">
              Oferecer soluções de transmissão ao vivo de alta qualidade, com
              excelência e inovação, atendendo de forma personalizada às
              necessidades de cada cliente em todos os segmentos de mídia.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <Eye size={50} />
            <h2 className="mb-2 mt-2 text-2xl font-bold">Visão</h2>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Ser a principal referência em soluções de transmissão ao vivo no
              Brasil, reconhecida pela qualidade, inovação e agilidade no
              atendimento até 2030.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <Handshake size={50} />
            <h2 className="mb-2 mt-2  text-2xl font-bold">Valores</h2>
            <p className="font-light mt-2  text-gray-500">
              Ser reconhecida como a líder em soluções de transmissão ao vivo no
              Brasil, destacando-se pela excelência, inovação e eficiência no
              atendimento até 2030.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
