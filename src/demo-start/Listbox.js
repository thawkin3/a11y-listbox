import React, { useState } from 'react';
import { ListboxOptions } from './ListboxOptions';
import './Listbox.css';

export const Listbox = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerButtonClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleTriggerButtonKeyDown = e => {};

  return (
    <div>
      <span id="listboxLabelStartingPoint">{label}:</span>
      <div id="listboxWrapperStartingPoint">
        <div className="listboxContainer">
          <button
            id="triggerButtonStartingPoint"
            onClick={handleTriggerButtonClick}
            onKeyDown={handleTriggerButtonKeyDown}
          >
            {label}
          </button>
          {isOpen && <ListboxOptions items={items} />}
        </div>
      </div>
    </div>
  );
};
