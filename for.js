  let arr = [1,2,3];
  let result=0;

  function getSum (){

      arr.forEach(function(value){
      return result+=value;
      
      })
  }

  let e = getSum();
  console.log(e);
