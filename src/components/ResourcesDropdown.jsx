import "./Dropdown.css";
import { Link } from "react-router-dom";
import ResourcesDropdownItems from "./DropdownItems";
import { useState } from "react";

const ResourcesDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {ResourcesDropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ResourcesDropdown;
