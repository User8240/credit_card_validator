//Business Logic

//The code below is what we had before the edits Grace made 

 function stringWithSpaces(removeSpaces) {
   stringWithoutSpaces = removeSpaces.replaceAll(" ", "");
    const creditcardArray  = stringWithoutSpaces.split("");
    let newArray = [];
    for (let i=1; i < creditcardArray.length; i += 2) {
    newArray.push(creditcardArray[i]); 
   }
   const multipliedArray = newArray.map(function(element) {
     return element * 2;
   });
   
   console.log(multipliedArray);
 }
 stringWithSpaces("4102 0808 8043 5620");
//

 function stringWithSpaces(removeSpaces) {
   stringWithoutSpaces = removeSpaces.replaceAll(" ", "");
    const creditcardArray  = stringWithoutSpaces.split("");
    let newArray = [];
    for (let i=1; i < creditcardArray.length; i += 2) {
    newArray.push(creditcardArray[i]); 
   }
   const multipliedArray = newArray.map(function(element) {
     return element * 2;
   });
   let digitArray = multipliedArray.map(function(element) {
      if (element > 9) {
        console.log(element);
        test = element.toString().split("")
        return test.join(" ")
      } 
      else (element <= 9); {
         return element = element;
      }
     });

     //BELOW: if a digit is not a number but a string, we want to separate
     //the strings into two separate strings somehow, define them as 
     //values with .val() somehow, then add the string together =>

     //if (digitArray === NaN ) {
     //  digitArray = digitArray.join(",");
     //  digitArray = digitArray.split(" ");
     //  return digitArray
     
   console.log(digitArray);
    }
 stringWithSpaces("4102 0808 8043 5620");

//UI Logic