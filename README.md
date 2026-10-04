# 明月秋青脚本 CDN 发布仓

当前版本：A5.3.1

## 导入

- 薄壳 JSON：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.3.1/mingyue-qiuqing-A5.3.1.json
- 主脚本：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.3.1/dist/index.js

## 本次重点

**A5.3.1（修复版）**

1. **修复 `props is not defined` 控制台刷屏** —— 基础弹窗组件漏了 `const props =`，
   每轮组件求值都抛错（Modal 是全部弹窗的基础，所以刷得特别多）
2. **API 报错分类** —— 空响应不再一律说「格式异常」：
   内容被审核拦截 / 输出被截断 / 其他空响应 分开报，且只陈述事实
3. 代码日志里被拦截的错误会带上 token 数，方便判断"到底生成了多少"

**A5.3.0（上一版）**

开场白进大总结 · 数据导出可选 12 个分组 · 导入分「恢复备份 / 继承到新聊天」·
槽位标记兜底清理 · 梦呓 / 动态人设改为默认关闭

详见 `UPDATE-A5.3.1.md`。

旧用户需要重新导入 A5.3.1 薄壳，或把已有脚本 content 中的版本 tag 改为 `v5.3.1`。
