import sceneSvg from "./scene.svg";
import sceneHtml from "./scene.html";

export default {
  init() {
    document.querySelector('[data-scene="scene4"]').innerHTML = sceneHtml;
    document.querySelector('[data-scene="scene4"] .svg').innerHTML = sceneSvg;

    document.querySelector("#lalineag").addEventListener("click", () => {
      window.open("https://developer.salesforce.com/docs/component-library/documentation/lwc");
    });
    document.querySelector("#book1").addEventListener("click", () => {
      window.open("https://developer.salesforce.com/docs/component-library/documentation/lwc");
    });
    document.querySelector("#book2").addEventListener("click", () => {
      window.open("https://developer.salesforce.com/docs/component-library/documentation/lwc");
    });
    document.querySelector("#book3").addEventListener("click", () => {
      window.open(
        "https://addyosmani.com/resources/essentialjsdesignpatterns/book/"
      );
    });
  },
};
