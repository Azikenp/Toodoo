import React, { useState } from "react";

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
    } else {
      option.onClick();
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={dropDownToggle}>
        Dropdown
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
