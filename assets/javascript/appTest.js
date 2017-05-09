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

	var questionArray=[question1, question2];
	var answersArray=[answers1, answers2];
	//console.log(answersArray[0].length);

	$("#startButton").on("click", function(){
		$("#startButton").css("visibility","hidden");
		$(".questionBox").css("visibility","visible");
		reset();
		displayQuestion(0);
	});

	function displayQuestion(index){
		timerRun();
		//console.log(answersArray[index].length);
		$("#question").html(questionArray[index]);
		for (var i=0; i<4; i++){
			//console.log(answersArray[index].length);
			answerChoices=$("<div>");
			answerChoices.addClass("answer");
			answerChoices.attr("data-store",answersArray[index][i]);
			answerChoices.html(answersArray[index][i]);
			$(".answers").append(answerChoices);
		}
	}
	

		$(".answer").on("click",function(){
			clearInterval(intervalId);
			clickedButton=$(this).attr("data-store");
			console.log(clickedButton);

			if (clickedButton==="Nala"){
				$("#status").html("Correct!!!");
				$("#question").html("<img src='assets/images/lionKing.gif'/>");
				$(".answer").remove();
				setTimeout(function(){displayQuestion(1);},3000);
				$("#status").html("");
				
			}
			if (clickedButton==="Timon"||"Pumbaa"||"Zazu"){
				$("#status").html("That's not right :( ");
				$("#question").html("<img src='assets/images/lionKing.gif'/>");
				$(".answer").remove();
				setTimeout(function(){displayQuestion(1);},3000);
				$("#status").html("");
				
			}

			// if (clickedButton==="Ursula"){
			// 	$("#status").html("Correct!!!");
			// 	$("#question").html("<img src='assets/images/ursula.gif'/>");
			// 	$(".answer").remove();
			// 	$("#status").html("");
			// 	setTimeout(function(){displayQuestion(0);},3000);
				
			// }
			// if (clickedButton==="Cruella de Vil"||"Scar"||"The Stepmother"){
			// 	$("#status").html("That's not right :( ");
			// 	$("#question").html("<img src='assets/images/ursula.gif'/>");
			// 	$(".answer").remove();
			// 	$("#status").html("");
			// 	setTimeout(function(){displayQuestion(0);},3000);
				
			// }


		});
	



	
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
			countNoGuess++;
		}
	}
});
