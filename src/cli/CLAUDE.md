[根目录](../../CLAUDE.md) > **cli**

---

# CLI 模块

最后更新: 2026-01-30

---

## 模块职责

CLI 模块提供命令行界面框架，包括命令解析器、用户交互组件和依赖注入系统。

---

## 入口与启动

### 主要入口点
- `src/cli/index.ts` - CLI 模块导出
- `src/cli/program/` - 命令构建器

### 启动流程
1. `openclaw.mjs` → `src/index.ts`
2. 加载环境变量和配置
3. 构建命令程序 (`buildProgram()`)
4. 解析命令行参数并执行

---

## 对外接口

### 主要导出
```typescript
export { forceFreePort } from "./ports.js";
export { buildProgram } from "./program/build-command.js";
```

### 组件
- **Program Builder**: 构建命令树
- **Progress Indicators**: 进度条和加载动画
- **Prompts**: 用户交互提示
- **Deps**: 依赖注入容器

---

## 关键依赖与配置

### 依赖项
- `commander` - 命令行参数解析
- `@clack/prompts` - 交互式提示
- `osc-progress` - 进度条

### 配置文件
- `src/cli/deps.ts` - 依赖注入配置
- `src/cli/progress.ts` - 进度指示器

---

## 数据模型

### 无特定数据模型

---

## 测试与质量

### 测试位置
- 与源文件并置 (`*.test.ts`)

### 覆盖率
- 高覆盖率 (核心 CLI 框架)

---

## 常见问题 (FAQ)

### Q: 如何添加新命令？
A: 在 `src/commands/` 中创建新命令文件，然后在 `src/cli/program/` 中注册。

### Q: 如何使用进度指示器？
A: 使用 `src/cli/progress.ts` 中的 `createProgressBar()` 或 `createSpinner()`。

---

## 相关文件清单

### 核心文件
- `src/cli/index.ts`
- `src/cli/program/`
- `src/cli/deps.ts`
- `src/cli/progress.ts`
- `src/cli/prompt.ts`

### 相关模块
- `src/commands/` - 命令实现
- `src/config/` - 配置加载

---

*最后扫描: 2026-01-30*
