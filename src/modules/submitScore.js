const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const addScore = async () => {
  const nameValue = nameInput.value;
  const scoreValue = scoreInput.value;

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: nameValue,
        score: scoreValue,
      }),
    });
  nameInput.value = '';
  scoreInput.value = '';
};

export default addScore;