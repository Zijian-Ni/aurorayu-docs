// 增强版Aurora Rain系统脚本

// 全局变量
let consoleActive = false;
let currentScenario = 'mediation';
let quoteIndex = 0;
let networkNodes = [];
let particleSystem = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeAuroraSystem();
    initializeConsole();
    initializeAnimations();
    initializeNetwork();
    initializeInteractions();
    startRealtimeUpdates();
    
    console.log('🌟 Aurora Rain System Enhanced v2.0 Initialized');
    console.log('💙 小雨已经准备好全方位守护服务器了！');
});

// Aurora系统初始化
function initializeAuroraSystem() {
    // 创建Aurora Canvas动画
    const canvas = document.getElementById('auroraCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Aurora光效动画
        function drawAurora() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const time = Date.now() * 0.001;
            const colors = [
                'rgba(72, 209, 204, 0.1)',
                'rgba(123, 104, 238, 0.1)',
                'rgba(255, 107, 157, 0.1)',
                'rgba(255, 217, 61, 0.1)',
                'rgba(107, 207, 110, 0.1)'
            ];
            
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                const gradient = ctx.createLinearGradient(
                    0, 0,
                    canvas.width, canvas.height
                );
                
                gradient.addColorStop(0, 'transparent');
                gradient.addColorStop(0.5, colors[i]);
                gradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = gradient;
                
                for (let x = 0; x < canvas.width; x += 10) {
                    const y = Math.sin((x * 0.01) + time + (i * 0.5)) * 50 + (canvas.height * 0.5) + (i * 20);
                    ctx.lineTo(x, y);
                }
                
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();
                ctx.fill();
            }
            
            requestAnimationFrame(drawAurora);
        }
        
        drawAurora();
        
        // 响应窗口大小变化
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // 数字雨效果
    createDataRain();
}

// 控制台初始化
function initializeConsole() {
    // 标签切换
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            switchTab(tab);
        });
    });
    
    // 初始化玩家列表
    updatePlayerList();
    
    // 初始化聊天监控
    updateChatMonitor();
}

// 切换控制台标签
function switchTab(tabName) {
    // 更新按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });
    
    // 更新内容显示
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const tabContent = document.getElementById(tabName + 'Tab');
    if (tabContent) {
        tabContent.classList.add('active');
    }
}

// 切换控制台显示
function toggleConsole() {
    const console = document.getElementById('floatingConsole');
    consoleActive = !consoleActive;
    
    if (consoleActive) {
        console.classList.add('active');
        addConsoleMessage('welcome', '欢迎回来！我是小雨，有什么需要帮助的吗？✨');
    } else {
        console.classList.remove('active');
    }
}

// 控制台消息处理
function handleConsoleInput(event) {
    if (event.key === 'Enter') {
        sendCommand();
    }
}

// 发送命令
function sendCommand() {
    const input = document.getElementById('consoleInput');
    const command = input.value.trim();
    
    if (!command) return;
    
    // 显示用户命令
    addConsoleMessage('info', `> ${command}`);
    
    // 处理命令
    processCommand(command);
    
    // 清空输入
    input.value = '';
}

// 处理命令
function processCommand(command) {
    const lowerCommand = command.toLowerCase();
    
    // 命令映射
    const commands = {
        '在线': checkOnline,
        '服务器状态': checkStatus,
        '区块分析': checkChunks,
        '帮助': showHelp,
        '修改密码': () => changePassword(true),
        '清屏': clearConsole
    };
    
    // 查找匹配的命令
    let commandFound = false;
    for (const [key, func] of Object.entries(commands)) {
        if (lowerCommand.includes(key)) {
            func();
            commandFound = true;
            break;
        }
    }
    
    if (!commandFound) {
        // AI智能回复
        setTimeout(() => {
            addConsoleMessage('info', `小雨: 我理解你想要"${command}"，让我为你查看一下...`);
            setTimeout(() => {
                addConsoleMessage('success', '已为您智能分析并执行相关操作！');
            }, 1000);
        }, 500);
    }
}

// 检查在线玩家
function checkOnline() {
    setTimeout(() => {
        addConsoleMessage('success', `📊 在线统计：`);
        addConsoleMessage('info', `• 在线玩家：42/100`);
        addConsoleMessage('info', `• 在线列表：Steve, Alex, Notch, Herobrine...`);
        addConsoleMessage('info', `• 平均在线时长：2.5小时`);
        addConsoleMessage('info', `• 活跃度评分：优秀`);
    }, 500);
}

