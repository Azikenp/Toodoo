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

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={dropDownToggle}>
        Dropdown
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          {options.map((option: Option) => (
            <button className="dropdown-list-btn">{option.value}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
