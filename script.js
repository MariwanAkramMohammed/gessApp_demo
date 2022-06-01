'use strict';
// console.log(document.querySelector('.between').textContent);

// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent=23;
// console.log(document.querySelector('.number').textContent);

// document.querySelector('.message').textContent='number . . . ';
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=10;
// eventlistener
// const number=Math.trunc(Math.random()*20)+1;
// document.querySelector('.check').addEventListener('click', function () {
// const guess=Number(document.querySelector('.guess').value);
// console.log(guess,typeof guess);
// if(!guess)document.querySelector('.message').textContent='⛔ please number';
// });


// document.querySelector('.number').textContent = number;


let numbersecret =function(){return Math.trunc(Math.random() * 20) + 1};
let number=numbersecret();
let score=20;
let win=false;
let highscore=0;
const displaymessage=function(message){
  document.querySelector('.message').textContent=message;
}

const displaynumber=function(textmessage){
  document.querySelector('.number').textContent=textmessage;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displaymessage('⛔ not a number');
  } else if (guess === number) {
win=true;
if(score>highscore){highscore=score;}
   displaynumber(number);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
displaymessage('correct 💥');
  }else if(guess !==number){
    if(score>1){
displaymessage(guess>number?'👆 too much high':'👇 too much low');
      score--;
      document.querySelector('.score').textContent=score;
}else{
        displaymessage('game is over');
        document.querySelector('.score').textContent = 0;
    }
}
});
document.querySelector('.again').addEventListener('click',function(){
  if(win){
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
    displaymessage('Start guessing...');
    score=20;
    document.querySelector('.score').textContent=score;

    document.querySelector('.highscore').textContent=highscore;
    number=numbersecret();
    displaynumber('?');
  }else{
    document.querySelector('.guess').value='';
    displaymessage('Start guessing...');
    score=20;
    document.querySelector('.score').textContent=score;
    number=numbersecret();
    displaynumber('?');
  }

})