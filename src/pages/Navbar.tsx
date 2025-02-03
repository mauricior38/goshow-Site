import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";

import goShowLogo from "../assets/logoGoshow.webp";

import {
  Home,
  Building,
  Cog,
  Handshake,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-[1000] bg-opacity-80 ">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 p-3">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={goShowLogo} className="h-6 sm:h-8" alt="Goshow logo" />
        </a>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              // className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir o menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white mr-6 ">
            <DropdownMenuItem className="flex items-center w-[200px]">
              <a
                href="#"
                className=" flex gap-2 py-2 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                <Home className="h-5" />
                Inicio
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center w-[200px]">
              <a
                href="#company"
                className=" flex gap-2 py-2 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                <Building className="h-5" />
                Empresa
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center w-[200px]">
              <a
                href="#servicos"
                className=" flex gap-2 py-2 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                <Cog className="h-5" />
                Serviços
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center w-[200px]">
              <a
                href="#clientes"
                className=" flex gap-2 py-2 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                <Handshake className="h-5" />
                Clientes
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center w-[200px]">
              <a
                href="#contato"
                className=" flex gap-2 py-2 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                <Phone className="h-5" />
                Contato
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuGroup className="flex justify-center">
              <DropdownMenuItem>
                <a
                  href="https://www.instagram.com/goshow_transmissao/"
                  target="_blank"
                >
                  <Instagram size={25} className="hover:text-[#E1306C]" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="https://www.instagram.com/goshow_transmissao/"
                  target="_blank"
                >
                  <Facebook size={25} className="hover:text-[#405DE6]" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#company"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Empresa
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#clientes"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Clientes
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
