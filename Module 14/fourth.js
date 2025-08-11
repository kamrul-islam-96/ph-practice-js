// if you get more then 80 then inside your friend score.
//     If your friend get more than 80. then go for a lunch.
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note:
// use nested if-else-if-else

const myMarks = 88;
const myFriendMarks = 29;

if (myMarks > 100 || myMarks <= 0 || myFriendMarks > 100 || myFriendMarks <= 0) {
  console.log("invalid mark");
} else {
  if (myMarks <= 100 && myMarks > 80) {
    if (myFriendMarks >= 80) {
      console.log("Let us go for lunch");
    } else if (myFriendMarks >= 60) {
      console.log("good luck next time");
    } else if (myFriendMarks >= 40) {
      console.log("message unseen");
    } else {
      console.log("block your message");
    }
  } else {
    console.log("go to home and act sad");
  }
}


(myMarks > 100 || myMarks <= 0 || myFriendMarks > 100 || myFriendMarks <= 0)
  ? console.log("invalid mark")
  : myMarks > 80 && myMarks <= 100
  ? myFriendMarks >= 80
    ? console.log("Let us go for lunch")
    : myFriendMarks >= 60
    ? console.log("good luck next time")
    : myFriendMarks >= 40
    ? console.log("message unseen")
    : console.log("block your message")
  : console.log("go to home and act sad");
