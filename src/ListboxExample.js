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

export const ListboxExample = () => (
  <>
    <p>Choose your favorite fruit.</p>
    <Listbox items={items} label="Choose a fruit" />
  </>
);
