
const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../api/v1/data.json'), 'utf8'));
const meta = {
  status: 'healthy',
  lastUpdated: new Date().toISOString(),
  sourceUpdatedAt: '2026-11-10T14:19:35.000Z',
  retrievedAt: new Date().toISOString(),
  recordCount: data.length,
  version: '1.0.0',
  schemaVersion: '1.0.0',
  source: 'MDN browser-compat-data and MDN content',
  sourceUrl: 'https://github.com/mdn/browser-compat-data/tree/main/javascript/builtins',
  license: 'CC0-1.0 (BCD); CC-BY-SA-2.5 (MDN prose)',
  updateCadence: 'monthly',
  nextUpdateDue: new Date(Date.now() + 90*24*60*60*1000).toISOString(),
  lastFailedAt: null,
  failureReason: null
};
fs.writeFileSync(path.join(__dirname, '../api/v1/meta.json'), JSON.stringify(meta, null, 2) + '\n');
console.log('Generated meta.json');
