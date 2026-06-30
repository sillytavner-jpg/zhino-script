# 更新说明 A4.7.1

- 适用：明月秋青脚本-秋青 A4.7.1
- 发版时间：2026-07-01

## 本次改动

A4.7.1 是 A4.7 的小补丁版，仅一处 UI 调整，无业务/数据改动。

### 关闭按钮位置调整

- A4.7：关闭叉号绝对悬浮在**整个面板右上角**（半透明底、`z-index:50`），与面板内容有视觉重叠风险。
- A4.7.1：叉号改放到**桌面侧栏头部右侧**——与「智脑」标题同一行，靠 `justify-content: space-between` 顶到侧栏最右；改为常规 26×26 透明小按钮（不再绝对定位、去掉半透明底与高 z-index），不浮在内容上、不挡任何 UI。
- 侧栏头部布局由 `flex-direction: column` 改为 `row`（标题左 + 关闭右）。`@pointerdown.stop` 仍阻止点叉号时触发面板拖拽。
- 移动端：继续用顶部栏自带的关闭按钮，本版无变化。

## 影响范围

- 仅改 `src/App.vue`：模板（叉号从 panel-inner 绝对元素移进 `.zhino-sidebar-header`）+ CSS（`.zhino-sidebar-header` 改 row、`.zhino-panel-close` 去 absolute）。
- 不动业务逻辑、不动 `mainStore.ts`、不动其它组件。

## 通过 CDN 导入酒馆助手

两种方式任选其一：

### 方式 A：导入薄壳脚本文件

把本仓库的 `mingyue-qiuqing-A4.7.1.json` 文件直接在酒馆助手「导入脚本」里加载即可。该文件内部只有一行 import 语句，会自动从 jsDelivr CDN 拉取真正的脚本本体，刷新即得新版。

### 方式 B：在「从 URL 导入」里粘贴 CDN 链接

```
https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v4.7.1/mingyue-qiuqing-A4.7.1.json
```

## 仓库结构

- `dist/index.js` —— webpack 打包后的脚本本体（瘦壳内部 import 的对象）
- `mingyue-qiuqing-A4.7.1.json` —— 薄壳入口脚本（可直接导入酒馆助手）
- `UPDATE-A4.7.1.md` —— 本说明