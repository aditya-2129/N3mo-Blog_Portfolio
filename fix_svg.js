import { readFileSync, writeFileSync } from 'fs';
const buf = readFileSync('public/stack.svg');
let newBuf = [];
for (let i = 0; i < buf.length; i++) {
  if (buf[i] !== 0) {
    newBuf.push(buf[i]);
  }
}
let str = Buffer.from(newBuf).toString('utf8');
if (!str.trim().endsWith('</svg>')) {
  str += '\n</svg>';
}
writeFileSync('public/stack.svg', str, 'utf8');
console.log('Fixed stack.svg', str.length, 'bytes');
