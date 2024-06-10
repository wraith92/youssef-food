import { useEffect } from "react";
import useWindowSize from "../../useWindowSize";
import { stickyNav } from "../../utils";
import DefaultHeader from "./DefaultHeader";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
const Header = ({ header, openSearchModal }) => {
  useEffect(() => {
    stickyNav();
  }, []);
  const { width } = useWindowSize();
  useEffect(() => {
    const headers = document.querySelectorAll(".header-navigation");
    headers.forEach((header) => {
      if (width <= 1199) {
        header.classList.add("breakpoint-on");
      } else {
        header.classList.remove("breakpoint-on");
      }
      // toggle
      const toggleBtn = header.getElementsByClassName("navbar-toggler")[0],
        overlay = header.getElementsByClassName("nav-overlay")[0],
        menu = header.getElementsByClassName("nav-menu")[0];
      toggleBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        menu.classList.add("menu-on");
      });
      overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
        menu.classList.remove("menu-on");
      });
    });
  }, [width]);

  switch (header) {
    case 1:
      return <Header1 openSearchModal={openSearchModal} />;
    case 2:
      return <Header2 openSearchModal={openSearchModal} />;
    case 3:
      return <Header3 openSearchModal={openSearchModal} />;

    default:
      return <DefaultHeader openSearchModal={openSearchModal} />;
  }
};
export default Header;
