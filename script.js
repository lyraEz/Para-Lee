document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupScrollReveal();
    setupSmoothScroll();
    setupAdvancedEffects();
});

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }

    setInterval(() => {
        if (particlesContainer.children.length < particleCount) {
            createParticle(particlesContainer);
        }
    }, 300);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 8 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';

    particle.style.opacity = Math.random() * 0.5 + 0.1;

    container.appendChild(particle);

    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 20000);
}

function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.querySelector('h2')) {
                    typewriterEffect(entry.target.querySelector('h2'));
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

function typewriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid hsl(320, 60%, 70%)';

    let i = 0;
    const timer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(timer);
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 500);
        }
    }, 100);
}

function setupSmoothScroll() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('.confession');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('.background-text');

        parallax.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translate(-50%, calc(-50% + ${scrolled * speed}px))`;
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const textBlocks = document.querySelectorAll('.text-block');

    textBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 30px 60px hsl(320, 30%, 20% / 0.2)';
        });

        block.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 20px 40px hsl(320, 30%, 20% / 0.1)';
        });
    });
});

document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.95) {
        createCursorHeart(e.clientX, e.clientY);
    }
});

function createCursorHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '♡';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.color = 'hsl(320, 60%, 70%)';
    heart.style.fontSize = '12px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'cursorHeartFloat 2s ease-out forwards';

    document.body.appendChild(heart);

    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 2000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes cursorHeartFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('dblclick', function(e) {
    createHeartExplosion(e.clientX, e.clientY);
});

function createHeartExplosion(x, y) {
    const heartCount = 12;
    const colors = [
        'hsl(320, 60%, 70%)',
        'hsl(280, 50%, 80%)',
        'hsl(200, 70%, 85%)'
    ];

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10000';

        const angle = (i / heartCount) * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;

        heart.style.animation = `heartExplode 1.5s ease-out forwards`;
        heart.style.setProperty('--endX', endX + 'px');
        heart.style.setProperty('--endY', endY + 'px');

        document.body.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1500);
    }
}

const explosionStyle = document.createElement('style');
explosionStyle.textContent = `
    @keyframes heartExplode {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translate(
                calc(var(--endX) - 50vw), 
                calc(var(--endY) - 50vh)
            ) scale(0.3) rotate(360deg);
        }
    }
`;
document.head.appendChild(explosionStyle);

function setupAdvancedEffects() {
    createWaveEffect();
    setup3DTextEffect();
    setupGlowEffect();
    setupEnhancedParallax();
}

function createWaveEffect() {
    const waveContainer = document.createElement('div');
    waveContainer.className = 'wave-container';
    waveContainer.innerHTML = `
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
    `;
    document.body.appendChild(waveContainer);

    const waveStyle = document.createElement('style');
    waveStyle.textContent = `
        .wave-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            pointer-events: none;
        }

        .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 200px;
            background: linear-gradient(90deg, 
                transparent, 
                hsl(var(--primary-color) / 0.1), 
                transparent);
            border-radius: 50% 50% 0 0;
            animation: waveMove 15s ease-in-out infinite;
        }

        .wave1 {
            animation-delay: 0s;
            opacity: 0.7;
        }

        .wave2 {
            animation-delay: 5s;
            opacity: 0.5;
            height: 150px;
        }

        .wave3 {
            animation-delay: 10s;
            opacity: 0.3;
            height: 100px;
        }

        @keyframes waveMove {
            0%, 100% {
                transform: translateX(-50%) rotate(0deg);
            }
            50% {
                transform: translateX(-50%) rotate(180deg);
            }
        }
    `;
    document.head.appendChild(waveStyle);
}

function setup3DTextEffect() {
    const titles = document.querySelectorAll('h2');

    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.textShadow = `
                1px 1px 0 hsl(var(--primary-color)),
                2px 2px 0 hsl(var(--secondary-color)),
                3px 3px 0 hsl(var(--accent-color)),
                4px 4px 10px hsl(var(--background-dark) / 0.5)
            `;
            this.style.transform = 'translateZ(20px) rotateX(5deg)';
        });

        title.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
            this.style.transform = '';
        });
    });
}

function setupGlowEffect() {
    const glowStyle = document.createElement('style');
    glowStyle.textContent = `
        .text-block:hover {
            box-shadow: 
                0 20px 40px hsl(var(--background-dark) / 0.3),
                0 0 30px hsl(var(--primary-color) / 0.4),
                inset 0 0 20px hsl(var(--primary-color) / 0.1);
            transform: translateY(-8px) scale(1.02);
        }

        .heart {
            filter: drop-shadow(0 0 10px hsl(var(--primary-color) / 0.6));
        }

        .title {
            text-shadow: 
                0 0 20px hsl(var(--primary-color) / 0.8),
                0 0 40px hsl(var(--secondary-color) / 0.6),
                2px 2px 10px hsl(var(--text-dark) / 0.3);
        }
    `;
    document.head.appendChild(glowStyle);
}

function setupEnhancedParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = 0.2 + (index % 3) * 0.1;
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });

        const hearts = document.querySelectorAll('.floating-hearts .heart');
        hearts.forEach(heart => {
            heart.style.transform = `translateY(${rate}px) rotate(45deg)`;
        });

        const backgroundTexts = document.querySelectorAll('.background-text');
        backgroundTexts.forEach(bg => {
            bg.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

function enhancedTypewriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '3px solid hsl(var(--primary-color))';

    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;

            if (i % 3 === 0) {
                element.style.color = 'hsl(var(--accent-color))';
                setTimeout(() => {
                    element.style.color = '';
                }, 100);
            }
        } else {
            clearInterval(timer);
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }, 80);
}

function addBreathingEffect() {
    const breathingStyle = document.createElement('style');
    breathingStyle.textContent = `
        .text-block strong {
            animation: breathe 3s ease-in-out infinite;
        }

        @keyframes breathe {
            0%, 100% {
                transform: scale(1);
                text-shadow: 0 0 5px hsl(var(--primary-color) / 0.5);
            }
            50% {
                transform: scale(1.05);
                text-shadow: 0 0 15px hsl(var(--primary-color) / 0.8);
            }
        }

        .final-hearts .heart-float {
            animation: finalFloat 8s ease-in-out infinite, breathe 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(breathingStyle);
}

document.addEventListener('DOMContentLoaded', function() {
    addBreathingEffect();
});