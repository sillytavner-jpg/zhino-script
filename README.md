# 明月秋青脚本 CDN 发布仓

当前版本：A5.3.2

## 导入

- 薄壳 JSON：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.3.2/mingyue-qiuqing-A5.3.2.json
- 主脚本：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.3.2/dist/index.js

## 本次重点

**A5.3.2（诊断版）** —— 用于定位「槽位标记出现在提示词里、但智脑没注入内容」的问题。
行为与上一版一致，只多了两条日志（模块名「**槽位注入**」）：

1. 命中 MVU 额外解析轮时明确记一条 —— 以前这个分支是静默跳过的
2. 每次生成记录探测概况：`消息 N 条｜含 ZHINO_ 的 M 条｜识别到槽位 K 个`；
   若「有标记但识别到 0 个」，还会打出标记的实际样本

遇到槽位没被替换时，把带「槽位注入」的日志截图反馈即可。

**A5.3.1** —— 修复 `props is not defined` 控制台刷屏 + API 空响应按 `finish_reason` 分类报错

详见 `UPDATE-A5.3.2.md`。

旧用户需要重新导入 A5.3.2 薄壳，或把已有脚本 content 中的版本 tag 改为 `v5.3.2`。
