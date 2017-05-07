$(document).ready(function(){
	var intervalId=0;
	var time=30;
	var countCorrect=0;
	var countIncorrect=0;
	var countNoGuess=0;

	$("#time").html(time);

});

$("#startButton").on("click", function(){
	$("#startButton").css("visibility","hidden");
	reset();
	timerRun();
});

function reset(){
	time=30;
	countCorrect=0;
	countIncorrect=0;
	countNoGuess=0;

	$("#time").html(time);

	$(".question1").css("visibility", "visible");
	$(".question2, .question3").css("visibility","hidden");
	$(".correct").attr("data-type","correct");
}

function timerRun(){
	intervalId = setInterval(countdown,1000)
	$(".answer").on("click",function(){
		clearInterval(intervalId);
	});
}

function countdown(){
	time=30;
	time--;
	$("#time").html(time);
	if (time===0){
		$(".timer").append("<div> Time's Up!");
		countNoGuess++;
	}


}

$(".answer").on("click",function(){
	var clickedButton=$(this).attr("data-type");
	if (clickedButton==="correct"){
		$(".timer").append("<div> Correct!!!");
	}
	else {
		$(".timer").append("<div> That's not right :(");
	}
});