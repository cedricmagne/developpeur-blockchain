import Image from "next/image";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="relative flex flex-col xl:flex-row bg-white">
      <div className="h-screen bg-left-col flex flex-col items-center justify-center xl:w-1/3 px-16 py-16 xl:px-16 xl:py-32 xl:fixed xl:justify-between xl:items-end xl:inset-0">
        <div className="flex flex-col items-center text-center xl:items-end xl:text-right">
          <div className="relative w-28 h-28 rounded-full overflow-hidden mb-12">
            <Image src="/images/avatar.jpg" layout="fill" alt="Cedric Magne" />
          </div>
          <h1 className="text-gray-400 font-normal tracking-wide leading-9 text-2xl">
            <span className="text-white">Développeur freelance</span> depuis 12
            ans.
            <br />
            J&apos;ai évolué sur différentes technologies
            <br />
            <span className="text-white">
              web, e-commerce, cloud et blockchain
            </span>
          </h1>
        </div>
        <div className="flex flex-col text-gray-300 text-xs justify-end items-end">
          <ul role="list" className="my-8 flex space-x-6 items-center">
            <li>
              <Link
                href="https://www.linkedin.com/in/developpeur-blockchain/"
                passHref
              >
                <a
                  className="text-gray-200 hover:text-gray-100"
                  target="_blank"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/smarttdev" passHref>
                <a
                  className="text-gray-200 hover:text-gray-100"
                  target="_blank"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/smartt_dev" passHref>
                <a
                  className="text-gray-200 hover:text-gray-100"
                  target="_blank"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </Link>
            </li>

            <li>
              <Link href="mailto:cedric@developpeurblockchain.com" passHref>
                <a
                  className="text-gray-200 hover:text-gray-100"
                  target="_blank"
                >
                  <span className="sr-only">Me contacter</span>
                  <MailIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </Link>
            </li>
          </ul>

          <p className="hidden xl:block text-right">
            &copy; {new Date().getFullYear()} Cédric Magne | Build with :{" "}
            <Link href="" passHref>
              <a>NextJs</a>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full xl:py-32">
        <div className="xl:w-1/3"></div>
        <div className="divide-y divide-gray-200 space-y-14 lg:max-w-4xl">
          <div className="text-base">
            <h2 className="leading-6 text-black font-semibold tracking-wide uppercase">
              Ma stack préférée
            </h2>
            <div className="max-w-7xl mx-auto">
              <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                  <div className="relative h-12 w-full filter grayscale">
                    <Image
                      className="filter grayscale-0"
                      src="/images/technos/solidity.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Solidity"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                  <div className="relative h-12 w-full filter grayscale">
                    <Image
                      src="/images/technos/nextjs.png"
                      layout="fill"
                      objectFit="contain"
                      alt="NextJs"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                  <div className="relative h-12 w-full filter grayscale">
                    <Image
                      src="/images/technos/typescript.png"
                      layout="fill"
                      objectFit="contain"
                      alt="TypeScript"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                  <div className="relative h-12 w-full filter grayscale">
                    <Image
                      src="/images/technos/tailwind.svg"
                      layout="fill"
                      objectFit="contain"
                      alt="TailwindCss"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                  <div className="relative h-12 w-full filter grayscale">
                    <Image
                      src="/images/technos/truffle.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Truffle"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                  <div className="relative h-14 w-full filter grayscale">
                    <Image
                      src="/images/technos/gcp.svg"
                      layout="fill"
                      objectFit="contain"
                      alt="Google Cloud Platform"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-lg text-gray-500">
              Après de longues années dans l&apos;e-commerce, je me suis
              intéressé à la Blockchain début 2019.
            </p>
            <p className="mt-8 text-lg text-gray-500">
              J&apos;ai suivi la formation Blockchain dispensée par Alyra pour
              acquérir de nouvelles compétences dans le développement de{" "}
              <strong>smart contracts</strong>, la compréhension de la{" "}
              <strong>DeFi (Finance Décentralisée)</strong> ou encore les{" "}
              <strong>NFT</strong>.
            </p>
            <p className="mt-8 text-lg text-gray-500">
              J&apos;ai donc une expérience sur{" "}
              <span className="font-semibold">
                Ethereum, Solidity et TypeScript.
              </span>
            </p>
            <p className="mt-8 text-lg text-gray-500">
              J&apos;évolue sur des projets variés comme les marketplaces de{" "}
              <span className="font-semibold">
                NFT ou des projets dans la DeFi (Finance Décentralisée).
              </span>
            </p>
            <p className="mt-8 text-lg text-gray-500">
              Mon parcours de développeur a commencé il y a plus de 12 ans sur
              des projets e-commerce sous Magento de plus de 30 marques retail
              ou pure player. Parmi lesquelles Le Tanneur, Karl Lagerfeld,
              Boucheron, Pernod Ricard, Jonak, Coriolis, Kerastase, The Kooples,
              Wonderbox ou encore Jimmy Fairly.
            </p>
            <p className="mt-8 text-lg text-gray-500">
              Du poste de développeur à CTO j&apos;ai aussi acquis des
              compétences sur les architectures Cloud. Ma stack préférée :{" "}
              <span className="font-semibold">
                TypeScript, NextJs, Tailwindcss, Web3.js / Ethers.js, Truffle /
                Hardhat, Google Cloud
              </span>
            </p>
            <Link href="/#contact" passHref>
              <a className="inline-block mt-12 border border-gray-600 rounded-lg px-6 py-2 hover:bg-black hover:text-white">
                Contactez-moi
              </a>
            </Link>
          </div>
          <div className="text-base">
            <h2 className="my-14 leading-6 text-black font-semibold tracking-wide uppercase">
              Mes collaborations
            </h2>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0"
            >
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/atlanticus.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="Atlanticus"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>Lead Dev Full Stack - NFT Marketplace</h3>
                      <p className="text-gray-600">
                        TypesScript - NextJs - Solidity - GCP
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/jimmyfairly.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="Jimmy Fairly"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>CTO - Lead dev Full Stack</h3>
                      <p className="text-gray-600">ReactJS - Python - GCP</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/wonderbox.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="Wonderbox"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>Lead Dev Backend</h3>
                      <p className="text-gray-600">
                        Magento - Php - Javascript
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/thekooples.jpg"
                      layout="fill"
                      objectFit="cover"
                      alt="The Kooples"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>Lead Dev Backend</h3>
                      <p className="text-gray-600">Php - Magento</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/jonak.webp"
                      layout="fill"
                      objectFit="cover"
                      alt="Jonak"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>Lead Dev Full Stack</h3>
                      <p className="text-gray-600">
                        Javascript - Php - Magento
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/boucheron.webp"
                      layout="fill"
                      objectFit="cover"
                      alt="Boucheron"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>Lead Dev Backend</h3>
                      <p className="text-gray-600">Php - Magento</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/coriolis.webp"
                      layout="fill"
                      objectFit="cover"
                      alt="Pernod Ricard"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>Lead Dev Backend</h3>
                      <p className="text-gray-600">Php - Magento</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/pernodricard.webp"
                      layout="fill"
                      objectFit="cover"
                      alt="Pernod Ricard"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>Dev Backend</h3>
                      <p className="text-gray-600">Php - Magento</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <div className="relative aspect-w-3 aspect-h-2 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      className="works"
                      src="/images/works/karllagerfeld.webp"
                      layout="fill"
                      objectFit="cover"
                      alt="Karl Lagerfeld"
                    />
                  </div>

                  <div className="">
                    <div className="text-sm leading-6 font-medium">
                      <h3>Dev Backend</h3>
                      <p className="text-gray-600">Php - Magento</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div id="contact" className="text-base">
            <h2 className="my-14 leading-6 text-black font-semibold tracking-wide uppercase">
              Me Contacter
            </h2>
            <p className="mt-6 text-lg text-gray-500 max-w-3xl">
              Pour tout type de <strong>projet blockchain</strong> (EVM
              compatible), marketplace de NFT ou projet Defi vous pouvez me
              contacter :
            </p>
            <dl className="mt-8 text-lg text-gray-500 space-y-6">
              <dt>
                <span className="sr-only">Téléphone</span>
              </dt>
              <dd className="flex items-center text-lg">
                <PhoneIcon
                  className="flex-shrink-0 w-6 h-6"
                  aria-hidden="true"
                />
                <span className="ml-3">+33 (0) 634449758</span>
              </dd>
              <dt>
                <span className="sr-only">Email</span>
              </dt>
              <dd className="text-lg text-gray-500">
                <Link href="mailto:cedric@developpeurblockchain.com" passHref>
                  <a
                    className="flex items-center text-gray-500 hover:text-gray-700"
                    target="_blank"
                  >
                    <span className="sr-only">Me contacter</span>
                    <MailIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="ml-3">
                      cedric[at]developpeurblockchain.com
                    </span>
                  </a>
                </Link>
              </dd>
            </dl>
            <ul role="list" className="mt-8 flex space-x-12">
              <li>
                <Link
                  href="https://www.linkedin.com/in/developpeur-blockchain/"
                  passHref
                >
                  <a
                    className="text-gray-500 hover:text-gray-100"
                    target="_blank"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/smarttdev" passHref>
                  <a
                    className="text-gray-500 hover:text-gray-100"
                    target="_blank"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/smartt_dev" passHref>
                  <a
                    className="text-gray-500 hover:text-gray-100"
                    target="_blank"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
