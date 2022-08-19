import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import "./MenuItems.css";
import { NavLink } from "react-router-dom";

const MenuItems = ({ items, depthLevel, path }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  const onMouseEnter = () => {
    window.innerWidth > 560 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 560 && setDropdown(false);
  };
  return (
    <li
      className="menu-items menus"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title} {depthLevel > 0 ? "" : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        // <a href="/">{items.title}</a>
        <a href={`/${items.title}`}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
