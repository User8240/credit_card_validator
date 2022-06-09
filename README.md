Describe: cardNumberCutter()

Test: "It will remove all spacing between numbers"
Code: cardNumberCutter("4102 0808 8043 5620");
Expected Output: ("4102080880435620")

Test: "It will separate a 16 digit card number into individual strings"
Code: cardNumberCutter("4102080880435620");
Expected Output: "away"

Test: "It will add 'way' to the end of words that begin with an array of vowels."
Code: pigLatin("u");
Expected Output: "uway"