function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    // console.log(player);
    setPlayerStyle(player);
    /*   player.addEventListener('click', function () {
          player.style.backgroundColor = 'yellow';
      }) */

}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Reprehenderit quos commodi beatae in? Enim veritatis, tempore cupiditate doloremque dolor consectetur alias itaque? Quibusdam cumque, excepturi dolore alias quo veritatis totam atque cum eos facilis quia? Nemo, deleniti voluptatum?</p>
    `;
    setPlayerStyle(player);

    playersContainer.appendChild(player);

    // console.log(player);
}

document.getElementById('players').addEventListener('click', function (event) {
    // console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }

})