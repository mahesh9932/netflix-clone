import React from "react";

interface NavBarItemProps {
  label: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ label }) => {
  return (
    <div className="text-white hover:text-gray-400 text-lg cursor-pointer">
      {label}
    </div>
  );
};
export default NavBarItem;
