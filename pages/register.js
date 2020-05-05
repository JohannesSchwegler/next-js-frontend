import Link from "next/link";

import Layout from "../components/layout";

export default function Register() {
  return (
    <div className="h-full flex bg-gray-50 ">
      <div className="w-full md:w-45/100 bg-primary-blue">
        <div class="mt-64 px-20">
          <h1 className="text-4xl text-white font-bold leading-tight">
            Few clicks away <br />
            from creating your <br />
            Company.
          </h1>

          <p className="mt-10 text-white">
            <span>
              Start your company in minutes. <br />
            </span>
            <span>Save time and money.</span>
          </p>
        </div>
      </div>
      <div className="w-full md:w-55/100 pl-20">
        <h1 className="mt-64 text-4xl text-black font-bold leading-tight">
          Choose the type of user
        </h1>
        <p className="mt-10 text-black">
          To get started tell us what type of company you are <br />
          going to incorporate, LLC or Corportation.
        </p>
        <nav class="flex flex-col">
          <button class="mt-10 w-2/4 p-10 bg-white hover:bg-gray-400 text-gray-800 font-bold  rounded inline-flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <div class="ml-5 flex flex-col text-left">
              <h1 className="font-bold text-black text-1xl">User</h1>
              <h1 className="font-regular text-black text-1xl">
                Owned by private person
              </h1>
            </div>
          </button>
          <Link href="/">
            <a>
              <button class="mt-10 w-2/4 p-10 bg-white hover:bg-gray-400 text-gray-800 font-bold  rounded inline-flex items-center">
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <div class="ml-5 flex flex-col text-left">
                  <h1 className="font-bold text-black text-1xl">Business</h1>
                  <h1 className="font-regular text-black text-1xl">
                    Owned by business
                  </h1>
                </div>
              </button>
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
