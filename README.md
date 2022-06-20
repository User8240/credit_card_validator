# _Section in Review_

#### By _**Grace Kostanich** & **Daniel Ware**_

#### _A webpage that validates whether or not a credit card number is valid!_

## Technologies Used

* _HTML_
* _CSS_
* _JS_

## Description

_This is a webpage written in HTML using Bootstrap CSS for styling & JavaScript for functionality_

## Setup/Installation Requirements

* _Fork project and clone to your desktop to run_

## Known Bugs

* _No known issues_

## License

_none_

Copyright (c) _5/29/2022_ _Grace Kostanich & Daniel Ware_

## Tests


**Describe:** _cardNumberCutter()_

**Test:** _"It will remove all spacing between numbers in a string"_

Code: _stringWithSpaces("4102 0808 8043 5620");_

Expected Output: _("4102080880435620")_


**Test:** _"It will separate a 16 digit card number into individual strings"_

Code: _stringWithSpaces("4102080880435620");_

Expected Output: _("4", "1", "0", "2", "0", "8", "0", "8", "8", "0", "4", "3", "5", "6", "2", "0")_


**Test:** _"It will run .split() which will convert the string into an array and place each number at a separate index"_

Code: _stringWithSpaces("4102080880435620");_

Expected Output: _["4", "1", "0", "2", "0", "8", "0", "8", "8", "0", "4", "3", "5", "6", "2", "0"]_


**Test:** _"It will have a for loop that starts at index one and increments to every other value"_

Code: _stringWithSpaces("4102080880435620");_

Expected Output: _["1", "2", "8", "8", "0", "3", "6", "0"]_


**Test:** _"It will double every value in our new array that contained every other value of the original credit card number "_

Code: _stringWithSpaces("4102080880435620");_

Expected Output: _["2", "4", "16", "16", "0", "6", "12", "0"]_
