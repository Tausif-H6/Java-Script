const arr =[4,4,5,5,6,8,9,2,1,6,55,66];
// Finding The duoplicate value 
// let duplicateIdentifier= arr.filter(function(v,i,a){
//     return a.indexOf(v)!==i
// })
// console.log(duplicateIdentifier);

//Finding not duplicate(unique numbers)
let notDuplicate= arr.filter(function(value,index,array){
    return array.indexOf(value)===index;
})

console.log(notDuplicate);


