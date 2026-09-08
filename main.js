/**
 * PRANAY — JAVA BACKEND DEVELOPER & QA AUTOMATION ENGINEER
 * Interactive Handlers, Modals, Resume Drawer & Dynamic Behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------
  // 1. DATA: DEVELOPER & QA PROJECT REPOSITORIES
  // --------------------------------------------------
  const projectDatabase = {
    "1": {
      number: "01 / FEATURED PROJECT",
      title: "ENTERPRISE JOB PORTAL",
      role: "Java Backend Developer",
      stack: "Spring Boot 3, MySQL, Spring Data JPA, Thymeleaf, REST APIs",
      qa: "JUnit 5, Mockito, Selenium WebDriver, TestNG",
      database: "MySQL Relational Schema, Indexing & Connection Pooling",
      brief: "Architected and developed a full-scale job recruitment and applicant tracking platform. Features multi-role authentication (Job Seeker, Recruiter, Admin), automated resume parsing, job application pipeline, and email notifications.",
      impact: "Implemented modular microservice-style controllers with comprehensive unit and integration tests (88% code coverage). Automated end-to-end regression workflows using Selenium WebDriver to validate candidate application lifecycle.",
      image: "assets/project-jobportal.jpg"
    },
    "2": {
      number: "02 / FEATURED PROJECT",
      title: "UPI PAYMENT GATEWAY SIMULATOR",
      role: "Java Backend & QA Automation Engineer",
      stack: "Core Java, Spring Boot, Spring Security, Microservices, REST APIs",
      qa: "Postman Automated API Collection, JUnit 5, MockMvc, AssertJ",
      database: "PostgreSQL, ACID Transactions, Idempotency Keys",
      brief: "Designed a high-throughput financial transaction processing engine simulating instant UPI fund transfers, virtual payment addresses (VPA) resolution, bank switch routing, and webhook event publishing.",
      impact: "Engineered idempotent payment processing logic to eliminate duplicate transaction errors. Designed a rigorous automated REST API test suite in Postman and TestNG verifying security tokens and response status codes.",
      image: "assets/project-02.jpg"
    },
    "3": {
      number: "03 / FEATURED PROJECT",
      title: "TECHNICAL BLOG CMS ENGINE",
      role: "Backend Developer",
      stack: "Spring Boot, Hibernate / JPA, PostgreSQL, Docker, Markdown Parser",
      qa: "Integration Testing with Testcontainers, JUnit 5, Swagger UI",
      database: "PostgreSQL, Full-Text Search Indices",
      brief: "Developed an enterprise developer publishing engine with Markdown rendering, tagging taxonomies, user comments moderation, and high-performance full-text search.",
      impact: "Constructed RESTful API endpoints documented via Swagger/OpenAPI. Optimized relational database queries with Hibernate 2nd-level caching, reducing average response latency by 65%.",
      image: "assets/project-03.jpg"
    },
    "4": {
      number: "04 / FEATURED PROJECT",
      title: "SALES DATA PREDICTION & QA SUITE",
      role: "Software Development Engineer in Test (SDET)",
      stack: "Java, SQL Analytics, Apache Commons Math, REST APIs",
      qa: "Selenium WebDriver, TestNG, ExtentReports, Data-Driven Testing (Apache POI)",
      database: "MySQL Time-Series Analytics, Complex Aggregation Queries",
      brief: "Built an analytical sales forecasting tool paired with an industrial-grade automated test automation framework for regression and data accuracy verification.",
      impact: "Created a robust Data-Driven Test Automation framework reading test datasets from Excel/CSV to automatically validate multi-scenario forecast calculations and generate detailed HTML test execution reports.",
      image: "assets/project-04.jpg"
    }
  };


  // --------------------------------------------------
  // 3. RESUME DRAWER / MODAL SYSTEM
  // --------------------------------------------------
  const resumeModal = document.getElementById('resumeModalBackdrop');
  const closeResumeModalBtn = document.getElementById('closeResumeModal');
  const openResumeTriggers = document.querySelectorAll('.open-resume-trigger');
  const btnCopyEmail = document.getElementById('btnCopyEmail');

  function openResumeDrawer() {
    resumeModal?.classList.add('active');
    resumeModal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeDrawer() {
    resumeModal?.classList.remove('active');
    resumeModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openResumeTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeCaseStudy();
      closeContactDrawer();
      openResumeDrawer();
    });
  });

  closeResumeModalBtn?.addEventListener('click', closeResumeDrawer);

  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      closeResumeDrawer();
    }
  });

  // Copy Email to Clipboard
  btnCopyEmail?.addEventListener('click', () => {
    navigator.clipboard.writeText('pranay@example.com').then(() => {
      btnCopyEmail.classList.add('copied');
      setTimeout(() => {
        btnCopyEmail.classList.remove('copied');
      }, 3000);
    }).catch(() => {
      // Fallback
    });
  });

  // --------------------------------------------------
  // 4. CONTACT / HIRE ME MODAL
  // --------------------------------------------------
  const contactModal = document.getElementById('contactModalBackdrop');
  const closeContactModalBtn = document.getElementById('closeContactModal');
  const openContactTriggers = document.querySelectorAll('.open-contact-trigger');

  function openContactDrawer() {
    closeResumeDrawer();
    closeCaseStudy();
    contactModal?.classList.add('active');
    contactModal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeContactDrawer() {
    contactModal?.classList.remove('active');
    contactModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openContactTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openContactDrawer();
    });
  });

  closeContactModalBtn?.addEventListener('click', closeContactDrawer);

  contactModal?.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      closeContactDrawer();
    }
  });

  // Contact Form Submission Simulation
  const projectInquiryForm = document.getElementById('projectInquiryForm');
  const formStatusMsg = document.getElementById('formStatusMsg');
  const btnSubmitInquiry = document.getElementById('btnSubmitInquiry');

  projectInquiryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName').value;
    
    btnSubmitInquiry.disabled = true;
    btnSubmitInquiry.innerHTML = `<span>SENDING...</span>`;

    setTimeout(() => {
      btnSubmitInquiry.disabled = false;
      btnSubmitInquiry.innerHTML = `<span>SEND INQUIRY</span><span class="arrow-icon">↗</span>`;
      
      if (formStatusMsg) {
        formStatusMsg.className = 'form-status-msg success';
        formStatusMsg.innerHTML = `✓ MESSAGE TRANSMITTED. THANK YOU, ${name.toUpperCase()}! I WILL REPLY PROMPTLY.`;
      }

      setTimeout(() => {
        closeContactDrawer();
        projectInquiryForm.reset();
        if (formStatusMsg) formStatusMsg.style.display = 'none';
      }, 3500);
    }, 700);
  });

  // --------------------------------------------------
  // 5. PROJECT DETAILS & CASE STUDY DRAWER
  // --------------------------------------------------
  const caseStudyModal = document.getElementById('caseStudyModalBackdrop');
  const closeCaseStudyModalBtn = document.getElementById('closeCaseStudyModal');
  const projectCards = document.querySelectorAll('.project-card');
  const openAllProjectsBtn = document.getElementById('btnViewAllProjects');

  function openCaseStudy(projectId) {
    closeResumeDrawer();
    closeContactDrawer();
    const data = projectDatabase[projectId] || projectDatabase["1"];
    
    document.getElementById('caseStudyNumber').textContent = data.number;
    document.getElementById('caseStudyTitle').textContent = data.title;
    document.getElementById('caseStudyClient').textContent = data.role;
    document.getElementById('caseStudyServices').textContent = data.stack;
    document.getElementById('caseStudyTimeline').textContent = data.qa;
    document.getElementById('caseStudyDeliverables').textContent = data.database;
    document.getElementById('caseStudyBrief').textContent = data.brief;
    document.getElementById('caseStudyImpact').textContent = data.impact;
    document.getElementById('caseStudyHeroImg').src = data.image;

    caseStudyModal?.classList.add('active');
    caseStudyModal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    caseStudyModal?.classList.remove('active');
    caseStudyModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project-id');
      openCaseStudy(pId);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const pId = card.getAttribute('data-project-id');
        openCaseStudy(pId);
      }
    });
  });

  openAllProjectsBtn?.addEventListener('click', () => {
    openCaseStudy("1");
  });

  closeCaseStudyModalBtn?.addEventListener('click', closeCaseStudy);

  caseStudyModal?.addEventListener('click', (e) => {
    if (e.target === caseStudyModal) {
      closeCaseStudy();
    }
  });

  // --------------------------------------------------
  // 6. GLOBAL ESCAPE KEY HANDLER
  // --------------------------------------------------
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResumeDrawer();
      closeContactDrawer();
      closeCaseStudy();
      closeMobileMenu();
    }
  });

  // --------------------------------------------------
  // 7. MOBILE NAVIGATION
  // --------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileNavOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNavOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileMenuBtn?.addEventListener('click', openMobileMenu);
  mobileCloseBtn?.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // --------------------------------------------------
  // 8. DYNAMIC YEAR
  // --------------------------------------------------
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
