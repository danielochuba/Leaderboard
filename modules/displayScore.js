const ul = document.querySelector('ul');

const displayScores = async () => {
  ul.innerHTML = '';
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores');
  const data = await response.json();
  data.result.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML += `<span class="user-name">${score.user}: &nbsp; </span><span class="user-score">${score.score}</span>`;

    ul.appendChild(li);
  });
};

export default displayScores;