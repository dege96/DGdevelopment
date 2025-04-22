export default {
  ci: {
    collect: {
      // Konfigureras i workflow-filen
      startServerCommand: 'npm run preview -- --port 8080',
      settings: {
        // Lighthouse-konfiguration
        preset: 'desktop',
        formFactor: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
      },
    },
    upload: {
      // Lagra rapporten lokalt
      target: 'filesystem',
      outputDir: './.lighthouseci',
    },
    assert: {
      // Definiera tröskelvärden för godkänt test
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        
        // Skärpta regler för viktiga faktorer
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        
        // Anpassade regler som vi vill vara extra strikta med
        'uses-responsive-images': ['error', { minScore: 1 }],
        'uses-optimized-images': ['error', { minScore: 1 }],
        'render-blocking-resources': ['warn', { maxLength: 0 }],
        'unminified-javascript': ['error', { maxLength: 0 }],
        'unminified-css': ['error', { maxLength: 0 }],
        'unused-javascript': ['warn', { maxNumericValue: 0 }],
        
        // SEO-specifika regler
        'meta-description': ['error', { minScore: 1 }],
        'document-title': ['error', { minScore: 1 }],
        'html-has-lang': ['error', { minScore: 1 }],
        
        // Tillgänglighetsregler
        'color-contrast': ['error', { minScore: 1 }],
        'heading-order': ['warn', { minScore: 1 }],
        'link-name': ['error', { minScore: 1 }],
      },
    },
  },
}; 