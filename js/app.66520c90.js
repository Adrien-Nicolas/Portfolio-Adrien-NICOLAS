(function () {
  "use strict";
  var e = {
      4799: function (e, t, a) {
        var o = a(9242),
          r = a(3396);
        function n(e, t, a, n, i, s) {
          const l = (0, r.up)("router-view");
          return (
            (0, r.wg)(),
            (0, r.j4)(
              o.uT,
              {
                name: "fade",
                mode: "out-in",
                onBeforeEnter: s.beforeEnter,
                appear: "",
              },
              {
                default: (0, r.w5)(() => [
                  (0, r.Wm)(l, { blog: i.blog }, null, 8, ["blog"]),
                ]),
                _: 1,
              },
              8,
              ["onBeforeEnter"]
            )
          );
        }
        var i = [
            {
              username: "Prime Blogs",
              date: "2023.01.01",
              link: "https://prmblogs.tistory.com/5",
              profile:
                "https://tistory1.daumcdn.net/tistory/5878727/attach/cc3e9f7f252c43ed8768b5a1b83623ad",
              title: " VuejS vs Tailwind CSS ",
              image:
                "https://placeimg.com/300/200/archhttps://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbM2IEB%2FbtrU38Cp9GV%2FtVzE4j0D9VY7qbqKAABIy0%2Fimg.jpg",
              intro: "Tailwind CSS 설치 및 VUEJS 프로젝트 적용하는 방법",
            },
            {
              username: "Prime Blogs",
              date: "2022.12.30",
              link: "https://prmblogs.tistory.com/4",
              profile:
                "https://tistory1.daumcdn.net/tistory/5878727/attach/cc3e9f7f252c43ed8768b5a1b83623ad",
              title: "VueJs List Rendering",
              image:
                "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdNu4Zm%2FbtrUVkpGuUd%2Fx41U7clwnGukxCQW25STsK%2Fimg.png",
              intro: "VueJs List Rendering [ 리스트 렌더링 ] 하는 법",
            },
            {
              username: "Prime Blogs",
              date: "2022.12.26",
              link: "https://prmblogs.tistory.com/2",
              profile:
                "https://tistory1.daumcdn.net/tistory/5878727/attach/cc3e9f7f252c43ed8768b5a1b83623ad",
              title: "Vuejs Firebase 연동 ",
              image:
                "https://placeimg.com/300/200/archhttps://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbM2IEB%2FbtrU38Cp9GV%2FtVzE4j0D9VY7qbqKAABIy0%2Fimg.jpg",
              intro:
                "Vuejs Firebase 연동 오류 해결 v9버전, 2023 [solved ]",
            },
            {
              username: "Prime Blogs",
              date: "2023.01.02",
              link: "https://prmblogs.tistory.com/5",
              profile:
                "https://tistory1.daumcdn.net/tistory/5878727/attach/cc3e9f7f252c43ed8768b5a1b83623ad",
              title: "VUe 알림장창 만들기 ",
              image: "https://miro.medium.com/max/828/0*L2GGz8fwNA_IZcFb.webp",
              intro: "V-If 사용해 Vue에서 동적인 UI 만드는 법)",
            },
          ],
          s = [
            {
              name: "Brander",
              id: 1,
              content:
                "Brander is a brand style wizard that provides users with a comprehensive set of tools to create their own brand style.",
              image:
                "https://user-images.githubusercontent.com/73825898/240259471-078f3b6c-d96e-4fe5-8f17-ca201963ffee.png",
              tech1:
                "https://img.shields.io/badge/VueJS-439A97?style=flat&logo=Vue.js&logoColor=white",
              tech2: "https://img.shields.io/badge/GPT-3.5-blue",
              tech3:
                "https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white",
              live: "https://github.com/Adrien-Nicolas/Brander",
              code: "https://github.com/Adrien-Nicolas/Brander",
            },
            {
              name: "Metal-Detector-signal-prediction",
              id: 0,
              content:
                "Predictive model applied to a metallic soil remediation framework and using inductive detection systems",
              image:
                "https://user-images.githubusercontent.com/73825898/240250649-01f27d6e-6eac-4a6c-86cf-f4ee59185e4a.png",
              tech1:
                "https://img.shields.io/badge/python-306998?style=flat&logo=python&logoColor=white",
              tech2:
                "https://img.shields.io/badge/scikit-learn-F7931E?style=flat&logo=scikit-learn&logoColor=white",
              live: "https://github.com/Adrien-Nicolas/Metal-Detector-signal-predicting",
              code: "https://github.com/Adrien-Nicolas/Metal-Detector-signal-predicting",
            },
            {
              name: "Robotic Computer vision",
              id: 7,
              content:
                "Implementation of computer vision inside a robotic software to detect specific shapes or specific colors. ",
              image: "https://skills.thijs.gg/icons?i=python,ros",
              tech1:
                "https://img.shields.io/badge/python-306998?style=flat&logo=python&logoColor=white",
              tech2:
                "https://img.shields.io/badge/ROS-22314E?style=flat&logo=ROS&logoColor=white",
              tech3:
                "https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white",
              live: "",
              code: "",
            },
            {
              name: "Processing Points cloud from camera",
              id: 4,
              content:
                "Point-cloud manipulation is a method used for mapping and navigation in robotics, allowing robots to better understand with their surroundings.",
              image:
                "https://user-images.githubusercontent.com/73825898/228518018-eeb5d857-109a-45ba-b24a-515d3a1bda69.png",
              tech1:
                "https://img.shields.io/badge/python-306998?style=flat&logo=python&logoColor=white",
              tech2:
                "https://img.shields.io/badge/ROS-22314E?style=flat&logo=ROS&logoColor=white",
              tech3:
                "https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white",
              live: "https://github.com/Adrien-Nicolas/Point-cloud-processing-ROS",
              code: "https://github.com/Adrien-Nicolas/Point-cloud-processing-ROS",
            },
            {
              name: "Labyrinth generator",
              id: 7,
              content:
                "A labyrinth generator based on a drawn labyrinth with specific colors used. Based on computer vision and color detection.",
              image: "https://skills.thijs.gg/icons?i=python",
              tech1:
                "https://img.shields.io/badge/python-306998?style=flat&logo=python&logoColor=white",
              tech2:
                "https://img.shields.io/badge/opencv-5C3EE8?style=flat&logo=opencv&logoColor=white",
              live: "https://github.com/Adrien-Nicolas/labyrinth-generator",
              code: "https://github.com/Adrien-Nicolas/labyrinth-generator",
            },
            {
              name: "Django API",
              id: 4,
              content:
                "This API aims to store user reviews about specific places like city stadiums or other sport places. ",
              image: "https://skills.thijs.gg/icons?i=python,django",
              tech1:
                "https://img.shields.io/badge/python-306998?style=flat&logo=python&logoColor=white",
              tech2:
                "https://img.shields.io/badge/django-092E20?style=flat&logo=django&logoColor=white",
              live: "https://github.com/Adrien-Nicolas/Django_API_public",
              code: "https://github.com/Adrien-Nicolas/Django_API_public",
            },
            {
              name: "LeoAllnet Portfolio",
              id: 0,
              content:
                "As part of a freelance mission, the artist Leoallnet gave me a project to create a portfolio to exhibit his arts.",
              image:
                "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/286775448/original/7de5b362558e67194b9351e389cf8c3e4967a298/do-create-your-own-portfolio-and-showcase-website.png",
              tech1:
                "https://img.shields.io/badge/vue-4FC08D?style=flat&logo=vue-dot-js&logoColor=white",
              live: "https://leoallnet.fr",
              code: "https://leoallnet.fr",
            },
            {
              name: "Live camera",
              id: 4,
              content:
                "I made a surveillance camera, and a script to diffuse the camera feed on a specific and secure IP address.",
              image: "https://skills.thijs.gg/icons?i=python,raspberrypi",
              tech1:
                "https://img.shields.io/badge/python-306998?style=flat&logo=python&logoColor=white",
              tech2:
                "https://img.shields.io/badge/raspberry-00979D?style=flat&logo=raspberry-pi&logoColor=white",
              live: "https://github.com/Adrien-Nicolas/Raspberry_camera",
              code: "https://github.com/Adrien-Nicolas/Raspberry_camera",
            },
            {
              name: "Electronics project/astronomy",
              id: 3,
              content:
                "This one, through its movement, and with the inclination equal to my latitude, allowed following the rotation of the earth.",
              image:
                "https://user-images.githubusercontent.com/73825898/171649408-0db79e62-6e50-4974-8f82-755c3d8e7a95.gif",
              tech1:
                "https://img.shields.io/badge/arduino-00979D?style=flat&logo=arduino&logoColor=white",
              live: "https://youtube.com/playlist?list=PLCMnQuXAYBkkKPMV1kw8L9sKjakr7yGWj",
              code: "https://github.com/Adrien-Nicolas/Arduino_project/tree/main/Table_eq",
            },
            {
              name: "Electronics project/Ecology",
              id: 2,
              content:
                "I wanted to build one system to monitor the environment of the plants.",
              image:
                "https://user-images.githubusercontent.com/73825898/171719487-d8c651e6-95b9-4986-99d0-2462cb5a703f.png",
              tech1:
                "https://img.shields.io/badge/arduino-00979D?style=flat&logo=arduino&logoColor=white",
              live: "https://youtube.com/playlist?list=PLCMnQuXAYBkm91QrA-oGjT1T1yhg1JD3-",
              code: "https://github.com/Adrien-Nicolas/Arduino_project/tree/main/Weather_BOX",
            },
            {
              name: "Distance sensor",
              id: 6,
              content:
                "Calculation the speed of this surface approaching the sensor to be able to estimate the time remaining before the collision and display a message alert.",
              image:
                "https://user-images.githubusercontent.com/73825898/171687028-6888728b-8624-4e28-9922-cfdfc2a8168d.png",
              tech1:
                "https://img.shields.io/badge/arduino-00979D?style=flat&logo=arduino&logoColor=white",
              live: "https://github.com/Adrien-Nicolas/Arduino_project/tree/main/Distance_capteur",
              code: "https://github.com/Adrien-Nicolas/Arduino_project/tree/main/Distance_capteur",
            },
          ],
          l = {
            name: "App",
            data() {
              return { blog: i, project: s };
            },
            methods: {
              beforeEnter() {
                this.$root.$emit("scrollBeforeEnter");
              },
            },
            components: {},
          },
          c = a(89);
        const d = (0, c.Z)(l, [["render", n]]);
        var u = d,
          p = (a(2166), a(2483));
        function g(e, t, a, o, n, i) {
          const s = (0, r.up)("Navbar"),
            l = (0, r.up)("Header"),
            c = (0, r.up)("Services"),
            d = (0, r.up)("About"),
            u = (0, r.up)("Footer");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(s),
                (0, r.Wm)(l),
                (0, r.Wm)(c),
                (0, r.Wm)(d),
                (0, r.Wm)(u),
              ],
              64
            )
          );
        }
        const m = {
            class:
              "p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700",
          },
          h = {
            class:
              "container flex flex-wrap items-center justify-between mx-auto",
          },
          v = (0, r._)(
            "p",
            { class: "flex items-center hover:no-underline" },
            [
              (0, r._)("img", { src: "", class: "h-6 mr-3 sm:h-10" }),
              (0, r._)(
                "span",
                {
                  class:
                    "self-center hover:text-green-600 text-xl font-semibold whitespace-nowrap dark:text-white",
                },
                " Adrien NICOLAS "
              ),
            ],
            -1
          ),
          b = { class: "hidden w-full md:block md:w-auto" },
          f = {
            class:
              "flex flex-col mt-4 rounded-lg text-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700",
          },
          w = (0, r._)(
            "svg",
            {
              "aria-hidden": "true",
              class:
                "flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 hover:-mt-1 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
            },
            [
              (0, r._)("path", {
                "clip-rule": "evenodd",
                "fill-rule": "evenodd",
                d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
              }),
            ],
            -1
          ),
          y = (0, r._)(
            "span",
            { class: "flex-1 ml-2 whitespace-nowrap" },
            "Home",
            -1
          ),
          x = (0, r._)(
            "svg",
            {
              "aria-hidden": "true",
              class:
                "flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
            },
            [
              (0, r._)("path", {
                d: "M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z",
              }),
            ],
            -1
          ),
          _ = (0, r._)(
            "span",
            { class: "flex-1 ml-2 whitespace-nowrap" },
            "Projects",
            -1
          ),
          k = (0, r._)(
            "svg",
            {
              "aria-hidden": "true",
              class:
                "flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
            },
            [
              (0, r._)("path", {
                "clip-rule": "evenodd",
                "fill-rule": "evenodd",
                d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0L3.35 9.651c-.603.703-.24 1.812.688 1.812h2.176v4.925c0 .59.474 1.067 1.062 1.067h5.852c.588 0 1.062-.477 1.062-1.067v-4.925h2.176c.929 0 1.291-1.109.688-1.812l-5.782-6.767zm-.868 2.784a2.5 2.5 0 113.536 3.536A2.5 2.5 0 0110 5.668zm-.768 3.536a3 3 0 114.243 4.243A3 3 0 019.232 9.204zM5.125 15.75h9.75a.25.25 0 00.25-.25v-3.573a.75.75 0 00-.75-.75H5.875a.75.75 0 00-.75.75v3.573a.25.25 0 00.25.25zm2.75-3.073a.75.75 0 01.75-.75h1.75a.75.75 0 010 1.5h-1.75a.75.75 0 01-.75-.75zm3.281 0a.75.75 0 01.75-.75h1.688a.75.75 0 010 1.5h-1.688a.75.75 0 01-.75-.75zm2.812-.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
              }),
            ],
            -1
          ),
          j = (0, r._)(
            "span",
            { class: "flex-1 ml-2 whitespace-nowrap" },
            "About",
            -1
          ),
          C = (0, r._)(
            "svg",
            {
              "aria-hidden": "true",
              class:
                "flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
            },
            [
              (0, r._)("path", {
                "clip-rule": "evenodd",
                "fill-rule": "evenodd",
                d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0L3.35 9.651c-.603.703-.24 1.812.688 1.812h2.176v4.925c0 .59.474 1.067 1.062 1.067h5.852c.588 0 1.062-.477 1.062-1.067v-4.925h2.176c.929 0 1.291-1.109.688-1.812l-5.782-6.767zm-.868 2.784a2.5 2.5 0 113.536 3.536A2.5 2.5 0 0110 5.668zm-.768 3.536a3 3 0 114.243 4.243A3 3 0 019.232 9.204zM5.125 15.75h9.75a.25.25 0 00.25-.25v-3.573a.75.75 0 00-.75-.75H5.875a.75.75 0 00-.75.75v3.573a.25.25 0 00.25.25zm2.75-3.073a.75.75 0 01.75-.75h1.75a.75.75 0 010 1.5h-1.75a.75.75 0 01-.75-.75zm3.281 0a.75.75 0 01.75-.75h1.688a.75.75 0 010 1.5h-1.688a.75.75 0 01-.75-.75zm2.812-.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
              }),
            ],
            -1
          ),
          U = (0, r._)(
            "span",
            { class: "flex-1 ml-2 whitespace-nowrap" },
            "AN&Digit",
            -1
          ),
          A = (0, r._)(
            "svg",
            {
              "aria-hidden": "true",
              class:
                "flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
            },
            [
              (0, r._)("path", {
                "clip-rule": "evenodd",
                "fill-rule": "evenodd",
                d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0L3.35 9.651c-.603.703-.24 1.812.688 1.812h2.176v4.925c0 .59.474 1.067 1.062 1.067h5.852c.588 0 1.062-.477 1.062-1.067v-4.925h2.176c.929 0 1.291-1.109.688-1.812l-5.782-6.767zm-.868 2.784a2.5 2.5 0 113.536 3.536A2.5 2.5 0 0110 5.668zm-.768 3.536a3 3 0 114.243 4.243A3 3 0 019.232 9.204zM5.125 15.75h9.75a.25.25 0 00.25-.25v-3.573a.75.75 0 00-.75-.75H5.875a.75.75 0 00-.75.75v3.573a.25.25 0 00.25.25zm2.75-3.073a.75.75 0 01.75-.75h1.75a.75.75 0 010 1.5h-1.75a.75.75 0 01-.75-.75zm3.281 0a.75.75 0 01.75-.75h1.688a.75.75 0 010 1.5h-1.688a.75.75 0 01-.75-.75zm2.812-.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
              }),
            ],
            -1
          ),
          N = (0, r._)(
            "span",
            { class: "flex-1 ml-2 whitespace-nowrap" },
            "Contact",
            -1
          );
        function D(e, t, a, o, n, i) {
          const s = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("nav", m, [
              (0, r._)("div", h, [
                v,
                (0, r._)("div", b, [
                  (0, r._)("ul", f, [
                    (0, r._)("li", null, [
                      (0, r.Wm)(
                        s,
                        {
                          to: "/",
                          class:
                            "flex items-center hover:-mt-1 hover:no-underline bg-green-50 p-2 ml-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700",
                          "aria-current": "page",
                        },
                        { default: (0, r.w5)(() => [w, y]), _: 1 }
                      ),
                    ]),
                    (0, r._)("li", null, [
                      (0, r.Wm)(
                        s,
                        {
                          to: "/projects",
                          class:
                            "flex items-center hover:-mt-1 hover:no-underline p-2 ml-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700",
                          "aria-current": "page",
                        },
                        { default: (0, r.w5)(() => [x, _]), _: 1 }
                      ),
                    ]),
                    (0, r._)("li", null, [
                      (0, r.Wm)(
                        s,
                        {
                          to: "/about",
                          class:
                            "flex items-center p-2 ml-2 hover:-mt-1 hover:no-underline text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700",
                          "aria-current": "page",
                        },
                        { default: (0, r.w5)(() => [k, j]), _: 1 }
                      ),
                    ]),
                    (0, r._)("li", null, [
                      (0, r.Wm)(
                        s,
                        {
                          to: "/andigit",
                          class:
                            "flex items-center p-2 ml-2 hover:-mt-1 hover:no-underline text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700",
                          "aria-current": "page",
                        },
                        { default: (0, r.w5)(() => [C, U]), _: 1 }
                      ),
                    ]),
                    (0, r._)("li", null, [
                      (0, r.Wm)(
                        s,
                        {
                          to: "/contact",
                          class:
                            "flex items-center p-2 ml-2 hover:-mt-1 hover:no-underline text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700",
                          "aria-current": "page",
                        },
                        { default: (0, r.w5)(() => [A, N]), _: 1 }
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var z = {
          name: "Navbar",
          data() {
            return { active: 0 };
          },
          methods: {
            inActive() {
              this.active += 1;
            },
          },
        };
        const O = (0, c.Z)(z, [["render", D]]);
        var S = O,
          P = a.p + "../img/favicon.3361573a.png";
        const F = {
            class: "page-banner home-banner bg-green-100 dark:bg-gray-800",
          },
          W = { class: "container h-100" },
          I = { class: "row align-items-center h-100" },
          B = { class: "col-lg-6 py-3 wow fadeInUp" },
          E = (0, r._)(
            "p",
            {
              class:
                "text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug",
            },
            [
              (0, r.Uk)(" Adrien NICOLAS "),
              (0, r._)("br"),
              (0, r.Uk)(" Software developer, "),
              (0, r._)("br"),
              (0, r.Uk)(" AI enthusiast, "),
              (0, r._)("br"),
              (0, r.Uk)(" ... "),
            ],
            -1
          ),
          G = (0, r._)(
            "p",
            { class: "hidden lg:block text-2xl mb-5" },
            " Discover, learn and explore new things. ",
            -1
          ),
          R = (0, r._)(
            "a",
            {
              href: "/Resume.pdf",
              target: "_blank",
              class:
                "btn btn-primary btn-split ml-2 bg-green-600 hover:bg-green-500",
            },
            [
              (0, r.Uk)(" Resume "),
              (0, r._)("div", { class: "fab bg-green-500 dark:bg-gray-900" }, [
                (0, r._)("span", { class: "mai-play text-white" }),
              ]),
            ],
            -1
          ),
          L = (0, r._)(
            "div",
            { class: "col-lg-6 wow zoomIn" },
            [
              (0, r._)("div", { class: "m-3 lg:m-3 p-1 lg:p-5" }, [
                (0, r._)("img", { src: P, alt: "" }),
              ]),
            ],
            -1
          ),
          M = { class: "container text-center mt-3 mb-2" },
          V = { class: "tag-animation" },
          Z = (0, r._)("span", { class: "tag" }, "New", -1);
        function X(e, t, a, o, n, i) {
          const s = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("header", null, [
              (0, r._)("div", F, [
                (0, r._)("div", W, [
                  (0, r._)("div", I, [
                    (0, r._)("div", B, [
                      E,
                      G,
                      (0, r.Wm)(
                        s,
                        {
                          to: "/about",
                          name: "fade",
                          class:
                            "btn btn-outline border text-green-600 hover:border-green-500",
                        },
                        {
                          default: (0, r.w5)(() => [(0, r.Uk)(" About ")]),
                          _: 1,
                        }
                      ),
                      R,
                    ]),
                    L,
                  ]),
                ]),
                (0, r._)("div", M, [
                  (0, r._)("div", V, [
                    Z,
                    (0, r.Wm)(
                      s,
                      {
                        to: "/andigit",
                        class:
                          "btn btn-primary btn-lg mt-2 bg-green-600 hover:bg-green-500",
                      },
                      {
                        default: (0, r.w5)(() => [(0, r.Uk)(" AN&Digit ")]),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var T = {};
        const J = (0, c.Z)(T, [["render", X]]);
        var q = J;
        const K = {
            class:
              "bg-green-50 hidden lg:flex lg:items-center lg:justify-center",
          },
          H = { class: "bg-green-50 page-section features" },
          Q = { class: "container" },
          Y = { class: "row justify-content-center" },
          $ = { class: "col-md-6 col-lg-4 py-3 wow fadeInUp" },
          ee = { class: "d-flex flex-row" },
          te = { class: "img-fluid mr-3" },
          ae = (0, r._)(
            "p",
            null,
            " I like to study, and work on concrete problems using statistics and machine learning. ",
            -1
          ),
          oe = { class: "col-md-6 col-lg-4 py-3 wow fadeInUp" },
          re = { class: "d-flex flex-row" },
          ne = { class: "" },
          ie = { class: "img-fluid mr-3" },
          se = (0, r._)(
            "div",
            null,
            [
              (0, r._)("h4", null, "Dashboard creation"),
              (0, r._)(
                "p",
                null,
                " I also like to create dashboards to visualize data and communicate results. "
              ),
            ],
            -1
          ),
          le = { class: "col-md-6 col-lg-4 py-3 wow fadeInUp" },
          ce = { class: "d-flex flex-row" },
          de = { class: "img-fluid mr-3" },
          ue = (0, r._)(
            "div",
            null,
            [
              (0, r._)("h5", null, "Digital aspect"),
              (0, r._)(
                "p",
                null,
                " I like to work on the digital aspect of a project, from creating a showcase website to creating the brand identity. "
              ),
            ],
            -1
          );
        function pe(e, t, a, o, n, i) {
          const s = (0, r.up)("lord-icon"),
            l = (0, r.up)("h");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", K, [
              (0, r._)("div", H, [
                (0, r._)("div", Q, [
                  (0, r._)("div", Y, [
                    (0, r._)("div", $, [
                      (0, r._)("div", ee, [
                        (0, r._)("div", te, [
                          (0, r.Wm)(s, {
                            src: "https://cdn.lordicon.com/fyuvwkhk.json",
                            trigger: "hover",
                            style: { width: "150px", height: "150px" },
                          }),
                        ]),
                        (0, r._)("div", null, [
                          (0, r.Wm)(l, null, {
                            default: (0, r.w5)(() => [
                              (0, r.Uk)("Data analysis"),
                            ]),
                            _: 1,
                          }),
                          ae,
                        ]),
                      ]),
                    ]),
                    (0, r._)("div", oe, [
                      (0, r._)("div", re, [
                        (0, r._)("div", ne, [
                          (0, r._)("div", ie, [
                            (0, r.Wm)(s, {
                              src: "https://cdn.lordicon.com/rvulxkpr.json",
                              trigger: "hover",
                              style: { width: "150px", height: "150px" },
                            }),
                          ]),
                        ]),
                        se,
                      ]),
                    ]),
                    (0, r._)("div", le, [
                      (0, r._)("div", ce, [
                        (0, r._)("div", de, [
                          (0, r.Wm)(s, {
                            src: "https://cdn.lordicon.com/hyymuwkm.json",
                            trigger: "hover",
                            style: { width: "150px", height: "150px" },
                          }),
                        ]),
                        ue,
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var ge = {};
        const me = (0, c.Z)(ge, [["render", pe]]);
        var he = me,
          ve = a.p + "img/pdp.fe5691e0.jpg",
          be = a.p + "img/experiences.93b21379.jpg";
        const fe = (e) => (
            (0, r.dD)("data-v-0d9c67ee"), (e = e()), (0, r.Cn)(), e
          ),
          we = (0, r.uE)(
            '<div class="bg-green-50 page-section pt-5 -mb-5" data-v-0d9c67ee><div class="container" data-v-0d9c67ee><div class="row" data-v-0d9c67ee><div class="col-lg-6 py-3 wow zoomIn" data-v-0d9c67ee><div class="img-place text-center hidden lg:flex" data-v-0d9c67ee><img src="' +
              ve +
              '" alt="" data-v-0d9c67ee></div></div><div class="col-lg-6 p-4" data-v-0d9c67ee><h2 class="title-section text-2xl" data-v-0d9c67ee> All About <span class="marked" data-v-0d9c67ee>Myself</span></h2><div class="divider" data-v-0d9c67ee></div><div data-v-0d9c67ee><p data-v-0d9c67ee> Being currently in training specialized in computer science within the school of engineering CESI, I am at ease with the work in group as well as the relational contact. I consider myself open-minded, hard-working and diligent in everything I do. I adapt easily while being receptive. </p></div><div data-v-0d9c67ee><p data-v-0d9c67ee> As I am passionate about electronics, project creation and new technology, my aim is to combine my skills in order to draw up a concrete project. </p></div></div></div></div></div>',
            1
          ),
          ye = { class: "bg-green-50 page-section" },
          xe = { class: "container" },
          _e = { class: "row" },
          ke = { class: "col-lg-6 p-4 -mt-9 lg:mt-0" },
          je = (0, r.uE)(
            '<h2 class="title-section text-2xl" data-v-0d9c67ee> My <span class="marked" data-v-0d9c67ee>Skills &amp; Experiences</span></h2><div class="divider" data-v-0d9c67ee></div><p class="mb-4" data-v-0d9c67ee> I am currently in my 5th and final year of engineering school at CESI, in Reims. With proposed specialties such as data science and project management, this course allows me today to manage and work on a project independently </p><p class="mb-4" data-v-0d9c67ee> I like to develop my skills in different types of projects that are offered to me, with the desire to join my soft skills (Communication, presentation of results and strong sense of professionalism) with hard skills that I was able to learn with my experience (prediction algorithms, processing and data management, report/BI of a raw dataset, computer vision, etc.) </p>',
            4
          ),
          Ce = fe(() =>
            (0, r._)(
              "div",
              { class: "col-lg-6 py-3 wow zoomIn" },
              [
                (0, r._)("div", { class: "img-place text-center" }, [
                  (0, r._)("img", { src: be, alt: "" }),
                ]),
              ],
              -1
            )
          );
        function Ue(e, t, a, o, n, i) {
          const s = (0, r.up)("router-link"),
            l = (0, r.up)("Footer");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                we,
                (0, r._)("div", ye, [
                  (0, r._)("div", xe, [
                    (0, r._)("div", _e, [
                      (0, r._)("div", ke, [
                        je,
                        (0, r.Wm)(
                          s,
                          { to: "/projects", class: "btn btn-outline ml-2" },
                          {
                            default: (0, r.w5)(() => [
                              (0, r.Uk)(" My Projects "),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      Ce,
                    ]),
                  ]),
                ]),
                (0, r.Wm)(l),
              ],
              64
            )
          );
        }
        const Ae = {
            class:
              "lg:hidden fixed bottom-0 left-0 z-20 w-full rounded-t-xl drop-shadow-xl px-1 bg-gray-50 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600",
          },
          Ne = {
            class:
              "flex flex-wrap items-center justify-evenly p-1 space-x-5 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
          },
          De = (0, r._)(
            "div",
            {
              class:
                "flex items-center hover:no-underline mt-1 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            null,
            -1
          ),
          ze = (0, r._)(
            "div",
            {
              class:
                "flex items-center justify-center mt-1 text-green-900 hover:no-underline font-medium rounded-lg dark:text-white dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            [(0, r._)("p", { class: "text" }, "Home")],
            -1
          ),
          Oe = (0, r._)(
            "div",
            {
              class:
                "flex items-center hover:no-underline mt-1 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            null,
            -1
          ),
          Se = (0, r._)(
            "div",
            {
              class:
                "flex items-center justify-center mt-1 text-green-900 font-medium rounded-lg dark:text-white dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            [(0, r._)("p", { class: "whitespace-nowrap text" }, "Projects")],
            -1
          ),
          Pe = (0, r._)(
            "div",
            {
              class:
                "flex items-center hover:no-underline mt-1 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            null,
            -1
          ),
          Fe = (0, r._)(
            "div",
            {
              class:
                "flex items-center justify-center mt-1 text-green-900 font-medium rounded-lg dark:text-white dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            [(0, r._)("p", { class: "whitespace-nowrap text" }, "About")],
            -1
          ),
          We = (0, r._)(
            "div",
            {
              class:
                "flex items-center hover:no-underline hover:text-green-500 mt-1 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            null,
            -1
          ),
          Ie = (0, r._)(
            "div",
            {
              class:
                "flex items-center justify-center mt-1 hover:text-green-500 text-green-900 font-medium rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            [(0, r._)("div", { class: "whitespace-nowrap text" }, "AN&Digit")],
            -1
          ),
          Be = (0, r._)(
            "div",
            {
              class:
                "flex items-center hover:no-underline hover:text-green-500 mt-1 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            null,
            -1
          ),
          Ee = (0, r._)(
            "div",
            {
              class:
                "flex items-center justify-center mt-1 hover:text-green-500 text-green-900 font-medium rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700",
              "aria-current": "page",
            },
            [(0, r._)("div", { class: "whitespace-nowrap text" }, "Contact")],
            -1
          );
        function Ge(e, t, a, o, n, i) {
          const s = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", Ae, [
              (0, r._)("div", null, [
                (0, r._)("div", Ne, [
                  (0, r.Wm)(
                    s,
                    {
                      onClick: e.isActive,
                      to: "/",
                      class: "flex flex-col items-center justify-center",
                    },
                    { default: (0, r.w5)(() => [De, ze]), _: 1 },
                    8,
                    ["onClick"]
                  ),
                  (0, r.Wm)(
                    s,
                    {
                      to: "/projects",
                      class: "flex flex-col items-center justify-center",
                    },
                    { default: (0, r.w5)(() => [Oe, Se]), _: 1 }
                  ),
                  (0, r.Wm)(
                    s,
                    {
                      to: "/about",
                      class: "flex flex-col items-center justify-center",
                    },
                    { default: (0, r.w5)(() => [Pe, Fe]), _: 1 }
                  ),
                  (0, r.Wm)(
                    s,
                    {
                      to: "/andigit",
                      class: "flex flex-col items-center justify-center",
                    },
                    { default: (0, r.w5)(() => [We, Ie]), _: 1 }
                  ),
                  (0, r.Wm)(
                    s,
                    {
                      to: "/contact",
                      class: "flex flex-col items-center justify-center",
                    },
                    { default: (0, r.w5)(() => [Be, Ee]), _: 1 }
                  ),
                ]),
              ]),
            ])
          );
        }
        var Re = {};
        const Le = (0, c.Z)(Re, [["render", Ge]]);
        var Me = Le,
          Ve = {
            data() {
              return { scrollPosition: 0 };
            },
            methods: {
              handleScroll(e) {
                (this.scrollPosition = e.target.scrollTop),
                  this.scrollPosition > 100
                    ? console.log("UP")
                    : console.log("DOWN");
              },
            },
            components: { Footer: Me },
          };
        const Ze = (0, c.Z)(Ve, [
          ["render", Ue],
          ["__scopeId", "data-v-0d9c67ee"],
        ]);
        var Xe = Ze;
        function Te(e, t, a, o, r, n) {
          return null;
        }
        var Je = { name: "Projects" };
        const qe = (0, c.Z)(Je, [["render", Te]]);
        var Ke = qe;
        const He = (0, r.uE)(
          '<div class="page-section"><div class="container"><div class="row align-items-center"><div class="col-lg-6 py-3 wow fadeInUp"><h2 class="title-section">Contact information</h2><div class="divider"></div><ul class="contact-list"><li><div class="icon"><span class="mai-mail"></span></div><div class="content"><a href="#">adrien.nicolas511@gmail.com</a></div></li><li><div class="icon"><span class="mai-phone-portrait"></span></div><div class="content"><a href="#">+33677464496</a></div></li></ul></div></div></div></div>',
          1
        );
        function Qe(e, t, a, o, n, i) {
          const s = (0, r.up)("Navbar"),
            l = (0, r.up)("Footer");
          return (
            (0, r.wg)(),
            (0, r.iD)(r.HY, null, [(0, r.Wm)(s), He, (0, r.Wm)(l)], 64)
          );
        }
        var Ye = { name: "Contact", components: { Navbar: S, Footer: Me } };
        const $e = (0, c.Z)(Ye, [["render", Qe]]);
        var et = $e,
          tt = {
            name: "Home",
            data() {
              return {};
            },
            props: { blog: Array },
            components: {
              Navbar: S,
              Header: q,
              Services: he,
              About: Xe,
              Projects: Ke,
              Contact: et,
              Footer: Me,
            },
          };
        const at = (0, c.Z)(tt, [["render", g]]);
        var ot = at;
        const rt = { class: "hidden lg:block container mt-5" },
          nt = { class: "page-banner1" },
          it = { class: "row justify-content-center align-items-center h-100" },
          st = { class: "col-md-6" },
          lt = { "aria-label": "Breadcrumb" },
          ct = {
            class: "breadcrumb justify-content-center py-0 bg-transparent",
          },
          dt = { class: "breadcrumb-item" },
          ut = (0, r._)("li", { class: "breadcrumb-item active" }, "About", -1),
          pt = (0, r._)("h1", { class: "text-center" }, "About Us", -1);
        function gt(e, t, a, o, n, i) {
          const s = (0, r.up)("Navbar"),
            l = (0, r.up)("router-link"),
            c = (0, r.up)("About"),
            d = (0, r.up)("Services");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(s),
                (0, r._)("div", rt, [
                  (0, r._)("div", nt, [
                    (0, r._)("div", it, [
                      (0, r._)("div", st, [
                        (0, r._)("nav", lt, [
                          (0, r._)("ul", ct, [
                            (0, r._)("li", dt, [
                              (0, r.Wm)(
                                l,
                                { to: "/" },
                                {
                                  default: (0, r.w5)(() => [(0, r.Uk)("Home")]),
                                  _: 1,
                                }
                              ),
                            ]),
                            ut,
                          ]),
                        ]),
                        pt,
                      ]),
                    ]),
                  ]),
                ]),
                (0, r.Wm)(c),
                (0, r.Wm)(d),
              ],
              64
            )
          );
        }
        var mt = {
          name: "About Page",
          data() {
            return {};
          },
          props: { blog: Array },
          components: { Navbar: S, About: Xe, Services: he, Footer: Me },
        };
        const ht = (0, c.Z)(mt, [["render", gt]]);
        var vt = ht,
          bt = a(7139);
        const ft = { class: "" },
          wt = { class: "hidden lg:block container" },
          yt = { class: "page-banner1 bg-green-50" },
          xt = { class: "row justify-content-center align-items-center h-100" },
          _t = { class: "col-md-6" },
          kt = { "aria-label": "Breadcrumb" },
          jt = {
            class: "breadcrumb justify-content-center py-0 bg-transparent",
          },
          Ct = { class: "breadcrumb-item" },
          Ut = (0, r._)(
            "li",
            { class: "breadcrumb-item active" },
            "Projects",
            -1
          ),
          At = (0, r._)(
            "p",
            { class: "text-center text-2xl font-semibold text-green-600" },
            " MyProject ",
            -1
          ),
          Nt = (0, r._)("div", { class: "divider mx-auto" }, null, -1),
          Dt = { class: "page-section bg-green-50" },
          zt = { class: "container" },
          Ot = { class: "row my-5 card-blog-row" },
          St = (0, r.uE)(
            '<div class="relative lg:hidden col-md-6 col-lg-3 py-3 wow fadeInUp"><div class="card-blog"><div class="header"><div class="entry-footer"><div class="post-author">Welcome to the Projects</div><a href="#" class="post-date"></a></div></div><div class="body"><div class="post-title"><a> Share My Knowledge <br> Research Skills <br> Makes More Employable </a></div></div></div></div>',
            1
          ),
          Pt = {
            class:
              "flex flex-col space-y-5 border shadow-md border-green-500 bg-white h-96 rounded-md hover:-mt-1 hover:shadow-lg hover:shadow-green-200 cursor-pointer",
          },
          Ft = {
            class:
              "flex items-center justify-center -mt-6 h-48 rounded-t-lg overflow-hidden",
          },
          Wt = ["src"],
          It = { class: "flex flex-col ml-4" },
          Bt = { class: "text-xl font-medium text-green-600 ml-3 mb-2" },
          Et = { class: "text-base h-18 lg:h-12 text-gray-700 ml-3 mr-3 mb-2" },
          Gt = {
            class: "flex flex-row items-start py-3 px-2 space-x-3 ml-2",
            style: { "padding-bottom": "25px" },
          },
          Rt = ["src"],
          Lt = ["src"],
          Mt = ["src"],
          Vt = { class: "mt-4 hover:underline" },
          Zt = ["href"],
          Xt = (0, r._)(
            "span",
            { class: "mai-chevron-forward text-sm" },
            null,
            -1
          ),
          Tt = ["href"],
          Jt = (0, r._)(
            "span",
            { class: "mai-chevron-forward text-sm" },
            null,
            -1
          );
        function qt(e, t, a, o, n, i) {
          const s = (0, r.up)("Navbar"),
            l = (0, r.up)("router-link"),
            c = (0, r.up)("Footer");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(s),
                (0, r._)("div", ft, [
                  (0, r._)("div", wt, [
                    (0, r._)("div", yt, [
                      (0, r._)("div", xt, [
                        (0, r._)("div", _t, [
                          (0, r._)("nav", kt, [
                            (0, r._)("ul", jt, [
                              (0, r._)("li", Ct, [
                                (0, r.Wm)(
                                  l,
                                  { to: "/" },
                                  {
                                    default: (0, r.w5)(() => [
                                      (0, r.Uk)("Home"),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              Ut,
                            ]),
                          ]),
                          At,
                          Nt,
                        ]),
                      ]),
                    ]),
                  ]),
                  (0, r._)("div", Dt, [
                    (0, r._)("div", zt, [
                      (0, r._)("div", Ot, [
                        St,
                        ((0, r.wg)(!0),
                        (0, r.iD)(
                          r.HY,
                          null,
                          (0, r.Ko)(
                            n.project,
                            (e, t) => (
                              (0, r.wg)(),
                              (0, r.iD)(
                                "div",
                                {
                                  key: e,
                                  class: "col-md-5 col-lg-4 py-5 px-4",
                                },
                                [
                                  (0, r._)("div", Pt, [
                                    (0, r._)("div", Ft, [
                                      (0, r._)(
                                        "img",
                                        {
                                          class: "h-48 w-96 rounded-t-lg",
                                          src: n.project[t].image,
                                        },
                                        null,
                                        8,
                                        Wt
                                      ),
                                    ]),
                                    (0, r._)("div", It, [
                                      (0, r._)("div", Bt, [
                                        (0, r._)(
                                          "a",
                                          null,
                                          (0, bt.zw)(n.project[t].name),
                                          1
                                        ),
                                      ]),
                                      (0, r._)(
                                        "div",
                                        Et,
                                        (0, bt.zw)(n.project[t].content),
                                        1
                                      ),
                                      (0, r._)("div", Gt, [
                                        (0, r._)(
                                          "img",
                                          { src: n.project[t].tech1 },
                                          null,
                                          8,
                                          Rt
                                        ),
                                        (0, r._)(
                                          "img",
                                          { src: n.project[t].tech2 },
                                          null,
                                          8,
                                          Lt
                                        ),
                                        (0, r._)(
                                          "img",
                                          { src: n.project[t].tech3 },
                                          null,
                                          8,
                                          Mt
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  (0, r._)("div", Vt, [
                                    (0, r._)(
                                      "a",
                                      {
                                        href: n.project[t].live,
                                        target: "_blank",
                                        class:
                                          "btn text-lg hover:bg-green-100 hover:underline hover:font-medium",
                                      },
                                      [(0, r.Uk)(" Live "), Xt],
                                      8,
                                      Zt
                                    ),
                                    (0, r._)(
                                      "a",
                                      {
                                        href: n.project[t].code,
                                        target: "_blank",
                                        class:
                                          "btn text-lg hover:bg-purple-100 hover:font-medium",
                                      },
                                      [(0, r.Uk)(" Source Code "), Jt],
                                      8,
                                      Tt
                                    ),
                                  ]),
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                  (0, r.Wm)(c),
                ]),
              ],
              64
            )
          );
        }
        var Kt = {
          name: "Project Page",
          data() {
            return { project: s };
          },
          props: { blog: Array },
          components: { Navbar: S, Services: he, Footer: Me },
        };
        const Ht = (0, c.Z)(Kt, [["render", qt]]);
        var Qt = Ht;
        a(7658);
        const Yt = { class: "" },
          $t = { class: "page-section pt-5", style: {} },
          ea = { class: "container" },
          ta = { "aria-label": "Breadcrumb" },
          aa = { class: "breadcrumb p-0 mb-0 bg-transparent" },
          oa = { class: "breadcrumb-item" },
          ra = { class: "breadcrumb-item" },
          na = (0, r._)(
            "li",
            { class: "breadcrumb-item active" },
            "Projects",
            -1
          ),
          ia = { class: "row" },
          sa = { class: "col-lg-8" },
          la = { class: "blog-single-wrap" },
          ca = { class: "header" },
          da = { class: "post-thumb" },
          ua = ["src"],
          pa = (0, r._)("div", { class: "meta-header" }, null, -1),
          ga = { class: "post-title" },
          ma = (0, r._)("br", null, null, -1),
          ha = { class: "post-meta" },
          va = { class: "post-date" },
          ba = (0, r._)(
            "span",
            { class: "icon", style: { "margin-right": "10px" } },
            [(0, r._)("span", { class: "mai-time-outline" })],
            -1
          ),
          fa = { class: "font-size: 20px;" },
          wa = (0, r._)("br", null, null, -1),
          ya = (0, r._)("br", null, null, -1),
          xa = { class: "margin-top: 20px;" },
          _a = { class: "margin-top: 20px;" },
          ka = { class: "margin-top: 20px;" },
          ja = (0, r._)(
            "div",
            { class: "text-center mt-5" },
            [
              (0, r._)("button", { class: "btn btn-primary" }, [
                (0, r._)(
                  "a",
                  {
                    class: "text-white",
                    href: "https://prmblogs.tistory.com/",
                  },
                  " READ MORE "
                ),
              ]),
            ],
            -1
          ),
          Ca = (0, r._)("div", { class: "post-content" }, null, -1),
          Ua = { class: "col-lg-4" },
          Aa = { class: "widget" },
          Na = (0, r._)(
            "div",
            { class: "widget-box" },
            [
              (0, r._)("form", { action: "#", class: "search-widget" }, [
                (0, r._)("input", {
                  type: "text",
                  class: "form-control",
                  placeholder: "Enter keyword..",
                }),
                (0, r._)(
                  "button",
                  { type: "submit", class: "btn btn-primary btn-block" },
                  " Search "
                ),
              ]),
            ],
            -1
          ),
          Da = { class: "widget-box" },
          za = (0, r._)("h4", { class: "widget-title" }, "Tech", -1),
          Oa = (0, r._)("div", { class: "divider" }, null, -1),
          Sa = { class: "categories" },
          Pa = ["src"],
          Fa = ["src"],
          Wa = ["src"],
          Ia = (0, r._)("br", null, null, -1),
          Ba = (0, r._)("li", null, [(0, r._)("a", null, "FrontEnd")], -1),
          Ea = (0, r._)(
            "li",
            null,
            [(0, r._)("a", null, "Web Application")],
            -1
          ),
          Ga = { class: "widget-box" },
          Ra = (0, r._)("h4", { class: "widget-title" }, "Next Projects", -1),
          La = (0, r._)("div", { class: "divider" }, null, -1),
          Ma = ["onClick"],
          Va = { class: "post-thumb", href: "" },
          Za = ["src"],
          Xa = { class: "content" },
          Ta = { class: "btn text-black post-title" },
          Ja = { class: "meta" },
          qa = { href: "#" },
          Ka = (0, r._)("span", { class: "mai-calendar" }, null, -1);
        function Ha(e, t, a, o, n, i) {
          const s = (0, r.up)("Navbar"),
            l = (0, r.up)("router-link"),
            c = (0, r.up)("Footer");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(s),
                (0, r._)("div", Yt, [
                  (0, r._)("div", $t, [
                    (0, r._)("div", ea, [
                      (0, r._)("nav", ta, [
                        (0, r._)("ul", aa, [
                          (0, r._)("li", oa, [
                            (0, r.Wm)(
                              l,
                              { to: "/" },
                              {
                                default: (0, r.w5)(() => [(0, r.Uk)("Home")]),
                                _: 1,
                              }
                            ),
                          ]),
                          (0, r._)("li", ra, [
                            (0, r.Wm)(
                              l,
                              { to: "/projects" },
                              {
                                default: (0, r.w5)(() => [
                                  (0, r.Uk)("All Projects"),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          na,
                        ]),
                      ]),
                      (0, r._)("div", ia, [
                        (0, r._)("div", sa, [
                          (0, r._)("div", la, [
                            (0, r._)("div", ca, [
                              (0, r._)("div", da, [
                                (0, r._)(
                                  "img",
                                  {
                                    src: n.project[e.$route.params.id].image,
                                    alt: "",
                                  },
                                  null,
                                  8,
                                  ua
                                ),
                              ]),
                              pa,
                            ]),
                            (0, r._)(
                              "h1",
                              ga,
                              (0, bt.zw)(n.project[e.$route.params.id].name),
                              1
                            ),
                            ma,
                            (0, r._)("div", ha, [
                              (0, r._)("div", va, [
                                ba,
                                (0, r._)(
                                  "a",
                                  fa,
                                  (0, bt.zw)(
                                    n.project[e.$route.params.id].content
                                  ),
                                  1
                                ),
                                wa,
                                ya,
                                (0, r._)(
                                  "p",
                                  xa,
                                  (0, bt.zw)(
                                    n.project[e.$route.params.id].content1
                                  ),
                                  1
                                ),
                                (0, r._)(
                                  "p",
                                  _a,
                                  (0, bt.zw)(
                                    n.project[e.$route.params.id].content2
                                  ),
                                  1
                                ),
                                (0, r._)(
                                  "p",
                                  ka,
                                  (0, bt.zw)(
                                    n.project[e.$route.params.id].content3
                                  ),
                                  1
                                ),
                                ja,
                              ]),
                            ]),
                            Ca,
                          ]),
                        ]),
                        (0, r._)("div", Ua, [
                          (0, r._)("div", Aa, [
                            Na,
                            (0, r._)("div", Da, [
                              za,
                              Oa,
                              (0, r._)("ul", Sa, [
                                (0, r._)(
                                  "img",
                                  { src: n.project[e.$route.params.id].tech1 },
                                  null,
                                  8,
                                  Pa
                                ),
                                (0, r._)(
                                  "img",
                                  { src: n.project[e.$route.params.id].tech2 },
                                  null,
                                  8,
                                  Fa
                                ),
                                (0, r._)(
                                  "img",
                                  { src: n.project[e.$route.params.id].tech3 },
                                  null,
                                  8,
                                  Wa
                                ),
                                Ia,
                                Ba,
                                Ea,
                              ]),
                            ]),
                            (0, r._)("div", Ga, [
                              Ra,
                              La,
                              ((0, r.wg)(),
                              (0, r.iD)(
                                r.HY,
                                null,
                                (0, r.Ko)(4, (t, a) =>
                                  (0, r._)(
                                    "div",
                                    {
                                      key: t,
                                      class: "blog-item",
                                      onClick: (t) =>
                                        e.$router.push("/singleproject/" + a),
                                    },
                                    [
                                      (0, r._)("a", Va, [
                                        (0, r._)(
                                          "img",
                                          { src: n.project[a].image },
                                          null,
                                          8,
                                          Za
                                        ),
                                      ]),
                                      (0, r._)("div", Xa, [
                                        (0, r._)("button", Ta, [
                                          (0, r._)(
                                            "a",
                                            null,
                                            (0, bt.zw)(n.project[a].name),
                                            1
                                          ),
                                        ]),
                                        (0, r._)("div", Ja, [
                                          (0, r._)("a", qa, [
                                            Ka,
                                            (0, r.Uk)(
                                              " " +
                                                (0, bt.zw)(
                                                  n.project[a].content
                                                ),
                                              1
                                            ),
                                          ]),
                                        ]),
                                      ]),
                                    ],
                                    8,
                                    Ma
                                  )
                                ),
                                64
                              )),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, r.Wm)(c),
              ],
              64
            )
          );
        }
        var Qa = {
          name: "Single Project Page",
          data() {
            return { project: s };
          },
          props: { blog: Array },
          components: { Navbar: S, Footer: Me },
        };
        const Ya = (0, c.Z)(Qa, [["render", Ha]]);
        var $a = Ya;
        const eo = { class: "hidden lg:block container mt-5" },
          to = { class: "page-banner1" },
          ao = { class: "row justify-content-center align-items-center h-100" },
          oo = { class: "col-md-6" },
          ro = { "aria-label": "Breadcrumb" },
          no = {
            class: "breadcrumb justify-content-center py-0 bg-transparent",
          },
          io = { class: "breadcrumb-item" },
          so = (0, r._)(
            "li",
            { class: "breadcrumb-item active" },
            "AN&Digit",
            -1
          ),
          lo = (0, r._)(
            "h1",
            { class: "text-center" },
            "Personal Projects",
            -1
          );
        function co(e, t, a, o, n, i) {
          const s = (0, r.up)("Navbar"),
            l = (0, r.up)("router-link"),
            c = (0, r.up)("WorkAN"),
            d = (0, r.up)("Footer");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(s),
                (0, r._)("div", eo, [
                  (0, r._)("div", to, [
                    (0, r._)("div", ao, [
                      (0, r._)("div", oo, [
                        (0, r._)("nav", ro, [
                          (0, r._)("ul", no, [
                            (0, r._)("li", io, [
                              (0, r.Wm)(
                                l,
                                { to: "/" },
                                {
                                  default: (0, r.w5)(() => [(0, r.Uk)("Home")]),
                                  _: 1,
                                }
                              ),
                            ]),
                            so,
                          ]),
                        ]),
                        lo,
                      ]),
                    ]),
                  ]),
                ]),
                (0, r.Wm)(c),
                (0, r.Wm)(d),
              ],
              64
            )
          );
        }
        var uo = a.p + "img/logoAN.6ac186d9.png",
          po = a.p + "img/Fiver.83fdbf19.png";
        const go = (e) => (
            (0, r.dD)("data-v-862aa384"), (e = e()), (0, r.Cn)(), e
          ),
          mo = (0, r.uE)(
            '<div class="bg-green-50 page-section pt-5 -mb-5" data-v-862aa384><div class="container" data-v-862aa384><div class="row" data-v-862aa384><div class="col-lg-6 py-3 wow zoomIn" data-v-862aa384><div class="img-place text-center hidden lg:flex" data-v-862aa384><img src="' +
              uo +
              '" alt="" data-v-862aa384></div></div><div class="col-lg-6 p-4" data-v-862aa384><h2 class="title-section text-2xl" data-v-862aa384> What&#39;s <span class="marked" data-v-862aa384>AN&amp;Digit</span></h2><div class="divider" data-v-862aa384></div><div data-v-862aa384><p data-v-862aa384> AN&amp;Digit is a cutting-edge self-employment platform that empowers individuals and businesses to create their personalized portfolio and showcase websites for their projects. Whether you are a creative freelancer, an aspiring entrepreneur, or a seasoned professional, AN&amp;Digit offers an array of services to help you stand out in the digital landscape. </p></div></div></div></div></div>',
            1
          ),
          ho = go(() =>
            (0, r._)(
              "div",
              { class: "bg-green-50 page-section" },
              [
                (0, r._)("div", { class: "container" }, [
                  (0, r._)("div", { class: "row" }, [
                    (0, r._)("div", { class: "col-lg-6 p-4 -mt-9 lg:mt-0" }, [
                      (0, r._)("h2", { class: "title-section text-2xl" }, [
                        (0, r.Uk)(" Services Offered "),
                        (0, r._)("span", { class: "marked" }, "by AN&Digit"),
                      ]),
                      (0, r._)("div", { class: "divider" }),
                      (0, r._)(
                        "p",
                        { class: "mb-4" },
                        " AN&Digit offers a wide range of services, including the development of AI tools, creating showcase websites and portfolios, building APIs, data analysis, predictive analysis, graphic identity design, and creating dashboards or applications using web scraping. For more "
                      ),
                      (0, r._)(
                        "p",
                        { class: "mb-4" },
                        " For more informations, please visit my Fiverr page or contact me directly. "
                      ),
                      (0, r._)(
                        "a",
                        {
                          href: "https://fr.fiverr.com/adrie2_511?up_rollout=true",
                          class: "btn btn-outline ml-2",
                        },
                        " Fiver link > "
                      ),
                    ]),
                    (0, r._)("div", { class: "col-lg-6 py-7 wow zoomIn" }, [
                      (0, r._)("div", { class: "img-place text-center" }, [
                        (0, r._)("img", { src: po, alt: "" }),
                      ]),
                    ]),
                  ]),
                ]),
                (0, r._)(
                  "div",
                  { class: "bg-green-50 page-section pt-5 -mb-5" },
                  [
                    (0, r._)("div", { class: "container" }, [
                      (0, r._)("div", { class: "row" }, [
                        (0, r._)("div", { class: "col-lg-6 p-4" }, [
                          (0, r._)(
                            "h2",
                            { class: "title-section text-2xl" },
                            " FPV Drone Piloting & Video Content Creation "
                          ),
                          (0, r._)("div", { class: "divider" }),
                          (0, r._)("div", null, [
                            (0, r._)(
                              "p",
                              null,
                              " I am highly skilled in FPV (First-Person View) drone piloting, allowing me to capture breathtaking aerial footage from unique perspectives. My passion for drone technology and piloting enables me to create dynamic and captivating videos that leave a lasting impression. "
                            ),
                          ]),
                          (0, r._)("div", null, [
                            (0, r._)(
                              "p",
                              null,
                              " With my expertise in video content creation, I have the ability to produce compelling visual narratives for various purposes. Whether it's creating promotional videos for brands, capturing stunning landscapes for spaces and locations, or developing engaging video content for corporate events, I am committed to delivering impactful videos tailored to your specific needs. "
                            ),
                          ]),
                        ]),
                        (0, r._)("div", { class: "col-lg-6 py-3 wow zoomIn" }, [
                          (0, r._)("div", { class: "text-center" }, [
                            (0, r._)("div", { class: "video-section" }, [
                              (0, r._)("div", { class: "responsive-iframe" }, [
                                (0, r._)("iframe", {
                                  height: "315",
                                  width: "320",
                                  src: "https://www.youtube.com/embed/LBvIAbKweYA",
                                  frameborder: "0",
                                  allowfullscreen: "",
                                }),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ],
              -1
            )
          );
        function vo(e, t, a, o, n, i) {
          return (0, r.wg)(), (0, r.iD)(r.HY, null, [mo, ho], 64);
        }
        var bo = {
          data() {
            return { scrollPosition: 0 };
          },
          methods: {
            handleScroll(e) {
              (this.scrollPosition = e.target.scrollTop),
                this.scrollPosition > 100
                  ? console.log("UP")
                  : console.log("DOWN");
            },
          },
        };
        const fo = (0, c.Z)(bo, [
          ["render", vo],
          ["__scopeId", "data-v-862aa384"],
        ]);
        var wo = fo,
          yo = {
            name: "Andigit",
            data() {
              return {};
            },
            components: { WorkAN: wo, Navbar: S, Footer: Me },
          };
        const xo = (0, c.Z)(yo, [["render", co]]);
        var _o = xo;
        const ko = { class: "justify-content-center" },
          jo = { class: "page_404" },
          Co = { class: "container" },
          Uo = { class: "row" },
          Ao = { class: "col-sm-12" },
          No = { class: "col-sm-10 col-sm-offset-1 text-center" },
          Do = (0, r._)(
            "div",
            { class: "four_zero_four_bg" },
            [(0, r._)("h1", { class: "text-center" }, "404")],
            -1
          ),
          zo = { class: "contant_box_404" },
          Oo = (0, r._)("h3", { class: "h2" }, "Look like you're lost", -1),
          So = (0, r._)(
            "p",
            null,
            "the page you are looking for not avaible!",
            -1
          );
        function Po(e, t, a, o, n, i) {
          const s = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", ko, [
              (0, r._)("section", jo, [
                (0, r._)("div", Co, [
                  (0, r._)("div", Uo, [
                    (0, r._)("div", Ao, [
                      (0, r._)("div", No, [
                        Do,
                        (0, r._)("div", zo, [
                          Oo,
                          So,
                          (0, r.Wm)(
                            s,
                            { to: "/", class: "link_404" },
                            {
                              default: (0, r.w5)(() => [
                                (0, r.Uk)("Go to Home"),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var Fo = {};
        const Wo = (0, c.Z)(Fo, [["render", Po]]);
        var Io = Wo;
        const Bo = { class: "container mt-5" },
          Eo = { class: "page-banner2" },
          Go = { class: "row justify-content-center align-items-center h-100" },
          Ro = { class: "col-md-6" },
          Lo = (0, r._)("nav", { "aria-label": "Breadcrumb" }, null, -1),
          Mo = (0, r._)("h1", { class: "text-center" }, "Login Page", -1),
          Vo = { class: "input-group flex-nowrap mt-5" },
          Zo = (0, r._)(
            "span",
            { class: "input-group-text", id: "addon-wrapping" },
            "#",
            -1
          ),
          Xo = { class: "input-group flex-nowrap mt-3" },
          To = (0, r._)(
            "span",
            { class: "input-group-text", id: "addon-wrapping" },
            "#",
            -1
          ),
          Jo = { class: "text-center" },
          qo = { class: "text-center mt-4" },
          Ko = { class: "px-4" };
        function Ho(e, t, a, n, i, s) {
          const l = (0, r.up)("Navbar"),
            c = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(l),
                (0, r._)("div", Bo, [
                  (0, r._)("div", Eo, [
                    (0, r._)("div", Go, [
                      (0, r._)("div", Ro, [
                        Lo,
                        Mo,
                        (0, r._)("div", Vo, [
                          Zo,
                          (0, r.wy)(
                            (0, r._)(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  t[0] || (t[0] = (e) => (i.email = e)),
                                type: "email",
                                class: "form-control",
                                placeholder: "Email",
                                "aria-label": "Username",
                                "aria-describedby": "addon-wrapping",
                              },
                              null,
                              512
                            ),
                            [[o.nr, i.email]]
                          ),
                        ]),
                        (0, r._)("div", Xo, [
                          To,
                          (0, r.wy)(
                            (0, r._)(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  t[1] || (t[1] = (e) => (i.password = e)),
                                type: "password",
                                class: "form-control",
                                placeholder: "Password",
                                "aria-label": "password",
                                "aria-describedby": "addon-wrapping",
                              },
                              null,
                              512
                            ),
                            [[o.nr, i.password]]
                          ),
                        ]),
                        (0, r._)("div", Jo, [
                          (0, r._)(
                            "button",
                            {
                              onClick:
                                t[2] ||
                                (t[2] = (...e) => s.login && s.login(...e)),
                              type: "button",
                              class:
                                "btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md",
                            },
                            " Login "
                          ),
                        ]),
                        (0, r._)("div", qo, [
                          (0, r._)("p", Ko, [
                            (0, r.Uk)(" Don't have an account?"),
                            (0, r.Wm)(
                              c,
                              { to: "/signup" },
                              {
                                default: (0, r.w5)(() => [
                                  (0, r.Uk)(" Signup"),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              64
            )
          );
        }
        var Qo = a(1509),
          Yo =
            (a(5363),
            a(9476),
            {
              name: "Login",
              data() {
                return { email: "", password: "", isSignin: !1 };
              },
              components: { Navbar: S },
              methods: {
                login() {
                  Qo.Z.auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(
                      (e) => {
                        alert("Login Successfully^^!!"),
                          this.$router.replace("dashboard");
                      },
                      function (e) {
                        alert("에러 : " + e.message);
                      }
                    );
                },
                signout() {
                  Qo.Z.auth()
                    .signOut()
                    .then(() => {})
                    .catch((e) => {
                      console.log(e);
                    });
                },
              },
            });
        const $o = (0, c.Z)(Yo, [["render", Ho]]);
        var er = $o,
          tr =
            "data:image/png;base64,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";
        const ar = { class: "container mt-5" },
          or = { class: "page-banner2" },
          rr = { class: "row justify-content-center align-items-center h-100" },
          nr = { class: "col-md-6" },
          ir = (0, r._)("nav", { "aria-label": "Breadcrumb" }, null, -1),
          sr = (0, r._)("h1", { class: "text-center" }, "Registration", -1),
          lr = { class: "input-group flex-nowrap mt-3" },
          cr = (0, r._)(
            "span",
            { class: "input-group-text", id: "addon-wrapping" },
            "#",
            -1
          ),
          dr = { class: "input-group flex-nowrap mt-3" },
          ur = (0, r._)(
            "span",
            { class: "input-group-text", id: "addon-wrapping" },
            "*",
            -1
          ),
          pr = { class: "google text-center mt-5" },
          gr = { class: "google-button" },
          mr = (0, r._)(
            "img",
            {
              class: "google-icon mx-2",
              href: "#",
              src: tr,
              alt: "Image alt",
              style: { width: "25px", height: "25px" },
            },
            null,
            -1
          ),
          hr = { class: "text-center" },
          vr = { class: "text-center mt-4" },
          br = { class: "px-4" };
        function fr(e, t, a, n, i, s) {
          const l = (0, r.up)("Navbar"),
            c = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(l),
                (0, r._)("div", ar, [
                  (0, r._)("div", or, [
                    (0, r._)("div", rr, [
                      (0, r._)("div", nr, [
                        ir,
                        sr,
                        (0, r._)("div", lr, [
                          cr,
                          (0, r.wy)(
                            (0, r._)(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  t[0] || (t[0] = (e) => (i.email = e)),
                                type: "email",
                                class: "form-control",
                                placeholder: "Email",
                                "aria-label": "Email",
                                "aria-describedby": "addon-wrapping",
                              },
                              null,
                              512
                            ),
                            [[o.nr, i.email]]
                          ),
                        ]),
                        (0, r._)("div", dr, [
                          ur,
                          (0, r.wy)(
                            (0, r._)(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  t[1] || (t[1] = (e) => (i.password = e)),
                                type: "password",
                                class: "form-control",
                                placeholder: "Password",
                                "aria-label": "Password",
                                "aria-describedby": "addon-wrapping",
                              },
                              null,
                              512
                            ),
                            [[o.nr, i.password]]
                          ),
                        ]),
                        (0, r._)("div", pr, [
                          (0, r._)("div", gr, [
                            mr,
                            (0, r._)(
                              "button",
                              {
                                onClick:
                                  t[2] ||
                                  (t[2] = (...e) =>
                                    s.googleSignIn && s.googleSignIn(...e)),
                                class: "btn-primary google-word",
                              },
                              " Continue with Google "
                            ),
                          ]),
                        ]),
                        (0, r._)("div", hr, [
                          (0, r._)(
                            "button",
                            {
                              onClick:
                                t[3] ||
                                (t[3] = (...e) => s.signUp && s.signUp(...e)),
                              type: "button",
                              class:
                                "btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md",
                            },
                            " Sign Up "
                          ),
                        ]),
                        (0, r._)("div", vr, [
                          (0, r._)("p", br, [
                            (0, r.Uk)(" Don't have an account? "),
                            (0, r.Wm)(
                              c,
                              { to: "/login" },
                              {
                                default: (0, r.w5)(() => [
                                  (0, r.Uk)("Start Now"),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              64
            )
          );
        }
        a(1609);
        var wr = {
          name: "signUp",
          data() {
            return { email: "", password: "", username: "", alertBox: !1 };
          },
          components: { Navbar: S },
          methods: {
            signUp() {
              Qo.Z.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                  (e) => {
                    alert("Registration Successfully^^!!"),
                      this.$router.replace("login");
                  },
                  function (e) {
                    alert("Error : " + e.message);
                  }
                );
            },
            googleSignIn: function () {
              let e = new Qo.Z.auth.GoogleAuthProvider();
              Qo.Z.auth()
                .signInWithPopup(e)
                .then((e) => {
                  alert("Registration Successfully^^!!"),
                    this.$router.replace("login");
                  let t = e.credential.accessToken,
                    a = e.user;
                  console.log(t), console.log(a);
                })
                .catch((e) => {
                  console.log(e);
                });
            },
          },
        };
        const yr = (0, c.Z)(wr, [["render", fr]]);
        var xr = yr;
        const _r = { class: "container mt-5" },
          kr = { class: "page-banner1" },
          jr = { class: "row justify-content-center align-items-center h-100" },
          Cr = { class: "col-md-6" },
          Ur = { "aria-label": "Breadcrumb" },
          Ar = {
            class: "breadcrumb justify-content-center py-0 bg-transparent",
          },
          Nr = { class: "breadcrumb-item" },
          Dr = (0, r._)(
            "li",
            { class: "breadcrumb-item active" },
            "Dashboard",
            -1
          ),
          zr = (0, r._)("h1", { class: "text-center" }, "Login Info", -1),
          Or = { id: "user-email", class: "text-center mt-5" },
          Sr = { class: "text-center mt-4" };
        function Pr(e, t, a, o, n, i) {
          const s = (0, r.up)("Navbar"),
            l = (0, r.up)("router-link");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(s),
                (0, r._)("div", _r, [
                  (0, r._)("div", kr, [
                    (0, r._)("div", jr, [
                      (0, r._)("div", Cr, [
                        (0, r._)("nav", Ur, [
                          (0, r._)("ul", Ar, [
                            (0, r._)("li", Nr, [
                              (0, r.Wm)(
                                l,
                                { to: "/" },
                                {
                                  default: (0, r.w5)(() => [(0, r.Uk)("Home")]),
                                  _: 1,
                                }
                              ),
                            ]),
                            Dr,
                          ]),
                        ]),
                        zr,
                        (0, r._)("h4", Or, (0, bt.zw)(n.isEmail), 1),
                        (0, r._)("div", Sr, [
                          (0, r._)(
                            "button",
                            {
                              onClick:
                                t[0] ||
                                (t[0] = (...e) => i.signout && i.signout(...e)),
                              class: "btn btn-primary mt-5 px-4",
                            },
                            " Logout "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              64
            )
          );
        }
        var Fr = {
          data() {
            return { email: "", password: "", isEmail: "" };
          },
          created: () => {
            var e = Qo.Z.auth().currentUser;
            console.log(e),
              Qo.Z.auth().onAuthStateChanged(function (e) {
                e && (this.isEmail, e.email);
              });
          },
          components: { Navbar: S },
          methods: {
            signout() {
              Qo.Z.auth()
                .signOut()
                .then((e) => {
                  alert("Logout Successfully"), this.$router.replace("/");
                })
                .catch((e) => {
                  alert("Error : " + err.message);
                });
            },
          },
        };
        const Wr = (0, c.Z)(Fr, [["render", Pr]]);
        var Ir = Wr;
        const Br = { class: "container mt-5" },
          Er = { class: "page-banner2" },
          Gr = { class: "row justify-content-center align-items-center h-100" },
          Rr = { class: "col-md-6" },
          Lr = (0, r._)("nav", { "aria-label": "Breadcrumb" }, null, -1),
          Mr = (0, r._)("h1", { class: "text-center" }, "Upload Page", -1),
          Vr = { class: "input-group flex-nowrap mt-3" },
          Zr = (0, r._)(
            "span",
            { class: "input-group-text", id: "addon-wrapping" },
            "@",
            -1
          ),
          Xr = { class: "input-group flex-nowrap mt-3" },
          Tr = (0, r._)(
            "span",
            { class: "input-group-text", id: "addon-wrapping" },
            "@",
            -1
          ),
          Jr = (0, r.uE)(
            '<div class="input-group mt-4"><label class="input-group-text" for="inputGroupSelect01">Categories</label><select class="form-select" id="inputGroupSelect01" aria-describedby="inputGroup-sizing-lg"><option selected>Please Select the Category</option><option value="1">VueJs</option><option value="2">Blockchain</option><option value="3">FrontEnd</option></select></div>',
            1
          ),
          qr = { class: "input-group flex-nowrap mt-5" },
          Kr = (0, r._)(
            "span",
            { class: "input-group-text", id: "addon-wrapping" },
            "@",
            -1
          ),
          Hr = { class: "input-group flex-nowrap mt-3" },
          Qr = (0, r._)(
            "span",
            { class: "input-group-text", id: "addon-wrapping" },
            "@",
            -1
          ),
          Yr = (0, r.uE)(
            '<div class="input-group mt-3"><input type="file" class="form-control" id="inputGroupFile02"><label class="input-group-text" for="inputGroupFile02">Upload</label></div><div class="cont mt-3"><textarea id="my-text" rows="15" placeholder="Content"></textarea></div>',
            2
          ),
          $r = { class: "text-center" },
          en = (0, r._)("div", { class: "text-center mt-4" }, null, -1);
        function tn(e, t, a, n, i, s) {
          const l = (0, r.up)("Navbar");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(l),
                (0, r._)("div", Br, [
                  (0, r._)("div", Er, [
                    (0, r._)("div", Gr, [
                      (0, r._)("div", Rr, [
                        Lr,
                        Mr,
                        (0, r._)("div", Vr, [
                          Zr,
                          (0, r.wy)(
                            (0, r._)(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  t[0] || (t[0] = (t) => (e.email = t)),
                                type: "username",
                                class: "form-control",
                                placeholder: "username",
                                "aria-label": "username",
                                "aria-describedby": "inputGroup-sizing-lg",
                              },
                              null,
                              512
                            ),
                            [[o.nr, e.email]]
                          ),
                        ]),
                        (0, r._)("div", Xr, [
                          Tr,
                          (0, r.wy)(
                            (0, r._)(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  t[1] || (t[1] = (t) => (e.email = t)),
                                type: "",
                                class: "form-control",
                                placeholder: "Profile Image",
                                "aria-label": "username",
                                "aria-describedby": "inputGroup-sizing-lg",
                              },
                              null,
                              512
                            ),
                            [[o.nr, e.email]]
                          ),
                        ]),
                        Jr,
                        (0, r._)("div", qr, [
                          Kr,
                          (0, r.wy)(
                            (0, r._)(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  t[2] || (t[2] = (t) => (e.email = t)),
                                type: "username",
                                class: "form-control",
                                placeholder: "Title",
                                "aria-label": "username",
                                "aria-describedby": "inputGroup-sizing-lg",
                              },
                              null,
                              512
                            ),
                            [[o.nr, e.email]]
                          ),
                        ]),
                        (0, r._)("div", Hr, [
                          Qr,
                          (0, r.wy)(
                            (0, r._)(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  t[3] || (t[3] = (t) => (e.email = t)),
                                type: "username",
                                class: "form-control",
                                placeholder: "Introduction",
                                "aria-label": "username",
                                "aria-describedby": "inputGroup-sizing-lg",
                              },
                              null,
                              512
                            ),
                            [[o.nr, e.email]]
                          ),
                        ]),
                        Yr,
                        (0, r._)("div", $r, [
                          (0, r._)(
                            "button",
                            {
                              onClick:
                                t[4] ||
                                (t[4] = (...t) => e.signUp && e.signUp(...t)),
                              type: "button",
                              class:
                                "btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md",
                            },
                            " Upload "
                          ),
                        ]),
                        en,
                      ]),
                    ]),
                  ]),
                ]),
              ],
              64
            )
          );
        }
        var an = { name: "Upload", components: { Navbar: S } };
        const on = (0, c.Z)(an, [["render", tn]]);
        var rn = on;
        const nn = [
            { path: "/", component: ot },
            { path: "/about", component: vt },
            { path: "/projects", component: Qt },
            { path: "/contact", component: et },
            { path: "/singleproject/:id", component: $a },
            { path: "/login", component: er },
            { path: "/signup", component: xr },
            { path: "/dashboard", component: Ir },
            { path: "/upload", component: rn },
            { path: "/andigit", component: _o },
            { path: "/:catchAll(.*)*", name: "PageNotFound", component: Io },
          ],
          sn = (0, p.p7)({
            history: (0, p.PO)(),
            routes: nn,
            scrollBehavior(e, t, a) {
              return { top: 0 };
            },
            linkActiveClass: "vue-school-active-link",
          });
        var ln = sn,
          cn = a(5302),
          dn = a(7387),
          un = a.n(dn);
        const pn = {
            apiKey: "AIzaSyDxCzhSPURwG3C0UP1xYIAeR9VWE8FWdXk",
            authDomain: "personal-portfolio-2102f.firebaseapp.com",
            databaseURL:
              "https://personal-portfolio-2102f-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "personal-portfolio-2102f",
            storageBucket: "personal-portfolio-2102f.appspot.com",
            messagingSenderId: "958453690559",
            appId: "1:958453690559:web:1832d2bdc392130474960a",
            measurementId: "G-224X2F5XH8",
          },
          gn = Qo.Z.initializeApp(pn),
          mn = (gn.firestore(), Qo.Z.auth(), un());
        window.$ = mn;
        const hn = (0, o.ri)(u);
        hn.use(cn.tc), hn.use(ln), hn.mount("#app");
      },
    },
    t = {};
  function a(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var n = (t[o] = { exports: {} });
    return e[o].call(n.exports, n, n.exports, a), n.exports;
  }
  (a.m = e),
    (function () {
      var e = [];
      a.O = function (t, o, r, n) {
        if (!o) {
          var i = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (o = e[d][0]), (r = e[d][1]), (n = e[d][2]);
            for (var s = !0, l = 0; l < o.length; l++)
              (!1 & n || i >= n) &&
              Object.keys(a.O).every(function (e) {
                return a.O[e](o[l]);
              })
                ? o.splice(l--, 1)
                : ((s = !1), n < i && (i = n));
            if (s) {
              e.splice(d--, 1);
              var c = r();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        n = n || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
        e[d] = [o, r, n];
      };
    })(),
    (function () {
      a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return a.d(t, { a: t }), t;
      };
    })(),
    (function () {
      a.d = function (e, t) {
        for (var o in t)
          a.o(t, o) &&
            !a.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      a.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      a.p = "/";
    })(),
    (function () {
      var e = { 143: 0 };
      a.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, o) {
          var r,
            n,
            i = o[0],
            s = o[1],
            l = o[2],
            c = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in s) a.o(s, r) && (a.m[r] = s[r]);
            if (l) var d = l(a);
          }
          for (t && t(o); c < i.length; c++)
            (n = i[c]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return a.O(d);
        },
        o = (self["webpackChunk_2023"] = self["webpackChunk_2023"] || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var o = a.O(void 0, [998], function () {
    return a(4799);
  });
  o = a.O(o);
})();
//# sourceMappingURL=app.66520c90.js.map
