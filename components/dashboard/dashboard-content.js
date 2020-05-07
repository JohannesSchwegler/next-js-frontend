import { Children } from "react";

export default function DashboardContent({ children }) {
  return (
    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      {/*          <!-- Desktop Header --> */}

      <header class="w-full flex items-center bg-white py-2 px-6 hidden sm:flex">
        <div class="w-1/2">
          <div class="relative mr-6 my-2">
            <input
              type="search"
              class="bg-purple-white shadow rounded border-0 p-3"
              placeholder="Search by name..."
            />
            <div class="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
              <svg
                version="1.1"
                class="h-4 text-dark"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 52.966 52.966"
                style={{ "enable-background": "new 0 0 52.966 52.966" }}
              >
                <path
                  d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div x-data="{ isOpen: false }" class="relative w-1/2 flex justify-end">
          <button class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
          </button>
          {/*  <button
            x-show="isOpen"
            class="h-full w-full fixed inset-0 cursor-default"
          ></button> */}
          <div
            x-show="isOpen"
            class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
          >
            <a href="#" class="block px-4 py-2 account-link hover:text-white">
              Account
            </a>
            <a href="#" class="block px-4 py-2 account-link hover:text-white">
              Support
            </a>
            <a href="#" class="block px-4 py-2 account-link hover:text-white">
              Sign Out
            </a>
          </div>
        </div>
      </header>

      {/*  <!-- Mobile Header & Nav --> */}
      <header
        x-data="{ isOpen: false }"
        class="w-full bg-sidebar py-5 px-6 sm:hidden"
      >
        <div class="flex items-center justify-between">
          <a
            href="index.html"
            class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </a>
          <button class="text-white text-3xl focus:outline-none">
            <i x-show="!isOpen" class="fas fa-bars"></i>
            <i x-show="isOpen" class="fas fa-times"></i>
          </button>
        </div>

        {/* Dropdown Nav */}
        <nav class="flex flex-col pt-4">
          <a
            href="index.html"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a
            href="blank.html"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-sticky-note mr-3"></i>
            Blank Page
          </a>
          <a
            href="tables.html"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-table mr-3"></i>
            Tables
          </a>
          <a
            href="forms.html"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-align-left mr-3"></i>
            Forms
          </a>
          <a
            href="tabs.html"
            class="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
          >
            <i class="fas fa-tablet-alt mr-3"></i>
            Tabbed Content
          </a>
          <a
            href="calendar.html"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-calendar mr-3"></i>
            Calendar
          </a>
          <a
            href="#"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-cogs mr-3"></i>
            Support
          </a>
          <a
            href="#"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-user mr-3"></i>
            My Account
          </a>
          <a
            href="#"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
          >
            <i class="fas fa-sign-out-alt mr-3"></i>
            Sign Out
          </a>
          <button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
          </button>
        </nav>
      </header>

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6">{children}</main>

        <footer class="w-full bg-white text-right p-4">
          Built by{" "}
          <a target="_blank" href="https://davidgrzyb.com" class="underline">
            David Grzyb
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
