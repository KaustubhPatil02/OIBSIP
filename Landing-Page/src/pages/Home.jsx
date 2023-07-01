import React from "react";
import Contact from "../components/Contact";
import logo from "../assets/fact.svg";


function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <div className=" container mx-auto overflow-hidden">
        <div className="relative z-20 flex items-center justify-between bg-transparent px-4 py-5">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="mr-14 w-auto ">
                <a
                  className="text-2xl font-bold leading-none flex items-center"
                  href="/"
                >
                  <div className=" lg:block flex-1">
                    <img alt="grobbiz-logo" className=" w-36 p-4" src={logo} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="hidden w-auto lg:block">
              <ul className="mr-16 flex items-center text-lg font-semibold">
                <li className="mr-9 font-medium hover:text-sky-500">
                  <a href="#features">Services</a>
                </li>
                <li className="mr-9 font-medium hover:text-sky-500">
                  <a href="#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Hero section */}
      <section className="px-5 md:px-10 bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-0 mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-5xl dark:text-white">
              COMPANY NAME- Your Company Tagline
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tenetur fugit eum eaque quisquam ipsam deleniti, ratione dolores neque dicta voluptatum. Nobis aliquam, esse possimus quaerat molestias nihil quisquam facere tempore corrupti officiis expedita veniam sapiente accusantium natus voluptates corporis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sit. Nostrum, consequatur velit quaerat ducimus cumque provident aspernatur, delectus beatae quo veniam nulla eum aliquid. Eveniet vel non sunt culpa praesentium ut iusto voluptate odio! Natus exercitationem itaque sequi alias!
            </p>        
          </div>
        </div>
      </section>
      {/* Social Proof  */}
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                developers
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                contributors
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                organizations
              </dd>
            </div>
          </dl>
        </div>
      </section>
      {/* Feature section */}
      <section
        id="features"
        className="px-5 md:px-10 bg-white dark:bg-gray-900"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam ipsam eligendi voluptate debitis tempore eveniet mollitia numquam. Fugiat laboriosam, totam quod esse veniam autem accusamus blanditiis inventore! Voluptatum, esse!
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum recusandae dignissimos ipsum quis laudantium atque suscipit enim modi nostrum expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime ducimus asperiores fuga, perferendis ea minus officia cumque dolorem eos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, unde! Ad aliquam doloremque autem cupiditate ex nisi hic. Dignissimos unde numquam odit esse incidunt vitae in ipsam distinctio, voluptatem, rem a similique voluptatum aspernatur nam! Quas perferendis reiciendis fugiat sapiente.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
                <svg
                  className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Website design and development
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, accusamus. Natus amet doloribus inventore accusamus adipisci necessitatibus earum deleniti repellat.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
                <svg
                  className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">SEO</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, eveniet deserunt illo provident obcaecati quisquam quibusdam ratione consequatur expedita harum.
              </p>
            </div>
            <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
                <svg
                  className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                  
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Google My Bussiness
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum itaque aperiam mollitia saepe repellendus ducimus minima, error quos perspiciatis ab.
                </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
                <svg
                  className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Finance
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sed maxime perspiciatis ut veritatis magnam a laboriosam ipsa impedit culpa.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
                <svg
                  className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Enterprise Design
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quas libero ipsa ipsam, beatae maiores perferendis! Tenetur excepturi rem ab?
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12 dark:bg-sky-900">
                <svg
                  className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6 dark:text-sky-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Operations
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid qui eligendi fuga et expedita perspiciatis similique ratione excepturi ut?
              </p> 
            </div>
          </div> 
        </div>
      </section>
      {/* Contact us */}
      <Contact />
      {/* Footer section */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                 <div
              className=" lg:block flex-1"
              onClick={() => {
                window.location.href = "/#";
              }}
            >
              <img alt="grobbiz-logo" className=" w-36 p-4" src={logo} />
            </div>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 companyName —
            <a
              href="mailto: grobbiz.services@gmail.com"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              lorem.services@gmail.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
