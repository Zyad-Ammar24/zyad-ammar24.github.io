/* ================================================================
   ZYAD AMMAR — Portfolio Script
   ================================================================ */

/* ── CREDENTIALS (change these!) ── */
var ADMIN_EMAIL = 'marzyad46@gmail.com';
var ADMIN_PASS  = 'Zyad@2025';

/* ── DEFAULT PROJECTS DATA ── */
var DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'Banking Performance Dashboard — Banque Misr',
    tag: 'Power BI',
    desc: 'End-to-end Power BI dashboard analyzing customers, accounts, loans, and transactions across 20 branches.',
    metrics: ['EGP 299M Deposits', '8.33% Default Rate', '20 Branches', '1,000 Customers'],
    overview: 'Comprehensive banking analysis covering 5 dimensions: loans, transactions, customers, branches, and accounts. The bank manages 1,243 accounts with total deposits of EGP 299M. Critical finding: 8.33% loan default rate resulting in EGP 7.82M losses. Mortgage loans for middle-income customers represent the highest risk segment.',
    insights: [
      'VIP customers (10%) show zero defaults — strong credit quality signal',
      'Tanta records highest default concentration (11 cases out of 50)',
      'Branch_4 operates at 15 trans/employee vs Branch_9 at 8.6 — 74% efficiency gap',
      'July is peak transaction month — staffing must increase proactively',
      'Online channel handles lowest transaction amounts despite equal count'
    ],
    recs: [
      'Tighten Mortgage approval criteria for middle-income applicants',
      'Launch Mass-to-VIP upgrade program for high-potential customers',
      'Reallocate staff from Branch_9 to high-stress Branch_4',
      'Incentivize online high-value transactions to reduce ATM costs'
    ],
    imgPaths: [
      'assests/projects/bank-1.png',
      'assests/projects/bank-2.png',
      'assests/projects/bank-3.png',
      'assests/projects/bank-4.png',
      'assests/projects/bank-5.png',
      'assests/projects/bank-6.png'
   ],
    imgData: [],
    url: ''
  },
  {
    id: 2,
    title: 'Call Center Analytics — Salla',
    tag: 'Power BI',
    desc: 'Merged 3 CSV files to build a unified operational analysis. Detected critical forecast instability and agent-level SLA ranking.',
    metrics: ['1.74M Calls Analyzed', '91% Avg Service Level', '-692K Forecast Variance', '3 Months Covered'],
    overview: 'Analyzed Salla call center performance across Feb–Apr by merging separate CSV files. February showed stable operations but poor forecast accuracy. March experienced pressure with 876K calls. April showed excellent SLA (96%) but a massive -332K forecast variance revealing systemic forecasting instability.',
    insights: [
      'Forecast variance swung from -258K to -332K — systemic problem, not seasonal',
      'March: good accuracy (89.6%) but calls exceeded capacity causing SLA pressure',
      'April: 56% forecast accuracy despite excellent 96% SLA — forecasts are unreliable',
      'ASA and Abandon Rate show strong positive correlation — ASA is the early warning KPI',
      'Agent Khaled achieved 96.2% SLA with lowest ASA (6.13) — team benchmark'
    ],
    recs: [
      'Monitor Forecast Variance weekly not monthly',
      'Use ASA as primary early warning before SLA deteriorates',
      'Analyze Calls Offered weekly within each month',
      'Link Stress Variance directly to SLA in reports'
    ],
    imgPaths: [
  'assests/projects/salla-1.png',
  'assests/projects/salla-2.png',
  'assests/projects/salla-3.png',
  'assests/projects/salla-4.png'
],
    imgData: [],
    url: ''
  },
  {
    id: 3,
    title: 'Marketing Intelligence Dashboard',
    tag: 'Power BI',
    desc: 'Full-year marketing dashboard for 5,000 campaigns with What-If simulation using dynamic DAX. Identified top channels and customer segments.',
    metrics: ['USD 315M Net Profit', '503% Overall ROI', '5,000 Campaigns', '28M Impressions'],
    overview: 'Comprehensive marketing analysis covering 5,000 campaigns across 6 channels and 5 campaign types. Built advanced What-If Analysis using dynamic DAX parameters. Facebook led with highest ROI (5.077x) while Google Ads was most cost-efficient ($12,383 CPC). Social Media campaigns achieved highest ROI (5.102x) among all types.',
    insights: [
      'Social Media on YouTube is the best combination at 5.26x ROI',
      'Men 18–24 achieve highest ROI (5.128x) despite lowest conversion — highest value per conversion',
      'Short campaigns (15 days) outperform long campaigns (60 days) in ROI',
      'Instagram is most expensive with below-average ROI — needs strategy review',
      'English leads in ROI; German leads in conversion rate at 8.2%'
    ],
    recs: [
      'Double down on Social Media + YouTube for maximum ROI',
      'Shift Instagram budget to Facebook or Google Ads',
      'Target Men 18–24 with premium messaging for high-value conversions',
      'Run 15-day campaign sprints rather than long-term campaigns'
    ],
    imgPaths: [
  'assests/projects/marketing-1.png',
  'assests/projects/marketing-2.png',
  'assests/projects/marketing-3.png',
  'assests/projects/marketing-4.png'
],
    imgData: [],
    url: ''
  },
  {
    id: 4,
    title: 'Airline Loyalty Program — Northern Lights Air',
    tag: 'Power BI',
    desc: 'Analyzed loyalty program campaign performance across 16,737 members. Measured campaign lift, CLV, demographic adoption, and seasonal churn.',
    metrics: ['16,737 Members', '54.37% Campaign Lift', '87.7% Retention Rate', 'Pearson r=0.49'],
    overview: 'Comprehensive loyalty program analysis for a Canadian airline measuring the impact of a Feb–Apr 2018 promotional campaign. The campaign added 971 new members achieving 54.37% growth vs 2017. Campaign CLV ($8,050) exceeded standard CLV ($7,985) confirming high-quality acquisition.',
    insights: [
      'Under $50K income segment achieved 17.73% adoption — 3x the overall average',
      '$100K–$200K segment showed only 3.26% adoption — Premium Messaging needed',
      '99% of campaign members were active during summer peak (June–July)',
      'Post-summer churn of 10.7% reveals seasonal membership behavior',
      'Pearson correlation 0.49 confirms high-adoption regions have moderate cancellation risk'
    ],
    recs: [
      'Repeat campaign with stronger targeting on Quebec and BC',
      'Design Premium Loyalty Offers for high-income segments ($100K+)',
      'Implement Retention Campaigns in September before the churn window',
      'Integrate booking data with loyalty program to measure true ROI'
    ],
    imgPaths: [
  'assests/projects/nla-1.png',
  'assests/projects/nla-2.png',
  'assests/projects/nla-3.png',
  'assests/projects/nla-4.png'
],
    imgData: [],
    url: ''
  },
  {
    id: 5,
    title: 'Sales & Delivery Dashboard — Misuo Furniture',
    tag: 'Excel',
    desc: 'Analyzed 120 orders across Egyptian platforms. Uncovered hidden delivery failures and dangerous single-platform concentration risk.',
    metrics: ['EGP 1.47M Revenue', '80% Delivery Success', '19.2% Failure Rate', '70.9% One Platform'],
    overview: 'Operational analysis of Misuo furniture covering 120 orders across Jul–Dec 2024. Key finding: despite a favorable average delivery time, 42.5% of deliveries arrived LATE — proving averages hide critical problems. The company has dangerous dependency: 70.9% of revenue from a single platform (Homzmart).',
    insights: [
      'Beds generate 67.8% of revenue despite sofas having 52% higher average price',
      'Cairo New City averages EGP 19,722 per order — highest value market',
      'September alone contributed 57.7% of total 6-month revenue',
      'Black color = 46.5% of units sold — 80% of demand is Black + White only',
      'Pre-paid orders = 60% of revenue — healthy cash flow signal'
    ],
    recs: [
      'Fix delivery failure (19.2%) as top priority — losing every 5th order',
      'Reduce late deliveries (42.5%) — damaging platform ratings',
      'Diversify beyond Homzmart — single-platform dependency is dangerous',
      'Launch targeted campaigns in Cairo New City for maximum order value'
    ],
    imgPaths: [
  'assests/projects/misuo-1.png',
  'assests/projects/misuo-2.png',
  'assests/projects/misuo-3.png'
],
    imgData: [],
    url: ''
  },
  {
    id: 6,
    title: 'BikeStores Sales Analysis — SQL & Business Insights',
    tag: 'SQL + Python',
    desc: 'Deep-dive SQL analysis on the BikeStores database. Identified $7.6M revenue drivers, top products, customer segments, and store performance using advanced SQL in Jupyter.',
    metrics: ['$7.6M Validated Revenue', '89.5% Fulfillment Rate', '1,445 Customers', '37.3% Mountain Bikes'],
    overview: 'Comprehensive analysis of the BikeStores database using Microsoft SQL Server via Jupyter Notebook. Focused on completed orders (Status 4) for accurate revenue insights. The analysis covers sales overview, store performance, product/category analysis, customer behavior, order patterns, and time-series trends across 2016–2018.',
    insights: [
      'Mountain Bikes lead with 37.3% of total revenue ($2.49M) — primary growth driver',
      'Baldwin Bikes dominates with $4.7M revenue (70.7% of total) across 1,019 orders',
      'Trek brand alone generates $3.92M — 58.9% of all revenue',
      'All 1,445 customers made exactly one purchase — massive retention opportunity',
      'Top customer Melanie Hayes spent $27,051 — strong high-value segment exists',
      '2017 showed +41% YoY growth; 2018 data is partial (Jan–Mar only)'
    ],
    recs: [
      'Launch retention campaigns to convert one-time buyers into repeat customers',
      'Reallocate budget toward Mountain and Road Bikes — highest revenue categories',
      'Investigate and liquidate 47+ products with zero sales history',
      'Expand Rowlett Bikes capacity — highest revenue-per-order ($4,971) despite fewer orders'
    ],
        imgPaths: [
      'assests/projects/bike-1.png'
    ],
    imgData: [],
    url: '',
    pdfPath: 'https://drive.google.com/file/d/1c1BMvMS2I642FuPz33bq4iiwnM4v40zK/view?usp=sharing'
  }
];

