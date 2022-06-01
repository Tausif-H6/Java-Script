let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj= JSON.parse(text);

for (let index = 0; index < 3; index++) {
    
    console.log("First name is : "+obj.employees[index].firstName+" "+" Last Name is : "+obj.employees[index].lastName)
}

// Object.keys(obj).forEach((k)=>{
//     console.log(k,obj[k]);
// })