// 检查服务器状态
function checkStatus() {
    setTimeout(() => {
        addConsoleMessage('success', `⚡ 服务器状态：`);
        addConsoleMessage('info', `• TPS: 19.8/20 (优秀)`);
        addConsoleMessage('info', `• CPU使用率: 45%`);
        addConsoleMessage('info', `• 内存: 8.7GB/13GB (67%)`);
        addConsoleMessage('info', `• 网络延迟: 12ms`);
        addConsoleMessage('warning', `• 提示: 主城区实体较多，建议优化`);
    }, 500);
}

// 检查区块负载
function checkChunks() {
    setTimeout(() => {
        addConsoleMessage('success', `🗺️ 区块分析报告：`);
        addConsoleMessage('info', `• 加载区块数: 1,234`);
        addConsoleMessage('warning', `• 高负载区块：`);
        addConsoleMessage('info', `  - 坐标(-125, 64, 789): 农场区，87实体`);
        addConsoleMessage('info', `  - 坐标(0, 70, 0): 主城，156实体`);
        addConsoleMessage('info', `  - 坐标(234, 80, -567): 工业区，92实体`);
        addConsoleMessage('success', `• 建议：考虑分散部分农场设施`);
    }, 500);
}

// 显示帮助
function showHelp() {
    addConsoleMessage('success', `💡 可用命令：`);
    addConsoleMessage('info', `• 在线 - 查看在线玩家`);
    addConsoleMessage('info', `• 服务器状态 - 查看性能指标`);
    addConsoleMessage('info', `• 区块分析 - 查看区块负载`);
    addConsoleMessage('info', `• 修改密码 - 安全修改密码`);
    addConsoleMessage('info', `• 清屏 - 清空控制台`);
    addConsoleMessage('info', `• @小雨 [问题] - 向我提问`);
}

// 修改密码
function changePassword(fromCommand = false) {
    if (fromCommand) {
        addConsoleMessage('warning', '🔐 密码修改流程已启动...');
        addConsoleMessage('info', '• 请通过私聊发送新密码');
        addConsoleMessage('info', '• 使用端到端加密传输');
        addConsoleMessage('info', '• 采用量子抗性算法保护');
        addConsoleMessage('success', '✅ 安全通道已建立，请在私聊中操作');
    } else {
        alert('密码修改功能已启动，请在私聊中完成操作');
    }
}

// 查看日志
function viewLogs() {
    alert('正在加载安全日志...');
}

// 清空控制台
function clearConsole() {
    const output = document.getElementById('consoleOutput');
    output.innerHTML = '<div class="output-line welcome">控制台已清空，有什么需要帮助的吗？</div>';
}

