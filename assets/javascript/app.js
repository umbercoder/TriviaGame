
// var Questions = [{
//     question: "Which famous singer appeared in the movie Mad Max: Beyond Thunderdome?",
//     choices: ["Whitney Huston", "Janet Jackson", "Tina Turner"],
//     correctAnswer: 2
//   },

//   {
//     question: "In which state was the first oil well drilled in the United States?",
//     choices: ["Pennsylvania", "Texas", "Lousiana"],
//     correctAnswer: 0
//   },

//   {
//     question: "",
//     choices: ["Bear", "Blue Whale", "Elephant"],
//     correctAnswer: 1
//   },

//   {
//     question: " What planet is closest to the sun?",
//     choices: ["Mars", "Earth", "Mercury"],
//     correctAnswer: 2
//   },

//   {
//     question: "The United States state of Georgia is famous for what fruit?",
//     choices: ["Pear", "Apples", "Peach"],
//     correctAnswer: 2
 
//   }
// ];

var correct= 0;
var wrong = 0;
var noanswer = 0;


 
function timeUp(){

    var q1 = $('input:radio[name="q1"]:checked').val();
    var q2 = $('input:radio[name="q2"]:checked').val();
    var q3 = $('input:radio[name="q3"]:checked').val();
    var q4 = $('input:radio[name="q4"]:checked').val();
    var q5 = $('input:radio[name="q5"]:checked').val();

if(q1 == undefined){
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
    $('#notanswered').html(noanswer);


    // Show the completed Score Div
    $("#lcontainer").show();

}
}













// Display();

// var Display = function() {

//     for (var j = 0; j < 5; j++) {
//         $('<div class ="title">' + questions[j].question + '</div>');
     
//         for (var i = 0; i <= 3; i++) {
//             $(questions[j]).append('<input type="radio"  value="' + questions[j].choices[i] + '"/><label >' + questions[j].choices[i] + '</label>');
//         }
//         $('.questions').prepend('<h1 />');
    
//     }
// };

// var total = $('#hit').on('click', function() {

//     var correct = 0;
//     var wrong = 0;
//     var unAnswered = 0;

//     for (var i = 0; i < 10; i++) {

//         if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

//             correct++;
//         } else {
//             wrong++;
//         };
//     };


//  });  