/* ── STATE ── */
var projects = JSON.parse(localStorage.getItem('za_projects') || 'null') || DEFAULT_PROJECTS;
var modalImgs = ['', '', '', ''];
var editingId = null;

function saveProjects() {
  localStorage.setItem('za_projects', JSON.stringify(projects));
}

/* ================================================================
   PROJECTS — RENDER
   ================================================================ */
function renderProjects() {
  var grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  projects.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'project-card reveal';
    card.onclick = function() { openPopup(p.id); };

    // Pick thumbnail: uploaded base64 first, then file path
    var thumbSrc = (p.imgData && p.imgData[0]) ? p.imgData[0]
                 : (p.imgPaths && p.imgPaths[0]) ? p.imgPaths[0] : '';

    var thumbHtml = thumbSrc
      ? '<img src="' + thumbSrc + '" alt="' + p.title + '" loading="lazy">'
      : '<div class="pc-thumb-placeholder"><span style="font-size:2rem;opacity:.2">📊</span></div>';

    var footHtml = p.url
      ? '<span class="pc-view-btn">View Details →</span><a href="' + p.url + '" target="_blank" class="pc-live" onclick="event.stopPropagation()">Live ↗</a>'
      : '<span class="pc-view-btn">View Details →</span><span class="pc-cs">Coming soon</span>';

    card.innerHTML =
      '<div class="pc-accent-line"></div>' +
      '<div class="pc-thumbnail">' + thumbHtml + '</div>' +
      '<div class="pc-body">' +
        '<span class="pc-tag">' + p.tag + '</span>' +
        '<h3 class="pc-title">' + p.title + '</h3>' +
        '<p class="pc-desc">' + p.desc + '</p>' +
        '<div class="pc-metrics">' +
          p.metrics.map(function(m) { return '<span class="pc-met">' + m + '</span>'; }).join('') +
        '</div>' +
        '<div class="pc-footer">' + footHtml + '</div>' +
      '</div>';

    grid.appendChild(card);
  });

  observeReveal();
}

