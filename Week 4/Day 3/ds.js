// Slack Example Using Array Object

var letters = [];
var word = "racecar";
var rword = "";

// Put Letters Of Words Into Slack

for(var i=0;i<word.length;i++){
    letters.push(word[i]);
}

// Pop The letter from Letters In Reverse Order

for(var i=0;i<word.length;i++){
    rword += letters.pop();
}

// Check Weather Word Is Palindrome OR Not

if(rword === word){
    console.log(word+" Is Palindrome");
}

else{
    console.log(word+" Is Not A Palindrome");
}