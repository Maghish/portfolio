import { useState } from "react";

import GetIconValue from "../hooks/GetIconValue";

import Navbar from "../components/Navbar";

function Home() {
  const [hovering, setHovering] = useState(null);

  const manageHover = (e: any) => {
    setHovering(e.target.id);
  };

  return (
    <>
      <Navbar />
      <div className="p-9 px-auto sm:px-12 md:px-14" id="body">
        <div className="pl-auto sm:pl-7">
          <p className="text-black font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hello, I'm Maghish
          </p>
          <p className="text-stone-700 font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl">
            MERN Stack Developer | Full Stack Developer
          </p>
        </div>
        <p className="mt-16 font-inter">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          beatae explicabo doloribus voluptatem aut error atque consequuntur
          amet perferendis, quos sit tempora delectus expedita unde recusandae
          modi? Eveniet sint sunt quod earum veritatis quo quaerat ratione dicta
          alias error, necessitatibus ipsum cum numquam itaque? Ab facere animi
          eveniet explicabo ducimus, saepe, debitis ad fugiat mollitia aut
          quibusdam impedit itaque porro cumque placeat tempora tenetur rem?
        </p>

        <div className="mt-7">
          <div>
            <p className="text-2xl font-mono text-black">Tech Stack: </p>
            {/* mongodb,express,react,nodejs,firebase,vite,tailwind,django,python,html,css,javascript,graphql,vercel,jest,md,vscode,git,docker,github */}
            <div className="flex flex-col mt-5">
              <div className="flex flex-row mb-1">
                <img
                  id="icon-mongodb"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=mongodb&theme=dark"
                ></img>
                <img
                  id="icon-express"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=express&theme=dark"
                ></img>
                <img
                  id="icon-react"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=react&theme=dark"
                ></img>
                <img
                  id="icon-nodejs"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=nodejs&theme=dark"
                ></img>
              </div>
              <div className="flex flex-row mb-1">
                <img
                  id="icon-firebase"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=firebase&theme=dark"
                ></img>
                <img
                  id="icon-vite"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=vite&theme=dark"
                ></img>
                <img
                  id="icon-tailwind"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=tailwind&theme=dark"
                ></img>
                <img
                  id="icon-django"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=django&theme=dark"
                ></img>
              </div>
              <div className="flex flex-row mb-1">
                <img
                  id="icon-python"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=python&theme=dark"
                ></img>
                <img
                  id="icon-html"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=html&theme=dark"
                ></img>
                <img
                  id="icon-css"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=css&theme=dark"
                ></img>
                <img
                  id="icon-javascript"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=javascript&theme=dark"
                ></img>
              </div>
              <div className="flex flex-row mb-1">
                <img
                  id="icon-graphql"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=graphql&theme=dark"
                ></img>
                <img
                  id="icon-vercel"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=vercel&theme=dark"
                ></img>
                <img
                  id="icon-jest"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=jest&theme=dark"
                ></img>
                <img
                  id="icon-md"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=md&theme=dark"
                ></img>
              </div>
              <div className="flex flex-row mb-1">
                <img
                  id="icon-vscode"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=vscode&theme=dark"
                ></img>
                <img
                  id="icon-git"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=git&theme=dark"
                ></img>
                <img
                  id="icon-docker"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=docker&theme=dark"
                ></img>
                <img
                  id="icon-github"
                  onMouseEnter={manageHover}
                  className="mr-1"
                  src="https://skillicons.dev/icons?i=github&theme=dark"
                ></img>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default Home;
