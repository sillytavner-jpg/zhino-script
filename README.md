# 明月秋青脚本 CDN 发布仓

当前版本：A5.4.2

## 导入

- 薄壳 JSON：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.4.2/mingyue-qiuqing-A5.4.2.json
- 主脚本：https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.4.2/dist/index.js

## 本次重点

**A5.4.2** —— DeepSeek V4.1 Flash 适配版，新增破限第三档 **DS4.1F**。

### 为什么

DeepSeek V4.1 Flash 的**思考模式默认开启**（effort 默认 `high`），不显式关就是全程在思考。
而思考模式下 `temperature` 静默失效 —— 智脑里所有温度设置等于摆设。
更麻烦的是，它会和智脑自己的 `<thinking>` 输出契约**叠成两层思考**，
白烧 token 还挤占格式预算。

### 改了什么

- 破限从两态（老模型 / 3.7·3.8F）扩成三态，新增 **DS4.1F**：
  破限文本与 3.7/3.8F 完全一致，只多在请求体里发 `thinking:{type:'disabled'}`
- 顶部总开关 + 逐分析类型行内切换，都多了第三档
- 老模型 / 3.7·3.8F 两档行为**零变化**；旧数据里的 `legacy` / `flash` 原值继续有效

### 实测

| 场景 | 耗时 | reasoning_tokens | completion |
|---|---|---|---|
| 默认 | 1147ms | 49 | 61 |
| 关思考 | 598ms | 字段消失 | 11 |

省 82% 输出 token、快约 48%，答案与破限格式完全一致。

详见 `UPDATE-A5.4.2.md`。

旧用户需要重新导入 A5.4.2 薄壳，或把已有脚本 content 中的版本 tag 改为 `v5.4.2`。
