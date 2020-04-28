msg = new Array(".NET batch joined on 27th of January 2020 is most active batch I have ever seen.",
"Syntel opens its first two Global Development Centers in Mumbai and Chennai,India",
"Ankita Gokhale was our Reporting Manager.",
"Swati Bhirud was our trainging coach.")
word = 16
function m() {
msg = new Array("Pushkar Saraf is one of the best coder in our batch.",
"Test your typing speed using this platform.",
"Syntel opens its first two Global Development Centers in Mumbai and Chennai,India",
"Pushkar Saraf is one of the best coder in our batch.")
word = 7
}
function e() {
msg = new Array("Rohit Patle and Naina Vaidkar are two sensior CR of our batch.",
"All of my batchmates are very hard workers!",
"Test your typing speed using this platform.",
"To build coding skills and logic use geeks for geeks.")
word = 10
}
function s() {
msg = new Array(".NET batch joined on 27th of January 2020 is most active batch I have ever seen.",
"Now most of us are on Bench!",
"Rohit Patle and Naina Vaidkar are two sensior CR of our batch.",
"Pushkar Saraf is one of the best coder in our batch.")
word = 7
}
function beginIt() {
randNum = Math.floor((Math.random() * 10)) % 4
msgType = msg[randNum]
day = new Date();
startType = day.getTime();
document.theForm.given.value = msgType
document.theForm.typed.focus();
document.theForm.typed.select();
}
function cheat() {
alert("You can not change that!");
document.theForm.typed.focus();
}
function stopIt() {
dayTwo = new Date();
endType = dayTwo.getTime();
totalTime = ((endType - startType) / 1000)
spd = Math.round((word/totalTime) * 60)
if (document.theForm.typed.value == document.theForm.given.value) {
alert("\nYou typed a correct word sentence in "
+ totalTime + " seconds, a speed of about " + spd + " words per minute!")
}
else {
alert("You made an error, but typed at a speed of " + spd + " words per minute.")
   }
}
