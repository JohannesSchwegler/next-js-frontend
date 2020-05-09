import { useEffect, useState, useRef } from "react";

export default function Progress({ currentStep }) {
  let progress = useRef(null);

  useEffect(() => {
    updateProgress();
  });

  function updateProgress() {
    let array = Array.from(progress.children);
    array.map((item, i) => {
      let current = i + 1;
      let step = item.children[0].firstChild;
      item.children[1].style.display = "none";
      step.classList.remove("done", "register-active");
      if (current === currentStep) {
        step.classList.add("register-active");
        item.children[1].style.display = "block";
      } else if (current <= currentStep) {
        step.classList.add("done");
      }
    });
  }

  let steps = [
    { id: 1, title: "Company Type" },
    { id: 2, title: "State" },
    { id: 3, title: "About your Company" },
    { id: 4, title: "Owners" },
    { id: 5, title: "Personal Details" },
  ];
  return (
    <ul ref={(el) => (progress = el)} class="mt-10">
      {steps.map(({ id, title }) => {
        return (
          <li key={id} className="flex items-center justify-between mb-10">
            <div class="flex">
              <div className="border-black border-solid  border-4 text-gray rounded-full h-8 w-8 flex items-center justify-center">
                {id}
              </div>
              <div className="ml-5">{title}</div>
            </div>
            <div className="w-4 h-4 hidden">
              <img src="/arrows.svg" />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
