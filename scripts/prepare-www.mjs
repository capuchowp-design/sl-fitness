// Copia os arquivos já compilados do PWA para a pasta "www" (webDir do Capacitor).
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';

const out = 'www';
rmSync(out, { recursive: true, force: true });
mkdirSync(out);

const items = [
  'index.html', 'assets', 'exercises', 'icon-192.png', 'icon-512.png',
  'manifest.webmanifest', 'privacy-policy.html', 'registerSW.js', 'sw.js',
  'workbox-9c191d2f.js',
];
for (const item of items) {
  if (!existsSync(item)) { console.warn('Aviso: não encontrado ->', item); continue; }
  cpSync(item, `${out}/${item}`, { recursive: true });
}
console.log('www pronto.');