// 添加控制台消息
function addConsoleMessage(type, message) {
    const output = document.getElementById('consoleOutput');
    const line = document.createElement('div');
    line.className = `output-line ${type}`;
    line.textContent = message;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// 更新玩家列表
function updatePlayerList() {
    const playerList = document.getElementById('playerList');
    if (!playerList) return;
    
    const players = [
        { name: 'Steve', status: '建造中', online: true },
        { name: 'Alex', status: '探险中', online: true },
        { name: 'Notch', status: 'AFK', online: false },
        { name: 'Herobrine', status: '挖矿中', online: true },
        { name: 'Dream', status: 'PVP中', online: true }
    ];
    
    playerList.innerHTML = `
        <div class="player-list-header">
            <h4>在线玩家 (${players.filter(p => p.online).length}/${players.length})</h4>
        </div>
        ${players.map(player => `
            <div class="player-item ${player.online ? 'online' : 'afk'}">
                <div class="player-avatar">${player.name[0]}</div>
                <div class="player-details">
                    <span class="player-name">${player.name}</span>
                    <span class="player-status">${player.status}</span>
                </div>
                <div class="player-actions">
                    <button onclick="whisperPlayer('${player.name}')">私聊</button>
                    <button onclick="teleportToPlayer('${player.name}')">传送</button>
                </div>
            </div>
        `).join('')}
    `;
}

// 私聊玩家
function whisperPlayer(name) {
    addConsoleMessage('info', `正在与 ${name} 建立私聊连接...`);
}

// 传送到玩家
function teleportToPlayer(name) {
    addConsoleMessage('info', `正在传送到 ${name} 的位置...`);
}

// 更新聊天监控
function updateChatMonitor() {
    const chatMonitor = document.getElementById('chatMonitor');
    if (!chatMonitor) return;
    
    const messages = [
        { time: '15:32', user: 'Player1', message: '谁偷了我的钻石？', type: 'conflict' },
        { time: '15:32', user: '小雨', message: '让我查看一下日志，请稍等...', type: 'rain' },
        { time: '15:33', user: '小雨', message: '发现Player2在你的箱子附近活动，我已经记录并通知管理员', type: 'rain' },
        { time: '15:45', user: 'Player3', message: '这个服务器真棒！', type: 'positive' },
        { time: '15:46', user: '小雨', message: '谢谢你的支持！有什么建议随时告诉我哦～', type: 'rain' }
    ];
    
    chatMonitor.innerHTML = `
        <div class="chat-monitor-content">
            ${messages.map(msg => `
                <div class="chat-message ${msg.type}">
                    <span class="chat-time">[${msg.time}]</span>
                    <span class="chat-user">${msg.user}:</span>
                    <span class="chat-text">${msg.message}</span>
                </div>
            `).join('')}
        </div>
        <div class="chat-actions">
            <button onclick="muteAllChat()">全体禁言</button>
            <button onclick="clearBadWords()">清理不当言论</button>
            <button onclick="sendPeaceMessage()">发送和谐消息</button>
        </div>
    `;
}

// 聊天管理功能
function muteAllChat() {
    addConsoleMessage('warning', '已启动全体禁言模式，持续5分钟');
}

function clearBadWords() {
    addConsoleMessage('success', '已清理3条不当言论，相关玩家已收到警告');
}

function sendPeaceMessage() {
    addConsoleMessage('info', '小雨: 大家要和睦相处哦！记住，我们都是这个世界的建设者～💙');
}

// 初始化动画
function initializeAnimations() {
    // 数字递增动画
    animateCounters();
    
    // 引用轮播
    startQuoteCarousel();
    
    // 场景切换
    initializeScenarios();
    
    // 平滑滚动
    initializeSmoothScroll();
    
    // 观察者动画
    initializeObserverAnimations();
}

// 数字递增动画
function animateCounters() {
    const counters = document.querySelectorAll('.stat-value[data-count]');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.count);
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
            }
        };
        
        // 使用Intersection Observer触发动画
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// 引用轮播
function startQuoteCarousel() {
    const quotes = document.querySelectorAll('.quote-item');
    const dots = document.querySelectorAll('.dot');
    
    if (quotes.length === 0) return;
    
    setInterval(() => {
        // 隐藏当前引用
        quotes[quoteIndex].classList.remove('active');
        dots[quoteIndex].classList.remove('active');
        
        // 显示下一个引用
        quoteIndex = (quoteIndex + 1) % quotes.length;
        quotes[quoteIndex].classList.add('active');
        dots[quoteIndex].classList.add('active');
    }, 5000);
    
    // 点击切换
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            quotes[quoteIndex].classList.remove('active');
            dots[quoteIndex].classList.remove('active');
            
            quoteIndex = index;
            quotes[quoteIndex].classList.add('active');
            dots[quoteIndex].classList.add('active');
        });
    });
}

// 初始化场景
function initializeScenarios() {
    const scenarioBtns = document.querySelectorAll('.scenario-btn');
    
    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            scenarioBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 加载场景
            const scenario = this.dataset.scenario;
            loadScenario(scenario);
        });
    });
    
    // 加载默认场景
    loadScenario('mediation');
}

