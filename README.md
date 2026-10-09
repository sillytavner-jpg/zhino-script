# 明月秋青脚本 CDN 发布仓

当前版本：A5.4.1

## 导入

- 薄壳 JSON：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.4.1/mingyue-qiuqing-A5.4.1.json
- 主脚本：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.4.1/dist/index.js

## 本次重点

**A5.4.1** —— 代码健康度清理版。`tsc` 类型错误从 **103 条清到 `src/` 归零**，
无新功能、无行为变更，目的是让代码库回到「类型检查干净」的状态。

### ① 修掉三个「静默失效」的真问题

- **记忆向量生成报 `is not a function`** —— `syncCharacterMemoryBatchEmbeddings` 是**悬空调用**
  （3 处调用、0 处定义），后台队列「记忆向量生成」重试 3 次仍失败。已删除。
- **`quietInjectionGuard` 守卫恒不生效** —— 字段少写了一层（应为 `store.settings.quietInjectionGuard`），
  导致静默 / 指令 / 扩写类后台调用**一直被注入智脑内容**。
- **关系分析一直拿到空数组** —— 误用了已废弃的 V1 字段 `dynamicProfiles`（真实数据在 `dynamicProfilesV2`），
  动态人设材料从未真正进入关系分析。

### ② 其它修复

- **删楼 / 重 roll 抛 `ReferenceError`** —— `clearWPConsumedFlag` 作用域错误（嵌在 `$()` 回调内，已提到模块顶层）
- **事件监听器从未注销** —— 旧的注销写法引用了不存在的变量（被 `try/catch` 吞掉）→ 重复触发 + 内存泄漏
- **梦呓「点缀」从不注入** —— 读错字段（`accentColor` → `accent`）
- **NSFW 记忆缺时间戳** —— patch 路径漏了必填的 `lastUpdatedAt`
- **`logger` 的 detail 支持传对象** —— 此前签名为 `string`，真传对象时面板显示成 `[object Object]`

### ③ 清理统计

- `tsc --noEmit`：**103 → 0**（`src/` 归零，仅剩第三方声明文件的噪音）
- 23 个文件改动，净删 79 行死代码（含一个**整个空转的**「世界书角色名缓存」函数）

详见 `UPDATE-A5.4.1.md`。

旧用户需要重新导入 A5.4.1 薄壳，或把已有脚本 content 中的版本 tag 改为 `v5.4.1`。
