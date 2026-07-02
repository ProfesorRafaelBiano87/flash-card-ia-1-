const keys = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// BANCO DE DADOS DOS JOGADORES
// Nota para a aula: Se os alunos baixarem os GIFs na pasta do projeto, 
// basta mudar o caminho para: gif: "images/ronaldinho.gif"
const legendaryPlayers = [
    {
        name: "Ronaldinho Gaúcho",
        status: "Driblando a invasão!",
        gif: "https://www.youtube.com/shorts/m3gBdNR2ubY" // Placeholder estável de futebol
    },
    {
        name: "Pelé (O Rei)",
        status: "Segurança nível Lendário!",
        gif: "https://www.youtube.com/shorts/pyKsLOjfPdA" 
    },
    {
        name: "Neymar Jr",
        status: "Passinho Criptográfico!",
        gif: "https://www.youtube.com/shorts/ktO5IBpgZx8"
    }
];

const lengthSlider = document.getElementById('length');
const lengthVal = document.getElementById('length-val');
const passwordDisplay = document.getElementById('password-display');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const playerImg = document.getElementById('player-img');
const playerName = document.getElementById('player-name');
const playerStatus = document.getElementById('player-status');

lengthSlider.addEventListener('input', (e) => {
    lengthVal.innerText = e.target.value;
});

function generatePassword() {
    const length = +lengthSlider.value;
    const hasUpper = document.getElementById('uppercase').checked;
    const hasLower = document.getElementById('lowercase').checked;
    const hasNumber = document.getElementById('numbers').checked;
    const hasSymbol = document.getElementById('symbols').checked;

    let validChars = "";
    if (hasUpper) validChars += keys.upper;
    if (hasLower) validChars += keys.lower;
    if (hasNumber) validChars += keys.number;
    if (hasSymbol) validChars += keys.symbol;

    if (validChars === "") {
        alert("Selecione pelo menos um tipo de caractere!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    passwordDisplay.value = password;
    triggerPlayerCelebration();
}

function triggerPlayerCelebration() {
    const randomIndex = Math.floor(Math.random() * legendaryPlayers.length);
    const player = legendaryPlayers[randomIndex];
    
    playerName.innerText = player.name;
    playerStatus.innerText = player.status;
    playerImg.src = player.gif;
}

copyBtn.addEventListener('click', () => {
    const password = passwordDisplay.value;
    if (!password) return;
    
    navigator.clipboard.writeText(password).then(() => {
        alert("Senha copiada com sucesso! 🛡️");
    });
});

generateBtn.addEventListener('click', generatePassword);
