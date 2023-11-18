import NavBarItem from "./NavBarItem";

const NavBarMenu = () => {
  return (
    <div className="flex flex-row gap-9 max-lg:hidden">
      <NavBarItem label="Home" />
      <NavBarItem label="Series" />
      <NavBarItem label="Films" />
      <NavBarItem label="New & Popular" />
      <NavBarItem label="My List" />
      <NavBarItem label="Browse By Languages" />
    </div>
  );
};
export default NavBarMenu;
