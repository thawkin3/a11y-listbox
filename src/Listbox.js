import React, { useState } from 'react';
import './Listbox.css';

export const Listbox = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <p>
        Choose your favorite transuranic element (actinide or transactinide).
      </p>
      <div className="listboxArea">
        <span id="listboxLabel">Choose an element:</span>
        <div id="exp_wrapper">
          <div className="listboxContainer">
            <button
              aria-haspopup="listbox"
              aria-labelledby="listboxLabel triggerButton"
              id="triggerButton"
              onClick={() => setIsOpen(isOpen => !isOpen)}
            >
              Neptunium
            </button>
            {isOpen && (
              <ul
                className="optionList"
                tabIndex="-1"
                role="listbox"
                aria-labelledby="listboxLabel"
              >
                <li id="listboxLabel_Np" role="option">
                  Neptunium
                </li>
                <li id="listboxLabel_Pu" role="option">
                  Plutonium
                </li>
                <li id="listboxLabel_Am" role="option">
                  Americium
                </li>
                <li id="listboxLabel_Cm" role="option">
                  Curium
                </li>
                <li id="listboxLabel_Bk" role="option">
                  Berkelium
                </li>
                <li id="listboxLabel_Cf" role="option">
                  Californium
                </li>
                <li id="listboxLabel_Es" role="option">
                  Einsteinium
                </li>
                <li id="listboxLabel_Fm" role="option">
                  Fermium
                </li>
                <li id="listboxLabel_Md" role="option">
                  Mendelevium
                </li>
                <li id="listboxLabel_No" role="option">
                  Nobelium
                </li>
                <li id="listboxLabel_Lr" role="option">
                  Lawrencium
                </li>
                <li id="listboxLabel_Rf" role="option">
                  Rutherfordium
                </li>
                <li id="listboxLabel_Db" role="option">
                  Dubnium
                </li>
                <li id="listboxLabel_Sg" role="option">
                  Seaborgium
                </li>
                <li id="listboxLabel_Bh" role="option">
                  Bohrium
                </li>
                <li id="listboxLabel_Hs" role="option">
                  Hassium
                </li>
                <li id="listboxLabel_Mt" role="option">
                  Meitnerium
                </li>
                <li id="listboxLabel_Ds" role="option">
                  Darmstadtium
                </li>
                <li id="listboxLabel_Rg" role="option">
                  Roentgenium
                </li>
                <li id="listboxLabel_Cn" role="option">
                  Copernicium
                </li>
                <li id="listboxLabel_Nh" role="option">
                  Nihonium
                </li>
                <li id="listboxLabel_Fl" role="option">
                  Flerovium
                </li>
                <li id="listboxLabel_Mc" role="option">
                  Moscovium
                </li>
                <li id="listboxLabel_Lv" role="option">
                  Livermorium
                </li>
                <li id="listboxLabel_Ts" role="option">
                  Tennessine
                </li>
                <li id="listboxLabel_Og" role="option">
                  Oganesson
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
