// 龙卷风网站交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 添加粒子效果
    createParticles();
    
    // 添加滚动动画
    addScrollAnimations();
    
    // 添加鼠标跟随效果
    addMouseEffect();
});

// 创建背景粒子
function createParticles() {
    const container = document.querySelector('.container');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(100, 200, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            z-index: -1;
        `;
        container.appendChild(particle);
    }
    
    // 添加浮动动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// 滚动动画
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 为各个 section 添加动画
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// 鼠标跟随效果
function addMouseEffect() {
    const tornado = document.querySelector('.tornado');
    if (!tornado) return;
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        tornado.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
}

// 统计数字动画
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-card .number');
    
    numbers.forEach(num => {
        const target = parseInt(num.textContent);
        const suffix = num.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            num.textContent = Math.floor(current) + suffix;
        }, 30);
    });
}

// 页面加载完成后启动数字动画
window.addEventListener('load', () => {
    setTimeout(animateNumbers, 500);
});

// 龙卷风等级卡片点击效果
const typeCards = document.querySelectorAll('.type-card');
typeCards.forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.05)';
        }, 100);
    });
});

console.log('🌪️ 龙卷风网站已加载！');
console.log('Created with ❤️ by YR1157');