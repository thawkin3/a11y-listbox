import React, { useState } from 'react';
import './Listbox.css';

export const Listbox = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [focusedItem, setFocusedItem] = useState({});

  return (
    <>
      <p>Choose your favorite fruit.</p>
      <div className="listboxArea">
        <span id="listboxLabel">{label}</span>
        <div id="listboxWrapper">
          <div className="listboxContainer">
            <button
              aria-haspopup="listbox"
              aria-labelledby="listboxLabel triggerButton"
              id="triggerButton"
              onClick={() => setIsOpen(isOpen => !isOpen)}
            >
              {selectedItem.label || label}
            </button>
            {isOpen && (
              <ul
                className="optionsList"
                tabIndex="-1"
                role="listbox"
                aria-labelledby="listboxLabel"
              >
                {items.map(item => (
                  <li
                    id={item.id}
                    key={item.id}
                    role="option"
                    onClick={() => setSelectedItem(item)}
                    aria-selected={selectedItem.id === item.id}
                    className={focusedItem.id === item.id ? 'focused' : ''}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
