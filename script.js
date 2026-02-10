import { questions } from "./questions.js";
const startBtn = document.querySelector('.start_btn button');
const infoBox = document.querySelector('.info_box');
const exitBtn = infoBox.querySelector('.buttons .quit');
const continueBtn = infoBox.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz_box');
const resultBox = document.querySelector('.result_box');
const replayBtn = resultBox.querySelector('.buttons .restart');
const quitBtn = resultBox.querySelector('.buttons .quit')

startBtn.addEventListener('click', () => {
	infoBox.classList.add('activeInfo');
});

exitBtn.addEventListener('click', () => {
	infoBox.classList.remove('activeInfo');
});

continueBtn.addEventListener('click', () => {
	infoBox.classList.remove('activeInfo');
	quizBox.classList.add('activeQuiz');
	showQuestions(0);
	queCounter(1);
});

let queCount = 0;
let queNum = 1;

const nextBtn = quizBox.querySelector('.next_btn')

nextBtn.addEventListener('click', () => {
	if (queCount < questions.length - 1) {
		queCount++;
		queNum++;
		showQuestions(queCount);
		queCounter(queNum);
	} else {
		quizBox.classList.remove('activeQuiz');
		resultBox.classList.add('activeResult');
	}
});

replayBtn.addEventListener('click' , () => {
	resultBox.classList.remove('activeResult');
	quizBox.classList.add('activeQuiz');

	//Reset
	queCount = 0;
	queNum = 1;

	showQuestions(queCount);
  queCounter(queNum);
});

quitBtn.addEventListener('click', () => {
	resultBox.classList.remove('activeResult');
	quizBox.classList.remove('activeQuiz');
	startBtn.classList.add('activeBtn');

	//Reset
	queCount = 0;
  queNum = 1;
});

function showQuestions(index) {
	const queText = document.querySelector('.que_text');
	const optionList = document.querySelector('.option_list');
	let queTag = `<span>${questions[index].number}. ${questions[index].question}</span>`
	let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
	<div class="option"><span>${questions[index].options[1]}</span></div>
	<div class="option"><span>${questions[index].options[2]}</span></div>
	<div class="option"><span>${questions[index].options[3]}</span></div>`
	queText.innerHTML = queTag;
	optionList.innerHTML = optionTag;
	const option = optionList.querySelectorAll('.option');
	for (let i = 0;i < option.length;i++) {
		option[i].addEventListener('click', function () {
			optionSelected(this);
		});
	}
}

function optionSelected(correctAnswer) {
	let userAns = correctAnswer.textContent;
	let correctAns = questions[queCount].correctAnswer;
	if(userAns === correctAns) {
		console.log('Answer is correct');
	} else {
		console.log('Answer is wrong');
	}
}

function queCounter(index) {
	const bottomQuesCounter = quizBox.querySelector('.total_que');
	let totalQuesCountTag = `<span><p>${index}</p>Of<p>${questions.length}</p>Questions</span>`
	bottomQuesCounter.innerHTML = totalQuesCountTag;
}

