[根目录](../../CLAUDE.md) > **channels**

---

# Channels 模块

最后更新: 2026-01-30

---

## 模块职责

Channels 模块提供插件化渠道系统，管理消息渠道的注册、配置、路由和共享逻辑。

---

## 入口与启动

### 主要入口点
- `src/channels/plugins/index.ts` - 渠道插件系统
- `src/channels/registry.ts` - 渠道注册表
- `src/channels/dock.ts` - 渠道停靠点

### 启动流程
1. 加载内置渠道
2. 扫描并加载扩展渠道
3. 注册渠道到注册表
4. 初始化渠道实例

---

## 对外接口

### 渠道插件接口
```typescript
interface ChannelPlugin {
  id: string
  label: string
  version: string
  createChannel(config: ChannelConfig): Promise<Channel>
}

interface Channel {
  monitor(): AsyncIterable<InboundMessage>
  send(target: string, content: MessageContent): Promise<void>
  start(): Promise<void>
  stop(): Promise<void>
}
```

### 适配器接口
- **ChannelMessagingAdapter**: 消息传递
- **ChannelAuthAdapter**: 认证
- **ChannelConfigAdapter**: 配置
- **ChannelDirectoryAdapter**: 目录
- **ChannelStatusAdapter**: 状态
- **ChannelOutboundAdapter**: 出站消息

---

## 关键依赖与配置

### 依赖项
- `src/plugin-sdk` - 插件 SDK
- `src/config` - 配置管理

### 配置
- 渠道配置 (openclaw.yaml)
- 渠道插件配置 (package.json)

---

## 数据模型

### 渠道类型
```typescript
type ChannelType =
  | 'telegram'
  | 'discord'
  | 'slack'
  | 'signal'
  | 'imessage'
  | 'line'
  | 'whatsapp'
  | 'matrix'
  | 'googlechat'
  | 'msteams'
  | ...
```

### 消息类型
```typescript
interface InboundMessage {
  accountId: string
  channelId: string
  peerId: string
  content: MessageContent
  timestamp: number
  metadata?: Record<string, unknown>
}

interface MessageContent {
  text?: string
  media?: MediaAttachment[]
  mentions?: Mention[]
  reactions?: Reaction[]
}
```

---

## 测试与质量

### 测试位置
- `src/channels/**/*.test.ts`

### 覆盖率
- 高覆盖率 (核心渠道逻辑)
- 渠道表面通过集成测试验证

---

## 常见问题 (FAQ)

### Q: 如何创建新的渠道插件？
A: 实现 `ChannelPlugin` 接口，并在扩展的 `package.json` 中声明。

### Q: 如何配置渠道？
A: 使用 `openclaw configure channels` 或编辑 `openclaw.yaml`。

### Q: 如何启用/禁用渠道？
A: 在配置中设置 `enabled: false` 或使用 `openclaw channels remove`。

---

## 相关文件清单

### 核心文件
- `src/channels/plugins/types.ts`
- `src/channels/plugins/catalog.ts`
- `src/channels/registry.ts`
- `src/channels/dock.ts`

### 插件系统
- `src/channels/plugins/index.ts`
- `src/channels/plugins/load.ts`

### 共享逻辑
- `src/channels/allowlists/`
- `src/channels/plugins/onboarding/`
- `src/channels/plugins/status-issues/`

### 相关模块
- `src/plugin-sdk/` - 插件 SDK
- `src/config/` - 配置管理
- `src/routing/` - 消息路由

---

*最后扫描: 2026-01-30*
