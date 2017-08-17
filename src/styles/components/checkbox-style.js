const csjs = require('csjs-inject');

import { theme } from '../../theme.js';

module.exports = csjs`

input[type=checkbox].guify-checkbox {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    margin: 0;
    cursor: pointer;
}

input[type=checkbox] + label {
    margin: 0;
}

input[type=checkbox].guify-checkbox + label:before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    padding: 0px;
    vertical-align: middle;
    margin-right: 8px;
    margin-top: 1px;
    background-color: ${theme.colors.componentBackground};
    border-radius: 0px;
    cursor: pointer;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;

}

/* Hover style */
input[type=checkbox].guify-checkbox:hover + label:before {
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.componentBackgroundHover};
    border: solid 4px ${theme.colors.componentBackground};
}

/* Checked style */
input[type=checkbox]:checked.guify-checkbox + label:before {
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.componentForeground};
    border: solid 4px ${theme.colors.componentBackground};
}

/* Focused and checked */
input[type=checkbox]:checked.guify-checkbox:focus + label:before {
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.componentForeground};
    border: solid 4px ${theme.colors.componentBackgroundHover};
}

/* Focus and unchecked */
input[type=checkbox].guify-checkbox:focus + label:before {
    background-color: ${theme.colors.componentBackgroundHover};
}

`;
