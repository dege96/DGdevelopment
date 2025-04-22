import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { exec } from 'child_process';
import open from 'open';

// ES modules polyfill för __dirname 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urlsToTest = [
  'http://localhost:8080/',
  'http://localhost:8080/tjanster',
  'http://localhost:8080/tjanster/design-formgivning',
  'http://localhost:8080/om-oss',
  'http://localhost:8080/kontakt'
];

const runLighthouse = async (url) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  
  // Lighthouse-konfiguration
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port
  };

  try {
    // Kör Lighthouse-testet
    const runnerResult = await lighthouse.default(url, options);

    // Generera filnamn baserat på URL:en
    const urlPath = new URL(url).pathname;
    const urlSegment = urlPath === '/' ? 'home' : urlPath.replace(/\//g, '-').replace(/^-/, '');
    const date = new Date().toISOString().split('T')[0];
    
    // Skapa mapp för rapporter om den inte finns
    const reportsDir = path.join(__dirname, 'lighthouse-reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    // Spara HTML-rapporten
    const reportPath = path.join(reportsDir, `${date}-${urlSegment}.html`);
    fs.writeFileSync(reportPath, runnerResult.report);
    
    // Spara JSON-data för möjlig analys
    const jsonPath = path.join(reportsDir, `${date}-${urlSegment}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(runnerResult.lhr, null, 2));
    
    // Sammanfatta poängen
    const scores = {
      url,
      performance: runnerResult.lhr.categories.performance.score * 100,
      accessibility: runnerResult.lhr.categories.accessibility.score * 100,
      bestPractices: runnerResult.lhr.categories['best-practices'].score * 100,
      seo: runnerResult.lhr.categories.seo.score * 100
    };
    
    console.log(`\n📊 Lighthouse resultat för ${url}:`);
    console.log(`  Performance: ${scores.performance.toFixed(0)}/100`);
    console.log(`  Accessibility: ${scores.accessibility.toFixed(0)}/100`);
    console.log(`  Best Practices: ${scores.bestPractices.toFixed(0)}/100`);
    console.log(`  SEO: ${scores.seo.toFixed(0)}/100`);
    console.log(`  Rapport sparad: ${reportPath}`);
    
    return { scores, reportPath };
  } catch (error) {
    console.error(`❌ Fel vid körning av Lighthouse för ${url}:`, error);
    return null;
  } finally {
    await chrome.kill();
  }
};

// Starta servern och kör testerna
const startServerAndRunTests = async () => {
  console.log('🚀 Startar utvecklingsservern...');
  
  // Starta Vite-servern
  const server = exec('npm run dev');
  
  // Vänta på att servern ska starta
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  console.log('🔍 Kör Lighthouse-tester...');
  
  const results = [];
  
  // Kör testerna en i taget
  for (const url of urlsToTest) {
    const result = await runLighthouse(url);
    if (result) {
      results.push(result);
    }
  }
  
  // Skapa sammanfattningsrapport
  if (results.length > 0) {
    const summaryPath = path.join(__dirname, 'lighthouse-reports', `summary-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));
    console.log(`\n📋 Sammanfattning sparad: ${summaryPath}`);
    
    // Öppna första rapporten automatiskt
    if (results[0] && results[0].reportPath) {
      await open(results[0].reportPath);
    }
  }
  
  console.log('\n🛑 Avslutar servern...');
  server.kill();
  process.exit(0);
};

// Kör allt
startServerAndRunTests().catch(error => {
  console.error('❌ Ett fel inträffade:', error);
  process.exit(1);
}); 