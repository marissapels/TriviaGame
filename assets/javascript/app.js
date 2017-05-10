$(document).ready(function(){
	var intervalId=0;
	var time=30;
	var countCorrect=0;
	var countIncorrect=0;
	var countNoGuess=0;
	var answerChoices;
	var clickedButton;
	var j=0;

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
		displayQuestion(0);
	});

	$(".answer").on("click",function(){
		
		clearInterval(intervalId);
		clickedButton=$(this).attr("data-store");
		console.log(clickedButton);

		if (clickedButton==="Nala"){
			$("#status").html("Correct!!!");
			countCorrect++;
			$("#question").html("<img src='assets/images/lionKing.gif'>");
			setTimeout(function(){displayQuestion(1);},3000);
		}

		if (clickedButton==="Timon"||clickedButton==="Pumbaa"||clickedButton==="Zazu"){
			$("#status").html("That's not right :( ");
			countIncorrect++;
			$("#question").html("<img src='assets/images/lionKing.gif'>");
			setTimeout(function(){displayQuestion(1);},3000);			
		}

		if (clickedButton==="Ursula"){
			$("#status").html("Correct!!!");
			countCorrect++;
			$("#question").html("<img src='assets/images/ursula.gif'>");
			setTimeout(function(){displayQuestion(2);},3000);
			
		}
		if (clickedButton==="Cruella de Vil"||clickedButton==="Scar"||clickedButton==="The Stepmother"){
			$("#status").html("That's not right :( ");
			countIncorrect++;
			$("#question").html("<img src='assets/images/ursula.gif'>");
			setTimeout(function(){displayQuestion(2);},3000);
		}
			if (clickedButton==="Part of your World"){
			$("#status").html("Correct!!!");
			countCorrect++;
			$("#question").html("<img src='assets/images/belle.gif'>");
			setTimeout(function(){displayQuestion(3);},3000);
		}
		if (clickedButton==="Be Our Guest"||clickedButton==="Gaston"||clickedButton==="Belle"){
			$("#status").html("That's not right :( ");
			countIncorrect++;
			$("#question").html("<img src='assets/images/belle.gif'>");
			setTimeout(function(){displayQuestion(3);},3000);
		}
		if (clickedButton==="Lovely thoughts and fairy dust"){
			$("#status").html("Correct!!!");
			countCorrect++;
			$("#question").html("<img src='assets/images/peterPan.gif'>");
			setTimeout(function(){displayQuestion(4);},3000);
			
		}
		if (clickedButton==="magic"||clickedButton==="wings and fairy dust"||clickedButton==="carpet"){
			$("#status").html("That's not right :( ");
			countIncorrect++;
			$("#question").html("<img src='assets/images/peterPan.gif'>");
			setTimeout(function(){displayQuestion(4);},3000);
		}
		if (clickedButton==="Silly"){
			$("#status").html("Correct!!!");
			countCorrect++;
			$("#question").html("<img src='assets/images/dwarfs.gif'>");
			setTimeout(function(){displayEnd(3);},3000);
			
		}
		if (clickedButton==="Sleep"||clickedButton==="Grumpy"||clickedButton==="Doc"){
			$("#status").html("That's not right :( ");
			countIncorrect++;
			$("#question").html("<img src='assets/images/dwarfs.gif'>");
			setTimeout(function(){displayEnd(3);},3000);
		}
	});

	function displayQuestion(number){
		timerRun();
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

	function displayEnd(){
		$("#startButton").css("visibility","visible");
		$("#question").html("");
		$("#answerChoice0").html("Correct Guesses: " + countCorrect);
		$("#answerChoice1").html("Incorrect Guesses: " + countIncorrect);
		$("#answerChoice2").html("Ran out of Time: " + countNoGuesses);
		$("#answerChoice3").html("");
	}
	
	function reset(){
		time=30;
		countCorrect=0;
		countIncorrect=0;
		countNoGuess=0;

		$("#time").html(time);
	}

	function timerRun(){
		time=30;
		intervalId = setInterval(countdown,1000)

		$(".answer").on("click",function(){
			clearInterval(intervalId);
		});
	}

	function countdown(){
		time--;
		$("#time").html(time);
		if (time===0){
			$(".timer").append("<div> Time's Up!");
			clearInterval(intervalId);
			countNoGuess++;
		}
	}
});




