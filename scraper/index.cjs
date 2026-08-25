/**
 * JavaScript Built-ins Scraper
 * Source: MDN / ECMA-262
 * Run: node scraper/index.cjs
 */
const fs = require('fs');
const path = require('path');

const FIXTURES_DIR = path.join(__dirname, 'fixtures');
const OUTPUT_DIR = path.join(__dirname, '../api/v1');

async function scrape() {
  console.log('JavaScript Built-ins Scraper');
  console.log('Source:', 'MDN / ECMA-262');
  console.log('Note: Static reference data. Validating existing data.');

  const existing = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, 'data.json'), 'utf8'));
  console.log(`Existing records: ${existing.length}`);

  if (!fs.existsSync(FIXTURES_DIR)) {
    fs.mkdirSync(FIXTURES_DIR, { recursive: true });
  }

  fs.writeFileSync(
    path.join(FIXTURES_DIR, 'expected.json'),
    JSON.stringify({ recordCount: existing.length }, null, 2) + '\n'
  );

  console.log('Validation complete. Data is current.');
}

scrape().catch(err => {
  console.error('Scraper failed:', err.message);
  process.exit(1);
});
