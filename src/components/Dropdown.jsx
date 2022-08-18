import MenuItems from "./MenuItems";
import "./Dropdown.css";

const Dropdown = ({ submenus, dropdown, depthlevel }) => {
  depthlevel = depthlevel + 1;
  const dropdownClass = depthlevel > 1 ? "" : "dropdown-submenu";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => {
        return (
          <MenuItems items={submenu} key={index} depthLevel={depthlevel} />
        );
      })}
    </ul>
  );
};

export default Dropdown;
