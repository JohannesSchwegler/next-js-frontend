import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Layout from "../components/layout";

import StepDefault from "../components/registration/stepOne";
import StepOne from "../components/registration/stepTwo";
import StepTwo from "../components/registration/stepThree";
import StepFour from "../components/registration/stepFour";
import StepFive from "../components/registration/stepFive";
import Progress from "../components/registration/progress";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    console.log("rendered");
  }, [currentStep]);

  function upgradeCurrentStep() {
    setCurrentStep((currentStep) => currentStep + 1);
  }

  function downgradeCurrentStep() {
    setCurrentStep((currentStep) => currentStep - 1);
  }

  return (
    <div className="h-full flex bg-gray-50 ">
      <div
        style={{ "box-shadow": "rgba(0, 0, 0, 0.02) 4px 2px 24px 0px" }}
        className="w-full md:w-1/4 bg-white px-20 text-black"
      >
        <div class="mt-32 ">
          <h1 className="text-4xl font-bold leading-tight">
            Few clicks away <br />
            from creating your <br />
            Company.
          </h1>

          <p className="mt-10">
            <span>
              Start your company in minutes. <br />
            </span>
            <span>Save time and money.</span>
          </p>
        </div>

        <Progress currentStep={currentStep} />
      </div>
      <div className="w-full md:w-3/4 pl-20">
        <StepDefault
          currentStep={currentStep}
          upgradeCurrentStep={upgradeCurrentStep}
          downgradeCurrentStep={downgradeCurrentStep}
        />
        <StepOne
          currentStep={currentStep}
          upgradeCurrentStep={upgradeCurrentStep}
          downgradeCurrentStep={downgradeCurrentStep}
        />

        <StepTwo
          currentStep={currentStep}
          upgradeCurrentStep={upgradeCurrentStep}
          downgradeCurrentStep={downgradeCurrentStep}
        />

        <StepFour
          currentStep={currentStep}
          upgradeCurrentStep={upgradeCurrentStep}
          downgradeCurrentStep={downgradeCurrentStep}
        />

        <StepFive
          currentStep={currentStep}
          upgradeCurrentStep={upgradeCurrentStep}
          downgradeCurrentStep={downgradeCurrentStep}
        />
      </div>
    </div>
  );
}
