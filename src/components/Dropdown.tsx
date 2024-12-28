import React from "react";

interface DropdownItemsProps {
  icon?: string;
  options: Array<Option>;
}

const Dropdown: React.FC<DropdownItemsProps> = ({ options }) => {
  return (
    <div className="dropdown">
      <div className="dropdown-title">Dropdown</div>
      <div className="dropdown-list-container">
        {options.map((option: Option) => (
          <button>{option.value}</button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
