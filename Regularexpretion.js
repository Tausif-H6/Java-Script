let sentence = "Learing with sumith is a Great expreicence";

let getS=sentence.replace(/great/i,"Good");
console.log(getS);
//Try global flag (i flag dile dushu ekbar sentence theke word ta change korbe)
let globalSentence="Learing with sumith , sumith makes it so easy ";
console.log(globalSentence.replace(/sumith/g,"Tausif"));
//EKta sentence theke kichu word search korle
console.log(globalSentence.match(/[e]/ig));

console.log(globalSentence.match(/[i|t]/ig));

//Find words that start wioth us
let s ="uslagi usg uswP pUSdl"
console.log(s.match(/\bus/ig));
