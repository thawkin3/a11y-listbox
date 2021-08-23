import React, { useRef, useState } from 'react';
import { ListboxOptions } from './ListboxOptions';
import './Listbox.css';

export const Listbox = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const triggerButtonRef = useRef(null);

  const handleTriggerButtonClick = () => {
    console.log('handleTriggerButtonClick');
    setIsOpen(isOpen => !isOpen);
  };

  const handleTriggerButtonKeyDown = e => {
    const key = e.key;
    console.log('handleTriggerButtonKeyDown', key);

    switch (key) {
      case 'ArrowUp':
      case 'ArrowDown':
        setIsOpen(true);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
      // do nothing
    }
  };

  return (
    <div className="listboxArea">
      <span id="listboxLabel">{label}</span>
      <div id="listboxWrapper">
        <div className="listboxContainer">
          <button
            aria-haspopup="listbox"
            aria-labelledby="listboxLabel triggerButton"
            aria-expanded={isOpen}
            id="triggerButton"
            ref={triggerButtonRef}
            onClick={handleTriggerButtonClick}
            onKeyDown={handleTriggerButtonKeyDown}
          >
            {selectedItem.label || label}
          </button>
          {isOpen && (
            <ListboxOptions
              items={items}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              setIsOpen={setIsOpen}
              triggerButtonRef={triggerButtonRef}
            />
          )}
        </div>
      </div>
    </div>
  );
};
