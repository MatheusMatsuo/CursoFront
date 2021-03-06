const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status1 = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
};



let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value
}



function handleSubmit(e){
e.preventDefault();

let kick = document.getElementById('kick').value;


if(!kick){
    alert('Digite algum valor!')
    return
};

updateAttempt(attempt, ++Guess.attemptNumber);

if(numberDrawn == kick){
    playAgain();
    status1.innerHTML = 'Parabéns, você acertou!';
    result.style.transition = '0.4';
    result.style.backgroundColor = '#37c978';
    result.style.color = '#fff';
    status1.style.color ='#fff';
    clear();
} else if(numberDrawn > kick){
    status1.innerHTML = 'O número é maior!';
    status1.style.color = '#de4251';
    clear();
}else if(numberDrawn < kick){
    status1.innerHTML = 'O número é menor!';
    statuss.style.color = '#de4251';
}
};

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};
