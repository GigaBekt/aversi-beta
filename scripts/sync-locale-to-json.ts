import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import en from '../src/locale/en';
import ka from '../src/locale/ka';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const writeJson = (relativePath: string, data: unknown) => {
  const abs = join(root, relativePath);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
};

writeJson('public/locales/en/common.json', en);
writeJson('public/locales/ka/common.json', ka);
