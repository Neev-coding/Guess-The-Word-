player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn =" + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn" + player2_name;


function Send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("Word in LowerCase is" + word);
    charAT1=word.charAt(1);
    length_divide_to=Math.floor(word.length/2);
    charAT2=word.charAt(length_divide_to);
    length_minus_one=word.length-1;
    charAT3=word.charAt(length_minus_one);
    remove_charAT1=word.replace(charAT1,"_");
    remove_charAT2=remove_charAT1.replace(charAT2,"_");
    remove_charAT3=remove_charAT2.replace(charAT3,"_");
    question_word="<h4 id='word_display'>Q."+remove_charAT3 + "</h4>";
    input_box="<br> <br> Answer:<input type='text'id='input_box'>";
    checkbutton="<br> <br> <button class='btn btn-success'onclick='Check()'>Check</button>";
    Row=question_word+input_box+checkbutton;
    document.getElementById("output").innerHTML=Row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";

function Check(){
 get_answer=document.getElementById("input_box").value;
 answer=get_answer.toLowerCase();
 console.log("Answer in lower case:" + answer);

 if(answer == word){
     if(answer_turn=="player1"){
         player1_score=player1_score+1;
         document.getElementById("player1_score").innerHTML=player1_score;
     }
     else{
         player2_score=player2_score+1;
         document.getElementById("player2_score").innerHTML=player2_score;
     }
     if(question_turn == "player1"){
         question_turn="player2";
         document.getElementById("player_question").innerHTML="Question Turn:" + player2_name;
     }
     else{
         question_turn="player1";
         document.getElementById("player_question").innerHTML="Question Turn:" + player1_name;
     }
     if(answer_turn == "player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn:" + player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn:" + player1_name;
    }
    document.getElementById("output").innerHTML="";
     

 }

 }