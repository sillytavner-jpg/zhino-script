# 明月秋青脚本 CDN 发布仓

当前版本：A5.3.4

## 导入

- 薄壳 JSON：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.3.4/mingyue-qiuqing-A5.3.4.json
- 主脚本：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.3.4/dist/index.js

## 本次重点

**A5.3.4（重要修复）** —— 修掉两个会**静默失效**的真 bug：

1. **槽位标记不再裸露** —— 关键词匹配里调用了一个不存在的函数名（`fuzzyMatchKeywordUser`），
   一走到那条路径就抛 `ReferenceError`，把整轮分析回调打断，
   导致后面的槽位注入全跳过、`<!--ZHINO_XXX-->` 标记原样发给模型
2. **语义召回不再静默降级** —— `index.ts` 漏了 `cosineSimilarity` 的 import，
   调用即抛错、被捕获后静默降级成关键词匹配。
   **即：之前所有开了语义召回的用户，语义召回其实一直是坏的**

> 修复后语义召回会真正生效，召回结果可能与之前不同 —— 属预期内的改善。

**A5.3.3** —— 代码日志点击展开看全文 + 槽位注入诊断日志

**A5.3.1** —— 修复 `props is not defined` 刷屏 + API 空响应分类报错

详见 `UPDATE-A5.3.4.md`。

旧用户需要重新导入 A5.3.4 薄壳，或把已有脚本 content 中的版本 tag 改为 `v5.3.4`。
