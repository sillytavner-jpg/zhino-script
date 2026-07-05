# 更新说明 A4.8.5

- 适用：明月秋青脚本-秋青 A4.8.5
- 发版时间：2026-07-05

## 本次改动

- **图谱性能优化**：砍 SVG glow 滤镜、去 backdrop-filter 模糊、精简星空动画、shallowRef 降低力模拟期间响应式开销，手机/电脑大幅流畅
- **交互调整**：hover 不再触发高亮与信息面板，仅点击节点弹出详情；左侧名册点击只移动视角不选中
- **修复**：点击节点不显示详情面板（onBgClick 误清 selectedId）
- **优化**：去节点按下虚化效果、手机版详情面板与名册遮挡修复、电脑端角色栏支持收起/展开

## 通过 CDN 导入酒馆助手
- 导入文件：把 `mingyue-qiuqing-A4.8.5.json` 在酒馆助手「导入脚本」加载
- 或 URL 导入：`https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@v4.8.5/mingyue-qiuqing-A4.8.5.json`
