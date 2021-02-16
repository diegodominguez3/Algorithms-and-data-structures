function tournamentWinner(competitions, results) {
  // Write your code here.
  let score = {};
  for (let competition of competitions) {
    if (!(competition[0] in score)) {
      score[competition[0]] = 0;
    }
    if (!(competition[1] in score)) {
      score[competition[1]] = 0;
    }
  }

  for (let i = 0; i < results.length; i++) {
    if (results[i] === 0) {
      score[competitions[i][1]] += 3;
    } else if (results[i] === 1) {
      score[competitions[i][0]] += 3;
    }
  }

  let winner = { competitor: '', score: 0 };
  for (let competitor in score) {
    if (score[competitor] > winner.score) {
      winner = { competitor: competitor, score: score[competitor] };
    }
  }
  return winner.competitor;
}
