import { useState } from "react";
import { Wrapper } from "./Wrapper";
import { List } from "./List";
import { Portfoliodata } from "../Portfoliodata";
import { motion } from "framer-motion";

export const Portfolio = () => {
  // consts adding some effects to the rendered div
  const randomRotate = Math.floor(Math.random() * 31) - 15;
  const randomDuration = Math.random() * 0.666;

  const [showElement, setShowElement] = useState(null);

  // '?' means optional chaining, which prevents errors if the state is null/empty. “Only try to read element if showElement exists.”
  //showElement?.element↑ - think of it as "only if it exists" Currently before mosueenter, the element & icon dont exist
  const activeItem = showElement?.element.find(
    (item) => item.name === showElement.findClass,
  );

  console.log("loggar ut detta:" + showElement?.findClass);
  //console.log("loggar ut detta:" + showElement?.element[0].title);

  //rendera ut Ikon komponent
  const Icon = activeItem?.icon;

  //recieve props passed from List.jsx
  function handleShowElem(targetClass) {
    setShowElement(Portfoliodata(targetClass)); //get targetClass props passed from Portfoliodata.js
  }

  function handleRemoveElem() {
    setShowElement(null);
  }

  return (
    <>
      <h1>.terminal</h1>
      <Wrapper
        className="wrapper"
        lists={
          <motion.ul
            variants={{
              visible: { transition: { staggerChildren: 0.4 } },
            }}
            initial="hidden"
            animate="visible"
            className="main-nav"
          >
            <List
              targetClass="info-dimensional-active"
              listTitle="Interdimensional"
              handleEnter={handleShowElem}
              handleLeave={handleRemoveElem}
            />
            <List
              targetClass="info-galactic-active"
              listTitle="Galactic"
              handleEnter={handleShowElem}
              handleLeave={handleRemoveElem}
            />
            <List
              targetClass="info-universal-active"
              listTitle="Universal"
              handleEnter={handleShowElem}
              handleLeave={handleRemoveElem}
            />
            <List
              targetClass="info-nova-active"
              listTitle="Supernova"
              handleEnter={handleShowElem}
              handleLeave={handleRemoveElem}
            />
          </motion.ul>
        }
      >
        {activeItem && (
          <motion.div
            // to be used with animationpresence wrapped exit={{ opacity: 0, transition: { duration: 0.071 } }}
            variants={{
              hidden: { scale: 1.4 },
              visible: {
                scale: 1,
                transition: { duration: 0.15 },
              },
            }}
            initial="hidden"
            animate="visible"
            //exit={{ opacity: 1, scale: 1 }}
            className={`info ${showElement.findClass}`}
            style={{
              animationDuration: `${randomDuration}s`,
              rotate: `${randomRotate}deg`,
            }}
          >
            <header>
              <div className="icon-wrap">{Icon && <Icon />}</div>
              <h2>{activeItem.title}</h2>
              <div></div>
            </header>
            <div className="info-content">
              <h4>A {activeItem.title} story... </h4>
              <p>{activeItem.text}</p>
            </div>
          </motion.div>
        )}
      </Wrapper>
    </>
  );
};
