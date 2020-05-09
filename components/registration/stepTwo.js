export default function StepTwo({
  currentStep,
  upgradeCurrentStep,
  downgradeCurrentStep,
}) {
  if (currentStep !== 2) {
    return null;
  }
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1 className="mt-32 text-4xl text-black font-bold leading-tight">
        What state do you want your business in?
      </h1>
      <p className="mt-10 text-black">
        Decide where you’d like to incorporate your new business.
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
      </nav>
    </div>
  );
}
