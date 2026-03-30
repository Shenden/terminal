import { Dimension } from "./assets/dimension";
import { Galaxy } from "./assets/galaxy.jsx";
import { Universe } from "./assets/Universe.jsx";
import { Nova } from "./assets/nova.jsx";

//gör detta till en funktion för att kunna passera targetClass props
export const Portfoliodata = (targetClass) => ({
  findClass: targetClass, //prop that adds the class
  element: [
    {
      name: "info-dimensional-active",
      title: "Interdimensional",
      text: "Dimensions - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: Dimension,
      id: 1,
    },
    {
      name: "info-galactic-active",
      title: "Galactic",
      text: "Galaxies - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: Galaxy,
      id: 2,
    },
    {
      name: "info-universal-active",
      title: "Universal",
      text: "Universe - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: Universe,
      id: 3,
    },
    {
      name: "info-nova-active",
      title: "Supernova",
      text: "supernovas - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. The shoelace is always yours, K",
      icon: Nova,
      id: 4,
    },
  ],
});
