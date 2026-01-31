[根目录](../../CLAUDE.md) > **gateway**

---

# Gateway 模块

最后更新: 2026-01-30

---

## 模块职责

Gateway 是 OpenClaw 的控制平面服务器，管理所有连接的设备、渠道和 AI 代理。提供 WebSocket + HTTP 接口用于实时通信和控制。

---

## 入口与启动

### 主要入口点
- `src/gateway/server.ts` - Gateway 服务器
- `src/gateway/boot.ts` - 启动引导

### 启动流程
1. 加载配置和插件
2. 初始化渠道和代理
3. 启动 WebSocket 服务器
4. 启动 HTTP API
5. 注册控制 UI 和设备

---

## 对外接口

### WebSocket 协议
- **连接**: WebSocket 客户端连接
- **消息**: JSON-RPC 风格消息
- **事件**: 实时事件推送

### HTTP API
- **GET** `/health` - 健康检查
- **GET** `/status` - 状态查询
- **POST** `/agent` - 代理交互
- **POST** `/send` - 发送消息

### 控制接口
- `src/gateway/server-methods/` - 各种方法端点
- `src/gateway/control-ui.ts` - 控制界面

---

## 关键依赖与配置

### 依赖项
- `express` - HTTP 服务器
- `ws` - WebSocket 服务器
- `src/channels/` - 渠道系统
- `src/agents/` - 代理运行时

### 配置
- Gateway 模式 (local/remote)
- 绑定地址和端口
- 认证配置

---

## 数据模型

### 协议架构
- `src/gateway/protocol/schema/` - 协议定义
- `src/gateway/protocol/schema/types.ts` - 基础类型
- `src/gateway/protocol/schema/channels.ts` - 渠道类型
- `src/gateway/protocol/schema/agent.ts` - 代理类型

---

## 测试与质量

### 测试位置
- `src/gateway/**/*.test.ts`
- `src/gateway/**/*.e2e.test.ts`

### 覆盖率
- 高覆盖率 (核心服务器逻辑)
- 某些集成表面通过 E2E 验证

---

## 常见问题 (FAQ)

### Q: 如何启动 Gateway？
A: 使用 `openclaw gateway run` 或 `pnpm gateway:watch` (开发模式)。

### Q: 如何连接到 Gateway？
A: 通过 WebSocket (ws://localhost:18789) 或 HTTP API。

---

## 相关文件清单

### 核心文件
- `src/gateway/server.ts`
- `src/gateway/boot.ts`
- `src/gateway/client.ts`
- `src/gateway/protocol/`

### 方法端点
- `src/gateway/server-methods/agent.ts`
- `src/gateway/server-methods/channels.ts`
- `src/gateway/server-methods/config.ts`

### 相关模块
- `src/channels/` - 渠道系统
- `src/agents/` - 代理运行时
- `src/config/` - 配置管理

---

*最后扫描: 2026-01-30*
