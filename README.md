# Accessible Listbox

This project is meant to teach software engineers how to create accessible listbox components in React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- `build`: Builds the app
- `eject`: Ejects the app from using react-scripts
- `format`: Formats the code using Prettier
- `format-watch`: Formats the code using Prettier in watch mode
- `start`: Starts the app in development mode
- `test`: Runs the tests
- `test-watch`: Runs the tests in watch mode

## Acceptance Criteria

### Mouse Users
- Clicking the trigger button should show/hide the listbox options
- Items should be hoverable and selectable with the mouse
- When an item is clicked, the listbox should be closed and focus should be returned to the trigger button
- Clicking away from the open listbox should close the listbox and return the focus to the trigger button

### Keyboard Users
- Pressing the Enter/Space key on the trigger button should show/hide the listbox options
- Pressing the Down Arrow or Up Arrow on the trigger button when the listbox is closed should open the listbox
- Items should be focusable and selectable with the keyboard
  - Down Arrow: moves focus down by one item
  - Up Arrow: moves focus up by one item
  - Enter/Space: selects the currently focused item and closes the listbox and returns the focus to the trigger button
  - Escape: closes the listbox without making a selection and returns the focus to the trigger button
  - Home: moves focus to the first item
  - End: moves focus to the last item
- When focus is moved to an item out of view, listbox should be scrolled so that the item is visible

### Screen Reader Users
- Trigger button should have `aria-haspopup="listbox"`, `aria-labelledby`, and `aria-expanded` attributes
- `<ul>` element should have `role="listbox"`, `aria-labelledby`, and `aria-activedescendant` attributes
- `<li>` elements should have `role="option"` and `aria-selected` attributes

## Resources

- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox)
- [Expand/Collapse Listbox Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/listbox/listbox-collapsible.html)
