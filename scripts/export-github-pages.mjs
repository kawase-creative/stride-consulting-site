import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const outputDir = resolve(projectRoot, 'docs');
const clientDir = resolve(projectRoot, 'dist/client');
const siteBase = '/stride-consulting-site';
const siteUrl = 'https://kawase-creative.github.io/stride-consulting-site';

const response = await fetch('http://127.0.0.1:8788/');
if (!response.ok) {
  throw new Error(`Could not render the site: ${response.status}`);
}

let html = await response.text();
html = html
  .replaceAll('href="/_next/', `href="${siteBase}/_next/`)
  .replaceAll('src="/_next/', `src="${siteBase}/_next/`)
  .replaceAll('http://localhost:3000/og.png', `${siteUrl}/og.png`);

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });
await writeFile(resolve(outputDir, 'index.html'), html);
await writeFile(resolve(outputDir, '.nojekyll'), '');