/* ================================================================
   POPUP
   ================================================================ */
function openPopup(id) {
  var p = projects.find(function(x) { return x.id === id; });
  if (!p) return;

  document.getElementById('popupTag').textContent    = p.tag;
  document.getElementById('popupTitle').textContent  = p.title;
  document.getElementById('popupOverview').textContent = p.overview || p.desc;
  document.getElementById('popupMetrics').innerHTML  =
    p.metrics.map(function(m) { return '<span class="popup-met">' + m + '</span>'; }).join('');

  /* Images */
  var allImgs = [];
  (p.imgData || []).forEach(function(d) { if (d) allImgs.push(d); });
  (p.imgPaths || []).forEach(function(path) {
    if (path && allImgs.length < 4) allImgs.push(path);
  });
  var imgBox = document.getElementById('popupImgs');
  if (allImgs.length) {
    imgBox.innerHTML = allImgs.map(function(src) {
      return '<div class="popup-img-item" onclick="openLightbox(\'' + src + '\')"><img src="' + src + '" alt="" loading="lazy"></div>';
    }).join('');
    imgBox.style.display = 'grid';
  } else {
    imgBox.style.display = 'none';
  }

  /* Insights */
  var ins = p.insights || [];
  document.getElementById('insSection').style.display = ins.length ? 'block' : 'none';
  document.getElementById('popupInsights').innerHTML =
    ins.map(function(i) { return '<div class="popup-insight">💡 ' + i + '</div>'; }).join('');

  /* Recs */
  var recs = p.recs || [];
  document.getElementById('recSection').style.display = recs.length ? 'block' : 'none';
  document.getElementById('popupRecs').innerHTML =
    recs.map(function(r) { return '<div class="popup-rec">' + r + '</div>'; }).join('');

  /* Live link */
  document.getElementById('popupLinkWrap').innerHTML = p.url
    ? '<a href="' + p.url + '" target="_blank" class="popup-live-btn">🔗 View Live Dashboard</a>'
    : '';

  /* PDF link */
  var pdfWrap = document.getElementById('popupPdfWrap');
  if (p.pdfPath) {
    pdfWrap.innerHTML =
      '<div class="popup-pdf-section">' +
        '<p class="popup-section">Full Report</p>' +
        '<div class="popup-pdf-btns">' +
          '<a href="' + p.pdfPath + '" target="_blank" class="popup-pdf-btn popup-pdf-view">📄 View Full PDF Report</a>' +
          '<a href="' + p.pdfPath + '" download class="popup-pdf-btn popup-pdf-dl">⬇ Download Report</a>' +
        '</div>' +
      '</div>';
  } else {
    pdfWrap.innerHTML = '';
  }

  document.getElementById('popupOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popupOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function openLightbox(src) {
  document.getElementById('lightbox').classList.add('open');
  document.getElementById('lightboxImg').src = src;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function closePopupOutside(e) {
  if (e.target === document.getElementById('popupOverlay')) closePopup();
}

/* ================================================================
   ADMIN
   ================================================================ */
function openAdmin() {
  document.getElementById('adminOverlay').classList.add('open');
}

function closeAdmin() {
  document.getElementById('adminOverlay').classList.remove('open');
  document.getElementById('adminLogin').style.display = 'block';
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('adminEmail').value = '';
  document.getElementById('adminPass').value  = '';
  document.getElementById('adminErr').style.display = 'none';
}

function doLogin() {
  var email = document.getElementById('adminEmail').value.trim();
  var pass  = document.getElementById('adminPass').value;
  if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    renderAdminList();
    refreshAdminPhoto();
  } else {
    document.getElementById('adminErr').style.display = 'block';
  }
}

function handleAdminPhoto(inp) {
  var file = inp.files[0]; if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    localStorage.setItem('za_photo', e.target.result);
    var el = document.getElementById('heroPhotoEl');
    if (el) el.src = e.target.result;
    refreshAdminPhoto();
  };
  reader.readAsDataURL(file);
}

