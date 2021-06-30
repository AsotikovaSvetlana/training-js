const boardBox = document.querySelectorAll('.board__item');
const modalTitle = document.querySelector('.modal__title');
const resetButton = document.querySelectorAll('.reset');
const modal = document.querySelector('.modal');
const selectButtons = document.querySelector('.select-player__buttons');
const selectPlayerModal = document.querySelector('.select-player');
const boardBoxArray = Array.from(boardBox);
const resetButtonArray = Array.from(resetButton);

let board;
let activePlayer;
let players = ['x', 'o'];


selectPlayer();

function startGame() {
  board = ['', '', '',
           '', '', '',
           '', '', ''];
  boardBoxArray.forEach(item => {
    item.textContent = '';
  })
}

function selectPlayer() {
  selectPlayerModal.classList.remove('hidden');
  selectButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('select-player__button')) {
      if (event.target.textContent.toLowerCase() === 'x') {
        activePlayer = players[0];
        selectPlayerModal.classList.add('hidden');
        startGame();
        game();
      } else if (event.target.textContent.toLowerCase() === 'o') {
        activePlayer = players[1];
        selectPlayerModal.classList.add('hidden');
        startGame();
        game();
      }
    }
  })
}

function reset() {
  startGame();
  selectPlayer();
}

resetButtonArray.forEach(item => {
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('reset')) {
      reset();
      modal.classList.add('hidden');
    }
  })
})

function game() {
  boardBoxArray.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (!board[index]) {
        item.textContent = activePlayer;
        board[index] = activePlayer;
        checkWinner();
        changePlayer();
      }
    })
  })
}

function changePlayer() {
  if (activePlayer === 'x') {
    activePlayer = players[1];
  } else if (activePlayer === 'o') {
    activePlayer = players[0];
  }
}

function checkWinner() {
  if (board[0] === activePlayer && board[1] === activePlayer && board[2] === activePlayer ||
      board[3] === activePlayer && board[4] === activePlayer && board[5] === activePlayer ||
      board[6] === activePlayer && board[7] === activePlayer && board[8] === activePlayer ||
      board[0] === activePlayer && board[3] === activePlayer && board[6] === activePlayer ||
      board[1] === activePlayer && board[4] === activePlayer && board[7] === activePlayer ||
      board[2] === activePlayer && board[5] === activePlayer && board[8] === activePlayer ||
      board[2] === activePlayer && board[4] === activePlayer && board[6] === activePlayer ||
      board[0] === activePlayer && board[4] === activePlayer && board[8] === activePlayer) {
    showWinner();
  }
}

function showWinner() {
  modal.classList.remove('hidden');
  modalTitle.textContent = `Победил игрок ${activePlayer.toUpperCase()}`;
}
