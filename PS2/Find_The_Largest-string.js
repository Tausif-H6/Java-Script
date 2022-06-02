
let largestString=(names)=>{
    let largeName='';
    for (let name of names) {
        if (name.length>largeName.length) {
            largeName=name;
        }
    }
    return [largeName, names.indexOf(largeName)];
}





console.log(largestString(['OOp','Bangla','English',"Software Construction"]));