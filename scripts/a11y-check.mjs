import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(entries.map((entry) => entry.isDirectory() ? walk(join(directory, entry.name)) : join(directory, entry.name)));
  return paths.flat();
}

const files = (await walk(fileURLToPath(new URL('../dist/', import.meta.url)))).filter((file) => file.endsWith('.html'));
const failures = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const checks = [
    ['页面缺少 lang="zh-CN"', /<html[^>]+lang="zh-CN"/i],
    ['页面缺少 title', /<title>[^<]+<\/title>/i],
    ['页面缺少 description', /<meta[^>]+name="description"[^>]+content="[^"]+"/i],
    ['页面缺少主内容区', /<main[^>]+id="main-content"/i],
    ['页面缺少跳转到正文链接', /href="#main-content"/i],
  ];
  for (const [message, pattern] of checks) if (!pattern.test(html)) failures.push(`${file}: ${message}`);
  const images = html.match(/<img\b[^>]*>/gi) ?? [];
  images.forEach((image, index) => {
    if (!/\balt="[^"]*"/i.test(image)) failures.push(`${file}: 第 ${index + 1} 张图片缺少 alt`);
  });
  const buttons = html.match(/<button\b[^>]*>[\s\S]*?<\/button>/gi) ?? [];
  buttons.forEach((button, index) => {
    const visibleText = button.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (!/aria-label=/i.test(button) && !visibleText) failures.push(`${file}: 第 ${index + 1} 个按钮可能缺少可访问名称`);
  });
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Accessibility baseline passed for ${files.length} HTML pages.`);
