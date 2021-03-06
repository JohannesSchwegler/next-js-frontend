import DashboardLayout from "../../components/dashboard-layout";

import { getAllArticles } from "../../lib/articles";

export default function Start({ allPostsData }) {
  console.log(allPostsData);
  return (
    <DashboardLayout>
      {allPostsData.map((item) => {
        return (
          <div class="w-1/2 mb-10 bg-white p-5 flex">
            <div>
              <img className="w-32 h-32 object-cover" src={item.image} />
            </div>
            <div class="flex-1 ml-5">
              <h1 className="text-2xl ">{item.title}</h1>
              <h1>{item.content}</h1>
            </div>
          </div>
        );
      })}
      <h1 class="text-3xl text-black pb-6">Tabbed Content</h1>

      <div class="w-full mt-6" x-data="{ openTab: 1 }">
        <div>
          <ul class="flex border-b">
            <li class="-mb-px mr-1">
              <a class="bg-white inline-block py-2 px-4 font-semibold" href="#">
                Tab 1
              </a>
            </li>
            <li class="mr-1">
              <a class="bg-white inline-block py-2 px-4 font-semibold" href="#">
                Tab 2
              </a>
            </li>
            <li class="mr-1">
              <a class="bg-white inline-block py-2 px-4 font-semibold" href="#">
                Tab 3
              </a>
            </li>
            <li class="mr-1">
              <a class="bg-white inline-block py-2 px-4 font-semibold" href="#">
                Tab 4
              </a>
            </li>
          </ul>
        </div>
        <div class="bg-white p-6">
          <div id="" class="" x-show="openTab === 1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            ligula at condimentum sagittis. Maecenas velit libero, fermentum a
            leo quis, pretium egestas risus. Proin tempus sem magna, vitae
            convallis purus rhoncus non. Aenean tristique congue metus in
            lobortis. Nullam nisi leo, luctus in sapien eget, accumsan mattis
            leo. Morbi magna dolor, dapibus ut ligula eget, commodo venenatis
            risus. Nunc quis dignissim velit. Donec nec dapibus ligula. Etiam
            quis libero ultrices, semper arcu id, suscipit purus. Phasellus eu
            arcu tincidunt dui pellentesque feugiat et at risus. In hendrerit
            laoreet ante ac imperdiet. Nam tortor urna, laoreet in malesuada
            quis, pretium cursus dolor.
          </div>
          <div id="" class="" x-show="openTab === 2">
            Curabitur at lacinia felis. Curabitur elit ante, efficitur molestie
            iaculis non, blandit dictum dui. Fusce ac faucibus lorem, in aliquet
            metus. Praesent bibendum justo vitae ante imperdiet, sit amet
            posuere tortor tincidunt. Nam a arcu eros. In vitae augue tempus,
            ullamcorper lectus ut, egestas erat. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Aenean imperdiet eget sapien nec
            consequat. Etiam imperdiet diam ac mattis gravida.
          </div>
          <div id="" class="" x-show="openTab === 3">
            Duis imperdiet ullamcorper nibh, sed euismod dolor facilisis sit
            amet. Etiam quis cursus lorem. Vivamus euismod accumsan neque
            lobortis tempus. Praesent nec lacinia odio, a dictum risus. Sed eget
            dictum turpis, vitae iaculis orci. Vivamus laoreet consequat velit,
            non viverra diam pulvinar a. Aliquam bibendum ligula lacus, ac
            convallis ipsum hendrerit ut. Suspendisse rutrum dui libero, non
            aliquam lectus lobortis at. Donec gravida finibus sollicitudin.
            Nulla ut metus finibus purus vehicula porttitor. Fusce id sem non
            nisl pulvinar scelerisque.
          </div>
          <div id="" class="" x-show="openTab === 4">
            Mauris viverra viverra dolor quis gravida. Duis pharetra felis id
            tellus faucibus pulvinar. Integer non ligula lobortis, hendrerit est
            eget, maximus sapien. Suspendisse vel nibh feugiat, porta ex et,
            dignissim diam. Maecenas finibus consectetur efficitur. Sed tempus
            vehicula interdum. Nam porttitor id risus a ultrices. Proin mi
            nulla, ultricies eu ipsum vitae, fermentum congue nunc. Phasellus a
            dictum massa. Nunc quis lacus et ex vulputate molestie ac eget est.
            Integer porttitor placerat quam, eu convallis sem tristique sit
            amet. Nam at risus fringilla, pharetra mauris tincidunt, imperdiet
            nisi.
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllArticles();
  return {
    props: {
      allPostsData,
    },
  };
}
