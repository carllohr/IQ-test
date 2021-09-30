const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
const start = document.getElementById('start');
const qimage = document.getElementById('qimage');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const choiceE = document.getElementById('E');




setInterval(updateCountdown, 1000);



function updateCountdown(){

	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdownEl.innerHTML = `${minutes}: ${seconds}`;

	time--;	
}

let questions = [
{
	question : "iq-test1red.png",
	correct: "E" 
},
{	question: "iq-test2red.png",
	correct: "E"

},
{	question: "iq-test3red.png",
	correct: "A"

},
{	question: "iq-test4red.png",
	correct: "C"

},
{	question: "iq-test5red.png",
	correct: "E"

},
{	question: "iq-test6red.png",
	correct: "D"

},
{	question: "iq-test7red.png",
	correct: "A"

},
{	question: "iq-test8red.png",
	correct: "C"

},
{	question: "iq-test9red.png",
	correct: "B"

},
{	question: "iq-test10red.png",
	correct: "D"

},
{	question: "iq-test11red.png",
	correct: "B"

},
{	question: "iq-test12red.png",
	correct: "E"

},
{	question: "iq-test13red.png",
	correct: "A"

},
{	question: "iq-test14red.png",
	correct: "C"

},
{	question: "iq-test15red.png",
	correct: "D"

},
{	question: "iq-test16red.png",
	correct: "B"

},
{	question: "iq-test17red.png",
	correct: "C"

},
{	question: "iq-test18red.png",
	correct: "A"

},
{	question: "iq-test19red.png",
	correct: "D"

},
{	question: "iq-test20red.png",
	correct: "E"

},
{	question: "iq-test21red.png",
	correct: "D"

},
{	question: "iq-test22red.png",
	correct: "A"

},
{	question: "iq-test23red.png",
	correct: "B"

} 
];
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let score = 0;

function checkAnswer(answer){
	if (questions[runningQuestionIndex].correct == answer){
		score++;
		console.log("you have " + score + "out of" + questions.length + "correct so far");
	} else {
		console.log("you have " + score + "out of" + questions.length + "correct so far");
	}
	
	if (runningQuestionIndex < lastQuestionIndex){
		runningQuestionIndex++;
		renderQuestion();
	}
/* ta bort "check" i alternativen direkt efter klick, så det inte fastnar */	
document.getElementById('A').checked = false;
document.getElementById('B').checked = false;
document.getElementById('C').checked = false;
document.getElementById('D').checked = false;
document.getElementById('E').checked = false;

}

function renderQuestion(){
	let q = questions[runningQuestionIndex];
	qimage.innerHTML = "<img src=" + q.question  + ">";
}

function nextImage(){
	if (runningQuestionIndex < lastQuestionIndex){
		runningQuestionIndex++;
		renderQuestion();
	}
};
