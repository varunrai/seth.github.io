// AWS FSxN Navigation Component
// Material Design inspired navigation with responsive sidebar

const navigationConfig = {
    brand: {
        name: "Amazon FSx for NetApp ONTAP",
        logo: "☁️",
        tagline: "Cloud Storage Excellence"
    },
    pages: [
        {
            title: "Beyond the Bucket",
            url: "beyond-the-bucket.html",
            icon: "🚀",
            description: "Data Operating System"
        },
        {
            title: "Stop Going Broke",
            url: "stop-going-broke-on-cloud-storage.html",
            icon: "💰",
            description: "Cost Optimization"
        },
        {
            title: "Storage Tax Elimination",
            url: "storage-tax-elimination.html",
            icon: "📊",
            description: "Tiering Economics"
        },
        {
            title: "Unified Architecture",
            url: "unified-architecture.html",
            icon: "🔗",
            description: "Gen AI & Analytics"
        },
        {
            title: "Kill Protocol Wall",
            url: "kill-protocol-wall.html",
            icon: "🔓",
            description: "S3 Endpoint"
        },
        {
            title: "File Services Comparison",
            url: "file-services-comparison.html",
            icon: "⚖️",
            description: "EFS, FSxZ vs FSx"
        },
        {
            title: "Storage Services Guide",
            url: "aws-storage-services-comparison.html",
            icon: "🗺️",
            description: "Complete AWS Comparison"
        },
        {
            title: "Enterprise Data Management",
            url: "enterprise-data-management-ontap.html",
            icon: "🏢",
            description: "ONTAP Advanced Features"
        },
        {
            title: "Scale-Out Performance",
            url: "scale-out-performance.html",
            icon: "⚡",
            description: "Ultimate Performance"
        }
    ]
};

function createNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navHTML = `
        <!-- Mobile Menu Button -->
        <button id="menuToggle" class="fixed top-4 left-4 z-50 md:hidden bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path id="menuIcon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>

        <!-- Overlay for mobile -->
        <div id="navOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden md:hidden transition-opacity duration-300"></div>

        <!-- Navigation Sidebar -->
        <nav id="sidebar" class="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl z-40 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto">
            
            <!-- Brand Header -->
            <div class="p-6 border-b border-slate-700 bg-gradient-to-r from-blue-900 to-slate-900">
                <a href="/" class="flex items-center space-x-3 group">
                    <div class="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        ${navigationConfig.brand.logo}
                    </div>
                    <div>
                        <h1 class="text-xl font-black tracking-tight">${navigationConfig.brand.name}</h1>
                        <p class="text-xs text-slate-300">${navigationConfig.brand.tagline}</p>
                    </div>
                </a>
            </div>

            <!-- Navigation Links -->
            <div class="py-4 px-3">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-3">
                    Navigation
                </div>
                ${navigationConfig.pages.map(page => {
                    const isActive = currentPage === page.url;
                    return `
                        <a href="${page.url}" 
                           class="nav-item flex items-start space-x-3 px-3 py-3 mb-1 rounded-lg transition-all duration-200 ${
                               isActive 
                                   ? 'bg-blue-600 shadow-lg shadow-blue-600/50' 
                                   : 'hover:bg-slate-700/50 hover:translate-x-1'
                           }">
                            <span class="text-2xl flex-shrink-0">${page.icon}</span>
                            <div class="flex-1 min-w-0">
                                <div class="font-semibold text-sm leading-tight ${isActive ? 'text-white' : 'text-slate-200'}">
                                    ${page.title}
                                </div>
                                <div class="text-xs mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-400'}">
                                    ${page.description}
                                </div>
                            </div>
                            ${isActive ? '<div class="flex-shrink-0 text-blue-300">▶</div>' : ''}
                        </a>
                    `;
                }).join('')}
            </div>

            <!-- Footer -->
            <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700 bg-slate-900/50">
                <div class="text-xs text-slate-400 text-center">
                    <p class="mb-1">© 2026 AWS FSxN</p>
                    <p class="text-[10px]">Built with ☁️ and ❤️</p>
                </div>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Mobile menu functionality
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('navOverlay');
    const menuIcon = document.getElementById('menuIcon');

    function toggleMenu() {
        const isOpen = sidebar.classList.contains('translate-x-0');
        
        if (isOpen) {
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu on navigation (mobile)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });
}

// Initialize navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createNavigation);
} else {
    createNavigation();
}
