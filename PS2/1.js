const sentence = "Learn with sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development , Learn with Sumit has all the tools you heed to learn the newest and most popular technologies to convert you from a no stack to full stack developer . Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers . ";

//how many sumith is used.
let matches =sentence.match(/sumit/gi);
let howManyTimesUsed=matches?matches.length:"Please try again";
console.log("Sumith is used : "+ matches+" "+ howManyTimesUsed );


//In which index we got the first sumit
let position= sentence.search(/sumits/i);
position= position>=0?position:"Not found";

console.log(position);