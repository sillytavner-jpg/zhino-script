# 更新说明 · A5.3.1

> 上一版：A5.3.0 ｜ 发版：2026-10-04

本版是**修复版**：一个会导致控制台刷屏的真 bug + 一批 API 报错可读性改进。

---

## 一、修复：`props is not defined` 刷屏

**症状**：控制台被大量重复的报错刷屏

```
【脚本】智脑】：ReferenceError: props is not defined
```

**原因**：基础弹窗组件 `Modal.vue` 里，`defineProps` 的结果**忘了赋给变量**，
但代码里在用 `props.visible` —— 于是每次组件求值都抛异常。

```ts
withDefaults(defineProps<{ visible: boolean; ... }>(), { isMobile: false });  // ✗ 漏了 const props =
watch(() => props.visible, ...)   // → ReferenceError
```

因为 Modal 是**所有弹窗的基础组件**，所以报错会反复出现。

**修复**：补上 `const props =`。

> 伴随现象：有用户反馈报错期间「槽位标记没被替换、提示词里直接把标签发出去了」。
> 该场景下**注入链路的异常现在会直接抛出**（不再被静默吞掉），
> 便于继续定位 —— 如仍出现，请带上「代码日志」里的报错反馈。

---

## 二、API 报错分类：空响应不再一律说「格式异常」

以前只要 API 返回的 `content` 为空，智脑就报「返回结构异常」——
但这其实有好几种完全不同的原因，误报会让人以为是自己配置错了。现在按 `finish_reason` 分开说：

| 情况 | 现在报什么 |
|---|---|
| **内容被审核拦截**（`content_filter` / `safety` / `prohibited_content` / `blocklist` / `spii` …） | `API 内容被过滤拦截（finish_reason: xxx）` + 模型 / 请求地址 / 已生成多少 token |
| **输出被长度上限截断**（`length`） | `API 输出被长度上限截断` + 模型 / 地址 / token 数 |
| **其他空响应** | 空内容提示 + `finish_reason` + `completion_tokens` 一并列出 |

**报错只陈述事实**（发生了什么、模型是谁、地址是什么、数据是多少），不含任何处置建议。

**另外**：被判定为「重试也没用」的错误（内容被拦截、输出被截断），
**不再走重试弹窗** —— 直接失败并报出原因，省得白等三轮。

### 关于 `content_filter`

它是**服务端**返回的标记（OpenAI 规范的字段），智脑只读不猜。
不同渠道写法不一样，所以白名单同时收了 OpenAI 风格（`content_filter`）和
Gemini 原生风格（`SAFETY` / `PROHIBITED_CONTENT` / `RECITATION` …），两边都能识别。

> 如果遇到这个报错：那 2000 多个 token 的内容**是看不到的** ——
> 服务端在返回前就把内容清空了（token 数只是计费统计）。
> 换个渠道往往就能正常返回。

---

## 三、其他

- 代码日志里，被拦截的错误摘要现在会带上 token 数，例如：
  `内容被过滤拦截（content_filter，模型 xxx，已生成 2075 tokens 但未返回）`
- 槽位注入链路**保持不吞异常**：出问题会直接抛出，避免静默失败

---

## 升级方式

旧用户需要**重新导入 A5.3.1 薄壳**，或把已有脚本 content 里的版本 tag 改为 `v5.3.1`。

- 薄壳 JSON：`.../zhino-script@v5.3.1/mingyue-qiuqing-A5.3.1.json`
- 主脚本：`.../zhino-script@v5.3.1/dist/index.js`

## 兼容性

- 纯修复与报错文案改进，无数据结构变更
- A5.3.0 的全部内容（开场白进大总结 / 数据导出分组 / 导入两模式 / 槽位兜底 / 梦呓·动态人设默认关）保持不变
