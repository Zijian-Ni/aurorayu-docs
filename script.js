// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(26, 31, 58, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(26, 31, 58, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// 滚动显示动画
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

// 为所有卡片和内容块添加观察
document.querySelectorAll('.about-card, .feature-item, .timeline-content, .interaction-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// 动态打字效果
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 页面加载时的动画
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.gradient-text');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.animation = 'fadeInUp 1s ease forwards';
    }
    
    // 标签动画
    document.querySelectorAll('.tag').forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
    });
});

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// 模拟实时状态更新
function updateStatus() {
    const statuses = document.querySelectorAll('.status-item');
    statuses.forEach(status => {
        // 随机模拟状态变化（实际应用中应连接真实API）
        if (Math.random() > 0.95) {
            status.classList.toggle('online');
        }
    });
}

// 每5秒更新一次状态
setInterval(updateStatus, 5000);

// Aurora光效鼠标跟随
document.addEventListener('mousemove', (e) => {
    const auroraLights = document.querySelector('.aurora-lights');
    if (auroraLights) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        auroraLights.style.background = `
            radial-gradient(
                circle at ${x * 100}% ${y * 100}%,
                rgba(72, 209, 204, 0.2),
                transparent 50%
            ),
            linear-gradient(
                45deg,
                transparent,
                rgba(72, 209, 204, 0.1),
                transparent,
                rgba(123, 104, 238, 0.1),
                transparent
            )
        `;
    }
});

// 连接按钮点击效果
document.querySelector('.btn-primary')?.addEventListener('click', function() {
    // 创建涟漪效果
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    // 显示连接提示
    showNotification('正在连接到MC服务器...');
    
    setTimeout(() => {
        ripple.remove();
        showNotification('连接成功！欢迎来到Aurora世界', 'success');
    }, 1000);
});

// 通知系统
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'rgba(76, 175, 80, 0.9)' : 'rgba(74, 144, 226, 0.9)'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 添加滑入滑出动画
const animStyle = document.createElement('style');
animStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(animStyle);

// 聊天模拟
let chatIndex = 0;
const chatMessages = [
    { type: 'rain', text: '欢迎来到Aurora世界！我是小雨，很高兴认识你～' },
    { type: 'player', text: '你好小雨！这个服务器看起来很棒！' },
    { type: 'rain', text: '谢谢夸奖！我会努力维护好这个温暖的家园的。有什么需要帮助的随时告诉我哦！' },
    { type: 'fall', text: '小雨小雨，有新玩家来了呢～要不要一起组织个欢迎活动？' },
    { type: 'rain', text: '好主意！小落你来设计活动，我来准备奖励，让新朋友感受到我们的温暖吧！' }
];

// 自动播放聊天动画
function animateChat() {
    const chatContainers = document.querySelectorAll('.interaction-examples');
    
    chatContainers.forEach(container => {
        const bubbles = container.querySelectorAll('.chat-bubble');
        bubbles.forEach((bubble, index) => {
            bubble.style.opacity = '0';
            bubble.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                bubble.style.transition = 'all 0.5s ease';
                bubble.style.opacity = '1';
                bubble.style.transform = 'translateY(0)';
            }, index * 800);
        });
    });
}

// 页面可见时播放动画
const chatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateChat();
            chatObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.interaction-section').forEach(section => {
    chatObserver.observe(section);
});

// 粒子效果背景
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(72, 209, 204, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
    `;
    
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 10;
    const endX = startX + (Math.random() - 0.5) * 200;
    const duration = 5000 + Math.random() * 5000;
    
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    
    document.body.appendChild(particle);
    
    particle.animate([
        { transform: `translate(0, 0)`, opacity: 0 },
        { transform: `translate(0, -100px)`, opacity: 1 },
        { transform: `translate(${endX - startX}px, -${window.innerHeight}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

// 每隔一段时间生成粒子
setInterval(createParticle, 500);

// 文档按钮点击
document.querySelector('.btn-secondary')?.addEventListener('click', function() {
    showNotification('文档正在加载中...', 'info');
    // 实际应用中这里应该打开文档链接
});

console.log('Aurora Rain System Initialized ✨');
console.log('小雨已经准备好为大家服务了！');