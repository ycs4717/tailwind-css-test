import React from "react";

const App = () => {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto  p-5 flex-col md:flex-row  items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Geundori</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#skill" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#blog" className="mr-5 hover:text-blue-400 duration-300">
              Blog
            </a>
            <a href="#contact" className="hover:text-blue-400 duration-300">
              Contact
            </a>
          </nav>
        </div>
      </header>
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
            <img src="./img/icon.gif" alt="" />
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
    </>
  );
};

export default App;
