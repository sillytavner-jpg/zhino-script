# 更新说明 A5.0.6

- 适用：明月秋青脚本-秋青 A5.0.6
- 发版时间：2026-07-12

## 本次改动

修复：从旧版本（A4.9.3 等）导入数据后角色库丢失大量角色。

根因：旧版数据中 `aliases` 字段存储了字面量 `'无'`（表示"无别名"），被当作真别名保留。`findExistingEntry` 合并角色时，所有角色的候选列表都包含 `'无'`，触发 `'无' === '无'` 误匹配，导致全部角色被合并进第一个角色（夏希）。

修复方式：新增 `MEANINGLESS_ALIASES` 集合过滤 `'无'` 等无意义占位值，阻止其参与角色合并匹配。

## 通过 CDN 导入酒馆助手

- 导入文件：把 `mingyue-qiuqing-A5.0.6.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v5.0.6/mingyue-qiuqing-A5.0.6.json`
