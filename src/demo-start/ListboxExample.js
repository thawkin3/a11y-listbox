import React from 'react';
import { Listbox } from './Listbox';

const items = [
  { id: 'apple', label: 'Apple' },
  { id: 'banana', label: 'Banana' },
  { id: 'blackberry', label: 'Blackberry' },
  { id: 'blueberry', label: 'Blueberry' },
  { id: 'cranberry', label: 'Cranberry' },
  { id: 'kiwi', label: 'Kiwi' },
  { id: 'mango', label: 'Mango' },
  { id: 'orange', label: 'Orange' },
  { id: 'pear', label: 'Pear' },
  { id: 'pineapple', label: 'Pineapple' },
  { id: 'raspberry', label: 'Raspberry' },
  { id: 'strawberry', label: 'Strawberry' },
  { id: 'watermelon', label: 'Watermelon' },
];

export const ListboxExampleStartingPoint = () => (
  <>
    <h2>Starting Point</h2>
    <div className="listboxExampleArea">
      <Listbox items={items} label="Choose a fruit" />
    </div>
  </>
);
