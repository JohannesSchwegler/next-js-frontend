import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home/home.module.scss";

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles["tt-hero"]}>
          <div className="container mx-auto flex">
            <div class="flex-1 flex justify-center flex-col">
              <h1 className="text-2xl md:text-5xl font-bold text-dark mb-3 leading-tight">
                Manage your Profit <br />
                and feel future is real <br />
                with us.
              </h1>
              <p className="text-black mb-10">
                Good profit will make you have a grerat day with family <br />
                and it will be ease to help others.
              </p>

              <div class="flex">
                <button class="bg-primary-blue transition ease-in-out duration-500 hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2">
                  Get started
                </button>

                <button class="bg-secondary-blue text-white transition ease-in-out duration-500 hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Watch demo</span>
                </button>
              </div>
            </div>
            <div class="flex-1 ">
              <img className="w-50" src="/circle.svg" />
            </div>
          </div>
        </div>

        <div class="h-40vh flex items-center text-center bg-gray-50 ">
          <div className="w-full">
            <p className="uppercase text-gray-600">What do you think</p>
            <h1 className="text-4xl">
              Profit is the ignition
              <br />
              system of your economic engine
            </h1>
          </div>
        </div>

        {/*-----------------------------------------*/}
        <section className="bg-gray-50">
          <div class="container mx-auto  relative py-12 lg:pt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="relative">
              <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                We’ll handle the paperwork
              </h4>
              <p class="mt-3 text-lg leading-7 text-gray-500">
                Fill in your info in just a few minutes. As soon as that’s
                ready, we’ll get the rest done for you.
              </p>

              <ul class="mt-10">
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          class="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Establishing your business
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        All your documents will be prepared, e-filed in the
                        state of Delaware or Wyoming and we'll get your Employer
                        Identification Number (EIN).
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          class="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Opening your US bank account
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        You’ll have a US business bank account and a debit card
                        will be shipped to you.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          class="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Setting up your US address and phone number
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Your business will have a physical US address and phone
                        number. All calls will be forwarded to your local
                        number.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          class="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Ongoing accounting and legal support
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        If you ever have questions about your taxes or need any
                        legal support, our experienced lawyers and CPAs have
                        your answers.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0">
              <svg
                class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                ></rect>
              </svg>
              <img
                class="relative mx-auto"
                width="800"
                src="https://startglobal.co/img/laptop.svg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div class=" container mx-auto relative py-12 sm:pt-16 lg:pt-16">
            <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="lg:col-start-2">
                <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Keep your business growing
                </h4>
                <p class="mt-3 text-lg leading-7 text-gray-500">
                  Once your business is established, we offer long-term support
                  to make sure you have answers and access to everything you
                  need to keep growing.
                </p>

                <ul class="mt-10">
                  <li>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg
                            class="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">
                          Post setup care
                        </h5>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                          Our full service platform can help you with your post
                          incorporation setup, legalities, and hiring.
                          <strong class="block font-semibold text-blue-600">
                            Why get post setup care -&gt;
                          </strong>
                        </p>
                      </div>
                    </div>
                  </li>

                  <li class="mt-10">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg
                            class="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">
                          Tax preparation and filing
                        </h5>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                          Never miss a deadline or risk any mistakes. We’ll help
                          you prepare and file all your taxes and compliances.
                          <strong class="block font-semibold text-blue-600">
                            How we support your business -&gt;
                          </strong>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="mt-10">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg
                            class="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">
                          Our Extensive Partner Network
                        </h5>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                          Boost your business with our network of experts and
                          entrepreneurs that want you to succeed.
                          <strong class="block font-semibold text-blue-600">
                            Our partner benefits -&gt;
                          </strong>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        class="text-gray-200"
                        fill="currentColor"
                      ></rect>
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  ></rect>
                </svg>
                <img
                  class="relative mx-auto"
                  width="490"
                  src="https://startglobal.co/img/support.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
