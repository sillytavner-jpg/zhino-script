# 更新说明 A4.8.9

- 适用：明月秋青脚本-秋青 A4.8.9
- 发版时间：2026-07-06

## 本次改动

1. 修复同角色新开聊天时，智脑偶发读到另一个聊天旧内容的问题。
2. 增加初始化时序保护：等待当前聊天变量切稳后再创建面板和 store，不再 5 秒后强行挂载。
3. 增加聊天数据一致性校验：过滤 key 与内部 `chatId` 不匹配的智脑记录，防止旧局残留冒充当前局。
4. 启用当前聊天数据自动搬家：当前聊天写入自己的 `type:'chat'` 变量，`settings.json` 的全局备份只保留未迁移旧聊天池。
5. 本版不删除 embedding，不要求重新向量化。

## 通过 CDN 导入酒馆助手

- 导入文件：把 `mingyue-qiuqing-A4.8.9.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v4.8.9/mingyue-qiuqing-A4.8.9.json`
