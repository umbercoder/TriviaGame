

var correct= 0;
var wrong = 0;
var noanswer = 0;

$("#complete_bttn").on("click",function(){
    timeUp()
})
 
// $(document).ready(function(){



// $("#thirdcontainer").hide();

// var totalTime = 60;
//    var timeStop = setInterval(timer, 1000);
//    function timer() {

//        if (totalTime == -1) {

//            $("#time").append("<h2>Time's Up!</h2>");
//            clearInterval(timeStop);
//            results();
//        }
//        else {
//            $("#time").html("<h2>Time Remaining: " + totalTime + " Seconds</h2>");
//            totalTime--;
//        }
//    };

// function timeStop(){

// 		setInterval(countdown, 1000);

// 	}


function timeUp(){
console.log("hello")
var blank = undefined
    var q1 = $('input:radio[name="q1"]:checked').val();
    var q2 = $('input:radio[name="q2"]:checked').val();
    var q3 = $('input:radio[name="q3"]:checked').val();
    var q4 = $('input:radio[name="q4"]:checked').val();
    var q5 = $('input:radio[name="q5"]:checked').val();

if(q1 == blank){
    noanswer++;
}
else if(q1 == "peach"){
    correct++;
}
else{
    wrong++;
}


if(q2 == blank){
    noanswer++;
}
else if(q2 == "Mercury"){
    correct++;
}
else{
    wrong++;
}



if(q3 == blank){
    noanswer++;
}
else if(q3 == "whale"){
    correct++;
}
else{
    wrong++;
}




if(q4 == blank){
    noanswer++;
}
else if(q4 == "Pennsylvania"){
    correct++;
}
else{
    wrong++;
}



if(q5 == blank){
    noanswer++;
}
else if(q5 == "tina"){
    correct++;
}
else{
    wrong++;



    $('#correctanswer').html(correct);
    $('#wronganswer').html(wrong);
    $('#notanswered').html(noanswer)

    $("#thirdcontainer").show();

}
}
// });







