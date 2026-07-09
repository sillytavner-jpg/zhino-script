# 更新说明 A5.0.0

- 适用：明月秋青脚本-秋青 A5.0.0
- 发版时间：2026-07-09

## 本次改动

- **世界推进注入窗口**：记录不再无限期复用，超出入周期后停止注入，避免陈旧入场引导反复注入
- **入场引导措辞**：`<world_entry_hint>` 加"参考非强制"说明，AI 可自行判断是否入场
- **图谱角色地点内联修正**：点击角色节点→详情面板→编辑所在位置，改后候选/在场判断自动同步
- **小总结在场判断强化**：新增 `interactingCharacters`（强在场信号）+ `characterLocations` 同地点兜底，三层次排除
- **思维链剥离加固**：`extractContentFromMessage` 全局前置剥离，所有下游模块受益
- **世界推进间隔 bug 修复**：改为 AI 回复条数计数，同修 dreamtalk/plotCheck

## 通过 CDN 导入酒馆助手
- 导入文件：把 `mingyue-qiuqing-A5.0.0.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.0.0/mingyue-qiuqing-A5.0.0.json`

> 本次为 A5 大版本首版，整合 A4.9.8→A5.0.0 累积功能优化与修复。
