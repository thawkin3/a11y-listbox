import React from 'react';

export const ListboxOptions = ({ items }) => {
  const handleItemClick = (e, item) => {};

  const handleListboxKeyDown = e => {};

  const handleListboxBlur = () => {};

  return (
    <ul
      className="optionsList"
      onKeyDown={handleListboxKeyDown}
      onBlur={handleListboxBlur}
    >
      {items.map(item => (
        <li id={item.id} key={item.id} onClick={e => handleItemClick(e, item)}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};