// 加载交互场景
function loadScenario(scenario) {
    const display = document.getElementById('interactionDisplay');
    if (!display) return;
    
    const scenarios = {
        mediation: {
            title: '冲突调解场景',
            messages: [
                { sender: 'Player1', text: '他破坏了我的建筑！', type: 'angry' },
                { sender: 'Player2', text: '我不是故意的，我在清理苦力怕爆炸痕迹', type: 'defensive' },
                { sender: '小雨', text: '大家先冷静一下。Player2，感谢你帮忙清理，但下次请先询问建筑主人。', type: 'rain' },
                { sender: '小雨', text: 'Player1，我已经帮你恢复了建筑。Player2会帮你一起改进防爆设计，好吗？', type: 'rain' },
                { sender: 'Player1', text: '好吧，谢谢小雨', type: 'calm' },
                { sender: 'Player2', text: '对不起，我会帮忙的', type: 'apologetic' },
                { sender: '小雨', text: '很高兴看到大家和解！记住，沟通是解决问题的第一步哦～💙', type: 'rain happy' }
            ]
        },
        welcome: {
            title: '新手欢迎场景',
            messages: [
                { sender: 'System', text: 'NewPlayer 加入了游戏', type: 'system' },
                { sender: '小雨', text: '欢迎来到我们的世界，NewPlayer！我是小雨，服务器的守护者～', type: 'rain' },
                { sender: '小落', text: '哇！新朋友！要不要看看我设计的新手村？', type: 'fall' },
                { sender: 'NewPlayer', text: '你们好！这里看起来很棒！', type: 'player' },
                { sender: '小雨', text: '我给你准备了新手礼包，已经放在你的背包里了。有任何问题随时问我！', type: 'rain' },
                { sender: '其他玩家', text: '欢迎欢迎！需要帮助随时说！', type: 'friendly' }
            ]
        },
        event: {
            title: '活动组织场景',
            messages: [
                { sender: '小雨', text: '🎉 大家注意！我和小落准备了一个建筑大赛！', type: 'rain announce' },
                { sender: '小落', text: '主题是"梦幻城堡"！我会提供特殊材料哦～', type: 'fall' },
                { sender: 'Player1', text: '太好了！奖励是什么？', type: 'excited' },
                { sender: '小雨', text: '第一名：专属称号+稀有附魔装备！所有参与者都有纪念品！', type: 'rain' },
                { sender: '小落', text: '而且我会把优秀作品永久展示在创意广场！', type: 'fall' },
                { sender: '多位玩家', text: '报名！/ 参加！/ 太棒了！', type: 'crowd' }
            ]
        },
        collab: {
            title: 'AI协作场景',
            messages: [
                { sender: '小雨', text: '小落，有个玩家最近情绪似乎不太好，总是一个人挖矿...', type: 'rain concerned' },
                { sender: '小落', text: '我注意到了，他之前很喜欢建造的。也许遇到了创作瓶颈？', type: 'fall' },
                { sender: '小雨', text: '我们组织个团队项目怎么样？让他负责一部分？', type: 'rain' },
                { sender: '小落', text: '好主意！我来设计一个需要合作的大型建筑！', type: 'fall' },
                { sender: '小雨', text: '我负责组织团队和分配任务。一起帮助他重新找到乐趣吧！', type: 'rain' },
                { sender: 'System', text: '[数据同步] 小雨&小落协作方案已生成', type: 'system' }
            ]
        }
    };
    
    const currentScenario = scenarios[scenario] || scenarios.mediation;
    
    // 清空显示区
    display.innerHTML = `
        <h4>${currentScenario.title}</h4>
        <div class="scenario-messages"></div>
    `;
    
    const messagesContainer = display.querySelector('.scenario-messages');
    
    // 逐条显示消息
    currentScenario.messages.forEach((msg, index) => {
        setTimeout(() => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `scenario-message ${msg.type}`;
            messageDiv.innerHTML = `
                <span class="msg-sender">${msg.sender}:</span>
                <span class="msg-text">${msg.text}</span>
            `;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, index * 1000);
    });
}

