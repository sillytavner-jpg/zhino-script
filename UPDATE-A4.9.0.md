# 更新说明 A4.9.0

- 适用：明月秋青脚本-秋青 A4.9.0
- 发布时间：2026-07-06

## 本次改动

- 修复聊天变量持久化时序，避免退出再进入后智脑数据丢失。
- 聊天数据改为只写入当前聊天自己的 `chat_metadata.variables.mqzn_chat_data`，不再把完整聊天池写进 `settings.json`。
- 增加空读启动保护，避免刚进聊天读到空变量后用默认空壳覆盖真实数据。
- 修复 Pinia 初始化前日志 `_s` 报错导致的初始化异常。
- 修复回到酒馆主页后智脑悬浮球不显示的问题。

## 通过 CDN 导入酒馆助手

- 导入文件：`mingyue-qiuqing-A4.9.0.json`
- URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v4.9.0/mingyue-qiuqing-A4.9.0.json`

## 版本标记

控制台应显示：

```text
chat-vars-persist-20260706-2035-home-fab-guard
```
