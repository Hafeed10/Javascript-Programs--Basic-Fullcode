let scoreCalculator = (wins,draws, losses) => {
   return wins * 3 +draws;
}

score = scoreCalculator (5, 0, 2);
console.log(score)