function refreshAdminPhoto() {
  var src = localStorage.getItem('za_photo');
  var wrap = document.getElementById('adminPhotoWrap');
  if (!wrap) return;
  if (src) {
    wrap.innerHTML = '<img src="' + src + '" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:2px solid rgba(79,195,247,.2)">';
  }
}

function renderAdminList() {
  var list = document.getElementById('adminProjList');
  if (!list) return;
  list.innerHTML = '';
  projects.forEach(function(p) {
    var row = document.createElement('div');
    row.className = 'proj-admin-row';
    row.innerHTML =
      '<span class="par-tag">' + p.tag + '</span>' +
      '<span class="par-title">' + p.title + '</span>' +
      '<div class="par-btns">' +
        '<button class="par-btn" onclick="openModal(' + p.id + ')">Edit</button>' +
        '<button class="par-btn del" onclick="deleteProject(' + p.id + ')">Delete</button>' +
      '</div>';
    list.appendChild(row);
  });
}

/* ================================================================
   MODAL — ADD / EDIT PROJECT
   ================================================================ */
function openModal(id) {
  editingId = id;
  modalImgs = ['', '', '', ''];

  document.getElementById('modalTitle').textContent = id ? 'Edit Project' : 'Add Project';
  [0, 1, 2, 3].forEach(function(i) {
    document.getElementById('slot' + i).innerHTML =
      '<span class="sph">+</span>' +
      '<input type="file" accept="image/*" style="display:none" onchange="handleSlot(this,' + i + ')">';
  });

  if (id) {
    var p = projects.find(function(x) { return x.id === id; });
    document.getElementById('mTitle').value     = p.title;
    document.getElementById('mTag').value       = p.tag;
    document.getElementById('mDesc').value      = p.desc;
    document.getElementById('mMetrics').value   = p.metrics.join(', ');
    document.getElementById('mUrl').value       = p.url || '';
    document.getElementById('mOverview').value  = p.overview || '';
    document.getElementById('mInsights').value  = (p.insights || []).join('\n');
    document.getElementById('mRecs').value      = (p.recs || []).join('\n');
    document.getElementById('mImgPaths').value  = (p.imgPaths || []).join('\n');
    modalImgs = (p.imgData || ['', '', '', '']).slice();
    modalImgs.forEach(function(img, i) {
      if (img) {
        var slot = document.getElementById('slot' + i);
        slot.innerHTML =
          '<img src="' + img + '" style="width:100%;height:100%;object-fit:cover">' +
          '<input type="file" accept="image/*" style="display:none" onchange="handleSlot(this,' + i + ')">';
      }
    });
  } else {
    ['mTitle','mDesc','mMetrics','mUrl','mOverview','mInsights','mRecs','mImgPaths']
      .forEach(function(id) { document.getElementById(id).value = ''; });
  }

  document.getElementById('projectModal').classList.add('open');
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('open');
}

