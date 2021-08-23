import React from 'react';
import { ListboxExample } from './ListboxExample';
import { ListboxExampleStartingPoint } from './demo-start/ListboxExample';
import { AcceptanceCriteria } from './AcceptanceCriteria';

export const App = () => {
  return (
    <main className="App">
      <h1>Accessible Listbox Components</h1>
      <ListboxExample />
      <ListboxExampleStartingPoint />
      <AcceptanceCriteria />
    </main>
  );
};
