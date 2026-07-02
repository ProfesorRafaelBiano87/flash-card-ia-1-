// Dicionários de caracteres para a senha
const keys = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// Banco de dados dos jogadores (Dica: substitua pelas URLs dos GIFs reais que preferir)
const legendaryPlayers = [
    {
        name: "Ronaldinho Gaúcho",
        status: "Driblando o sistema!",
        gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW50M201c3g0Z2w3Y3V5NDV3bWZ0NDZpM2RzMHU5amRxdW50Y3Y3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10vXSmT93DUmSTgR46/giphy.gif" // GIF dele dançando ou fazendo bruxaria
    },
    {
        name: "Pelé (O Rei)",
        status: "Segurança nível Soco no Ar!",
        gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Zid3R5bXkyM3F0ZXF1c2x2MnRhM3B0czR6ajU2amI1Ymd0Zmx3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6uKSezN7K0Z6o/giphy.gif" // Comemoração clássica
    },
    {
        name: "Maradona",
        status: "Aquecimento Alucinante!",
        gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3I1M2E4MTBnaDZmaGszMG1yZndkczBlcTZiZnd1NTV5YTFwNDZkcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A8Xf9sTf4728M/giphy.gif" // Embaixadinhas clássicas no aquecimento
    },
    {
        name: "Neymar Jr",
        status: "Passinho Criptografado!",
        gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMml3dmxpdndpdnZpaHZpOHZwd3Zsd3Zsd3Zsd3Zsd3Zsd3ZsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3V0lsG3D6M6K58w4/giphy.gif" // Passinho de dança
    }
];

// Mapeamento dos elementos do DOM
const lengthSlider = document.getElementById('length');
const lengthVal = document.getElementById('length-val');
const passwordDisplay = document.getElementById('password-display');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const playerImg = document.getElementById('player-img');
const playerName = document.getElementById('player-name');
const playerStatus = document.getElementById('player-status');

// Atualiza o texto do tamanho da senha em tempo real
lengthSlider.addEventListener('input', (e) => {
    lengthVal.innerText = e.target.value;
});

// Função principal de geração
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
        alert("Por favor, selecione pelo menos uma opção de caractere!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    passwordDisplay.value = password;
    
    // Mudar o jogador aleatoriamente a cada geração (Animação de sucesso)
    triggerPlayerCelebration();
}

// Altera o holograma do jogador
function triggerPlayerCelebration() {
    const randomIndex = Math.floor(Math.random() * legendaryPlayers.length);
    const player = legendaryPlayers[randomIndex];
    
    playerName.innerText = player.name;
    playerStatus.innerText = player.status;
    playerImg.src = player.gif;
}

// Copiar para a área de transferência
copyBtn.addEventListener('click', () => {
    const password = passwordDisplay.value;
    if (!password) return;
    
    navigator.clipboard.writeText(password).then(() => {
        alert("Senha copiada para o banco de dados seguro! ⚡");
    });
});

// Event Listener do Botão Gerar
generateBtn.addEventListener('click', generatePassword);
