import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full absolute top-20 px-16">
      <div class="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <Link href="/">
            <a>
              <img class="h-12 w-32" src="/logo.svg" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-end lg:w-4/4">
          <ul class="flex font-bold">
            <li class="mr-6">
              <Link href="/features">
                <a class="text-grey-500 focus:text-grey-500 visited:text-grey-500">
                  Features
                </a>
              </Link>
            </li>
            <li class="mr-6">
              <Link href="">
                <a class="text-grey-500" target="_blank" rel="noopener">
                  How it works?
                </a>
              </Link>
            </li>
            <li class="mr-6">
              <Link href="">
                <a class="text-grey-500" target="_blank" rel="noopener">
                  Plan
                </a>
              </Link>
            </li>
            <li class="mr-6">
              <Link href="/login">
                <a class="text-grey-500">Login</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
