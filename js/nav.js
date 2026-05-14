// Navigation and Footer Component Injection

// Module data structure
const modules = [
  {
    name: 'Strategy',
    path: 'modules/strategy',
    subpages: [
      { name: 'Strategic Alignment Value', path: 'strategic-alignment-value.html' },
      { name: 'Scenario Planning', path: 'scenario-planning.html' },
      { name: 'Executive Visibility', path: 'executive-visibility.html' }
    ]
  },
  {
    name: 'Growth',
    path: 'modules/growth',
    subpages: [
      { name: 'LTV & CAC Value', path: 'ltv-cac-value.html' },
      { name: 'Market Expansion Logic', path: 'market-expansion-logic.html' },
      { name: 'Growth Attribution', path: 'growth-attribution.html' }
    ]
  },
  {
    name: 'Markets',
    path: 'modules/markets',
    subpages: [
      { name: 'Macro-Trend Integration', path: 'macro-trend-integration.html' },
      { name: 'Geospatial Value', path: 'geospatial-value.html' },
      { name: 'Regulatory Risk', path: 'regulatory-risk.html' }
    ]
  },
  {
    name: 'Competitors',
    path: 'modules/competitors',
    subpages: [
      { name: 'Market Share Analytics', path: 'market-share-analytics.html' },
      { name: 'Competitive Intelligence', path: 'competitive-intelligence.html' },
      { name: 'Win/Loss Analysis', path: 'win-loss-analysis.html' }
    ]
  },
  {
    name: 'M&A',
    path: 'modules/ma',
    subpages: [
      { name: 'Due Diligence Engine', path: 'due-diligence-engine.html' },
      { name: 'Synergy Tracking', path: 'synergy-tracking.html' },
      { name: 'Target Pipeline', path: 'target-pipeline.html' }
    ]
  },
  {
    name: 'Quality',
    path: 'modules/quality',
    subpages: [
      { name: 'Risk & Compliance Value', path: 'risk-compliance-value.html' },
      { name: 'Standardization', path: 'standardization.html' },
      { name: 'Customer Sentiment', path: 'customer-sentiment.html' }
    ]
  },
  {
    name: 'Operations',
    path: 'modules/operations',
    subpages: [
      { name: 'Margin Expansion Value', path: 'margin-expansion-value.html' },
      { name: 'Supply Chain Resilience', path: 'supply-chain-resilience.html' },
      { name: 'Unit Economics', path: 'unit-economics.html' }
    ]
  },
  {
    name: 'People',
    path: 'modules/people',
    subpages: [
      { name: 'Retention & Turnover Value', path: 'retention-turnover-value.html' },
      { name: 'Productivity Benchmarking', path: 'productivity-benchmarking.html' },
      { name: 'Succession Planning', path: 'succession-planning.html' }
    ]
  }
];

// Get the base path relative to current page
function getBasePath() {
  const path = window.location.pathname;
  
  // For static file:// URLs, detect depth based on folder structure
  // Subpages in modules are 2 levels deep: modules/strategy/subpage.html -> ../../
  // Module landing pages are 2 levels deep: modules/strategy/index.html -> ../../
  // Pages folder is 1 level deep: pages/about.html -> ../
  // Root is 0 levels deep: index.html -> ./
  
  if (path.includes('/modules/')) {
    // All module pages (landing + subpages) are 2 levels deep
    return '../../';
  } else if (path.includes('/pages/')) {
    // Pages folder is 1 level deep
    return '../';
  } else {
    // Root level
    return './';
  }
}

// Generate navigation HTML
function generateNav() {
  const basePath = getBasePath();
  
  let navHTML = `
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          
          <!-- LEFT: Platform Name -->
          <div class="flex-shrink-0">
            <a href="${basePath}index.html" class="text-xl font-bold text-blue-900">LazrHealth</a>
          </div>
          
          <!-- MIDDLE: 8 Modules (Desktop) -->
          <div class="hidden lg:flex items-center space-x-4">
  `;
  
  modules.forEach(module => {
    navHTML += `
            <a href="${basePath}${module.path}/index.html" class="text-gray-700 hover:text-blue-900 font-semibold text-base">${module.name}</a>
    `;
  });
  
  navHTML += `
          </div>
          
          <!-- RIGHT: Support Pages (Desktop) -->
          <div class="hidden lg:flex items-center space-x-6">
            <a href="${basePath}pages/about.html" class="text-gray-700 hover:text-blue-900 font-medium">About</a>
            <a href="${basePath}pages/pricing.html" class="text-gray-700 hover:text-blue-900 font-medium">Pricing</a>
            <a href="${basePath}pages/security.html" class="text-gray-700 hover:text-blue-900 font-medium">Security</a>
            <a href="${basePath}pages/resources.html" class="text-gray-700 hover:text-blue-900 font-medium">Resources</a>
            <a href="${basePath}pages/ecosystem.html" class="text-gray-700 hover:text-blue-900 font-medium">Ecosystem</a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="lg:hidden flex items-center">
            <button id="mobile-menu-button" class="text-gray-700 hover:text-blue-900">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div id="mobile-menu" class="mobile-menu lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <div class="border-b border-gray-200 pb-2 mb-2">
            <p class="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">Modules</p>
  `;
  
  modules.forEach(module => {
    navHTML += `
            <a href="${basePath}${module.path}/index.html" class="block px-3 py-2 text-gray-900 hover:bg-gray-50">${module.name}</a>
    `;
  });
  
  navHTML += `
          </div>
          <a href="${basePath}pages/about.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50">About</a>
          <a href="${basePath}pages/pricing.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50">Pricing</a>
          <a href="${basePath}pages/security.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50">Security</a>
          <a href="${basePath}pages/resources.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50">Resources</a>
          <a href="${basePath}pages/ecosystem.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50">Ecosystem</a>
        </div>
      </div>
    </nav>
  `;
  
  return navHTML;
}

// Generate footer HTML
function generateFooter() {
  const basePath = getBasePath();
  
  return `
    <footer class="bg-gray-900 text-white mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- Modules Column -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Modules</h3>
            <ul class="space-y-2">
              ${modules.map(module => `
                <li><a href="${basePath}${module.path}/index.html" class="text-gray-400 hover:text-white">${module.name}</a></li>
              `).join('')}
            </ul>
          </div>
          
          <!-- Company Column -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Company</h3>
            <ul class="space-y-2">
              <li><a href="${basePath}pages/about.html" class="text-gray-400 hover:text-white">About</a></li>
              <li><a href="${basePath}pages/pricing.html" class="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="${basePath}pages/security.html" class="text-gray-400 hover:text-white">Security</a></li>
            </ul>
          </div>
          
          <!-- Resources Column -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="${basePath}pages/resources.html" class="text-gray-400 hover:text-white">Resource Hub</a></li>
              <li><a href="${basePath}pages/ecosystem.html" class="text-gray-400 hover:text-white">Ecosystem</a></li>
            </ul>
          </div>
          
          <!-- Legal Column -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a href="${basePath}pages/privacy.html" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="${basePath}pages/terms.html" class="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 LazrHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// Initialize navigation and footer
document.addEventListener('DOMContentLoaded', function() {
  // Inject navigation
  const navContainer = document.getElementById('nav-container');
  if (navContainer) {
    navContainer.innerHTML = generateNav();
  }
  
  // Inject footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = generateFooter();
  }
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
});