function handleSlot(inp, idx) {
  var file = inp.files[0]; if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    modalImgs[idx] = e.target.result;
    var slot = document.getElementById('slot' + idx);
    slot.innerHTML =
      '<img src="' + e.target.result + '" style="width:100%;height:100%;object-fit:cover">' +
      '<input type="file" accept="image/*" style="display:none" onchange="handleSlot(this,' + idx + ')">';
  };
  reader.readAsDataURL(file);
}

function saveProject() {
  var title = document.getElementById('mTitle').value.trim();
  if (!title) { alert('Please add a project title.'); return; }

  var data = {
    title:    title,
    tag:      document.getElementById('mTag').value,
    desc:     document.getElementById('mDesc').value.trim(),
    metrics:  document.getElementById('mMetrics').value.split(',').map(function(s) { return s.trim(); }).filter(Boolean),
    url:      document.getElementById('mUrl').value.trim(),
    overview: document.getElementById('mOverview').value.trim(),
    insights: document.getElementById('mInsights').value.split('\n').map(function(s) { return s.trim(); }).filter(Boolean),
    recs:     document.getElementById('mRecs').value.split('\n').map(function(s) { return s.trim(); }).filter(Boolean),
    imgPaths: document.getElementById('mImgPaths').value.split('\n').map(function(s) { return s.trim(); }).filter(Boolean),
    imgData:  modalImgs.slice()
  };

  if (editingId) {
    var idx = projects.findIndex(function(x) { return x.id === editingId; });
    projects[idx] = Object.assign({}, projects[idx], data);
  } else {
    data.id = Date.now();
    projects.push(data);
  }

  saveProjects();
  renderProjects();
  renderAdminList();
  closeModal();
}

