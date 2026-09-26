# 明月秋青脚本 CDN 发布仓

当前版本：A5.2.2

## 导入

- 薄壳 JSON：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.2.2/mingyue-qiuqing-A5.2.2.json
- 主脚本：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.2.2/dist/index.js

## 本次重点

A5.2.2 破限词换血（秋青子 → 星光四部分大脑：小左/小右/小爱/前额叶）+ 预设槽位注入
（12 个 `<!--ZHINO_xxx-->` 锚点，带「槽位 → 老锚点 → depth 注入 → 消息尾部」兜底链）
+ 删除「世界书标签编排」+ 正文解析加固（`<UpdateVariable>` 泄漏 108 条 → 0）。

旧用户需要重新导入 A5.2.2 薄壳，或把已有脚本 content 中的版本 tag 改为 `v5.2.2`。
