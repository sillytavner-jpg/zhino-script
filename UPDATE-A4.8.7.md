# 更新说明 A4.8.7

- 适用：明月秋青脚本-秋青 A4.8.7
- 发版时间：2026-07-06

## 本次改动

1. **修复大总结正文丢失**：大总结与角色记忆收到的正文楼层范围现在一致了。旧版大总结依赖小总结的 floorRange 反查原文，小总结残缺时（后台队列丢弃）大总结只拿到极少数楼层原文（常仅第1轮）。改为按 capturedContents 顺序直接全量铺原文，与角色记忆行为一致。

2. **小总结后台队列 FIFO 化**：旧版同一时刻只允许 1 个小总结在队列+在跑，其余直接丢弃 → smallSummaries 常年残缺。新逻辑按楼层号 dedupeKey：重roll 同层替换旧任务、不同楼层独立 FIFO 排队依次执行，不再丢任务。

## 通过 CDN 导入酒馆助手
- 导入文件：把 `mingyue-qiuqing-A4.8.7.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v4.8.7/mingyue-qiuqing-A4.8.7.json`
