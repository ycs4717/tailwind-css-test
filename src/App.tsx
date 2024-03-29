import React from "react";
import TodoList from "./components/TodoList";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Top from "./layout/Top";

const App = () => {
  return (
    <>
      <Top />
      {/*Home*/}
      <section className="text-gray-700" id="home">
        <div className="container flex mx-auto flex-col md:flex-row items-center px-5 py-20">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi!
              <br />
              I'm Geundori
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              TailwindCSS를 사용한 포트폴리오입니다. 좌측 상단을 누르면 메인
              페이지로 이동하고, 우측 상단의 메뉴를 누르면 각 섹션으로
              이동합니다. 우측 상단의 메뉴를 클릭하면 한 페이지의 내용이 바뀌는
              것이 아닌, 각 섹션으로 이동하는 것을 확인할 수 있습니다.
            </p>
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/icon1.gif" alt="" />
          </div>
        </div>
      </section>
      {/*About Me*/}
      <section id="about" className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, velit?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              ad debitis praesentium quis dolore adipisci deleniti. Fugit non
              magni dolorem! Facere debitis rerum qui ut fuga, ullam, ad vitae
              explicabo et ipsa amet consequatur ipsum iure quibusdam numquam
              illo ipsam reiciendis rem sapiente architecto exercitationem,
              labore quaerat. Dolore numquam quam repellendus saepe culpa
              distinctio maiores soluta, pariatur quae alias velit nisi
              corrupti, quod magnam eius. Necessitatibus architecto nobis ipsa,
              excepturi voluptatibus eum velit cum sequi possimus harum sunt
              commodi cumque sint. Enim tempora minima sapiente omnis, qui
              facilis! Sequi, ab ut facere excepturi molestias ipsa, reiciendis
              quisquam, sed eos magni aliquid explicabo. Est vel sequi cum ipsa
            </p>
          </div>
          {/*카드1*/}
          <div className="flex -m-4 flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg ">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, laudantium?.
                  </p>
                  <a href="#" className="mt-3 text-green-500 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/*카드2*/}
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, laudantium?.
                  </p>
                  <a href="#" className="mt-3 text-green-500 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/*카드3*/}
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, laudantium?.
                  </p>
                  <a href="#" className="mt-3 text-green-500 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*My Skills*/}
      <section id="skill" className="text-gray-700 border-t border-gray-200">
        <div className="flex container px-5 py-24 mx-auto flex-wrap">
          <div className="rounded w-full mb-10 lg:w-1/2 lg:mb-0">
            <img src="./img/icon2.gif" alt="" />
          </div>
          <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10">
              My Skills
            </h1>
            <div className="">
              <div className="w-full">
                <h2>HTML</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
                <h2 className="pt-5">CSS</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
                <h2 className="pt-5">Javascript</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "65%" }}
                  >
                    65%
                  </div>
                </div>
                <h2 className="pt-5">Tailwindcss</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Todo*/}
      <section id="blog" className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-4">
              Todo List
            </h1>
            <p className="pb-10">Manage your daily tasks and stay organized.</p>
          </div>

          <div className="flex justify-center">
            <TodoList />
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
};

export default App;
