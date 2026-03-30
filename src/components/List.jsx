import { useState, useEffect } from "react";

export const List = ({ targetClass, listTitle, handleEnter, handleLeave }) => {
  const [title, setTitle] = useState("");

  //Adding a typewrite like effect to my list links...
  useEffect(() => {
    let index = 0;
    setTitle(""); //reset it back to empty once rendered

    const interval = setInterval(() => {
      index++;
      if (index >= listTitle.length) {
        clearInterval(interval);
      }
      setTitle(listTitle.slice(0, index)); //show from pos 0 to index(full word)
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [listTitle]); //Dependecy/re-render everytime we update the listTitle..

  return (
    <li>
      <a
        href="#"
        onMouseEnter={() => handleEnter(targetClass, listTitle)}
        onMouseLeave={handleLeave}
      >
        {title}
      </a>
    </li>
  );
};
