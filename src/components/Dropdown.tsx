import React from "react";

interface DropdownItemsProps {
  icon?: string;
  option: Array<Option>
}

const Dropdown: React.FC<DropdownItemsProps> = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-title">Dropdown</div>
    </div>
  );
};

export default Dropdown;
