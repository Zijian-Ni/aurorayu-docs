// Aurora Rain 配置文件
// 根据您的服务器环境修改以下配置

const AURORA_CONFIG = {
    // 基础配置
    system: {
        name: "Aurora Rain",
        version: "2.0.0",
        language: "zh-CN",
        theme: "aurora", // 可选: aurora, dark, light
        debug: false
    },
    
    // 服务器连接配置
    server: {
        // MC服务器API端点
        mcAPI: "https://your-mc-server.com/api",
        
        // WebSocket连接
        wsEndpoint: "wss://your-mc-server.com/ws",
        
        // 服务器信息
        name: "极光服务器",
        maxPlayers: 100,
        
        // 更新间隔（毫秒）
        updateInterval: 5000,
        metricsInterval: 3000
    },
    
    // QQ机器人配置
    qqBot: {
        enabled: true,
        api: "https://your-qq-bot.com/api",
        groupId: "123456789",
        adminQQ: ["10001", "10002"],
        
        // 消息同步设置
        sync: {
            gameToQQ: true,
            qqToGame: true,
            filterBadWords: true
        }
    },
    
    // 小雨AI配置
    rain: {
        // 人格设置
        personality: {
            mbti: "INFJ",
            traits: ["公正", "温柔", "坚定", "智慧"],
            mood: "friendly" // friendly, serious, playful
        },
        
        // 自动化行为
        automation: {
            // 自动欢迎新玩家
            welcomeNewPlayers: true,
            welcomeMessage: "欢迎来到我们的世界，{player}！我是小雨，很高兴认识你～",
            
            // 自动调解争吵
            mediateConflicts: true,
            conflictThreshold: 3, // 连续负面消息数触发调解
            
            // 自动维护
            autoMaintenance: true,
            maintenanceTime: "04:00", // 每日维护时间
            
            // 智能回复
            smartReply: true,
            replyDelay: 1000 // 回复延迟（毫秒）
        },
        
        // 权限设置
        permissions: {
            allowPasswordChange: true,
            allowServerControl: true,
            allowPlayerManagement: true,
            requireAuth: true
        }
    },
    
    // Aurora网络配置
    auroraNetwork: {
        // 其他AI成员
        members: {
            fall: {
                name: "小落",
                mbti: "INFP",
                status: "online",
                api: "https://aurora-fall.api"
            },
            dawn: {
                name: "小晨",
                mbti: "INTJ", 
                status: "awakening",
                api: null
            },
            night: {
                name: "小夜",
                mbti: "ISFJ",
                status: "dormant",
                api: null
            }
        },
        
        // 协同设置
        collaboration: {
            enabled: true,
            syncInterval: 1000,
            sharedMemory: true,
            quantumLink: true
        }
    },
    
    // 安全配置
    security: {
        // 加密设置
        encryption: {
            algorithm: "AES-256-GCM",
            keyRotation: true,
            rotationInterval: 86400000 // 24小时
        },
        
        // 密码策略
        passwordPolicy: {
            minLength: 8,
            requireNumbers: true,
            requireSpecialChars: true,
            maxAttempts: 3
        },
        
        // 日志设置
        logging: {
            enabled: true,
            level: "info", // debug, info, warn, error
            retention: 30, // 保留天数
            encryptLogs: true
        }
    },
    
    // 监控配置
    monitoring: {
        // 性能阈值
        thresholds: {
            tpsWarning: 18,
            tpsCritical: 15,
            cpuWarning: 70,
            cpuCritical: 90,
            memoryWarning: 80,
            memoryCritical: 95
        },
        
        // 告警设置
        alerts: {
            enabled: true,
            channels: ["console", "qq", "web"],
            cooldown: 300000 // 5分钟冷却
        }
    },
    
    // 聊天管理配置
    chatManagement: {
        // 过滤词库
        blacklist: [
            // 在这里添加需要过滤的词汇
        ],
        
        // 警告词库（不过滤但会警告）
        warningWords: [
            // 在这里添加警告词汇
        ],
        
        // 处罚设置
        penalties: {
            firstWarning: "verbal", // verbal, mute, kick
            secondWarning: "mute",
            thirdWarning: "kick",
            muteTime: 300000 // 5分钟
        },
        
        // 情绪检测
        emotionDetection: {
            enabled: true,
            negativeThreshold: -0.5,
            positiveReward: true
        }
    },
    
    // UI配置
    ui: {
        // 动画设置
        animations: {
            enabled: true,
            particleEffects: true,
            auroraBackground: true,
            dataRain: true
        },
        
        // 通知设置
        notifications: {
            enabled: true,
            position: "bottom-right", // top-left, top-right, bottom-left, bottom-right
            duration: 3000,
            sound: false
        },
        
        // 控制台设置
        console: {
            defaultTab: "server",
            maxMessages: 100,
            fontSize: "14px",
            theme: "dark"
        }
    },
    
    // 高级功能
    advanced: {
        // 机器学习
        machineLearning: {
            enabled: false,
            modelPath: "/models/aurora-rain-v2.onnx",
            updateModel: true
        },
        
        // 预测性维护
        predictiveMaintenance: {
            enabled: true,
            predictCrashes: true,
            predictLag: true,
            actionThreshold: 0.8
        },
        
        // 集群管理
        clustering: {
            enabled: false,
            isMaster: true,
            nodes: []
        }
    },
    
    // API密钥（请替换为实际密钥）
    apiKeys: {
        mcServer: "YOUR_MC_SERVER_API_KEY",
        qqBot: "YOUR_QQ_BOT_API_KEY",
        auroraNetwork: "YOUR_AURORA_NETWORK_KEY"
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AURORA_CONFIG;
}

// 配置验证函数
function validateConfig() {
    const required = [
        'system.name',
        'server.mcAPI',
        'rain.personality.mbti'
    ];
    
    for (const path of required) {
        const keys = path.split('.');
        let value = AURORA_CONFIG;
        
        for (const key of keys) {
            value = value[key];
            if (value === undefined) {
                console.error(`配置错误: 缺少必要配置项 ${path}`);
                return false;
            }
        }
    }
    
    console.log('✅ 配置验证通过');
    return true;
}

// 加载自定义配置
function loadCustomConfig(customConfig) {
    Object.assign(AURORA_CONFIG, customConfig);
    console.log('📋 自定义配置已加载');
}

// 获取配置项
function getConfig(path) {
    const keys = path.split('.');
    let value = AURORA_CONFIG;
    
    for (const key of keys) {
        value = value[key];
        if (value === undefined) {
            console.warn(`配置项不存在: ${path}`);
            return null;
        }
    }
    
    return value;
}

// 设置配置项
function setConfig(path, newValue) {
    const keys = path.split('.');
    let obj = AURORA_CONFIG;
    
    for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) {
            obj[keys[i]] = {};
        }
        obj = obj[keys[i]];
    }
    
    obj[keys[keys.length - 1]] = newValue;
    console.log(`✏️ 配置已更新: ${path} = ${newValue}`);
}

