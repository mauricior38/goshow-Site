import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white">
      <div
        className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply py-16 px-4 mx-auto max-w-screen text-center lg:py-16 lg:px-12 md:shadow-xl"
        id="contato"
      >
        <div className="px-4 lg:pt-24 py-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Contact Us
          </h2>
          <p className="mb-16 font-light text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
      </div>
      <div className="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
        <form
          action="#"
          className="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2"
        >
          <div>
            <label
              //   for="first-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light"
              placeholder="Bonnie"
              required
            />
          </div>
          <div>
            <label
              //   for="last-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light"
              placeholder="Green"
              required
            />
          </div>
          <div>
            <label
              //   for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              //   for="phone-number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phone-number"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light"
              placeholder="+12 345 6789"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              //   for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              //   rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-zinc-500 focus:border-zinc-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500"
              placeholder="Leave a comment..."
            ></textarea>
            <p className="mt-4 text-sm text-gray-500">
              By submitting this form you agree to our{" "}
              <a href="#" className="text-zinc-600 hover:underline">
                terms and conditions
              </a>{" "}
              and our{" "}
              <a href="#" className="text-zinc-600 hover:underline">
                privacy policy
              </a>{" "}
              which explains how we may collect, use and disclose your personal
              information including to third parties.
            </p>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-red-500 rounded-lg bg-blue-700 sm:w-fit hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
          >
            Send message
          </button>
        </form>

        <div className="space-y-8 sm:text-start text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 sm:px-20">
          <div>
            <p className="mb-2 text-xl font-bold dark:text-white">
              Redes Sociais:
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Siga nossas redes e fique por dentro de todos os nossos serviços.
            </p>

            <div className="flex sm:flex-col  gap-2 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/goshow_transmissao/"
                target="_blank"
                className="font-semibold text-zinc-600 hover:underline flex items-center gap-2"
              >
                <Instagram size={15} />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100075774351621"
                target="_blank"
                className="font-semibold text-zinc-600 hover:underline flex items-center gap-2"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.linkedin.com/company/goshow-tech/"
                className="font-semibold text-zinc-600 hover:underline flex items-center gap-2"
              >
                <Linkedin size={20} />
                <span>Linkedin</span>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xl font-bold dark:text-white">
              Nossos telefones:
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Faça contato agora memso com nosso time.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="tel:+5511995178338"
                className="font-semibold text-zinc-600 flex gap-2 items-center"
              >
                <Phone size={15} />
                <span>São Paulo: ( 11 ) 99517 - 8338</span>
              </a>

              <a
                href="tel:+5555996010912"
                className="font-semibold text-zinc-600 flex gap-2 items-center"
              >
                <Phone size={15} />
                <span>Rio Grande do Sul: ( 55 ) 99601 - 0912</span>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xl font-bold dark:text-white">Email:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Entre em contato através de nosso email.
            </p>
            <a
              href="mailto:contato@goshow.com.br"
              className="font-semibold text-zinc-600 hover:underline"
            >
              contato@goshow.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
