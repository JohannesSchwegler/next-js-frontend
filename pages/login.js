import Link from "next/link";

import Layout from "../components/layout";

export default function Login() {
  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto w-32" src="/logo.svg" alt="Logo" />
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="bg-white py-8 px-8 shadow sm:rounded-lg sm:px-10">
          <h2 class="mb-6 text-left text-1xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <form action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Your email address
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  required=""
                  type="email"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Your password
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  required=""
                  type="password"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm leading-5">
                <a
                  href="./password-reset.html"
                  class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  id="sign-in-btn"
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-blue hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </span>
            </div>
          </form>
          <div
            id="error-div"
            class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-2 hidden"
            role="alert"
          >
            <p class="font-bold">Oh no!!!!</p>
            <p>Email or password is incorrect</p>
          </div>
        </div>
      </div>

      <div class="mt-5 text-center flex justify-center">
        <p>Sie haben kein Konto?</p>
        <Link href="/register">
          <a className="ml-2">Jetzt erstellen</a>
        </Link>
      </div>
    </div>
  );
}
