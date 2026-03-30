import { useState } from "react";
import { Lists } from "./Lists";
import { Wrapper } from "./Wrapper";
import { Dimension } from "../assets/dimension";
import { Galaxy } from "./assets/galaxy.jsx";
import { Universe } from "../assets/Universe";
import { Nova } from "../assets/nova";

export const Terminal = () => {
  // consts adding some effects to the rendered element
  const randomRotate = Math.floor(Math.random() * 31) - 15;
  const randomDuration = Math.random() * 0.5;

  const [activeClass, setActiveClass] = useState();
  const [activeListTitle, setActiveListTitle] = useState();

  //set icons. this will be fixed as part of refactor
  let icon;
  if (activeClass === "info-dimensional info-dimensional-active") {
    icon = <Dimension />;
  } else if (activeClass === "info-galactic info-galactic-active") {
    icon = <Galaxy />;
  } else if (activeClass === "info-universal info-universal-active") {
    icon = <Universe />;
  } else if (activeClass === "info-nova info-nova-active") {
    icon = <Nova />;
  }

  //tar emot listClass/listTitle från Lists.jsx
  function handleActiveList(listClass, ListTitle) {
    setActiveClass(listClass);
    setActiveListTitle(ListTitle);
  }

  function handleNotActiveList() {
    setActiveClass("");
  }
  return (
    <>
      <h1>.terminal</h1>
      <Wrapper
        className="wrapper"
        lists={
          <ul className="main-nav">
            <Lists
              target={"info-dimensional"}
              listTitle="Interdimensional"
              isActive="info-dimensional-active"
              handleEnter={handleActiveList}
              handleLeave={handleNotActiveList}
            />
            <Lists
              isActive="info-galactic-active"
              target="info-galactic"
              listTitle={"Galactic"}
              handleEnter={handleActiveList}
              handleLeave={handleNotActiveList}
            />
            <Lists
              isActive="info-universal-active"
              target="info-universal"
              listTitle="Universal"
              handleEnter={handleActiveList}
              handleLeave={handleNotActiveList}
            />
            <Lists
              isActive="info-nova-active"
              target="info-nova"
              listTitle="Supernova"
              handleEnter={handleActiveList}
              handleLeave={handleNotActiveList}
            />
          </ul>
        }
      >
        {activeClass && (
          <div
            className={`info ${activeClass}`}
            style={{
              animationDuration: `${randomDuration}s`,
              rotate: `${randomRotate}deg`,
            }}
          >
            <header>
              <div className="icon-wrap"> {icon}</div>
              <h2>{activeListTitle}</h2>
              <div></div>
            </header>
            <div className="info-content">
              <h4>A {activeListTitle} story... </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores aspernatur perferendis, dolor nostrum eveniet
                quaerat, unde nobis quisquam distinctio, provident maxime quae?
                Dolores maxime ipsam animi ducimus perspiciatis vel minima!
              </p>
            </div>
          </div>
        )}
      </Wrapper>
    </>
  );
};
