import herrajes from '../data/pages/herrajes.js';
import { writeFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolver la ruta absoluta
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(__dirname, '../../herrajesData.json');

const json = JSON.stringify(herrajes, null, 2);

await writeFile(outputPath, json, 'utf-8');
console.log(`✅ Archivo generado en ${outputPath}`);
