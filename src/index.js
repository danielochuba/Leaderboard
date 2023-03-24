import './style.css';
import displayScores from './modules/displayScore.js';
import addScore from './modules/submitScore.js';

const addBtn = document.querySelector('.add-btn');
const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', displayScores);

addBtn.addEventListener('click', addScore);