export type Locale = 'en' | 'zh';

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Tabs
    "tab.overview": "Overview",
    "tab.channels": "Channels",
    "tab.instances": "Instances",
    "tab.sessions": "Sessions",
    "tab.cron": "Cron Jobs",
    "tab.skills": "Skills",
    "tab.nodes": "Nodes",
    "tab.chat": "Chat",
    "tab.config": "Config",
    "tab.debug": "Debug",
    "tab.logs": "Logs",
    "tab.control": "Control",
    // Tab Subtitles
    "tab.overview.subtitle": "Gateway status, entry points, and a fast health read.",
    "tab.channels.subtitle": "Manage channels and settings.",
    "tab.instances.subtitle": "Presence beacons from connected clients and nodes.",
    "tab.sessions.subtitle": "Inspect active sessions and adjust per-session defaults.",
    "tab.cron.subtitle": "Schedule wakeups and recurring agent runs.",
    "tab.skills.subtitle": "Manage skill availability and API key injection.",
    "tab.nodes.subtitle": "Paired devices, capabilities, and command exposure.",
    "tab.chat.subtitle": "Direct gateway chat session for quick interventions.",
    "tab.config.subtitle": "Edit ~/.openclaw/openclaw.json safely.",
    "tab.debug.subtitle": "Gateway snapshots, events, and manual RPC calls.",
    "tab.logs.subtitle": "Live tail of the gateway file logs.",
    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.refresh": "Refresh",
    // Language
    "lang.en": "English",
    "lang.zh": "中文",
    // Overview
    "overview.auth.required": "This gateway requires auth. Add a token or password, then click Connect.",
    "overview.auth.cmd_token": "tokenized URL",
    "overview.auth.cmd_generate": "set token",
    "overview.auth.docs": "Docs: Control UI auth",
    "overview.auth.failed": "Auth failed. Re-copy a tokenized URL with",
    "overview.auth.failed_suffix": ", or update the token, then click Connect.",
    "overview.insecure.hint": "This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open",
    "overview.insecure.host": "on the gateway host.",
    "overview.insecure.token_only": "If you must stay on HTTP, set",
    "overview.insecure.docs": "Docs: Tailscale Serve",
    "overview.status.uptime": "Uptime",
    "overview.status.tick": "Tick Interval",
    "overview.connect.btn": "Connect",
    "overview.connect.token_placeholder": "Gateway Token / Password",
    "overview.connect.url_placeholder": "Gateway URL",
    "overview.access.title": "Gateway Access",
    "overview.access.subtitle": "Where the dashboard connects and how it authenticates.",
    "overview.access.ws_url": "WebSocket URL",
    "overview.access.token": "Gateway Token",
    "overview.access.token_placeholder": "OPENCLAW_GATEWAY_TOKEN",
    "overview.access.password": "Password (not stored)",
    "overview.access.password_placeholder": "system or shared password",
    "overview.access.session_key": "Default Session Key",
    "overview.access.connect_hint": "Click Connect to apply connection changes.",
    "overview.snapshot.title": "Snapshot",
    "overview.snapshot.subtitle": "Latest gateway handshake information.",
    "overview.snapshot.status": "Status",
    "overview.snapshot.status.connected": "Connected",
    "overview.snapshot.status.disconnected": "Disconnected",
    "overview.snapshot.last_refresh": "Last Channels Refresh",
  },
  zh: {
    // Tabs
    "tab.overview": "概览",
    "tab.channels": "频道",
    "tab.instances": "实例",
    "tab.sessions": "会话",
    "tab.cron": "定时任务",
    "tab.skills": "技能",
    "tab.nodes": "节点",
    "tab.chat": "聊天",
    "tab.config": "配置",
    "tab.debug": "调试",
    "tab.logs": "日志",
    "tab.control": "控制",
    // Tab Subtitles
    "tab.overview.subtitle": "网关状态，入口点和快速健康检查。",
    "tab.channels.subtitle": "管理频道和设置。",
    "tab.instances.subtitle": "来自连接的客户端和节点的在线信号。",
    "tab.sessions.subtitle": "检查活动会话并调整每个会话的默认值。",
    "tab.cron.subtitle": "安排唤醒和重复代理运行。",
    "tab.skills.subtitle": "管理技能可用性和API密钥注入。",
    "tab.nodes.subtitle": "配对设备，功能和命令暴露。",
    "tab.chat.subtitle": "直接网关聊天会话以进行快速干预。",
    "tab.config.subtitle": "安全地编辑 ~/.openclaw/openclaw.json。",
    "tab.debug.subtitle": "网关快照，事件和手动RPC调用。",
    "tab.logs.subtitle": "网关文件日志的实时尾部。",
    // Common
    "common.loading": "加载中...",
    "common.error": "错误",
    "common.save": "保存",
    "common.cancel": "取消",
    "common.delete": "删除",
    "common.edit": "编辑",
    "common.refresh": "刷新",
    // Language
    "lang.en": "English",
    "lang.zh": "中文",
    // Overview
    "overview.auth.required": "此网关需要认证。添加令牌或密码，然后点击连接。",
    "overview.auth.cmd_token": "令牌化URL",
    "overview.auth.cmd_generate": "设置令牌",
    "overview.auth.docs": "文档：控制UI认证",
    "overview.auth.failed": "认证失败。重新复制令牌化URL使用",
    "overview.auth.failed_suffix": "，或更新令牌，然后点击连接。",
    "overview.insecure.hint": "此页面是HTTP，因此浏览器阻止设备标识。使用HTTPS (Tailscale Serve) 或打开",
    "overview.insecure.host": "在网关主机上。",
    "overview.insecure.token_only": "如果必须停留在HTTP，请设置",
    "overview.insecure.docs": "文档：Tailscale Serve",
    "overview.status.uptime": "运行时间",
    "overview.status.tick": "Tick间隔",
    "overview.connect.btn": "连接",
    "overview.connect.token_placeholder": "网关令牌 / 密码",
    "overview.connect.url_placeholder": "网关URL",
    "overview.access.title": "网关访问",
    "overview.access.subtitle": "仪表板连接的位置及其验证方式。",
    "overview.access.ws_url": "WebSocket URL",
    "overview.access.token": "网关令牌",
    "overview.access.token_placeholder": "OPENCLAW_GATEWAY_TOKEN",
    "overview.access.password": "密码 (不存储)",
    "overview.access.password_placeholder": "系统或共享密码",
    "overview.access.session_key": "默认会话密钥",
    "overview.access.connect_hint": "点击连接以应用连接更改。",
    "overview.snapshot.title": "快照",
    "overview.snapshot.subtitle": "最新的网关握手信息。",
    "overview.snapshot.status": "状态",
    "overview.snapshot.status.connected": "已连接",
    "overview.snapshot.status.disconnected": "未连接",
    "overview.snapshot.last_refresh": "上次频道刷新",
  }
};

let currentLocale: Locale = (localStorage.getItem('openclaw-locale') as Locale) || 'en';

const listeners = new Set<() => void>();

export function getLocale(): Locale {
  return currentLocale;
}

export function setLocale(locale: Locale) {
  if (currentLocale !== locale) {
    currentLocale = locale;
    localStorage.setItem('openclaw-locale', locale);
    listeners.forEach(l => l());
  }
}

export function subscribeLocale(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function t(key: string, params?: Record<string, string | number>): string {
  let text = translations[currentLocale]?.[key] || translations['en'][key] || key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(`{${k}}`, String(v));
    }
  }
  return text;
}

export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(currentLocale === 'zh' ? 'zh-CN' : 'en-US', options).format(value);
}

export function formatDate(value: Date | number, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(currentLocale === 'zh' ? 'zh-CN' : 'en-US', options).format(value);
}

export function formatCurrency(value: number, currency: string = 'USD'): string {
   return new Intl.NumberFormat(currentLocale === 'zh' ? 'zh-CN' : 'en-US', { style: 'currency', currency }).format(value);
}
