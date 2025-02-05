import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

import { Marquee } from "../components/ui/marquee";

import Autoplay from "embla-carousel-autoplay";

import slider01 from "../assets/slider01.webp";
import slider02 from "../assets/slider02.webp";
import slider03 from "../assets/slider03.webp";

export default function Hero() {
  return (
    <section className="bg-zinc-900 dark:bg-gray-900 antialiased bg-[url('https://www.boxcast.com/hubfs/Blog%20Images/B188%20-%20Automation/BlogImage-B188_Automation.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
      <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <h1 className="text-3xl font-extrabold leading-none tracking-tight text-zinc-200 sm:text-5xl">
                <span className="sm:text-6xl text-red-600"> Referência </span>{" "}
                no mercado de transmissões
              </h1>
              <h2 className="mt-5 text-base font-normal text-zinc-400 md:max-w-3xl sm:text-md">
                Com 15 anos de experiência, a nossa especializada em
                transmissões ao vivo e desenvolvimento de soluções digitais.
                Oferecemos inovação e qualidade em cada projeto sendo
                reconhecida por sua expertise e entregas de alta qualidade.
              </h2>
            </div>

            <div className="mt-4 sm:border-t sm:border-zinc-400 sm:mt-6 sm:pt-6">
              <p className="hidden text-base font-medium text-zinc-300 sm:block">
                Marcas que utilizamos:
              </p>

              <div className="flex items-center mt-3 w-full bg-white rounded-lg hidden sm:block">
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://www.pngkey.com/png/full/124-1246301_blackmagic-design-logo-blackmagic-design-logo-transparent.png"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://www.vmix.com/images/2017/logos/web/vmix-logo/vMix-Logo-Black.jpg"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Starlink_Logo.svg/2560px-Starlink_Logo.svg.png"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://seeklogo.com/images/S/sony-logo-9A5581F3B3-seeklogo.com.png"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://logowik.com/content/uploads/images/fujifilm3789.jpg"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://www.clearcom.com/Portals/_default/Skins/Clear-Com/images/clear-com-logo.jpg"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://i1.adis.ws/i/canon/canon-press-centre-canon-logo_301414581785538?w=550&qlt=100"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2Cy3rA1Q9ik22dNyrbmPPDINNy3ur-Pn9Q&s"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://d1p6nzzdute2g.cloudfront.net/lojas/loja-1713/ea53467b-3dfe-4010-b704-8845ccb3fbb7"
                    alt=""
                  />

                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://nexprovideo.com/resources/FORA-logo-white-bg-resized.jpg.opt338x143o0%2C0s338x143.jpg"
                    alt=""
                  />
                </Marquee>
              </div>
            </div>
          </div>

          {/* <!-- Carousel wrapper --> */}
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <img
                  src={slider01}
                  className="relative rounded-lg h-[350px] w-[700px] object-cover "
                  alt=""
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  src={slider02}
                  className="relative rounded-lg h-[350px] w-[700px] object-cover "
                  alt=""
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  src={slider03}
                  className="relative rounded-lg h-[350px] w-[700px] object-cover "
                  alt=""
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
