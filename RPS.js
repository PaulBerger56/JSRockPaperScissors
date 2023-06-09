let pScore = 0;
let cScore = 0;


document.addEventListener('DOMContentLoaded', function() {

    
    
    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        let choice = choices[Math.floor(Math.random() * 3)];
        return choice;
    }

    function playARound(playerSelection, computerSelection) {        

        let pSelection = playerSelection.toLowerCase();
        let cSelection = computerSelection.toLowerCase();

        
        if (pSelection.localeCompare(cSelection) === 0) {
            return "Draw! Both selected " + computerSelection;
        } else if (pSelection === 'rock') {
            if (cSelection === 'paper') {
                cScore++;
                updateScore()
                return 'You Lose! Paper beats Rock';                
            } else {
                pScore++;
                updateScore()
                return 'You Win! Rock beats Scissors';                
            }
        } else if (pSelection === 'paper') {
            if (cSelection === 'scissors') {
                cScore++;
                updateScore()
                return 'You Lose! Scissors beat Paper';                
            } else {
                pScore++;
                updateScore()
                return 'You Win! Paper beats Rock';                
            }
        } else if (pSelection === 'scissors') {
            if (cSelection === 'rock') {
                cScore++;
                updateScore()
                return 'You Lose! Rock beats Scissors';                
            } else {
                pScore++;
                updateScore()
                return 'You Win! Scissors beat Rock';                
            }
        } else {
            return 'Sorry, invalid selection';
        }
    }

    

    const rock = document.querySelector('.Rock');
    const paper = document.querySelector('.Paper');
    const scissors = document.querySelector('.Scissors');

    const rpsContainer = document.querySelector('#container');

    const result = document.createElement('h1');
    result.classList.add('result');
    rpsContainer.appendChild(result);

    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#cpuScore");

   
    

    rock.addEventListener('click', function() {
        result.textContent = playARound('rock', getComputerChoice());
        
    });

    paper.addEventListener('click', function() {
        result.textContent = playARound('paper', getComputerChoice());
        
    });

    scissors.addEventListener('click', function() {
        result.textContent = playARound('scissors', getComputerChoice());
        
    });

    function updateScore() {
        checkGameEnd();
        playerScore.innerHTML = 'Player Score: ' + pScore;
        computerScore.innerHTML = 'Computer Score: ' + cScore;
    }

    function checkGameEnd() {
        const end = document.querySelector('#endContainer');
        
        if(pScore === 5) {
            const pWin = document.createElement('h2');
            pWin.classList.add('pWin');
            pWin.textContent = 'Congratulations! You Beat The Computer!'
            end.appendChild(pWin);
        }
        if(cScore === 5) {
            const cWin = document.createElement('h2');
            cWin.classList.add('cWin');
            cWin.textContent = 'Sorry! You Lost To The Computer!'
            end.appendChild(cWin);
        }
    }
    
});