// 初始化网络可视化
function initializeNetwork() {
    const canvas = document.getElementById('networkCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Aurora节点数据
    const nodes = [
        { id: 'rain', name: '小雨', x: 200, y: 200, color: '#48d1cc', active: true },
        { id: 'fall', name: '小落', x: 400, y: 150, color: '#ff6b9d', active: true },
        { id: 'dawn', name: '小晨', x: 350, y: 300, color: '#ffd93d', active: false },
        { id: 'night', name: '小夜', x: 150, y: 320, color: '#6bcf7e', active: false }
    ];
    
    // 连接线
    const connections = [
        { from: 'rain', to: 'fall', strength: 0.9 },
        { from: 'rain', to: 'dawn', strength: 0.3 },
        { from: 'rain', to: 'night', strength: 0.2 },
        { from: 'fall', to: 'dawn', strength: 0.4 }
    ];
    
    // 绘制网络
    function drawNetwork() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制连接线
        connections.forEach(conn => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            
            if (fromNode && toNode) {
                ctx.beginPath();
                ctx.moveTo(fromNode.x, fromNode.y);
                ctx.lineTo(toNode.x, toNode.y);
                ctx.strokeStyle = `rgba(72, 209, 204, ${conn.strength * 0.5})`;
                ctx.lineWidth = conn.strength * 3;
                ctx.stroke();
                
                // 数据流动画
                const time = Date.now() * 0.001;
                const flowX = fromNode.x + (toNode.x - fromNode.x) * ((Math.sin(time) + 1) / 2);
                const flowY = fromNode.y + (toNode.y - fromNode.y) * ((Math.sin(time) + 1) / 2);
                
                ctx.beginPath();
                ctx.arc(flowX, flowY, 3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
            }
        });
        
        // 绘制节点
        nodes.forEach(node => {
            // 节点光晕
            if (node.active) {
                const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 40);
                gradient.addColorStop(0, node.color + '40');
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(node.x, node.y, 40, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // 节点主体
            ctx.beginPath();
            ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
            ctx.fillStyle = node.active ? node.color : '#555';
            ctx.fill();
            ctx.strokeStyle = node.active ? '#fff' : '#333';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // 节点文字
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(node.name[1], node.x, node.y);
            
            // 节点名称
            ctx.fillStyle = node.active ? node.color : '#666';
            ctx.font = '12px Arial';
            ctx.fillText(node.name, node.x, node.y + 35);
        });
        
        requestAnimationFrame(drawNetwork);
    }
    
    drawNetwork();
    
    // 鼠标交互
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        nodes.forEach(node => {
            const dist = Math.sqrt(Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2));
            if (dist < 30) {
                canvas.style.cursor = 'pointer';
                return;
            }
        });
        canvas.style.cursor = 'default';
    });
}

// 平滑滚动
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 更新导航激活状态
                updateActiveNavItem(this.dataset.section);
            }
        });
    });
}

// 更新导航激活状态
function updateActiveNavItem(section) {
    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === section) {
            item.classList.add('active');
        }
    });
}

// 观察者动画
function initializeObserverAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // 特殊动画类
                if (entry.target.classList.contains('fade-in-up')) {
                    entry.target.classList.add('animated');
                }
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll(
        '.story-card, .monitor-panel, .category-card, .member-card, .evolution-stage'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// 初始化交互
function initializeInteractions() {
    // 鼠标跟随效果
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // 更新CSS变量
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
    });
    
    // 粒子效果
    createParticleEffect();
    
    // 数据流动画
    animateDataFlow();
}

