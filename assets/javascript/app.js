$(document).ready(function(){
	var intervalId=0;
	var time=30;
	var countCorrect=0;
	var countIncorrect=0;
	var countNoGuess=0;
	var answerChoices;
	var clickedButton;
	var j=0;
	var number=0;

	var question1= "1. Who is Simba's best lion friend?";
	var answers1 =["Timon","Nala","Pumbaa","Zazu"];
	var question2="2. Who is the villain in The Little Mermaid?"
	var answers2 =["Cruella de Vil","Scar","The Stepmother","Ursula"];
	var question3="3. Which of these is not a song from Beauty and the Beast?";
	var answers3=["Be Our Guest", "Gaston", "Part of your World", "Belle"];
	var question4="4. How does Peter Pan fly?";
	var answers4=["Lovely thoughts and fairy dust","magic","wings and fairy dust","carpet"]
	var question5="5. Who is not one of the seven dwarves?"
	var answers5=["Sleepy","Silly","Grumpy","Doc"]

	var questionArray=[question1, question2, question3, question4, question5];
	var answersArray=[answers1, answers2, answers3, answers4, answers5];
	//console.log(answersArray[0].length);

	$("#startButton").on("click", function(){
		$("#startButton").css("visibility","hidden");
		$(".questionBox").css("visibility","visible");
		reset();
		displayQuestion(number);
	});

	$(".timer").css("visibility","hidden");

	$(".answer").on("click",function(){
		clearInterval(intervalId);
		clickedButton=$(this).attr("data-store");
		console.log(clickedButton);

		if (clickedButton==="Nala"){
			correct();
			$("#question").html("<img src='assets/images/lionKing.gif'>");
		}

		if (clickedButton==="Timon"||clickedButton==="Pumbaa"||clickedButton==="Zazu"){
			incorrect();
			$("#question").html("<img src='assets/images/lionKing.gif'>");		
		}

		if (clickedButton==="Ursula"){
			correct();
			$("#question").html("<img src='assets/images/ursula.gif'>");			
		}
		if (clickedButton==="Cruella de Vil"||clickedButton==="Scar"||clickedButton==="The Stepmother"){
			incorrect();
			$("#question").html("<img src='assets/images/ursula.gif'>");
		}
		if (clickedButton==="Part of your World"){
			correct();
			$("#question").html("<img src='assets/images/belle.gif'>");
		}
		if (clickedButton==="Be Our Guest"||clickedButton==="Gaston"||clickedButton==="Belle"){
			incorrect();
			$("#question").html("<img src='assets/images/belle.gif'>");
		}
		if (clickedButton==="Lovely thoughts and fairy dust"){
			correct();
			$("#question").html("<img src='assets/images/peterPan.gif'>");	
		}
		if (clickedButton==="magic"||clickedButton==="wings and fairy dust"||clickedButton==="carpet"){
			incorrect();
			$("#question").html("<img src='assets/images/peterPan.gif'>");
		}
		if (clickedButton==="Silly"){
			$(".answer").css("visibility","hidden");
			$("#status").html("Correct!!!");
			countCorrect++;
			number++;
			$("#question").html("<img src='assets/images/dwarfs.gif'>");
			setTimeout(function(){displayEnd();},3000);
			
		}
		if (clickedButton==="Sleepy"||clickedButton==="Grumpy"||clickedButton==="Doc"){
			$(".answer").css("visibility","hidden");
			$("#status").html("That's not right :( ");
			countIncorrect++;
			number++;
			$("#question").html("<img src='assets/images/dwarfs.gif'>");
			setTimeout(function(){displayEnd();},3000);
		}
	});

	function displayQuestion(number){
		timerRun();
		$(".answer").css("visibility","visible");
		$("#status").html("");
		$("#question").html(questionArray[number]);

		$("#answerChoice0").html(answersArray[number][0]);
		$("#answerChoice1").html(answersArray[number][1]);
		$("#answerChoice2").html(answersArray[number][2]);
		$("#answerChoice3").html(answersArray[number][3]);

		$("#answerChoice0").attr("data-store",answersArray[number][0]);
		$("#answerChoice1").attr("data-store",answersArray[number][1]);
		$("#answerChoice2").attr("data-store",answersArray[number][2]);
		$("#answerChoice3").attr("data-store",answersArray[number][3]);


	}

	function correct(){
			$(".answer").css("visibility","hidden");
			$("#status").html("Correct!!!");
			countCorrect++;
			number++;
			setTimeout(function(){displayQuestion(number);},3000);
	}

	function incorrect(){
			$(".answer").css("visibility","hidden");
			$("#status").html("That's not right :( ");
			countIncorrect++;
			number++;
			setTimeout(function(){displayQuestion(number);},3000);
	}

	function displayEnd(){
		$("#status").html("");
		$(".answer").css("visibility","visible");
		$("#startButton").css("visibility","visible");
		$("#question").html("");
		$("#answerChoice0").html("Correct Guesses: " + countCorrect);
		$("#answerChoice1").html("Incorrect Guesses: " + countIncorrect);
		$("#answerChoice2").html("Ran out of Time: " + countNoGuess);
		$("#answerChoice3").html("");
	}
	
	function reset(){
		time=10;
		countCorrect=0;
		countIncorrect=0;
		countNoGuess=0;

		$("#time").html(time);
	}
	function timerRun(){
		$(".timer").css("visibility","visible");
		time=10;
		intervalId = setInterval(countdown,1000)

		$(".answer").on("click",function(){
			clearInterval(intervalId);
		});
	}

	function countdown(){
		time--;
		$("#time").html(time);
		if (time===0){
			if (number<4){
				$("#status").html("Time's Up!");
				clearInterval(intervalId);
				countNoGuess++;
				number++;
				setTimeout(function(){displayQuestion(number);},3000);
			}
			else{
				$("#status").html("Time's Up!");
				clearInterval(intervalId);
				countNoGuess++;
				number++;
				setTimeout(function(){displayEnd();},3000);
			}
		}
	}
});




