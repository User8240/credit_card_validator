//Business Logic

function numberOfOccurrencesInText(text) {
  if (text.trim().length === 0) {
    return 0;
//  
function numberOfOccurrencesInText(text) {
  cardNumber= text.replaceAll(" ", "")
//
}


function creditcardstringwithspaces(removeSpaces) {
  removeSpaces.replaceAll(" ", "");
  }

removeSpaces("4102 0808 8043 5620")

function stringMaker(creditcardstringwithoutspaces) {

 
   const creditcardArray  = creditcardstringwithoutspaces.split("");
   let newArray = [];
   for (let i=1; i < creditcardArray.length; i += 2) {
   newArray.push(creditcardArray[i]); 
  }
  console.log(newArray);
}

stringMaker("4102080880435620");

//UI Logic