function deleteProject(id) {
  if (!confirm('Delete this project?')) return;
  projects = projects.filter(function(x) { return x.id !== id; });
  saveProjects();
  renderProjects();
  renderAdminList();
}

/* ================================================================
   THEME TOGGLE
   ================================================================ */
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  document.getElementById('themeBtn').textContent = next === 'light' ? '🌙' : '☀️';
  localStorage.setItem('za_theme', next);
}

/* ================================================================
   SKILLS FILTER
   ================================================================ */
function initSkillsFilter() {
  var btns = document.querySelectorAll('.filter-btn');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      document.querySelectorAll('.skill-card').forEach(function(card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ================================================================
   SKILL BARS ANIMATION
   ================================================================ */
function animateSkillBars() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var fills = entry.target.querySelectorAll('.skill-bar-fill');
        fills.forEach(function(fill) {
          fill.style.width = fill.dataset.width;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  var skillsSection = document.getElementById('skills');
  if (skillsSection) observer.observe(skillsSection);
}

/* ================================================================
   STAT COUNTER ANIMATION
   ================================================================ */
function animateCounters() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach(function(el) {
          var target = parseInt(el.dataset.target, 10);
          var suffix = el.dataset.suffix || '';
          var start  = 0;
          var duration = 1200;
          var step = target / (duration / 16);
          var timer = setInterval(function() {
            start = Math.min(start + step, target);
            el.textContent = Math.floor(start) + suffix;
            if (start >= target) clearInterval(timer);
          }, 16);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  var bar = document.querySelector('.stats-bar');
  if (bar) observer.observe(bar);
}

/* ================================================================
   REVEAL ON SCROLL
   ================================================================ */
function observeReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
    observer.observe(el);
  });
}

/* ================================================================
   MOBILE MENU
   ================================================================ */
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/* ================================================================
   CONTACT FORM
   ================================================================ */
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  // Form uses Formspree action — let it submit naturally
  // Show a loading state on submit
  form.addEventListener('submit', function(e) {
    var btn = form.querySelector('.form-send');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    // Re-enable after 5s in case of error
    setTimeout(function() {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
    }, 5000);
  });
}

/* ================================================================
   NAV ACTIVE STATE ON SCROLL
   ================================================================ */
function initNavScroll() {
  var sections = document.querySelectorAll('section[id], .stats-bar');
  var links    = document.querySelectorAll('.nav-links a');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        links.forEach(function(link) {
          link.style.color = link.getAttribute('href') === '#' + id
            ? 'var(--accent)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function(s) { if (s.id) observer.observe(s); });
}

/* ================================================================
   INIT
   ================================================================ */
window.addEventListener('load', function() {
  /* Theme */
  var saved = localStorage.getItem('za_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  var btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = saved === 'light' ? '🌙' : '☀️';

  /* Photo */
  var savedPhoto = localStorage.getItem('za_photo');
  if (savedPhoto) {
    var photoEl = document.getElementById('heroPhotoEl');
    if (photoEl) photoEl.src = savedPhoto;
  }

  /* Mobile menu */
  var nav = document.querySelector('.hamburger');
  if (nav) {
    var mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobileMenu';
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML =
      '<a href="#skills" onclick="toggleMenu()">Skills</a>' +
      '<a href="#projects" onclick="toggleMenu()">Projects</a>' +
      '<a href="#experience" onclick="toggleMenu()">Experience</a>' +
      '<a href="#contact" onclick="toggleMenu()">Contact</a>';
    document.body.appendChild(mobileMenu);
  }

  renderProjects();
  initSkillsFilter();
  animateSkillBars();
  animateCounters();
  observeReveal();
  initContactForm();
  initNavScroll();
});

/* Keyboard */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePopup();
    closeAdmin();
    closeModal();
  }
});
