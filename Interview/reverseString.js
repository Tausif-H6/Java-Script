//Reverse a string 


/*   
step1 convert string to array
step 2: reverse it in array
step 3:Turn the array back to the string 

*/

/*          1ST               */
// const getString=(s)=>{
//  let arr= s.split("");
//  arr.reverse();
//  s=arr.join("");
//  console.log(s);
// }
// getString("Apple");


/*             2nd    */

//  function getString(str){
//    let mainString="";
//    for(let i=str.length-1;i>=0;i--){
//       mainString+=str[i]
//    }    
//    console.log(mainString);
//  }
//  getString("Tausif");

/*               3rd                 */

let getString=(str)=>{
   return str.split("").reverse().join("")
}
getString("Tausif")
