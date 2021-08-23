import React, { useEffect, useRef, useState } from 'react';

export const ListboxOptions = ({
  items,
  selectedItem,
  setSelectedItem,
  setIsOpen,
  triggerButtonRef,
}) => {
  const listboxRef = useRef(null);

  useEffect(() => {
    listboxRef.current.focus();
  }, []);

  const findIndexOfItem = item => {
    return items.indexOf(item);
  };

  const [focusedItemIndex, setFocusedItemIndex] = useState(
    findIndexOfItem(selectedItem) > -1 ? findIndexOfItem(selectedItem) : 0
  );

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setFocusedItemIndex(findIndexOfItem(item));
    setIsOpen(false);
    triggerButtonRef.current.focus();
  };

  const scrollItemIntoView = itemIndex => {
    const itemElement = document.getElementById(items[itemIndex].id);
    const listboxElement = listboxRef.current;

    if (listboxElement.scrollHeight > listboxElement.clientHeight) {
      let scrollBottom = listboxElement.clientHeight + listboxElement.scrollTop;
      let elementBottom = itemElement.offsetTop + itemElement.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxElement.scrollTop = elementBottom - listboxElement.clientHeight;
      } else if (itemElement.offsetTop < listboxElement.scrollTop) {
        listboxElement.scrollTop = itemElement.offsetTop;
      }
    }
  };

  const handleListboxKeyDown = e => {
    const key = e.key;

    switch (key) {
      case 'ArrowUp':
        e.preventDefault();
        const newFocusedItemIndexAfterArrowUp =
          focusedItemIndex - 1 >= 0 ? focusedItemIndex - 1 : items.length - 1;
        setFocusedItemIndex(newFocusedItemIndexAfterArrowUp);
        scrollItemIntoView(newFocusedItemIndexAfterArrowUp);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const newFocusedItemIndexAfterArrowDown =
          focusedItemIndex + 1 <= items.length - 1 ? focusedItemIndex + 1 : 0;
        setFocusedItemIndex(newFocusedItemIndexAfterArrowDown);
        scrollItemIntoView(newFocusedItemIndexAfterArrowDown);
        break;
      case 'Home':
        setFocusedItemIndex(0);
        break;
      case 'End':
        setFocusedItemIndex(items.length - 1);
        break;
      case 'Enter':
      case 'Space':
        e.preventDefault();
        setSelectedItem(items[focusedItemIndex]);
        setIsOpen(false);
        triggerButtonRef.current.focus();
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedItemIndex(
          findIndexOfItem(selectedItem) > -1 ? findIndexOfItem(selectedItem) : 0
        );
        triggerButtonRef.current.focus();
        break;
      default:
      // do nothing
    }
  };

  const handleListboxBlur = () => {
    setIsOpen(false);
  };

  return (
    <ul
      className="optionsList"
      tabIndex="-1"
      role="listbox"
      ref={listboxRef}
      aria-labelledby="listboxLabel"
      aria-activedescendant={items[focusedItemIndex].id}
      onKeyDown={handleListboxKeyDown}
      onBlur={handleListboxBlur}
    >
      {items.map((item, index) => (
        <li
          id={item.id}
          key={item.id}
          role="option"
          onClick={e => handleItemClick(e, item)}
          aria-selected={selectedItem.id === item.id}
          className={index === focusedItemIndex ? 'focused' : ''}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
