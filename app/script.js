var orderArr = []; //dito ilagay mga napiling question by order
var answerArr = [];//storage for answers
var currentQuestion = 0;//pang ilang question na mga players
var numOfQuestion = 10; //bilang ng question
var questionNo=[];//store choices of each question, will be a nested array

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
  	answerArr.push("Intramuros", "Japan", "June 12","1942", "Gregorio Del Pilar", "1521","Albay", "Gemma Cruz", "Plaridel", "Rizal Park");
}

function clickAnswer(idOfAnswer) {
  console.log("id:",idOfAnswer);
  console.log(document.getElementById(idOfAnswer).innerHTML);
  let answer=document.getElementById(idOfAnswer).innerHTML;
	let AnsForCurrentQuestion = answerArr[orderArr[currentQuestion] - 1];
	if (AnsForCurrentQuestion == answer) {
		alert("Correct!");
		currentQuestion++;
		if(currentQuestion==numOfQuestion){
			window.location.replace("/pages/categories.html");
		} else {
			const carousel = new bootstrap.Carousel("#carouselExample");
			carousel.next();
			document.getElementById('header').innerHTML=`CATEGORY 1 (${currentQuestion+1}/${numOfQuestion})`;
			for(var i=0;i<4;i++){//times of loop equals to number of buttons
				document.getElementById(`choice${i+1}`).innerHTML=questionNo[orderArr[currentQuestion]-1][i];//set value from questions[choices]
			}
		}
	} else {
		alert("Wrong!");
	}
}

(function () {
	getRandomQuestion();
	setAnswers();
	document.getElementById('header').innerHTML=`CATEGORY 1 (${currentQuestion+1}/${numOfQuestion})`;//for header
  let q1=['Malolos','Intramuros','Makati','Cebu'];//set choices for question 1
  let q2=['Spain','America','Japan','China'];//set choices for question 2
  let q3=['June 12','Dec 25','July 11','August 4'];//set choices for question 3
  let q4=['1890','1950','1962','1942'];//set choices for question 4
  let q5=['Andres Bonifacio','Dr. Jose Rizal','Marcelo Del Pilar','Gregorio Del Pilar'];//set choices for question 5
  let q6=['1521','1420','1622','1823'];//set choices for question 6
  let q7=['Cagayan','Albay','Zambales','Batanes'];//set choices for question 7
  let q8=['Margarita Moran','Gloria Diaz','Gemma Cruz','Kylie Verzosa'];//set choices for question 8
  let q9=['Plaridel','Gorio','Pepe','Supremo'];//set choices for question 9
  let q10=['Bagumbayan','Rizal Park','Pook Pasyalan','Rizal Sports Complex'];//set choices for question 10
  questionNo.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10);//store all of choices to global variable

  for(var i=0;i<4;i++){//times of loop equals to number of buttons
    document.getElementById(`choice${i+1}`).innerHTML=questionNo[orderArr[currentQuestion]-1][i];//set value from questions[choices]
  }
})();

//when key "a" is pressed it will enable answer buttons
// window.addEventListener("keypress", (e) => {
// 	if (e.key == "a") {
// 		console.log("You Pressed A");
// 		alert("Player 1! Choose your answer!");
// 		document.getElementById("choice1").disabled = false;
// 		document.getElementById("choice2").disabled = false;
// 		document.getElementById("choice3").disabled = false;
// 		document.getElementById("choice4").disabled = false;
// 	} else if (e.key == "l") {
// 		console.log("You Pressed A");
// 		alert("Player 2! Choose your answer!");
// 		document.getElementById("choice1").disabled = false;
// 		document.getElementById("choice2").disabled = false;
// 		document.getElementById("choice3").disabled = false;
// 		document.getElementById("choice4").disabled = false;
//   }
// });
