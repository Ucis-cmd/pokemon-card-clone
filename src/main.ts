import "./style.css";

import { musicCardData } from "./musicCardData";
import { renderHomePage } from "./homePage";
import { renderCarouselPage } from "./carouselPage";
import { renderPackPage } from "./packPage";

const app = document.getElementById("app");
const nav = document.getElementById("nav");

const routes = {
  "/": {
    linkLabel: "Home",
    content: renderHomePage(musicCardData),
  },
  "/carousel": {
    linkLabel: "Carousel",
    content: renderCarouselPage(musicCardData),
  },
  "/pack" : {
    linkLabel: "Open pack",
    content: renderPackPage(musicCardData),
  }
};

const renderNavLinks = () => {
  Object.keys(routes).forEach((route) => {
    const navELement = document.createElement("a");
    const listElement = document.createElement("li");
    navELement.href = route;
    navELement.innerText = routes[route as keyof typeof routes].linkLabel;
    nav?.appendChild(listElement);
    listElement.appendChild(navELement);
  });
};

const renderContent = (route: keyof typeof routes) => {
  if (app) {
    app.innerHTML = "";
    app.appendChild(routes[route as keyof typeof routes].content);
  }
};

const navigate = (e: MouseEvent) => {
  const target = e.target as HTMLAnchorElement;
  const route = target.pathname;
  window.history.pushState({}, "", route);
  renderContent(route as keyof typeof routes);
};

const registerNavLinks = () => {
  nav?.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target) {
      const { href } = e.target as HTMLLinkElement;
      window.history.pushState({}, "", href);
      navigate(e);
    }
  });
};

const registerBrowserBackAndForth = () => {
  window.onpopstate = function () {
    const route = window.location.pathname;
    renderContent(route as keyof typeof routes);
  };
};

const renderInitialPage = () => {
  const route = window.location.pathname;
  renderContent(route as keyof typeof routes);
};

(function startUp() {
  renderNavLinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
})();
