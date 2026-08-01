# 更新说明 A5.1.8

- 适用：明月秋青脚本-秋青 A5.1.8
- 发版时间：2026-08-01

## 本次改动

修复世界推进运行时崩溃（`blacklistReminder is not defined`）：补全黑名单提醒三步模式（import + 参数 + 局部定义），并补齐两处调用方传参（自动推演 index.ts + 重新推进按钮 WorldTab.vue）。其余黑名单模块排查无同类残留。

## 通过 CDN 导入酒馆助手
- 导入文件：把 `mingyue-qiuqing-A5.1.8.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.1.8/mingyue-qiuqing-A5.1.8.json`
