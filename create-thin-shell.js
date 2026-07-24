const fs = require('fs');
const v = 'A5.1.1';
const tag = 'v5.1.1';
const CDN = 'https://cdn.jsdelivr.net/gh/sillytavner-jpg/zhino-script@' + tag + '/dist/index.js';
const content = "import '" + CDN + "'";
fs.writeFileSync('mingyue-qiuqing-' + v + '.json',
  JSON.stringify({ type:'script', enabled:true, name:'明月秋青脚本-秋青'+v, content:content }, null, 2));
console.log('thin shell written');
