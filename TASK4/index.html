const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let board = Array(9).fill("");
let gameActive = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});

restartBtn.addEventListener("click", restartGame);

function handleClick() {
  const index = this.dataset.index;

  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  this.textContent = currentPlayer;

  if (checkWin()) {
    statusText.textContent = `Player ${currentPlayer} Wins 🎉`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    statusText.textContent = "It's a Draw 🤝";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin() {
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      cells[a].classList.add("win");
      cells[b].classList.add("win");
      cells[c].classList.add("win");
      return true;
    }
  }
  return false;
}

function restartGame() {
  board.fill("");
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Player X's Turn";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("win");
  });
}
