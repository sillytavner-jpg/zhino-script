# zhino-script（明月秋青-智脑发布仓库）

明月秋青脚本·秋青（智脑）的发布仓库，通过 jsDelivr CDN 提供给酒馆助手导入。

## 给用户使用：导入酒馆助手

把 `mingyue-qiuqing-A4.7.1.json` 在酒馆助手「导入脚本」里加载即可。
该文件是**薄壳入口**——内部只有一行 `import`，从 jsDelivr CDN 拉取真正的脚本本体 `dist/index.js`，刷新即拿到最新版，无需重新下载。

或使用 URL 方式：把下面链接粘到「从 URL 导入」：

```
https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v4.7.1/mingyue-qiuqing-A4.7.1.json
```

## 版本列表

每个版本对应一个 git tag（`v4.x[.y]`）。

| tag | 入口脚本 | 说明 |
|-----|---------|------|
| v4.7.1 | `mingyue-qiuqing-A4.7.1.json` | `UPDATE-A4.7.1.md` |

## 仓库结构

- `dist/index.js` —— webpack 打包后的脚本本体
- `mingyue-qiuqing-A4.7.1.json` —— 薄壳入口脚本（酒馆助手直接导入的对象）
- `UPDATE-A*.*.md` —— 各版更新说明

源码不在本仓（只放发布产物）。开发与历史备份保留在作者本地。