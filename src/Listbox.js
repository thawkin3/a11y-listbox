import React, { useRef, useState } from 'react';
import './Listbox.css';

export const Listbox = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const triggerButtonRef = useRef(null);

  const findIndexOfItem = item => {
    return items.indexOf(item);
  };

  const [focusedItemIndex, setFocusedItemIndex] = useState(
    findIndexOfItem(selectedItem) > -1 ? findIndexOfItem(selectedItem) : 0
  );

  const handleItemClick = item => {
    setSelectedItem(item);
    setFocusedItemIndex(findIndexOfItem(item));
    setIsOpen(false);
    triggerButtonRef.current.focus();
  };

  const handleKeyDown = e => {
    const key = e.key;

    switch (key) {
      case 'ArrowUp':
        if (isOpen) {
          setFocusedItemIndex(
            focusedItemIndex - 1 >= 0 ? focusedItemIndex - 1 : items.length - 1
          );
        } else {
          setIsOpen(true);
        }
        break;
      case 'ArrowDown':
        if (isOpen) {
          setFocusedItemIndex(
            focusedItemIndex + 1 <= items.length - 1 ? focusedItemIndex + 1 : 0
          );
        } else {
          setIsOpen(true);
        }
        break;
      case 'Enter':
      case 'Space':
        if (isOpen) {
          setSelectedItem(items[focusedItemIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedItemIndex(findIndexOfItem(selectedItem));
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
            onClick={() => setIsOpen(isOpen => !isOpen)}
            onKeyDown={handleKeyDown}
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
              {items.map((item, index) => (
                <li
                  id={item.id}
                  key={item.id}
                  role="option"
                  onClick={() => handleItemClick(item)}
                  aria-selected={selectedItem.id === item.id}
                  className={index === focusedItemIndex ? 'focused' : ''}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
