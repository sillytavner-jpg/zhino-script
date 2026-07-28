# 更新说明 A5.1.3

- 适用：明月秋青脚本-秋青 A5.1.3
- 发版时间：2026-07-28

## 本次改动

### 修复：MVU 额外模型解析请求被智脑污染

装了 MVU 变量框架的角色卡，每次发消息时 MVU 会用主 API 跑一轮"额外模型解析变量"。
智脑原先的注入守卫（`filter` / 入口 `return`）都拦不住持久注入，
导致神经链 `<memory_chain>`、动态人设 `<factual_state>`、世界推进 `<world_state>` 等内容被塞进变量解析请求。

本版在 `CHAT_COMPLETION_SETTINGS_READY` 回调里检测到 MVU 解析轮时，
直接清洗 `generate_data.messages` 中的智脑标签块和引导句（标签块正则 + 引导句整行匹配），
在 fetch 发出去前把智脑内容剥离。没装 MVU 的用户零副作用。

## 通过 CDN 导入酒馆助手
- 导入文件：把 `mingyue-qiuqing-A5.1.3.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.1.3/mingyue-qiuqing-A5.1.3.json`