// 创建粒子效果
function createParticleEffect() {
    const particleContainer = document.querySelector('.avatar-particles');
    if (!particleContainer) return;
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(72, 209, 204, 0.8);
            border-radius: 50%;
            pointer-events: none;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `;
        
        particleContainer.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const duration = 2000 + Math.random() * 2000;
        
        particle.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }, 200);
}

// 数据雨效果
function createDataRain() {
    const dataRain = document.querySelector('.data-rain');
    if (!dataRain) return;
    
    const characters = '01';
    const columnCount = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            left: ${i * 20}px;
            top: -100px;
            color: rgba(72, 209, 204, 0.5);
            font-family: monospace;
            font-size: 14px;
            writing-mode: vertical-lr;
            animation: data-fall ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        let text = '';
        for (let j = 0; j < 20; j++) {
            text += characters[Math.floor(Math.random() * characters.length)];
        }
        column.textContent = text;
        
        dataRain.appendChild(column);
    }
    
    // 添加CSS动画
    if (!document.querySelector('#data-rain-animation')) {
        const style = document.createElement('style');
        style.id = 'data-rain-animation';
        style.textContent = `
            @keyframes data-fall {
                to { transform: translateY(calc(100vh + 100px)); }
            }
        `;
        document.head.appendChild(style);
    }
}

// 数据流动画
function animateDataFlow() {
    const packets = document.querySelectorAll('.data-packet');
    
    packets.forEach((packet, index) => {
        packet.style.animationDelay = `${index * 0.5}s`;
    });
}

// 实时更新
function startRealtimeUpdates() {
    // 更新时间
    updateUptime();
    
    // 更新服务器状态
    setInterval(updateServerMetrics, 5000);
    
    // 更新玩家数
    setInterval(updatePlayerCount, 10000);
    
    // 模拟新消息
    setInterval(simulateNewMessage, 15000);
}

// 更新运行时间
function updateUptime() {
    const uptimeEl = document.getElementById('uptime');
    if (!uptimeEl) return;
    
    let seconds = 0;
    setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        uptimeEl.textContent = `${hours.toString().padStart(3, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

// 更新服务器指标
function updateServerMetrics() {
    // TPS
    const tpsBar = document.querySelector('.metric-row:nth-child(1) .bar-fill');
    if (tpsBar) {
        const tps = 18 + Math.random() * 2;
        const percentage = (tps / 20) * 100;
        tpsBar.style.width = `${percentage}%`;
        const tpsValue = document.querySelector('.metric-row:nth-child(1) .metric-value');
        if (tpsValue) tpsValue.textContent = `${tps.toFixed(1)}/20`;
    }
    
    // CPU
    const cpuBar = document.querySelector('.metric-row:nth-child(2) .bar-fill');
    if (cpuBar) {
        const cpu = 30 + Math.random() * 40;
        cpuBar.style.width = `${cpu}%`;
        const cpuValue = document.querySelector('.metric-row:nth-child(2) .metric-value');
        if (cpuValue) cpuValue.textContent = `${Math.round(cpu)}%`;
    }
    
    // 内存
    const memBar = document.querySelector('.metric-row:nth-child(3) .bar-fill');
    if (memBar) {
        const memUsed = 6 + Math.random() * 4;
        const memTotal = 13;
        const percentage = (memUsed / memTotal) * 100;
        memBar.style.width = `${percentage}%`;
        const memValue = document.querySelector('.metric-row:nth-child(3) .metric-value');
        if (memValue) memValue.textContent = `${memUsed.toFixed(1)}GB/${memTotal}GB`;
    }
}

// 更新玩家数
function updatePlayerCount() {
    const countNumber = document.querySelector('.count-number');
    if (countNumber) {
        const current = parseInt(countNumber.textContent);
        const change = Math.floor(Math.random() * 5) - 2; // -2 到 +2
        const newCount = Math.max(30, Math.min(60, current + change));
        countNumber.textContent = newCount;
    }
}

// 模拟新消息
function simulateNewMessage() {
    const messages = [
        '检测到友好交流，氛围评分+1',
        '自动备份完成，数据安全有保障',
        '新玩家加入，已发送欢迎消息',
        '区块优化完成，TPS提升0.2',
        '与小落同步成功，创意方案已更新'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // 创建通知
    showNotification(randomMessage, 'success');
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'linear-gradient(135deg, #48d1cc, #4a90e2)' : 'linear-gradient(135deg, #ff6b9d, #f093fb)'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.2rem;">${type === 'success' ? '✨' : 'ℹ️'}</span>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 添加滑入动画
    if (!document.querySelector('#notification-animation')) {
        const style = document.createElement('style');
        style.id = 'notification-animation';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        navbar.style.background = 'linear-gradient(180deg, rgba(26, 31, 58, 0.98) 0%, rgba(26, 31, 58, 0.95) 100%)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'linear-gradient(180deg, rgba(26, 31, 58, 0.95) 0%, rgba(26, 31, 58, 0.8) 100%)';
        navbar.style.boxShadow = 'none';
    }
});

// 页面加载完成提示
window.addEventListener('load', () => {
    setTimeout(() => {
        showNotification('Aurora Rain系统已完全加载，小雨正在守护服务器！', 'success');
    }, 1000);
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('Aurora System Error:', e);
    // 可以在这里添加错误上报逻辑
});

// 性能监控
const performanceMonitor = {
    start: Date.now(),
    
    log: function(action) {
        const elapsed = Date.now() - this.start;
        console.log(`[Performance] ${action}: ${elapsed}ms`);
    },
    
    reset: function() {
        this.start = Date.now();
    }
};

// 监控重要操作的性能
performanceMonitor.log('System Initialized');

// 导出全局函数供HTML调用
window.toggleConsole = toggleConsole;
window.checkOnline = checkOnline;
window.checkStatus = checkStatus;
window.checkChunks = checkChunks;
window.changePassword = changePassword;
window.viewLogs = viewLogs;
window.sendCommand = sendCommand;
window.handleConsoleInput = handleConsoleInput;
window.whisperPlayer = whisperPlayer;
window.teleportToPlayer = teleportToPlayer;
window.muteAllChat = muteAllChat;
window.clearBadWords = clearBadWords;
window.sendPeaceMessage = sendPeaceMessage;