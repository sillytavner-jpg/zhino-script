# 更新说明 · 明月秋青脚本-秋青 A5.4.1

> 本版是 A5.4.0 之后的**代码健康度清理版**：把 `tsc --noEmit` 的类型错误从
> **103 条清到 `src/` 归零**，同时在清理过程中挖出并修复了若干个**静默失效的真问题**。
>
> 本版**无新功能、无行为变更**（除下面列出的 3 处真问题修复），
> 目的是让代码库回到「类型检查干净」的状态，后续改动更安全。

---

## 一、为什么要清

上一版（A5.4.0）之后盘点发现，项目的历史类型错误里**藏着真实故障**：

- `TS2304`（Cannot find name）→ 运行时**必然 ReferenceError**
- `TS2339`（属性不存在）→ 若落在没包 `catch` 的 if 判断上，运行时**恒 undefined** → 功能**静默死掉**

而 webpack 构建走的是 `transpileOnly: true`（**只转译、不做类型检查**），
所以「构建成功」从来不能证明类型没问题 —— 错误就这样潜伏了两个月。

---

## 二、修掉的真问题（重点看这里）

### 1. 后台队列「记忆向量生成」报 `syncCharacterMemoryBatchEmbeddings is not a function`

**现象**：后台队列「记忆向量生成」重试 3 次后失败，报错 `e.syncCharacterMemoryBatchEmbeddings is not a function`。

**根因**：这个函数**从未被定义**（3 处调用、0 处定义）。来自一次「撤回记忆仓」的提交 ——
把调用带回来了，但定义没带回来，变成**孤儿调用**。潜伏两个月的原因：
① 构建不做类型检查 ② 两处调用还被 `.catch(() => {})` 静默吞掉。

**修复**：删除 3 处悬空调用 —— 它调用的 `embedCharacterMemories` 本来就是**原地写入**
`summary.characterMemories`，这几行调用纯属多余。

### 2. `quietInjectionGuard` 守卫从未生效

**根因**：写成了 `store.quietInjectionGuard`，实际字段在 `store.settings.quietInjectionGuard`
→ 恒为 `undefined` → if 永不进入。

**后果**：quiet / command / extension / impersonate 这几类后台调用**一直在被注入智脑内容**，
守卫形同虚设。

**修复**：补上 `.settings` 一层。

### 3. 关系分析一直在用**已废弃的数据源**

**根因**：`RelationshipTab.vue` 传递的是 `store.dynamicProfiles`（**V1 废弃字段**，
代码注释已写明「不再写入新数据」），而真实数据在 `store.dynamicProfilesV2`。

**后果**：关系分析**恒拿到空数组**，动态人设材料从未真正进入过关系分析。

**修复**：改传 V2；相关类型 `DynamicProfile` → `DynamicProfileV2`；字段名
`.dynamicContent` → `.dynamicProfile` 一并对齐。

---

## 三、其它修复（清理途中发现）

| 项 | 问题 | 修复 |
|---|---|---|
| `clearWPConsumedFlag` 作用域错误 | 函数缩进在 0，实际嵌在 `$(() => {...})` 回调内 → 顶层函数访问不到 | 提升到模块顶层。**此前删楼/重 roll 触发清理时会抛 ReferenceError 中断** |
| 事件监听器未注销 | 注销写成 `eventSource.off(...)`（该变量不存在，被 try/catch 吞掉）→ 监听器**从未注销**，每次重挂载都累积注册 | 改用 `eventOn` 返回的 `stop` 句柄，cleanup 时调用。**修复重复触发 + 内存泄漏** |
| 梦呓「点缀」从不注入 | 读的是 `accentColor`，接口字段真实名是 `accent` → 恒 undefined | 改为 `accent` |
| NSFW 记忆缺时间戳 | patch 解析路径漏了必填的 `lastUpdatedAt`（降级路径有） | 补上，**修复数据完整性** |
| `logger` 的 detail 参数类型过窄 | 签名是 `string`，但 18 处调用传对象 → 真传对象时面板显示成 `[object Object]` | 改 `unknown` + 内部 `normalizeDetail()` 序列化 |

---

## 四、清理统计

| 指标 | 数值 |
|---|---|
| `tsc --noEmit` 初始错误 | **103** |
| `src/` 最终错误 | **0** |
| 剩余错误 | 5 条**第三方声明文件**（1 条 `@types/function/worldbook.d.ts` + 4 条 vueuse 的 Web Bluetooth 类型），**与项目代码无关、不可修** |
| 涉及文件 | 23 个（+115 / −194 行） |

### 顺手挖出但**未修**的待接线缺口（记录在案）

**V2 大总结漏接「用户总结方向」** —— 引导弹窗收集到的用户填写的总结方向，
目前**只用于判断「是否取消」，从未传给总结链路**。对比旧版
`summary.ts` 的 `executeSummary` **是**会把方向拼进材料里的
（`[用户指定的总结方向指引]`）→ 属于 V2 迁移时漏掉的参数。

> 本版仅清理了对应的无用中转变量并在代码中留注释标注，**未接线**。
> 如需补上，改动很小（把 guidance 顺着 `runSummaryChain` 传下去），可后续版本处理。

---

## 五、兼容性

- **设置项、存储格式、界面全部不变**，无迁移
- **输出结果内容一致**（同样的 prompt、同样的解析、同样的组装）
- 纯死代码清理，不改变任何对外行为

---

## 六、升级方式

设置 → 脚本库 → 更新（或重新导入本 json）。已装旧版可直接覆盖。

---

## 附：本次清理删除的死代码（供追溯）

- `refreshWorldBookCache` —— **整个函数是空转的**：它算出的 `worldBookNames` /
  `worldBookContents` 两个缓存从头到尾**没有一处读取**，函数被调用但产出直接丢弃
- `ensureRecentFloorsVisible`（局部包装函数）、`chineseToNumber`、`slugName`、
  `nameOfLoc`、`SmallSummarySchema`、`getDynamicProfileV2Brief` 等零引用声明
- `rerankCandidates` 在 `index.ts` 的静态 import（真正用法在 `mainStore.ts` 走动态 import）
