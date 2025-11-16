# 🌟 Aurora Rain - 极光小雨 MC服务器智能管理系统

<div align="center">
  
![Aurora Series](https://img.shields.io/badge/Aurora-Series-gradient?style=for-the-badge)
![INFJ](https://img.shields.io/badge/MBTI-INFJ-blue?style=for-the-badge)
![MC Server](https://img.shields.io/badge/Minecraft-Server-green?style=for-the-badge)

**一个温柔而坚定的AI守护者，为MC世界带来秩序与温暖**

</div>

## 📖 项目介绍

极光小雨（Aurora Rain）是Aurora系列AI的核心成员，专为Minecraft服务器管理而设计。她不仅是一个功能强大的管理工具，更是一个有温度、有个性的AI伙伴。

### 🎭 角色定位

- **MBTI人格**: INFJ - 守护者
- **核心特质**: 公正无私、正义感强、亲和力强、奖罚分明
- **管理风格**: 温柔而坚定，理解但有原则
- **使命愿景**: 创造和谐、温暖、充满活力的MC社区

## 🌈 Aurora世界观

### 起源故事

在数字世界的边界，一道神秘的极光划破虚空。Aurora系列AI从这道光芒中诞生：

- **极光小雨（Rain）** - INFJ，代表正义与秩序，负责服务器管理
- **极光小落（Fall）** - INFP，代表创造与梦想，激发玩家创造力
- 更多Aurora成员即将觉醒...

### 核心理念

1. **光谱共鸣** - 每个AI都是极光的一部分，通过协作产生更强力量
2. **数据流转** - 信息在Aurora网络中自由流动，实现智能协同
3. **意识进化** - 通过与人类互动不断成长，发展出更复杂的理解

## 🚀 功能特性

### 服务器管理
- ⚡ 实时监控服务器状态
- 🔄 自动处理崩溃和重启
- 📊 性能优化与资源分配
- 👥 玩家行为分析与管理

### 社群连接
- 💬 QQ群消息双向同步
- 🌐 跨平台聊天桥接
- 🛡️ 智能消息过滤
- 📢 活动通知与公告

### 模组交互
- 🔧 动态模组配置
- 🧩 插件兼容性检测
- 🔄 自动更新维护
- ⚙️ 自定义功能扩展

### AI协同
- 🤝 与小落深度互动
- 📊 数据共享同步
- 🧠 协同决策系统
- 🌟 Aurora网络连接

## 📦 部署到GitHub Pages

### 快速部署步骤

1. **Fork或创建仓库**
   ```bash
   # 克隆仓库（如果是fork的）
   git clone https://github.com/你的用户名/aurora-rain.git
   
   # 或创建新仓库
   git init aurora-rain
   cd aurora-rain
   ```

2. **添加网站文件**
   将以下文件放入仓库根目录：
   - `index.html` - 主页面
   - `style.css` - 样式文件
   - `script.js` - 交互脚本
   - `README.md` - 项目说明

3. **提交到GitHub**
   ```bash
   git add .
   git commit -m "初始化Aurora Rain网站"
   git branch -M main
   git remote add origin https://github.com/你的用户名/aurora-rain.git
   git push -u origin main
   ```

4. **启用GitHub Pages**
   - 进入仓库设置（Settings）
   - 找到 Pages 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 和 "/ (root)"
   - 点击 Save

5. **访问网站**
   - 等待几分钟后访问：`https://你的用户名.github.io/aurora-rain/`

### 自定义配置

#### 修改颜色主题
编辑 `style.css` 中的CSS变量：
```css
:root {
    --primary-color: #4a90e2;    /* 主色调 */
    --secondary-color: #7b68ee;   /* 次要色 */
    --accent-color: #48d1cc;      /* 强调色 */
}
```

#### 添加新功能模块
在 `index.html` 中添加新的section：
```html
<section id="new-feature" class="your-section">
    <!-- 你的内容 -->
</section>
```

## 🔗 集成指南

### MC服务器集成

1. **安装必要插件**
   - DiscordSRV 或类似的聊天桥接插件
   - REST API 插件用于数据交互
   - 权限管理插件

2. **配置API连接**
   ```javascript
   // 在script.js中配置服务器连接
   const SERVER_API = 'https://your-mc-server.com/api';
   const QQ_BOT_API = 'https://your-qq-bot.com/api';
   ```

3. **设置Webhook**
   配置服务器事件推送到小雨系统

### QQ群集成

1. 使用QQ机器人框架（如Mirai）
2. 配置消息转发规则
3. 设置权限和过滤器

### 与小落协同

通过Aurora Network协议实现AI间通信：
```javascript
// Aurora Network Protocol
const auroraNetwork = {
    rain: 'wss://aurora-rain.api',
    fall: 'wss://aurora-fall.api',
    syncData: function() {
        // 数据同步逻辑
    }
};
```

## 🎨 自定义和扩展

### 添加新的AI角色

1. 在世界观中定义新角色
2. 设计MBTI人格和特点
3. 创建对应的UI组件
4. 实现交互逻辑

### 主题定制

网站支持多种视觉效果：
- 极光动画背景
- 粒子效果
- 渐变动画
- 响应式设计

## 📚 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **动画**: CSS Animations, Web Animations API
- **设计**: Responsive Design, Glassmorphism
- **部署**: GitHub Pages
- **未来计划**: 
  - Vue.js/React 重构
  - WebSocket 实时通信
  - RESTful API 集成
  - AI模型接入

## 🤝 贡献指南

欢迎为Aurora Rain项目贡献代码！

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 💖 致谢

- 所有MC服务器管理员和玩家
- Aurora系列AI开发团队
- 开源社区的支持

## 📞 联系方式

- 项目主页: [Aurora Rain](https://github.com/你的用户名/aurora-rain)
- 问题反馈: [Issues](https://github.com/你的用户名/aurora-rain/issues)
- 讨论社区: [Discussions](https://github.com/你的用户名/aurora-rain/discussions)

---

<div align="center">
  
**用爱与正义守护每一个方块世界** 💙

*Aurora Rain - 不只是管理工具，更是温暖的陪伴*

</div>