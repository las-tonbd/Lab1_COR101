const players = [
  { name: "Messi", goals: 30 },
  undefined,
  { name: "Ronaldo", goals: 28 },
  { name: "Neymar", goals: 22 },
  { goals: 2 },
  { name: "Mbappé", goals: 40 },
  { name: "Pele", goals: null },
];

var filterPlay = players.filter((player) => {
  return player?.name && typeof player?.goals === "number";
});

let topScorer = null;

if (filterPlay.length > 0) {
  topScorer = filterPlay.reduce((maxPlayer, currentPlayer) => {
    return currentPlayer.goals > (maxPlayer?.goals || 0)
      ? currentPlayer
      : maxPlayer;
  }, null);
}

// Kết quả
console.log("Danh sách cầu thủ hợp lệ:", filterPlay);
console.log("Cầu thủ ghi nhiều bàn thắng nhất:", topScorer);
