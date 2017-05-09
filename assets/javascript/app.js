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
		timerRun();
	});

	$(".answer").on("click",function(){
		
		clearInterval(intervalId);
		clickedButton=$(this).attr("data-store");
		console.log(clickedButton);

		if (clickedButton==="Nala"){
			$("#status").html("Correct!!!");
			$("#question").html("<img src='assets/images/lionKing.gif'/>");
			setTimeout(function(){displayQuestion(1);},2000);
		}

		if (clickedButton==="Timon"||"Pumbaa"||"Zazu"){
			$("#status").html("That's not right :( ");
			$("#question").html("<img src='assets/images/lionKing.gif'/>");
			setTimeout(function(){displayQuestion(1);},2000);			
		}

		if (clickedButton==="Ursula"){
			$("#status").html("Correct!!!");
			$("#question").html("<img src='assets/images/ursula.gif'/>");
			setTimeout(function(){displayQuestion(0);},3000);
			
		}
		if (clickedButton==="Cruella de Vil"||"Scar"||"The Stepmother"){
			$("#status").html("That's not right :( ");
			$("#question").html("<img src='assets/images/ursula.gif'/>");
			setTimeout(function(){displayQuestion(0);},3000);
		}
	});

	function displayQuestion(number){
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




