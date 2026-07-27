# 更新说明 A5.1.2

- 适用：明月秋青脚本-秋青 A5.1.2
- 发版时间：2026-07-27

## 本次改动

### 修复：MVU 额外模型解析请求被智脑污染

装了 MVU 变量框架的角色卡，每次发消息时 MVU 会用主 API 跑一轮"额外模型解析变量"。
智脑原先的三道注入守卫都识别不出它（MVU 走的 `type='normal'`，和正常聊天一样），
导致神经链/大总结/人格/动态人设等内容被塞进变量解析请求，污染变量解析结果。

本次在 `CHAT_COMPLETION_SETTINGS_READY` 注入入口新增一道 MVU 守卫，
用 MVU 官方标志 `Mvu.isDuringExtraAnalysis()` 判别：解析变量那轮跳过智脑注入，
正常聊天轮次照常注入。没装 MVU 的用户 `typeof Mvu === 'undefined'`，零副作用。

## 通过 CDN 导入酒馆助手
- 导入文件：把 `mingyue-qiuqing-A5.1.2.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.1.2/mingyue-qiuqing-A5.1.2.json`