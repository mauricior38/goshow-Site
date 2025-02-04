import {
  ChevronsLeftRightEllipsis,
  FileJson2,
  FolderKanban,
  MonitorPlay,
  SatelliteDish,
  Video,
} from "lucide-react";

export default function Products() {
  return (
    <section className="bg-white border-t-4 border-red-500" id="servicos">
      <div className="py-20 sm:p-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h1 className="mb-2 text-4xl tracking-tight font-extrabold text-zinc-900">
          Nossos serviços
        </h1>
        <p className="text-zinc-600 sm:text-lg">
          Confira nossos serviços que melhor se encaixa em seu projeto.
        </p>
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <SatelliteDish size={50} className="mx-auto mb-2 text-zinc-900" />
            <h3 className="mb-2 text-xl font-bold">DSNG</h3>
            <p className="mb-4 text-zinc-600 text-left">
              Transmissão de programas via satélite de qualquer lugar do Brasil,
              com equipe especializada e unidades móveis equipadas.
            </p>
          </div>

          <div>
            <Video size={50} className="mx-auto mb-2 text-zinc-900" />
            <h3 className="mb-2 text-xl font-bold">Captação de imagem</h3>
            <p className="mb-4 text-zinc-600 text-left">
              Captamos as imagens do seu evento com os equipamentos mais
              modernos do mercado. Contamos com câmeras de última geração,
              gerador de caracteres, replays e muito mais.
            </p>
          </div>

          <div>
            <ChevronsLeftRightEllipsis
              size={50}
              className="mx-auto mb-2 text-zinc-900"
            />
            <h3 className="mb-2 text-xl font-bold">Internet bonding</h3>
            <p className="mb-4 text-zinc-600 text-left">
              Contamos com equipamentos de bonding de internet, no qual mais de
              um link de internet é ligado e somando as mesmas para uma
              transmissão mais estável e segura.
            </p>
          </div>

          <div>
            <FileJson2 size={50} className="mx-auto mb-2 text-zinc-900" />
            <h3 className="mb-2 text-xl font-bold">
              Desenvolvimento de aplicativos
            </h3>
            <p className="mb-4 text-zinc-600 text-left">
              Projetamos, desenvolvemos e monitoramos o aplicativo para o seu
              projeto. Vai desde desenvolvimento web, plataformas de stream e
              muito mais.
            </p>
          </div>

          <div>
            <MonitorPlay size={50} className="mx-auto mb-2 text-zinc-900" />
            <h3 className="mb-2 text-xl font-bold">Projetos gráficos</h3>
            <p className="mb-4 text-zinc-600 text-left">
              Desenvolvimento de templates e grafismo para a sua transmissão,
              site ou aplicativo. Contamos com um time de animadores e designers
              para atender diversas demandas.
            </p>
          </div>

          <div>
            <FolderKanban size={50} className="mx-auto mb-2 text-zinc-900" />
            <h3 className="mb-2 text-xl font-bold">Consultoria</h3>
            <p className="mb-4 text-zinc-600 text-left">
              Prestamos consultoria para diversos tipos de projetos, eventos.
              Estamos sempre pronto para um novo desafio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