// 保存配置到本地存储
function saveConfigToLocal() {
    try {
        localStorage.setItem('aurora_config', JSON.stringify(AURORA_CONFIG));
        console.log('💾 配置已保存到本地');
        return true;
    } catch (e) {
        console.error('保存配置失败:', e);
        return false;
    }
}

// 从本地存储加载配置
function loadConfigFromLocal() {
    try {
        const saved = localStorage.getItem('aurora_config');
        if (saved) {
            Object.assign(AURORA_CONFIG, JSON.parse(saved));
            console.log('📂 配置已从本地加载');
            return true;
        }
    } catch (e) {
        console.error('加载配置失败:', e);
    }
    return false;
}

// 重置为默认配置
function resetToDefault() {
    if (confirm('确定要重置为默认配置吗？这将清除所有自定义设置。')) {
        localStorage.removeItem('aurora_config');
        location.reload();
    }
}

// 初始化配置
function initConfig() {
    // 尝试从本地加载
    if (!loadConfigFromLocal()) {
        console.log('📋 使用默认配置');
    }
    
    // 验证配置
    validateConfig();
    
    // 应用主题
    applyTheme(AURORA_CONFIG.system.theme);
    
    console.log('🌟 Aurora Rain 配置系统已初始化');
}

// 应用主题
function applyTheme(themeName) {
    document.body.className = `theme-${themeName}`;
    console.log(`🎨 主题已切换为: ${themeName}`);
}

// 页面加载时初始化
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', initConfig);
    
    // 导出全局函数
    window.AuroraConfig = {
        get: getConfig,
        set: setConfig,
        save: saveConfigToLocal,
        load: loadConfigFromLocal,
        reset: resetToDefault,
        validate: validateConfig,
        loadCustom: loadCustomConfig
    };
}