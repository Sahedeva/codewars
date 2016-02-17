String.prototype.capitalize = function () {
   var obj = this;
   var newString = "";
   for (i in obj){ 
     newString += obj[i];
     if (i == obj.length-1){
       break;
     }
   }
   if (newString[0].charCodeAt()>96&&newString[0].charCodeAt()<123) {
     var firstLetter = newString[0].charCodeAt();
     var newString = String.fromCharCode(firstLetter-32)+newString.substring(1,newString.length);
     return newString;
   } else {
     return newString;
   }
 }