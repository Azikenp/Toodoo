import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface DropdownItemsProps {
  icon?: string;
  options: Array<Option>;
}

const Dropdown: React.FC<DropdownItemsProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropDownToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownClick = (option: Option) => {
    if (option.value == "Edit") {
      setIsOpen(false);
    }
    option.onClick();
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={dropDownToggle}>
        <BsThreeDotsVerticall />
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          {options.map((option: Option) => (
            <button
              className="dropdown-list-btn"
              onClick={() => dropdownClick(option)}
            >
              {option.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
