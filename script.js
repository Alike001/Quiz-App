import { questions } from "./questions.js";
const startBtn = document.querySelector('.start_btn button');
const infoBox = document.querySelector('.info_box');
const exitBtn = infoBox.querySelector('.buttons .quit');
const continueBtn = infoBox.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz_box');

startBtn.addEventListener('click', () => {
	infoBox.classList.add('activeInfo');
});

exitBtn.addEventListener('click', () => {
	infoBox.classList.remove('activeInfo');
});

continueBtn.addEventListener('click', () => {
	infoBox.classList.remove('activeInfo');
	quizBox.classList.add('activeQuiz');
});