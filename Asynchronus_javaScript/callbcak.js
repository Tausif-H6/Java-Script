//Implementing the call back
const Takeorder = (cusName, callback) => {
  console.log(`Customer name ${cusName}`);
  callback(cusName);
};

const placeholder = (customer, callback) => {
  console.log(`Processing the order ${customer}`);
  //Wait korbe nah porer line e chole jabe
  setTimeout(() => {
    console.log("cooking complete");
    console.log(`Order processed for customer 1 ${customer}`);
    callback(customer);
  }, 5000);
};

const completeOrder = (cus) => {
  console.log(`Order conmplete for ${cus}`);
};

      /* This is call back hell  To reduce this we use Promise  */
//Call back
Takeorder("Tausif", (cusName) => {
  placeholder(cusName, (customer) => {
    completeOrder(customer);
  });
});
