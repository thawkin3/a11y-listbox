import React from 'react';
import './AcceptanceCriteria.css';

export const AcceptanceCriteria = () => (
  <div className="acceptanceCriteria">
    <h2>Acceptance Criteria</h2>

    <h3>Mouse Users</h3>
    <ol>
      <li>Clicking the trigger button should show/hide the listbox options</li>
      <li>Items should be hoverable and selectable with the mouse</li>
      <li>
        When an item is clicked, the listbox should be closed and focus should
        be returned to the trigger button
      </li>
      <li>
        Clicking away from the open listbox should close the listbox and return
        the focus to the trigger button
      </li>
    </ol>

    <h3>Keyboard Users</h3>
    <ol>
      <li>
        Pressing the <code>Enter</code>/<code>Space</code> key on the trigger
        button should show/hide the listbox options
      </li>
      <li>
        Pressing the <code>Down Arrow</code> or <code>Up Arrow</code> on the
        trigger button when the listbox is closed should open the listbox
      </li>
      <li>Items should be focusable and selectable with the keyboard</li>
      <ol>
        <li>
          <code>Down Arrow</code>: moves focus down by one item
        </li>
        <li>
          <code>Up Arrow</code>: moves focus up by one item
        </li>
        <li>
          <code>Enter</code>: selects the currently focused
          item and closes the listbox and returns the focus to the trigger
          button
        </li>
        <li>
          <code>Escape</code>: closes the listbox without making a selection and
          returns the focus to the trigger button
        </li>
        <li>
          <code>Home</code>: moves focus to the first item
        </li>
        <li>
          <code>End</code>: moves focus to the last item
        </li>
      </ol>
      <li>
        When focus is moved to an item out of view, listbox should be scrolled
        so that the item is visible
      </li>
    </ol>

    <h3>Screen Reader Users</h3>
    <ol>
      <li>
        Trigger button should have <code>aria-haspopup="listbox"</code>,{' '}
        <code>aria-labelledby</code>, and <code>aria-expanded</code> attributes
      </li>
      <li>
        <code>ul</code> element should have <code>role="listbox"</code>,{' '}
        <code>aria-labelledby</code>, and <code>aria-activedescendant</code>{' '}
        attributes
      </li>
      <li>
        <code>li</code> elements should have <code>role="option"</code> and{' '}
        <code>aria-selected</code> attributes
      </li>
    </ol>
  </div>
);
