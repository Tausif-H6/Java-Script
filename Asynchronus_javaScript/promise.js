/*
 * We use promise to handle asychronus behaviour
 * It can be   Resolved or Rejected
 */

// creating promise
const hasMeeeting = false;
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
