export const Lists = ({
  listTitle,
  target,
  isActive,
  handleEnter,
  handleLeave,
}) => {
  //listClass som activeClass får som value.
  const listClass = `${target} ${isActive}`;

  /*  //const [activeClass, setActiveClass] = useState();

  function handleActiveList() {
    setActiveClass(listClass); 
    //istället för använda listClass på detta vis, så tar vi emot den i Terminal.jsx - där funktionen handleActiveList har parameter. Vi skickar med den härifrån i handleList prop satt på onClick/mouseEneter (som är vår funktion triggad i Terminal.jsx). Samma för listTitle eftersom Terminal.jsx vill jag använda den längst ner i en <h4> där jag renderar ut de enskilda elementen

  }
 */
  return (
    <>
      <li>
        <a
          //skickar listClass, listTitle och tar emot i Terminal.jsx
          onMouseEnter={() => handleEnter(listClass)}
          onMouseLeave={handleLeave}
          href="#"
        >
          {listTitle}
        </a>
      </li>
    </>
  );
};
