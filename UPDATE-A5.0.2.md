# 更新说明 A5.0.2

- 适用：明月秋青脚本-秋青 A5.0.2
- 发版时间：2026-07-09

## 本次改动

1. **新增角色改名功能** — 角色详情头部"改名"按钮，可把角色主名改为新名（旧名自动保留为别名）。覆盖全数据源（记忆/人设/关系/图谱/世界推进…），复用 mergeCharacters 的全源重写逻辑。
2. **修复合并角色"点不动"的 bug** — 别名提前吃掉对方主名导致归一结果碰撞，mergeCharacters 入口增加碰撞回退逻辑。
3. **修复改名校验变"改什么都不行"的 bug** — `resolveKnownCharacterName` 的 fallback 参数误用导致永远判撞别人。

## 通过 CDN 导入酒馆助手
- 导入文件：把 `mingyue-qiuqing-A5.0.2.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.0.2/mingyue-qiuqing-A5.0.2.json`
