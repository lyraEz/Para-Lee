document.addEventListener('DOMContentLoaded', function() {

    const uselessBtn = document.getElementById('useless-btn');
    const uselessText = document.getElementById('useless-text');
    
    const uselessResponses = [
        "Parabéns! Você ganhou exatamente nada! 🎉",
        "UAUUU! Isso foi... completamente inútil! ✨",
        "Você acabou de desperdiçar 0.5 segundos da sua vida! 🕰️",
        "Achievement Unlocked: Clicador Profissional! 🏆",
        "Esse clique valeu absolutamente nada! Incrível! 🤩",
        "Você é oficialmente um expert em inutilidade! 🎯",
        "Esse botão está orgulhoso de você! 💫",
        "Clique mais inútil impossível! Você é o melhor! 🌟",
        "Sua dedicação à inutilidade é impressionante! 🦄",
        "Este clique foi tão inútil que virou arte! 🎨"
    ];

    if (uselessBtn && uselessText) {
        uselessBtn.addEventListener('click', function() {
            const randomResponse = uselessResponses[Math.floor(Math.random() * uselessResponses.length)];
            uselessText.textContent = randomResponse;
            uselessText.style.opacity = '0';
            setTimeout(() => {
                uselessText.style.opacity = '1';
            }, 100);
        });
    }

    const loadingFill = document.getElementById('loading-fill');
    const loadingText = document.getElementById('loading-text');
    const startLoadingBtn = document.getElementById('start-loading');
    let loadingClickCount = 0;
    
    const loadingMessages = [
        "Carregando felicidade...",
        "Baixando bobeiras...",
        "Instalando diversão...",
        "Carregando gatinhos...",
        "Sincronizando sorrisos...",
        "Carregando muito devagar de propósito...",
        "Quase lá... ou não...",
        "Carregando... só mais 847 anos...",
        "Sistema travou... brincadeira!",
        "Carregando o universo... aguarde..."
    ];

    if (startLoadingBtn && loadingFill && loadingText) {
        startLoadingBtn.addEventListener('click', function() {
            loadingClickCount++;
            const baseSpeed = Math.max(50, 500 - (loadingClickCount * 50));
            
            loadingFill.style.width = '0%';
            loadingText.textContent = loadingMessages[loadingClickCount % loadingMessages.length] + ' 0%';
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 5;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    loadingText.textContent = 'Carregamento concluído! (Não carregou nada) 100%';
                    createLoadingCompleteEffect();
                } else {
                    loadingText.textContent = loadingMessages[loadingClickCount % loadingMessages.length] + ` ${Math.floor(progress)}%`;
                }
                loadingFill.style.width = progress + '%';
            }, baseSpeed);
        });
    }

    function createLoadingCompleteEffect() {
        const effects = ['🎉', '✨', '🌟', '💫', '🎊'];
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const effect = document.createElement('div');
                effect.textContent = effects[Math.floor(Math.random() * effects.length)];
                effect.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}vw;
                    top: ${Math.random() * 100}vh;
                    font-size: 2rem;
                    pointer-events: none;
                    animation: fadeInOut 2s ease-out forwards;
                    z-index: 1000;
                `;
                document.body.appendChild(effect);
                setTimeout(() => effect.remove(), 2000);
            }, i * 200);
        }
    }

    const wisdomText = document.getElementById('wisdom-text');
    const newWisdomBtn = document.getElementById('new-wisdom');
    
    const wisdomQuotes = [
        "Nunca confie em uma gelatina que treme sem motivo.",
        "Se a vida te der limões, pergunte onde estão as laranjas.",
        "Um pássaro na mão vale dois voando, mas três no telhado é muito barulho.",
        "Quem planta batata, colhe batata. Quem planta cenoura, provavelmente esqueceu onde plantou.",
        "O gato subiu no telhado, desceu, e continuou sendo gato.",
        "Água mole em pedra dura, tanto bate até que para de bater.",
        "Não deixe para amanhã o que você pode esquecer completamente.",
        "De grão em grão, a galinha faz um pão... espera, isso não está certo.",
        "Quem tem boca vai a Roma, quem não tem usa GPS.",
        "O importante não é ganhar, é fazer o adversário perder também."
    ];

    if (newWisdomBtn && wisdomText) {
        newWisdomBtn.addEventListener('click', function() {
            const randomWisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
            wisdomText.style.opacity = '0';
            setTimeout(() => {
                wisdomText.textContent = randomWisdom;
                wisdomText.style.opacity = '1';
            }, 300);
        });
    }

    const randomFact = document.getElementById('random-fact');
    const newFactBtn = document.getElementById('new-fact');
    
    const fakeFacts = [
        "73% das pessoas que clicam em botões inúteis ficam 12% mais felizes por 0.3 segundos.",
        "Cientistas descobriram que rir de sites bobos aumenta a expectativa de vida em 2 minutos.",
        "95% dos gatos preferem música eletrônica para dançar.",
        "Estudos mostram que pessoas que visitam sites inúteis são 67% mais criativas.",
        "O primeiro emoji foi criado por um gato que pisou no teclado em 1823.",
        "Borboletas podem ver cores que nem existem, tipo roxo-azul-verde-dourado.",
        "Se você juntar todos os cliques inúteis do mundo, dá para fazer 3 cafés.",
        "Pesquisadores descobriram que rir de bobeiras queima exatamente 0,001 calorias."
    ];

    if (newFactBtn && randomFact) {
        newFactBtn.addEventListener('click', function() {
            const randomFactText = fakeFacts[Math.floor(Math.random() * fakeFacts.length)];
            randomFact.style.opacity = '0';
            setTimeout(() => {
                randomFact.textContent = randomFactText;
                randomFact.style.opacity = '1';
            }, 200);
        });
    }

    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                darkModeToggle.innerHTML = '🌙';
                localStorage.setItem('darkMode', 'disabled');
            } else {
                document.body.classList.add('dark-mode');
                darkModeToggle.innerHTML = '☀️';
                localStorage.setItem('darkMode', 'enabled');
            }
        });

        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️';
        }
    }

    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    let isMusicPlaying = false;

    if (musicToggle && backgroundMusic) {
        
        backgroundMusic.volume = 0.3;
        
        musicToggle.addEventListener('click', function() {
            if (!isMusicPlaying) {
                isMusicPlaying = true;
                musicToggle.innerHTML = '<i class="fas fa-pause"></i> <span>Pausar Música Mágica</span>';
                musicToggle.classList.add('playing');
                
                backgroundMusic.play().catch(function(error) {
                    console.log('Erro ao reproduzir música:', error);
                    
                    isMusicPlaying = false;
                    musicToggle.innerHTML = '<i class="fas fa-play"></i> <span>Tocar Música Mágica</span>';
                    musicToggle.classList.remove('playing');
                });
            } else {
                isMusicPlaying = false;
                musicToggle.innerHTML = '<i class="fas fa-play"></i> <span>Tocar Música Mágica</span>';
                musicToggle.classList.remove('playing');
                backgroundMusic.pause();
                backgroundMusic.currentTime = 0;
            }
        });

        backgroundMusic.addEventListener('ended', function() {
            if (isMusicPlaying) {
                backgroundMusic.play();
            }
        });

        backgroundMusic.addEventListener('error', function(e) {
            console.log('Erro no arquivo de áudio:', e);
            isMusicPlaying = false;
            musicToggle.innerHTML = '<i class="fas fa-play"></i> <span>Tocar Música Mágica</span>';
            musicToggle.classList.remove('playing');
        });
    }

    const cookie = document.getElementById('cookie');
    const cookieCount = document.getElementById('cookie-count');
    const cookieUpgrade = document.getElementById('cookie-upgrade');
    let cookies = 0;
    let cookieMultiplier = 1;

    if (cookie && cookieCount && cookieUpgrade) {
        cookie.addEventListener('click', function() {
            cookies += cookieMultiplier;
            cookieCount.textContent = `Cookies: ${cookies}`;
            
            cookie.style.transform = 'scale(1.2) rotate(10deg)';
            setTimeout(() => {
                cookie.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
            
            if (cookies >= 10) {
                cookieUpgrade.disabled = false;
            }
        });

        cookieUpgrade.addEventListener('click', function() {
            if (cookies >= 10) {
                cookies -= 10;
                cookieMultiplier += 1;
                cookieCount.textContent = `Cookies: ${cookies}`;
                cookieUpgrade.textContent = `Upgrade Mágico (${10 * cookieMultiplier} cookies)`;
                
                if (cookies < 10 * cookieMultiplier) {
                    cookieUpgrade.disabled = true;
                }
            }
        });
    }

    const colorDisplay = document.getElementById('color-display');
    const colorButtons = document.querySelectorAll('.color-btn');
    const colorScore = document.getElementById('color-score');
    const startColorGame = document.getElementById('start-color-game');
    
    let colorSequence = [];
    let playerSequence = [];
    let colorGameActive = false;
    let colorLevel = 0;

    if (startColorGame && colorDisplay && colorScore) {
        startColorGame.addEventListener('click', function() {
            if (!colorGameActive) {
                startColorSequence();
            }
        });

        function startColorSequence() {
            colorGameActive = true;
            colorLevel++;
            playerSequence = [];
            
            const colors = ['red', 'blue', 'green', 'purple'];
            colorSequence.push(colors[Math.floor(Math.random() * colors.length)]);
            
            colorScore.textContent = `Sequência: ${colorLevel}`;
            startColorGame.textContent = 'Memorize...';
            startColorGame.disabled = true;
            
            setTimeout(() => {
                playColorSequence();
            }, 1000);
        }

        function playColorSequence() {
            let i = 0;
            const interval = setInterval(() => {
                if (i < colorSequence.length) {
                    flashColor(colorSequence[i]);
                    i++;
                } else {
                    clearInterval(interval);
                    enableColorButtons();
                    startColorGame.textContent = 'Sua vez!';
                }
            }, 800);
        }

        function flashColor(color) {
            const button = document.querySelector(`[data-color="${color}"]`);
            if (button) {
                button.style.opacity = '1';
                button.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    button.style.opacity = '0.7';
                    button.style.transform = 'scale(1)';
                }, 400);
            }
        }

        function enableColorButtons() {
            colorButtons.forEach(button => {
                button.style.pointerEvents = 'auto';
                button.addEventListener('click', handleColorClick);
            });
        }

        function handleColorClick(e) {
            const clickedColor = e.target.dataset.color;
            playerSequence.push(clickedColor);
            
            flashColor(clickedColor);
            
            const currentIndex = playerSequence.length - 1;
            if (playerSequence[currentIndex] !== colorSequence[currentIndex]) {
                endColorGame(false);
                return;
            }
            
            if (playerSequence.length === colorSequence.length) {
                colorButtons.forEach(btn => btn.style.pointerEvents = 'none');
                setTimeout(() => {
                    if (colorLevel >= 5) {
                        endColorGame(true);
                    } else {
                        startColorSequence();
                    }
                }, 1000);
            }
        }

        function endColorGame(won) {
            colorGameActive = false;
            colorSequence = [];
            colorLevel = 0;
            
            if (won) {
                startColorGame.textContent = '🎉 Você venceu! Jogar novamente';
            } else {
                startColorGame.textContent = '😅 Tente novamente';
            }
            
            startColorGame.disabled = false;
            colorButtons.forEach(btn => {
                btn.style.pointerEvents = 'none';
                btn.removeEventListener('click', handleColorClick);
            });
        }
    }

    const guessInput = document.getElementById('guess-input');
    const guessBtn = document.getElementById('guess-btn');
    const guessFeedback = document.getElementById('guess-feedback');
    const guessAttempts = document.getElementById('guess-attempts');
    const newNumberGameBtn = document.getElementById('new-number-game');
    
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let gameOver = false;

    if (guessInput && guessBtn && guessFeedback && guessAttempts && newNumberGameBtn) {
        function resetGame() {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            gameOver = false;
            guessFeedback.textContent = 'Faça seu primeiro palpite!';
            guessFeedback.style.color = '#7c3aed';
            guessAttempts.textContent = 'Tentativas: 0';
            guessInput.value = '';
            guessInput.disabled = false;
            guessBtn.disabled = false;
            newNumberGameBtn.style.display = 'none';
        }

        function makeGuess() {
            if (gameOver) return;
            
            const guess = parseInt(guessInput.value);
            if (isNaN(guess) || guess < 1 || guess > 100) {
                guessFeedback.textContent = 'Digite um número entre 1 e 100!';
                guessFeedback.style.color = '#ef4444';
                return;
            }
            
            attempts++;
            guessAttempts.textContent = `Tentativas: ${attempts}`;
            
            if (guess === secretNumber) {
                guessFeedback.textContent = `🎉 Parabéns! Você acertou em ${attempts} tentativa${attempts > 1 ? 's' : ''}!`;
                guessFeedback.style.color = '#10b981';
                gameOver = true;
                guessInput.disabled = true;
                guessBtn.disabled = true;
                newNumberGameBtn.style.display = 'inline-block';
            } else if (guess < secretNumber) {
                guessFeedback.textContent = '📈 Muito baixo! Tente um número maior!';
                guessFeedback.style.color = '#f59e0b';
            } else {
                guessFeedback.textContent = '📉 Muito alto! Tente um número menor!';
                guessFeedback.style.color = '#f59e0b';
            }
            
            guessInput.value = '';
        }

        guessBtn.addEventListener('click', makeGuess);
        
        guessInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                makeGuess();
            }
        });
        
        newNumberGameBtn.addEventListener('click', resetGame);
    }

    const riddleQuestion = document.getElementById('riddle-question');
    const riddleOptions = document.querySelectorAll('.riddle-option');
    const riddleFeedback = document.getElementById('riddle-feedback');
    const newRiddleBtn = document.getElementById('new-riddle');

    const riddles = [
        {
            question: "Se um pato está num lago e o lago está seco, onde está a água do pato?",
            options: ["No pato", "Em outro lago", "Não existe água"],
            correct: "a"
        },
        {
            question: "Por que os pássaros voam para o sul no inverno?",
            options: ["Porque é longe demais para ir andando", "Para fugir do frio", "Para visitar a vovó"],
            correct: "a"
        },
        {
            question: "O que o pato falou para a pata?",
            options: ["Vem quá!", "Oi pata!", "Quack quack!"],
            correct: "a"
        }
    ];

    let currentRiddle = 0;

    if (riddleQuestion && riddleFeedback && newRiddleBtn) {
        function loadRiddle() {
            const riddle = riddles[currentRiddle];
            riddleQuestion.textContent = riddle.question;
            
            riddleOptions.forEach((option, index) => {
                option.textContent = `${String.fromCharCode(65 + index)}) ${riddle.options[index]}`;
                option.style.backgroundColor = '';
                option.disabled = false;
            });
            
            riddleFeedback.textContent = '';
        }

        riddleOptions.forEach(option => {
            option.addEventListener('click', function() {
                const answer = this.dataset.answer;
                const correct = riddles[currentRiddle].correct;
                
                if (answer === correct) {
                    this.style.backgroundColor = '#10b981';
                    riddleFeedback.textContent = '🎉 Correto! Você é um gênio da bobagem!';
                    riddleFeedback.style.color = '#10b981';
                } else {
                    this.style.backgroundColor = '#ef4444';
                    riddleFeedback.textContent = '😅 Ops! Tente outra resposta bobinha!';
                    riddleFeedback.style.color = '#ef4444';
                }
                
                riddleOptions.forEach(opt => opt.disabled = true);
            });
        });

        newRiddleBtn.addEventListener('click', function() {
            currentRiddle = (currentRiddle + 1) % riddles.length;
            loadRiddle();
        });

        loadRiddle();
    }

    const usefulRiddleQuestion = document.getElementById('useful-riddle-question');
    const usefulRiddleOptions = document.querySelectorAll('.useful-riddle-option');
    const usefulRiddleFeedback = document.getElementById('useful-riddle-feedback');
    const newUsefulRiddleBtn = document.getElementById('new-useful-riddle');

    const usefulRiddles = [
        {
            question: "Qual é a capital do Brasil?",
            options: ["São Paulo", "Rio de Janeiro", "Brasília"],
            correct: "c"
        },
        {
            question: "Quantos continentes existem?",
            options: ["5", "6", "7"],
            correct: "c"
        },
        {
            question: "Qual o maior planeta do sistema solar?",
            options: ["Terra", "Júpiter", "Saturno"],
            correct: "b"
        }
    ];

    let currentUsefulRiddle = 0;

    if (usefulRiddleQuestion && usefulRiddleFeedback && newUsefulRiddleBtn) {
        function loadUsefulRiddle() {
            const riddle = usefulRiddles[currentUsefulRiddle];
            usefulRiddleQuestion.textContent = riddle.question;
            
            usefulRiddleOptions.forEach((option, index) => {
                option.textContent = `${String.fromCharCode(65 + index)}) ${riddle.options[index]}`;
                option.style.backgroundColor = '';
                option.disabled = false;
            });
            
            usefulRiddleFeedback.textContent = '';
        }

        usefulRiddleOptions.forEach(option => {
            option.addEventListener('click', function() {
                const answer = this.dataset.answer;
                const correct = usefulRiddles[currentUsefulRiddle].correct;
                
                if (answer === correct) {
                    this.style.backgroundColor = '#10b981';
                    usefulRiddleFeedback.textContent = '✅ Correto! Você sabe das coisas!';
                    usefulRiddleFeedback.style.color = '#10b981';
                } else {
                    this.style.backgroundColor = '#ef4444';
                    usefulRiddleFeedback.textContent = '❌ Incorreto. Tente novamente!';
                    usefulRiddleFeedback.style.color = '#ef4444';
                }
                
                usefulRiddleOptions.forEach(opt => opt.disabled = true);
            });
        });

        newUsefulRiddleBtn.addEventListener('click', function() {
            currentUsefulRiddle = (currentUsefulRiddle + 1) % usefulRiddles.length;
            loadUsefulRiddle();
        });

        loadUsefulRiddle();
    }

    const cuteButtons = document.querySelectorAll('.cute-btn');
    
    cuteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            const emoji = this.parentElement.querySelector('.cute-emoji');
            
            switch(action) {
                case 'hug':
                    emoji.style.animation = 'pulse 1s ease-in-out 3';
                    createHearts(emoji);
                    break;
                case 'smile':
                    emoji.style.transform = 'scale(1.5) rotate(360deg)';
                    setTimeout(() => {
                        emoji.style.transform = '';
                    }, 1000);
                    break;
                case 'float':
                    emoji.style.animation = 'float 3s ease-in-out';
                    setTimeout(() => {
                        emoji.style.animation = '';
                    }, 3000);
                    break;
                case 'dance':
                    emoji.style.animation = 'dance 2s ease-in-out 2';
                    setTimeout(() => {
                        emoji.style.animation = '';
                    }, 4000);
                    break;
                case 'sleep':
                    emoji.style.filter = 'blur(1px)';
                    emoji.style.opacity = '0.7';
                    setTimeout(() => {
                        emoji.style.filter = '';
                        emoji.style.opacity = '';
                    }, 3000);
                    break;
                case 'shine':
                    createSparkles(emoji);
                    emoji.style.animation = 'sparkleRotate 2s linear infinite';
                    setTimeout(() => {
                        emoji.style.animation = '';
                    }, 4000);
                    break;
            }
        });
    });

    function createHearts(element) {
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = '💖';
                heart.style.cssText = `
                    position: absolute;
                    font-size: 1.5rem;
                    pointer-events: none;
                    animation: heartFloat 2s ease-out forwards;
                    left: 50%;
                    top: 50%;
                    z-index: 1000;
                `;
                element.parentElement.style.position = 'relative';
                element.parentElement.appendChild(heart);
                
                setTimeout(() => heart.remove(), 2000);
            }, i * 200);
        }
    }

    function createSparkles(element) {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.textContent = '✨';
                sparkle.style.cssText = `
                    position: absolute;
                    font-size: 1rem;
                    pointer-events: none;
                    animation: sparkleFloat 1.5s ease-out forwards;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    z-index: 1000;
                `;
                element.parentElement.style.position = 'relative';
                element.parentElement.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1500);
            }, i * 100);
        }
    }

    const virtualPet = document.getElementById('virtual-pet');
    const petMood = document.getElementById('pet-mood');
    const happinessBar = document.getElementById('happiness-bar');
    const hungerBar = document.getElementById('hunger-bar');
    const smellBar = document.getElementById('smell-bar');
    const petMessage = document.getElementById('pet-message');
    
    const feedPetBtn = document.getElementById('feed-pet');
    const playPetBtn = document.getElementById('play-pet');
    const petSleepBtn = document.getElementById('pet-sleep');
    const bathPetBtn = document.getElementById('bath-pet');
    const petPhotoBtn = document.getElementById('pet-photo');
    const teachTrickBtn = document.getElementById('teach-trick');
    const petDanceBtn = document.getElementById('pet-dance');
    const ignorePetBtn = document.getElementById('ignore-pet');

    let petStats = {
        happiness: 80,
        hunger: 60,
        smell: 30
    };

    function updatePetStatus() {
        if (happinessBar) happinessBar.style.width = petStats.happiness + '%';
        if (hungerBar) hungerBar.style.width = petStats.hunger + '%';
        if (smellBar) smellBar.style.width = petStats.smell + '%';
        
        if (petStats.happiness > 70) {
            if (petMood) petMood.textContent = 'Seu gatinho está feliz! 😊';
        } else if (petStats.happiness > 40) {
            if (petMood) petMood.textContent = 'Seu gatinho está ok... 😐';
        } else {
            if (petMood) petMood.textContent = 'Seu gatinho está triste... 😢';
        }
    }

    function showPetMessage(action) {
        const messages = {
            feed: ['Miau! Que delícia! 😋', 'Obrigado pela comida! 🍎', 'Estava com fome! 😸'],
            play: ['Que divertido! 🎾', 'Miau miau! Brincadeira boa! 😻', 'Adoro brincar! 🎯'],
            sleep: ['Zzz... que soninho gostoso! 😴', 'Acordei descansado! 🛌', 'Que cochilo maravilhoso! 💤'],
            bath: ['Não gosto de banho! 😾', 'Que frio! Brr! 🛁', 'Tá, tá limpo agora... 😒'],
            photo: ['Flash! Posando para a foto! 📸', 'Sou fotogênico! ✨', 'Tirou uma boa foto! 📷'],
            trick: ['Aprendi um truque novo! 🎭', 'Miau! Como assim? 🤔', 'Sou muito inteligente! 🧠'],
            dance: ['Vamos dançar juntos! 💃', 'Que ritmo bom! 🎵', 'Adoro dançar! 🕺'],
            ignore: ['Ei! Me dá atenção! 😿', 'Por que está me ignorando? 😢', 'Miau... miau... 🥺']
        };
        
        const actionMessages = messages[action] || ['Miau! 🐱'];
        const randomMessage = actionMessages[Math.floor(Math.random() * actionMessages.length)];
        
        if (petMessage) {
            petMessage.textContent = randomMessage;
            petMessage.style.opacity = '1';
            setTimeout(() => {
                petMessage.style.opacity = '0';
            }, 3000);
        }
    }

    if (feedPetBtn) {
        feedPetBtn.addEventListener('click', function() {
            petStats.hunger = Math.min(100, petStats.hunger + 20);
            petStats.happiness = Math.min(100, petStats.happiness + 10);
            petStats.smell = Math.min(100, petStats.smell + 5);
            updatePetStatus();
            showPetMessage('feed');
            if (virtualPet) virtualPet.style.animation = 'bounce 1s ease-in-out';
            setTimeout(() => { if (virtualPet) virtualPet.style.animation = ''; }, 1000);
        });
    }

    if (playPetBtn) {
        playPetBtn.addEventListener('click', function() {
            petStats.happiness = Math.min(100, petStats.happiness + 15);
            petStats.hunger = Math.max(0, petStats.hunger - 10);
            petStats.smell = Math.min(100, petStats.smell + 10);
            updatePetStatus();
            showPetMessage('play');
            if (virtualPet) virtualPet.style.animation = 'wiggle 2s ease-in-out';
            setTimeout(() => { if (virtualPet) virtualPet.style.animation = ''; }, 2000);
        });
    }

    if (petSleepBtn) {
        petSleepBtn.addEventListener('click', function() {
            petStats.happiness = Math.min(100, petStats.happiness + 5);
            petStats.hunger = Math.max(0, petStats.hunger - 5);
            updatePetStatus();
            showPetMessage('sleep');
            if (virtualPet) {
                virtualPet.style.opacity = '0.7';
                virtualPet.style.filter = 'blur(1px)';
                setTimeout(() => {
                    virtualPet.style.opacity = '1';
                    virtualPet.style.filter = 'none';
                }, 2000);
            }
        });
    }

    if (bathPetBtn) {
        bathPetBtn.addEventListener('click', function() {
            petStats.happiness = Math.max(0, petStats.happiness - 15);
            petStats.smell = Math.max(0, petStats.smell - 30);
            updatePetStatus();
            showPetMessage('bath');
            if (virtualPet) virtualPet.style.animation = 'shake 1s ease-in-out';
            setTimeout(() => { if (virtualPet) virtualPet.style.animation = ''; }, 1000);
        });
    }

    if (petPhotoBtn) {
        petPhotoBtn.addEventListener('click', function() {
            petStats.happiness = Math.min(100, petStats.happiness + 5);
            petStats.smell = Math.min(100, petStats.smell + 2);
            updatePetStatus();
            showPetMessage('photo');

            const flash = document.createElement('div');
            flash.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: white;
                pointer-events: none;
                z-index: 9999;
                animation: cameraFlash 0.3s ease-out;
            `;
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 300);
        });
    }

    if (teachTrickBtn) {
        teachTrickBtn.addEventListener('click', function() {
            petStats.happiness = Math.min(100, petStats.happiness + 8);
            petStats.hunger = Math.max(0, petStats.hunger - 5);
            petStats.smell = Math.min(100, petStats.smell + 3);
            updatePetStatus();
            showPetMessage('trick');
            if (virtualPet) virtualPet.style.animation = 'flip 1.5s ease-in-out';
            setTimeout(() => { if (virtualPet) virtualPet.style.animation = ''; }, 1500);
        });
    }

    if (petDanceBtn) {
        petDanceBtn.addEventListener('click', function() {
            petStats.happiness = Math.min(100, petStats.happiness + 12);
            petStats.hunger = Math.max(0, petStats.hunger - 8);
            petStats.smell = Math.min(100, petStats.smell + 8);
            updatePetStatus();
            showPetMessage('dance');
            if (virtualPet) virtualPet.style.animation = 'dance 2s ease-in-out';
            setTimeout(() => { if (virtualPet) virtualPet.style.animation = ''; }, 2000);
        });
    }

    if (ignorePetBtn) {
        ignorePetBtn.addEventListener('click', function() {
            petStats.happiness = Math.max(0, petStats.happiness - 20);
            updatePetStatus();
            showPetMessage('ignore');
            if (virtualPet) {
                virtualPet.style.filter = 'grayscale(1)';
                setTimeout(() => {
                    virtualPet.style.filter = 'none';
                }, 3000);
            }
        });
    }

    updatePetStatus();

    const generateLoveBtn = document.getElementById('generate-love');
    const sendLoveBtn = document.getElementById('send-love');
    const loveLetter = document.getElementById('love-letter');
    const loveHearts = document.getElementById('love-hearts');

    const loveLetters = [
        "Querido(a), você é como um arco-íris depois da chuva... traz cores ao meu mundo cinzento e me faz sorrir mesmo nos dias mais nublados. 💖",
        "Meu coração bate como um tamborzinho toda vez que penso em você. É como se tivesse borboletas fazendo uma festa lá dentro! 🦋💕",
        "Você é como a primeira estrela que aparece no céu... ilumina toda a escuridão e me dá esperança de que dias lindos virão. ⭐",
        "Se eu pudesse pegar todos os momentos felizes do mundo, ainda assim não seria tão especial quanto um minuto ao seu lado. 💫",
        "Você é como um cafézinho quentinho numa manhã fria... aquece minha alma e faz tudo ficar mais gostoso. ☕💖",
        "Meu amor por você é como o Wi-Fi... pode ser invisível, mas está sempre conectado e presente! 📶💕"
    ];

    if (generateLoveBtn && loveLetter) {
        generateLoveBtn.addEventListener('click', function() {
            const randomLetter = loveLetters[Math.floor(Math.random() * loveLetters.length)];
            loveLetter.style.opacity = '0';
            
            setTimeout(() => {
                loveLetter.textContent = `"${randomLetter}"`;
                loveLetter.style.opacity = '1';
            }, 300);
        });
    }

    if (sendLoveBtn && loveHearts) {
        sendLoveBtn.addEventListener('click', function() {
            loveHearts.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.textContent = ['💖', '💕', '💗', '💓', '💘'][Math.floor(Math.random() * 5)];
                    heart.className = 'floating-heart';
                    loveHearts.appendChild(heart);
                    
                    setTimeout(() => {
                        if (heart.parentElement) {
                            heart.remove();
                        }
                    }, 3000);
                }, i * 200);
            }
            
            const originalText = sendLoveBtn.innerHTML;
            sendLoveBtn.innerHTML = '💌 Enviado com Amor!';
            sendLoveBtn.disabled = true;
            
            setTimeout(() => {
                sendLoveBtn.innerHTML = originalText;
                sendLoveBtn.disabled = false;
            }, 3000);
        });
    }

    const magicButtons = document.querySelectorAll('.magic-btn');
    const generateButton = document.getElementById('generate-button');
    const magicButtonsArea = document.getElementById('magic-buttons-area');

    const buttonActions = {
        confetti: createConfettiEffect,
        dance: makeDanceEffect,
        rainbow: createRainbowEffect,
        sparkle: createSparkleEffect,
        drama: createDramaEffect,
        circus: createCircusEffect,
        pizza: createPizzaEffect,
        unicorn: createUnicornEffect,
        art: createArtEffect,
        target: createTargetEffect
    };

    magicButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            if (buttonActions[action]) {
                buttonActions[action]();
            }
        });
    });

    if (generateButton && magicButtonsArea) {
        generateButton.addEventListener('click', function() {
            const newButtons = [
                { action: 'sparkle', text: '✨ Botão Brilho' },
                { action: 'drama', text: '🎭 Botão Drama' },
                { action: 'circus', text: '🎪 Botão Circo' },
                { action: 'pizza', text: '🍕 Botão Pizza' },
                { action: 'unicorn', text: '🦄 Botão Unicórnio' },
                { action: 'art', text: '🎨 Botão Arte' },
                { action: 'target', text: '🎯 Botão Alvo' }
            ];
            
            const randomButton = newButtons[Math.floor(Math.random() * newButtons.length)];
            
            const newBtn = document.createElement('button');
            newBtn.className = 'magic-btn';
            newBtn.dataset.action = randomButton.action;
            newBtn.textContent = randomButton.text;
            
            newBtn.addEventListener('click', function() {
                const action = this.dataset.action;
                if (buttonActions[action]) {
                    buttonActions[action]();
                }
            });
            
            magicButtonsArea.appendChild(newBtn);

            const allButtons = magicButtonsArea.querySelectorAll('.magic-btn');
            if (allButtons.length > 10) {
                allButtons[0].remove();
            }
        });
    }

    function createConfettiEffect() {
        const colors = ['#ff6b9d', '#c44569', '#f8b500', '#38ada9', '#6c5ce7'];
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}vw;
                    top: -10px;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    pointer-events: none;
                    z-index: 1000;
                    animation: confettiFall ${Math.random() * 2 + 1}s linear forwards;
                `;
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 3000);
            }, i * 50);
        }
    }

    function makeDanceEffect() {
        document.body.style.animation = 'dance 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }

    function createRainbowEffect() {
        const rainbow = document.createElement('div');
        rainbow.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
            opacity: 0.3;
            pointer-events: none;
            z-index: 1000;
            animation: rainbow 3s ease-in-out forwards;
        `;
        document.body.appendChild(rainbow);
        setTimeout(() => rainbow.remove(), 3000);
    }

    function createSparkleEffect() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.textContent = '✨';
                sparkle.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}vw;
                    top: ${Math.random() * 100}vh;
                    font-size: 2rem;
                    pointer-events: none;
                    z-index: 1000;
                    animation: sparkle 2s ease-out forwards;
                `;
                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 2000);
            }, i * 100);
        }
    }

    function createDramaEffect() {
        const drama = document.createElement('div');
        drama.textContent = '🎭 DRAMA INTENSO! 🎭';
        drama.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: #ec4899;
            pointer-events: none;
            z-index: 1000;
            animation: dramaPulse 3s ease-in-out forwards;
        `;
        document.body.appendChild(drama);
        setTimeout(() => drama.remove(), 3000);
    }

    function createCircusEffect() {
        const emojis = ['🎪', '🎭', '🤹', '🎨', '🎵'];
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const emoji = document.createElement('div');
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}vw;
                    top: ${Math.random() * 100}vh;
                    font-size: 2rem;
                    pointer-events: none;
                    z-index: 1000;
                    animation: circus 3s ease-out forwards;
                `;
                document.body.appendChild(emoji);
                setTimeout(() => emoji.remove(), 3000);
            }, i * 150);
        }
    }

    function createPizzaEffect() {
        const pizza = document.createElement('div');
        pizza.textContent = '🍕 PIZZA TIME! 🍕';
        pizza.style.cssText = `
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2.5rem;
            color: #f59e0b;
            pointer-events: none;
            z-index: 1000;
            animation: pizzaBounce 2s ease-in-out forwards;
        `;
        document.body.appendChild(pizza);
        setTimeout(() => pizza.remove(), 2000);
    }

    function createUnicornEffect() {
        const unicorn = document.createElement('div');
        unicorn.textContent = '🦄 MAGIA DE UNICÓRNIO! 🦄';
        unicorn.style.cssText = `
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2rem;
            background: linear-gradient(45deg, #ff6b9d, #c44569, #f8b500);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            pointer-events: none;
            z-index: 1000;
            animation: unicornFloat 3s ease-in-out forwards;
        `;
        document.body.appendChild(unicorn);
        setTimeout(() => unicorn.remove(), 3000);
    }

    function createArtEffect() {
        const colors = ['#ff6b9d', '#c44569', '#f8b500', '#38ada9', '#6c5ce7'];
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const brush = document.createElement('div');
                brush.textContent = '🎨';
                brush.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}vw;
                    top: ${Math.random() * 100}vh;
                    font-size: 1.5rem;
                    color: ${colors[Math.floor(Math.random() * colors.length)]};
                    pointer-events: none;
                    z-index: 1000;
                    animation: artSplash 2s ease-out forwards;
                `;
                document.body.appendChild(brush);
                setTimeout(() => brush.remove(), 2000);
            }, i * 100);
        }
    }

    function createTargetEffect() {
        const target = document.createElement('div');
        target.textContent = '🎯';
        target.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4rem;
            pointer-events: none;
            z-index: 1000;
            animation: targetHit 1s ease-out forwards;
        `;
        document.body.appendChild(target);
        setTimeout(() => target.remove(), 1000);
    }

    console.log(`
    🌈 Olá, explorador(a) de códigos! 🌈
    
    Você encontrou o console! Que tal tentar alguns comandos divertidos?
    
    Digite no console:
    - makeItRain() - Para fazer chover emojis!
    - changeColors() - Para mudar as cores do site!
    - showSecret() - Para ver uma mensagem secreta!
    
    Divirta-se! 🎉
    `);

    window.makeItRain = function() {
        createConfettiEffect();
        console.log('🌧️ Chuva de emojis ativada!');
    };

    window.changeColors = function() {
        document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        console.log('🎨 Cores alteradas temporariamente!');
    };

    window.showSecret = function() {
        alert('🤫 Segredo: Este site foi feito com muito amor e café! ☕💖');
        console.log('🤫 Segredo revelado!');
    };

});