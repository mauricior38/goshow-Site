import { Badge } from "../components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import canalRural from "../assets/portifolio/canalrural.webp";
import canalDoCriador from "../assets/portifolio/canalDoCriador.webp";
import lanceRural from "../assets/portifolio/lanceRural.webp";
import cavaloCrioulo from "../assets/portifolio/cavaloCrioulo.webp";
import cavaloCriouloPlaca from "../assets/portifolio/cavaloCriouloPlaca.webp";
import mangalargaMarchador from "../assets/portifolio/mangalargaMarchador.webp";
import girolando from "../assets/portifolio/girolando.webp";
import radioSul from "../assets/portifolio/radioSUl.webp";

export default function Portifolio() {
  return (
    <section className="bg-zinc-900  antialiased" id="clientes">
      <div className="max-w-screen-xl px-4 py-20 sm:p-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto sm:mx-0 text-left border-l-8 border-red-400 px-10">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-200 sm:text-4xl">
            Confira nossos principais projetos
          </h1>
          <h2 className="mt-4 text-base font-normal text-zinc-400 sm:text-md hidden sm:contents">
            Através de nossos parceiros, planejamos e atingimos objetivos,
            visando uma parceria de longa e duradoura.
          </h2>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16">
          <div className="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
            <div>
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={canalRural}
                      className="relative rounded-lg h-[250px] w-[600px] object-cover "
                      alt="Imagem Canal Rural"
                    />
                  </CarouselItem>

                  <CarouselItem>
                    <img
                      src={canalDoCriador}
                      className="relative rounded-lg h-[250px] w-[600px] object-cover "
                      alt="Imagem Canal do Criador"
                    />
                  </CarouselItem>

                  <CarouselItem>
                    <img
                      src={lanceRural}
                      className="relative rounded-lg h-[250px] w-[600px] object-cover "
                      alt="Imagem Lance Rural"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>

            <div className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold leading-tight text-zinc-200">
                  Canal Rural
                </h1>
                <a
                  href="https://canalrural.com.br"
                  title=""
                  target="_blank"
                  className="inline-flex items-center text-lg font-medium text-zinc-300 hover:underline"
                >
                  https://www.canalrural.com.br
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
                <p className="text-base font-normal text-zinc-300 sm:text-lg dark:text-gray-400">
                  Com uma parceria de de 15 anos e mais de 600 transmissões
                  realizados juntos, o Canal Rural sendo detendora também do
                  Canal do Criador e aplicativo Lance Rural, mantem uma parceria
                  longa e duradoura.
                </p>

                <div className="flex gap-2">
                  <Badge className="text-sm" variant={"live"}>
                    Transmissão ao vivo
                  </Badge>

                  <Badge className="text-sm" variant={"consultand"}>
                    Consultoria
                  </Badge>

                  <Badge className="text-sm" variant={"designer"}>
                    DSNG
                  </Badge>

                  <Badge className="text-sm" variant={"dev"}>
                    Web/App develop
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-center lg:flex-row-reverse flex-row-reverse gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
            <article>
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={cavaloCrioulo}
                      className="relative rounded-lg h-[250px] w-[600px] object-cover "
                      alt="Imagem Canal Rural"
                    />
                  </CarouselItem>

                  <CarouselItem>
                    <img
                      src={cavaloCriouloPlaca}
                      className="relative rounded-lg h-[250px] w-[600px] object-cover "
                      alt="Imagem Canal do Criador"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </article>

            <article className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold leading-tight text-zinc-200">
                  Caval Crioulo
                </h1>
                <a
                  href="https://canalrural.com.br"
                  title=""
                  target="_blank"
                  className="inline-flex items-center text-lg font-medium text-zinc-300 hover:underline"
                >
                  https://www.cavalocrioulo.org.br
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
                <p className="text-base font-normal text-zinc-300 sm:text-md">
                  Cavalo Crioulo conta com uma parceria de mais de 10 anos,
                  somos responsáveis pelas transmissões das principais provas
                  equestres da raça além de todos os demais eventos que somam-se
                  em média 50 por ano. Além de serviços de transmissão, contam
                  também com nossas soluções de produções em núvem e demais
                  ferramentas que possuímos. Com essa parceria de longa data, o
                  seu canal no youtube atingiu a marca de mais 100 mil
                  inscritos, o qual somos muitos honrados em fazer parte desta
                  história.
                </p>
              </div>

              <div className="flex gap-2">
                <Badge className="text-sm" variant={"live"}>
                  Transmissão ao vivo
                </Badge>

                <Badge className="text-sm" variant={"consultand"}>
                  Consultoria
                </Badge>

                <Badge className="text-sm" variant={"designer"}>
                  Grafísmo
                </Badge>

                <Badge className="text-sm" variant={"dev"}>
                  Web/App develop
                </Badge>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-12 sm:gap-8 lg:gap-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            <article>
              <img
                className="object-cover w-full rounded-lg shadow-lg mb-6 "
                src={mangalargaMarchador}
                alt="Imagem poster Mangalarga Marchador"
              />

              <div className="space-y-3 mb-6">
                <span className="inline-flex items-center gap-2 px-2.5 py-0.5">
                  <Badge variant="live">Transmissão ao vivo</Badge>
                  <Badge variant="designer">Grafísmo</Badge>
                  <Badge variant="dev">Web Develop</Badge>
                </span>
                <h3 className="text-3xl font-bold leading-tight text-zinc-200 ">
                  Associação Mangalarga Marchador
                </h3>
                <p className="text-md font-normal text-zinc-300">
                  Por mais de 10 anos, somos os responsáveis pelas transmissões
                  das provas Nacionais do Mangalarga Marchador. As transmissões
                  contam com uma audiência de mais de 1 milhão de visualizações
                  ao longo do evento que duram mais de 15hrs por dia.
                </p>
              </div>
            </article>

            <article>
              <img
                className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
                src={girolando}
                alt="Imagem poster Mega Leite 2024"
              />
              <div className="space-y-3 mb-6">
                <span className="text-indigo-800 text-xs font-medium inline-flex items-center gap-2 px-2.5 py-0.5">
                  <Badge variant="live">Transmissão ao vivo</Badge>
                  <Badge variant="designer">Grafísmo</Badge>
                </span>
                <h3 className="text-2xl font-bold leading-tight text-zinc-200 ">
                  MegaLeite 2024
                </h3>
                <p className="text-md font-normal text-zinc-300">
                  Em parceria com o Girolando, fomos responsáveis pela
                  transmissão da mega leite do ano de 2024. O inicio de uma
                  parceria que temos certeza que irá durar por longos anos.
                </p>
              </div>
            </article>

            <article>
              <img
                className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
                src={radioSul}
                alt="Imagem Radio Sul"
              />
              <div className="space-y-3 mb-6">
                <span className="text-indigo-800 text-xs font-medium inline-flex items-center gap-2 px-2.5 py-0.5">
                  <Badge variant="live">Transmissão ao vivo</Badge>
                  <Badge variant="consultand">consultoria</Badge>
                  <Badge variant="designer">Grafismo</Badge>
                </span>
                <h3 className="text-2xl font-bold leading-tight text-zinc-200 ">
                  <a href="#" className="hover:underline">
                    Radio Sul
                  </a>
                </h3>
                <p className="text-md font-normal text-zinc-300">
                  Diversos projetos são atendido com transmissões em diversos
                  locais do Brasil contando com uma estrutura de ponta, como
                  captação de imagens, replays, estúdios, internet bonding e
                  muito mais.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
