[根目录](../../CLAUDE.md) > **agents**

---

# Agents 模块

最后更新: 2026-01-30

---

## 模块职责

Agents 模块提供 AI 代理运行时，集成多种 AI 模型提供商，管理工具调用、会话和认证配置文件。

---

## 入口与启动

### 主要入口点
- `src/agents/cli-runner.ts` - CLI 代理运行器
- `src/agents/pi-embedded-runner.ts` - Pi 嵌入式运行器

### 启动流程
1. 加载认证配置文件
2. 初始化模型提供商
3. 注册工具
4. 创建会话
5. 执行代理循环

---

## 对外接口

### 主要接口
```typescript
interface AgentRunner {
  run(message: string, options: AgentOptions): Promise<AgentResult>
}

interface AuthProfile {
  id: string
  provider: string
  model: string
  apiKey?: string
  oauth?: OAuthConfig
}
```

### 工具
- **Bash Tools**: shell 命令执行
- **Channel Tools**: 渠道操作
- **Browser Tools**: 浏览器自动化
- **File Tools**: 文件系统操作

---

## 关键依赖与配置

### 依赖项
- `@mariozechner/pi-agent-core` - Pi Agent 核心
- `@mariozechner/pi-ai` - Pi AI 集成
- `@mariozechner/pi-coding-agent` - 编码代理
- `@mariozechner/pi-tui` - TUI 支持

### 配置
- 认证配置文件 (~/.clawdbot/auth-profiles.json)
- 模型配置 (openclaw.yaml)
- 工具策略配置

---

## 数据模型

### 认证配置文件
```typescript
interface AuthProfile {
  id: string
  provider: 'anthropic' | 'openai' | 'google' | ...
  model: string
  apiKey?: string
  oauth?: {
    clientId: string
    clientSecret: string
    refreshToken: string
  }
  lastUsed: number
  failureCount: number
}
```

### 会话
```typescript
interface AgentSession {
  id: string
  accountId: string
  channelId: string
  messages: Message[]
  context: Context
  tools: Tool[]
}
```

---

## 测试与质量

### 测试位置
- `src/agents/**/*.test.ts`
- `src/agents/**/*.live.test.ts` (需要真实密钥)

### 覆盖率
- 高覆盖率 (核心代理逻辑)
- 某些集成通过实时测试验证

---

## 常见问题 (FAQ)

### Q: 如何配置新的 AI 模型？
A: 使用 `openclaw configure auth` 或编辑 `~/.clawdbot/auth-profiles.json`。

### Q: 如何添加自定义工具？
A: 在渠道插件中使用 `ChannelAgentTool` 接口注册工具。

### Q: 如何调试代理执行？
A: 使用 `--thinking high` 标志运行 `openclaw agent`。

---

## 相关文件清单

### 核心文件
- `src/agents/cli-runner.ts`
- `src/agents/auth-profiles.ts`
- `src/agents/bash-tools.ts`
- `src/agents/channel-tools.ts`

### 认证
- `src/agents/auth-profiles/profiles.ts`
- `src/agents/auth-profiles/oauth.ts`
- `src/agents/auth-profiles/doctor.ts`

### 工具
- `src/agents/tools/`

### 相关模块
- `src/config/` - 配置管理
- `src/channels/` - 渠道集成
- `src/gateway/` - Gateway 集成

---

*最后扫描: 2026-01-30*
