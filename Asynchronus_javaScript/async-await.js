/*
const freind = async () => {
  // If we assigned a function async it will return a promise
  
    Promise {<fulfilled>: 'Hello'}
    
  return `Hello`;
};

freind();
console.log(freind());
*/


const hasMeeeting = true;
const meeting = new Promise((resolve, rejected) => {
  if (!hasMeeeting) {
    const meetingDetails = {
      name: "Fox",
      Location: "JB",
      time: "10:am",
    };
    resolve(meetingDetails);
  } else {
    rejected(new Error(`Already a Meeting Scheduled`));
  }
});

//for chaining the promise we will create another promise

const calender = (meetingDetails) => {
  const calenderDetails = `${meetingDetails.name} has scheduled ${meetingDetails.Location} at ${meetingDetails.time}`;
  return Promise.resolve(calenderDetails);
};
/*
//Understanding then and catch
meeting
  .then(calender)
  .then((res) => {
    //resolved data from calender
    console.log(res);
  })
  .catch((err) => {
    //rejected data
    console.log(err.message);
  });
*/
  const myMeetin = async()=>{
    // To simplify the upper code 
    try {
      const meetingDetails = await meeting;
      const calenderDetails = await calender(meetingDetails);
      console.log(calenderDetails);
    } catch (err) {
      console.error(err.message);
    }
    
  }

  myMeetin()
  console.log(`Hello`);