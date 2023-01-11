var orderArr = []; //dito ilagay mga napiling question by order
var answerArr = [];
var currentQuestion = 0;//pang ilang question na mga players
var numOfQuestion = 3; //bilang ng question

function getRandomQuestion() {
	
	var questionArr = []; //container ng questions
	var randomNumber; //variable for random number

	for (var i = 0; i < numOfQuestion; i++) {
		//magloop kung ilan question
		questionArr.push(i + 1); //yung mga question ilagay sa arr
	}
	for (var i = 0; i < numOfQuestion; i++) {
		//loop para malaman na pagkasunod sunod ng question
		randomNumber = Math.floor(Math.random() * questionArr.length); //paggawa ng random number na ang max is numOfQuestion
		let pickedQuestion = questionArr.splice(randomNumber, 1); //ilagay sa var ang napiling question at mawawala na ang napiling question sa container kasi napili na/bawal maulit
		orderArr.push(pickedQuestion[0]); //yung napiling question ilagay sa array(container), kung ano una sa array ayun din unang question
	}
	//ilagay na mga questions sa img element
	for (var i = 0; i < orderArr.length; i++) {
		document.getElementById(`show${i + 1}`).src = `/image/q${orderArr[i]}.jpg`;
	}
	//console.log(orderArr);
}

function setAnswers() {
  	answerArr.push("b", "c", "a");
}

function clickAnswer(answer) {
	let AnsForCurrentQuestion = answerArr[orderArr[currentQuestion] - 1];
	if (AnsForCurrentQuestion == answer) {
		alert("Correct!");
		currentQuestion++;
		if(currentQuestion==numOfQuestion){
			window.location.replace("/pages/MainMenu.html");
		} else {
			const carousel = new bootstrap.Carousel("#carouselExample");
			carousel.next();
			document.getElementById('header').innerHTML=`CATEGORY 1 (${currentQuestion+1}/${numOfQuestion})`;
		}
	} else {
		alert("Wrong!");
	}
}

(function () {
	getRandomQuestion();
	setAnswers();
	document.getElementById('header').innerHTML=`CATEGORY 1 (${currentQuestion+1}/${numOfQuestion})`;
})();

//when key "a" is pressed it will enable answer buttons
window.addEventListener("keypress", (e) => {
	if (e.key == "a") {
		console.log("You Pressed A");
		alert("Player 1! Choose your answer!");
		document.getElementById("choice1").disabled = false;
		document.getElementById("choice2").disabled = false;
		document.getElementById("choice3").disabled = false;
		document.getElementById("choice4").disabled = false;
	} else if (e.key == "l") {
		console.log("You Pressed A");
		alert("Player 2! Choose your answer!");
		document.getElementById("choice1").disabled = false;
		document.getElementById("choice2").disabled = false;
		document.getElementById("choice3").disabled = false;
		document.getElementById("choice4").disabled = false;
  }
});
