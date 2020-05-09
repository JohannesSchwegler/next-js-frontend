import Link from "next/link";

export default function StepOne({ currentStep, upgradeCurrentStep }) {
  if (currentStep !== 1) {
    return null;
  }
  return (
    <>
      <h1
        data-aos="fade-up"
        className="mt-32 text-4xl text-black font-bold leading-tight"
      >
        Choose the type of user
      </h1>
      <p className="mt-10 text-black">
        To get started tell us what type of company you are <br />
        going to incorporate, LLC or Corportation.
      </p>

      <nav class="flex flex-col">
        <button
          onClick={upgradeCurrentStep}
          class="mt-5 w-2/4 p-10 bg-white hover:bg-gray-400 text-gray-800 font-bold  rounded inline-flex items-center"
        >
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
    </>
  );
}
