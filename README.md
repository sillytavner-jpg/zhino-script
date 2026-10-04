# 明月秋青脚本 CDN 发布仓

当前版本：A5.3.3

## 导入

- 薄壳 JSON：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.3.3/mingyue-qiuqing-A5.3.3.json
- 主脚本：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.3.3/dist/index.js

## 本次重点

**A5.3.3** —— 在 5.3.2 的诊断日志基础上，把「代码日志」面板也修好了。

1. **代码日志可以看全文了** —— 以前长日志是单行截断（末尾 `…`），
   排查时根本看不清；现在**点一下任意一条**就能展开全文（自动换行、可选中复制）

**A5.3.2** —— 槽位问题的诊断日志（模块名「槽位注入」）：

- 命中 MVU 额外解析轮时明确记一条（以前这个分支是静默跳过的）
- 每次生成记录探测概况：`消息 N 条｜含 ZHINO_ 的 M 条｜识别到槽位 K 个`；
  若「有标记但识别到 0 个」，还会打出标记的实际样本

**A5.3.1** —— 修复 `props is not defined` 刷屏 + API 空响应按 `finish_reason` 分类报错

详见 `UPDATE-A5.3.3.md`。

旧用户需要重新导入 A5.3.3 薄壳，或把已有脚本 content 中的版本 tag 改为 `v5.3.3`。
