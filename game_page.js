player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


player1_score = 0;
player2_score = 0;


document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;


document.getElementById("player_question").innerHTML = "Questioning:  " + player1_name;
document.getElementById("player_answer").innerHTML = "Answering: " + player2_name;




function send() {

getWord = document.getElementById("word").value;

word = getWord.toLowerCase();
console.log("Original Word = " + getWord + "||||"  + "   LowerCase Word = " + word); 

charAt1 = word.charAt(1);

length_divide = Math.floor((word.length) / 2 );

charAt2 = word.charAt(length_divide);

last_word = word.length - 1;
charAt3 = word.charAt(last_word);

remove_1 = word.replace(charAt1 , "_");
remove_2 = remove_1.replace(charAt2 , "_");
remove_3 = remove_2.replace(charAt3 , "_");
console.log(remove_3);
 

question_word = "<h4 id='word_display'> Q. " + remove_3  + "</h4>";

input_box = "<br>  Answer:  <input type= 'text' id='input_check_box'> </input> ";

btn_check = " <br> <br> <button class='btn btn-info' onclick='check();'>CHECK</button>";

row = question_word + input_box + btn_check;
document.getElementById("output").innerHTML = row;

document.getElementById("word").value = "";

}

questionTurn = "player1";
answerTurn = "player2";

function check()
{
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();

if (answer == word) {

if (answerTurn == "player1") 
{

player1_score = player1_score + 1;
document.getElementById("player1_score").innerHTML = player1_score;


}
else {

    player2_score = player2_score + 1;
    document.getElementById("player2_score").innerHTML = player2_score;

}
}

if (questionTurn == "player1") {

questionTurn = "player2";
document.getElementById("player_question").innerHTML = "Questioning:   " + player2_name;

} else {

    questionTurn = "player1";
    document.getElementById("player_question").innerHTML = "Questioning:   " + player1_name;

}

if (answerTurn == "player1") {

    answerTurn = "player2";
    document.getElementById("player_answer").innerHTML = "Answering:   " + player2_name;

} else {

    answerTurn = "player1";
    document.getElementById("player_answer").innerHTML = "Answering:   " + player1_name;


}

document.getElementById("output").innerHTML = "";

}



