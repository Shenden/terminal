import { Apple } from "./assets/apple.jsx";
import { Google } from "./assets/google.jsx";
import { Nova } from "./assets/nova.jsx";

//gör detta till en funktion för att kunna passera targetClass props
export const Data = (targetClass) => ({
  findClass: targetClass, //prop that adds the class
  element: [
    {
      name: "blue-active",
      title: "blue are wide!",
      text: "So about blue - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: Apple,
      id: 1,
    },
    {
      name: "green-active",
      title: "green is glorius!",
      text: "So about green - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: Google,
      id: 2,
    },
    {
      name: "red-active",
      title: "red is glorius!",
      text: "text about red and love. Katrin K, you're the love of my life and I miss you everyday...",
      icon: Nova,
      id: 3,
    },
  ],
});
