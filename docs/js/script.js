// Portfólio Profissional – João Pedro Luvisari Severiano
// Lógica Vanilla JS para interações e dinamismo sem ferramentas de build

document.addEventListener('DOMContentLoaded', () => {
  // --- PRELOADER ---
  window.addEventListener('load', () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if(preloader) preloader.classList.add('loaded');
    }, 800);
  });
  // Inicialização de estados
  let currentLanguage = localStorage.getItem('language') || 'pt';
  let currentTheme = localStorage.getItem('theme') || 'dark';
  let activeFilter = 'all';

  // Elementos do DOM
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn?.querySelector('.theme-icon');
  const langToggleBtn = document.getElementById('lang-toggle');
  const langText = langToggleBtn?.querySelector('.lang-text');
  
  // Custom Cursor
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');



  // Command Palette
  const commandPalette = document.getElementById('command-palette');
  const commandInput = document.getElementById('command-input');
  const commandList = document.getElementById('command-list');
  const openPaletteBtn = document.getElementById('open-palette-btn');
  const closePaletteBtn = document.getElementById('close-palette');

  // Project Modal
  const projectModal = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('close-modal');

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  // --- CONTROLE DE TEMA ---
  function setTheme(theme) {
    currentTheme = theme;
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Atualiza ícone
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark' 
        ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>' // Sol para modo claro
        : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>'; // Lua para modo escuro
    }
  }

  // Alterna o tema
  themeToggleBtn?.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Inicializa o tema preferido
  setTheme(currentTheme);

  // --- CONTROLE DE COR DE DESTAQUE ---
  let currentAccentColor = localStorage.getItem('accentColor') || 'indigo';
  const colorOptions = document.querySelectorAll('.color-option');
  
  const accentColors = {
    indigo: '#6366f1',
    emerald: '#10b981',
    rose: '#f43f5e',
    orange: '#f97316',
    purple: '#a855f7'
  };

  function setAccentColor(colorName) {
    if (accentColors[colorName]) {
      currentAccentColor = colorName;
      localStorage.setItem('accentColor', colorName);
      
      // Remove active class
      colorOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active class
      const activeOpt = document.querySelector(`.color-option[data-color="${colorName}"]`);
      if (activeOpt) activeOpt.classList.add('active');
      
      // Update CSS variables
      document.documentElement.style.setProperty('--color-accent-primary', accentColors[colorName]);
    }
  }

  colorOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      setAccentColor(e.target.dataset.color);
    });
  });
  
  setAccentColor(currentAccentColor);


  // --- TRADUTOR BILINGUE DINÂMICO ---
  function translatePage(lang) {
    currentLanguage = lang;
    htmlElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    localStorage.setItem('language', lang);

    // 1. Traduz elementos com atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getNestedValue(window.portfolioTranslations[lang], key);
      
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // 2. Atualiza textos de idiomas nos botões
    if (langText) {
      langText.textContent = lang === 'pt' ? 'EN' : 'PT';
    }

    // 3. Atualiza dados renderizados dinamicamente
    renderDynamicContent(lang);
  }

  // Busca valores em objetos aninhados (ex: "nav.hero" em translations)
  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  langToggleBtn?.addEventListener('click', () => {
    translatePage(currentLanguage === 'pt' ? 'en' : 'pt');
  });


  // --- CURSOR CUSTOMIZADO COM EFEITO LERP ---
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  const gradientOrb1 = document.querySelector('.gradient-orb1');
  const gradientOrb2 = document.querySelector('.gradient-orb2');

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // O ponto menor segue diretamente
    if (cursorDot) {
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    // Efeito Parallax no Fundo (Background Orbs tracking mouse)
    if (gradientOrb1 && gradientOrb2) {
      const x = (mouseX / window.innerWidth - 0.5) * 40;
      const y = (mouseY / window.innerHeight - 0.5) * 40;
      gradientOrb1.style.transform = `translate(${x}px, ${y}px)`;
      gradientOrb2.style.transform = `translate(${-x}px, ${-y}px)`;
    }
  });

  // Efeito lerp para o círculo externo seguir de forma fluida
  function animateCursor() {
    const lerpFactor = 0.15;
    cursorX += (mouseX - cursorX) * lerpFactor;
    cursorY += (mouseY - cursorY) * lerpFactor;

    if (cursorOutline) {
      cursorOutline.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    }
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // Efeito de hover ampliado em links/botões
  function addCursorHoverEffects() {
    const clickables = document.querySelectorAll('a, button, input, textarea, .project-card, .interest-card, .portfolio-card');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline?.classList.add('hover');
        cursorDot?.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline?.classList.remove('hover');
        cursorDot?.classList.remove('hover');
      });
    });
  }


  // --- RENDERIZAÇÃO DE CONTEÚDO DINÂMICO ---
  function renderDynamicContent(lang) {
    renderEducation(lang);
    renderSkills(lang);
    renderProjects(lang, activeFilter);
    renderDiplomas(lang);
    renderCertificates(lang);
    renderInterests(lang);
    renderTechFilter(lang);
    
    // Adiciona efeitos ao cursor para os novos elementos criados
    addCursorHoverEffects();
    // Inicializa Tilt 3D Effects
    initVanillaTilt();
  }

  // --- VANILLA TILT 3D HOVER EFFECT ---
  function initVanillaTilt() {
    const cards = document.querySelectorAll('.project-card, .academic-card');
    
    cards.forEach(card => {
      // Cria a div glare se não existir
      if (!card.querySelector('.tilt-glare')) {
        const glare = document.createElement('div');
        glare.className = 'tilt-glare';
        card.appendChild(glare);
      }
      const glareEl = card.querySelector('.tilt-glare');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // posição do mouse dentro do card
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        // Move o reflexo
        if(glareEl) {
          glareEl.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`;
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });
    });
  }

  // 1. Educação
  function renderEducation(lang) {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    container.innerHTML = window.portfolioData.education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <span class="timeline-date">${edu.period}</span>
          <h3 class="timeline-institution">${edu.institution}</h3>
          <h4 class="timeline-degree">${typeof edu.degree === 'object' ? edu.degree[lang] : edu.degree}</h4>
          <p class="timeline-desc">${typeof edu.description === 'object' ? edu.description[lang] : edu.description}</p>
        </div>
      </div>
    `).join('');
  }

  // 2. Habilidades (Skills)
  function renderSkills(lang) {
    const categories = ['frontend', 'backend', 'tools', 'soft'];
    
    categories.forEach(cat => {
      const container = document.getElementById(`skills-grid-${cat}`);
      if (!container) return;

      const filteredSkills = window.portfolioData.skills.filter(s => s.category === cat);
      
      container.innerHTML = filteredSkills.map(skill => {
        let displayName = skill.name;
        // Traduz soft skills se necessário
        if (cat === 'soft' && lang === 'en') {
          const softSkillsTranslations = {
            'Comunicação': 'Communication',
            'Trabalho em Equipe': 'Teamwork',
            'Resolução de Problemas': 'Problem Solving'
          };
          displayName = softSkillsTranslations[skill.name] || skill.name;
        }

        return `
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">${displayName}</span>
              <span class="skill-percent">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" style="width: 0%" data-target="${skill.level}%"></div>
            </div>
          </div>
        `;
      }).join('');
    });
  }

  // 3. Projetos (Filtros dinâmicos + Portfólio ETEC + Tech Filter)
  let activeTechFilter = 'all';

  function renderTechFilter(lang) {
    const container = document.getElementById('tech-filter-container');
    if (!container) return;
    
    const allTags = new Set();
    window.portfolioData.projects.forEach(p => {
      if(p.tags) p.tags.forEach(t => allTags.add(t));
    });

    let html = `<button class="tech-btn ${activeTechFilter === 'all' ? 'active' : ''}" data-tech="all">${lang === 'pt' ? 'Todas Tecnologias' : 'All Technologies'}</button>`;
    
    Array.from(allTags).sort().forEach(tag => {
      html += `<button class="tech-btn ${activeTechFilter === tag ? 'active' : ''}" data-tech="${tag}">${tag}</button>`;
    });

    container.innerHTML = html;

    container.querySelectorAll('.tech-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeTechFilter = e.target.getAttribute('data-tech');
        renderTechFilter(lang);
        renderProjects(currentLanguage, activeFilter);
      });
    });
  }

  function renderProjects(lang, filter) {
    const projectsContainer = document.getElementById('projects-grid');
    if (!projectsContainer) return;

    try {
      let html = '';

      // Renderiza Projetos normais da Fatec/Pessoais
      let filteredProjects = window.portfolioData.projects.filter(p => {
        if (filter === 'all') return true;
        if (filter === 'fatec') return p.source === 'fatec';
        if (filter === 'personal') return p.source === 'personal';
        if (filter === 'etec') return p.source === 'etec';
        return false;
      });

      // Filtra por Tecnologia (Tag)
      if (activeTechFilter !== 'all') {
        filteredProjects = filteredProjects.filter(p => p.tags && p.tags.includes(activeTechFilter));
      }

      html += filteredProjects.map(proj => `
        <div class="project-card" data-id="${proj.id}">
          <div class="project-card-header">
            <span class="project-badge ${proj.source === 'fatec' ? 'badge-fatec' : (proj.source === 'etec' ? 'badge-etec' : 'badge-personal')}">
              ${proj.source === 'fatec' ? (lang === 'pt' ? 'ABP FATEC' : 'FATEC Project') : (proj.source === 'etec' ? (lang === 'pt' ? 'TCC ETEC' : 'ETEC TCC') : (lang === 'pt' ? 'Pessoal' : 'Personal'))}
            </span>
            <div class="project-links">
              <a href="${proj.githubUrl}" target="_blank" class="project-link-icon" title="${lang === 'pt' ? 'Repositório GitHub' : 'GitHub Repository'}">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          <div class="project-card-body">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${typeof proj.description === 'object' ? (proj.description[lang] ? proj.description[lang].split('\n')[0] : '') : (proj.description ? String(proj.description).split('\n')[0] : '')}</p>
          </div>
          <div class="project-card-footer">
            <div class="project-tags">
              ${(proj.tags || []).slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <button class="project-detail-btn" onclick="window.openProjectModal('${proj.id}')">
              ${lang === 'pt' ? 'Detalhes' : 'Details'} &rarr;
            </button>
          </div>
        </div>
      `).join('');

      // Adiciona Portfólios ETEC quando "all" ou "etec" e filtro de tech é 'all'
      if ((filter === 'all' || filter === 'etec') && activeTechFilter === 'all') {
        html += (window.portfolioData.etecPortfolios || []).map(p => `
          <div class="project-card portfolio-card" style="border-color: rgba(99, 102, 241, 0.15)">
            <div class="project-card-header">
              <span class="project-badge badge-etec" style="background: ${p.color}22; color: ${p.color}">
                ${lang === 'pt' ? 'Portfólio ETEC' : 'ETEC Portfolio'}
              </span>
              <span class="portfolio-year">${p.year}</span>
            </div>
            <div class="project-card-body">
              <h3 class="project-title"><span class="portfolio-icon">${p.icon}</span> ${p.title}</h3>
              <p class="project-desc">${p.description ? p.description[lang] : ''}</p>
            </div>
            <div class="project-card-footer" style="margin-top: auto">
              <a href="${p.url}" target="_blank" class="portfolio-visit-btn" style="background: ${p.color}; width: 100%; text-align: center; display: inline-block;">
                ${lang === 'pt' ? 'Acessar Portfólio' : 'View Portfolio'} &rarr;
              </a>
            </div>
          </div>
        `).join('');
      }

      projectsContainer.innerHTML = html;
    } catch (e) {
      console.error(e);
      projectsContainer.innerHTML = `<div style="color:red; font-size: 1.5rem; width: 100%;">Erro ao renderizar projetos: ${e.message}</div>`;
    }
  }

  // Configura os filtros de projeto
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderProjects(currentLanguage, activeFilter);
      addCursorHoverEffects();
    });
  });

  // 4. Diplomas
  function renderDiplomas(lang) {
    const container = document.getElementById('diplomas-grid');
    if (!container) return;

    container.innerHTML = window.portfolioData.diplomas.map(dip => `
      <div class="academic-card diploma-card">
        <div class="academic-image-wrap">
          <img src="${dip.imageUrl}" alt="${typeof dip.title === 'object' ? dip.title[lang] : dip.title}" class="academic-image" loading="lazy" onclick="window.openImageModal('${dip.imageUrl}')">
          <div class="academic-image-overlay">
            <span>${lang === 'pt' ? 'Clique para ampliar' : 'Click to zoom'}</span>
          </div>
        </div>
        <div class="academic-info">
          <span class="academic-date">${dip.date}</span>
          <h3 class="academic-title">${typeof dip.title === 'object' ? dip.title[lang] : dip.title}</h3>
          <p class="academic-issuer">${dip.issuer}</p>
        </div>
      </div>
    `).join('');
  }

  // 5. Certificados
  function renderCertificates(lang) {
    const container = document.getElementById('certificates-grid');
    if (!container) return;

    container.innerHTML = window.portfolioData.certificates.map(cert => `
      <div class="academic-card certificate-card">
        <div class="academic-image-wrap">
          <img src="${cert.imageUrl}" alt="${typeof cert.title === 'object' ? cert.title[lang] : cert.title}" class="academic-image" loading="lazy">
        </div>
        <div class="academic-info">
          <span class="academic-date">${cert.date}</span>
          <h3 class="academic-title">${typeof cert.title === 'object' ? cert.title[lang] : cert.title}</h3>
          <p class="academic-issuer">${cert.issuer}</p>
          <a href="${cert.credentialUrl}" target="_blank" class="academic-link">
            ${lang === 'pt' ? 'Ver Credencial' : 'View Credential'} &rarr;
          </a>
        </div>
      </div>
    `).join('');
  }

  // 6. Interesses Pessoais
  function renderInterests(lang) {
    const container = document.getElementById('interests-grid');
    if (!container) return;

    container.innerHTML = window.portfolioData.personalInterests.map(interest => `
      <div class="interest-card" style="--hover-color: ${interest.color}">
        <div class="interest-icon" style="background: ${interest.color}15; color: ${interest.color}">
          ${interest.icon}
        </div>
        <h3 class="interest-title">${typeof interest.title === 'object' ? interest.title[lang] : interest.title}</h3>
        <p class="interest-desc">${typeof interest.description === 'object' ? interest.description[lang] : interest.description}</p>
        <div class="interest-styles">
          ${(interest.styles[lang] || interest.styles.pt).map(style => `<span class="interest-tag">${style}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }


  // --- FUNCIONAMENTO DO MODAL DE DETALHES DE PROJETOS ---
  window.openProjectModal = function(id) {
    const proj = window.portfolioData.projects.find(p => p.id === id);
    if (!proj) return;

    const modalTitle = document.getElementById('modal-title');
    const modalBadge = document.getElementById('modal-badge');
    const modalDesc = document.getElementById('modal-desc');
    const modalTechs = document.getElementById('modal-techs');
    const modalGit = document.getElementById('modal-link-github');
    const modalVideoContainer = document.getElementById('modal-video-container');
    const modalVideo = document.getElementById('modal-video');

    if (modalTitle) modalTitle.textContent = proj.title;
    
    if (modalBadge) {
      modalBadge.className = `modal-badge ${proj.source === 'fatec' ? 'badge-fatec' : (proj.source === 'etec' ? 'badge-etec' : 'badge-personal')}`;
      modalBadge.textContent = proj.source === 'fatec' 
        ? (currentLanguage === 'pt' ? 'ABP FATEC' : 'FATEC ABP') 
        : (proj.source === 'etec' ? (currentLanguage === 'pt' ? 'TCC ETEC' : 'ETEC TCC') : (currentLanguage === 'pt' ? 'Projeto Pessoal' : 'Personal Project'));
    }

    if (modalDesc) {
      const descriptionText = typeof proj.description === 'object' ? proj.description[currentLanguage] : proj.description;
      // Formata os marcadores de linha (•) em listas visuais limpas
      modalDesc.innerHTML = descriptionText.split('\n').map(line => {
        if (line.trim().startsWith('•')) {
          return `<li style="margin-left: 20px; list-style-type: disc;">${line.replace('•', '').trim()}</li>`;
        }
        return `<p style="margin-bottom: 8px;">${line}</p>`;
      }).join('');
    }

    if (modalTechs) {
      modalTechs.innerHTML = proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    }

    if (modalGit) {
      modalGit.href = proj.githubUrl;
    }

    const modalLinkYoutube = document.getElementById('modal-link-youtube');
    if (modalLinkYoutube) {
      if (proj.youtubeUrl) {
        modalLinkYoutube.style.display = 'inline-flex';
        let watchUrl = proj.youtubeUrl;
        const match = proj.youtubeUrl.match(/\/embed\/([^/?]+)/);
        if (match && match[1]) {
          watchUrl = `https://www.youtube.com/watch?v=${match[1]}`;
        }
        modalLinkYoutube.href = watchUrl;
      } else {
        modalLinkYoutube.style.display = 'none';
        modalLinkYoutube.href = '';
      }
    }

    if (modalVideoContainer && modalVideo) {
      if (proj.youtubeUrl) {
        modalVideoContainer.style.display = 'block';
        
        const isLocalFile = window.location.protocol === 'file:';
        const localVideoNotice = document.getElementById('local-video-notice');
        
        if (isLocalFile) {
          modalVideo.style.display = 'none';
          if (localVideoNotice) {
            localVideoNotice.style.display = 'flex';
            let watchUrl = proj.youtubeUrl;
            const match = proj.youtubeUrl.match(/\/embed\/([^/?]+)/);
            if (match && match[1]) {
              watchUrl = `https://www.youtube.com/watch?v=${match[1]}`;
            }
            const watchBtn = localVideoNotice.querySelector('.local-video-btn');
            if (watchBtn) watchBtn.href = watchUrl;
          }
        } else {
          modalVideo.style.display = 'block';
          if (localVideoNotice) localVideoNotice.style.display = 'none';
          modalVideo.src = proj.youtubeUrl;
        }
      } else {
        modalVideoContainer.style.display = 'none';
        modalVideo.src = '';
        const localVideoNotice = document.getElementById('local-video-notice');
        if (localVideoNotice) localVideoNotice.style.display = 'none';
      }
    }

    // Exibe o modal aplicando a classe active
    projectModal?.classList.add('active');
    document.body.style.overflow = 'hidden'; // Trava o scroll da página
  };

  // Fecha o modal de projeto
  function closeProjectModal() {
    projectModal?.classList.remove('active');
    document.body.style.overflow = ''; // Destrava scroll
    
    // Para o vídeo se estiver rodando
    const modalVideo = document.getElementById('modal-video');
    if (modalVideo) modalVideo.src = '';
  }

  closeModalBtn?.addEventListener('click', closeProjectModal);
  
  // Fecha clicando fora da caixa do modal
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });


  // --- VISUALIZADOR DE DIPLOMA (ZOOM MODAL) ---
  window.openImageModal = function(src) {
    const zoomModal = document.createElement('div');
    zoomModal.className = 'zoom-modal';
    zoomModal.innerHTML = `
      <div class="zoom-content">
        <img src="${src}" alt="Zoom">
        <button class="zoom-close">&times;</button>
      </div>
    `;
    document.body.appendChild(zoomModal);
    document.body.style.overflow = 'hidden';

    // Fecha o zoom
    const closeZoom = () => {
      zoomModal.classList.remove('active');
      setTimeout(() => {
        zoomModal.remove();
        document.body.style.overflow = '';
      }, 300);
    };

    setTimeout(() => zoomModal.classList.add('active'), 10);
    
    zoomModal.querySelector('.zoom-close').addEventListener('click', closeZoom);
    zoomModal.addEventListener('click', (e) => {
      if (e.target === zoomModal) closeZoom();
    });
  };


  // --- PALETA DE COMANDOS (CTRL+K) ---
  function openCommandPalette() {
    commandPalette?.classList.add('active');
    commandInput?.focus();
    if (commandInput) commandInput.value = '';
    renderCommands('');
    document.body.style.overflow = 'hidden';
  }

  function closeCommandPalette() {
    commandPalette?.classList.remove('active');
    document.body.style.overflow = '';
  }

  openPaletteBtn?.addEventListener('click', openCommandPalette);
  closePaletteBtn?.addEventListener('click', closeCommandPalette);
  
  // Atalho teclado Ctrl+K e Esc
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (commandPalette?.classList.contains('active')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    }
    if (e.key === 'Escape') {
      closeCommandPalette();
      closeProjectModal();
    }
  });

  // Filtra os comandos ao digitar
  commandInput?.addEventListener('input', (e) => {
    renderCommands(e.target.value);
  });

  // Lista de todos os comandos
  function getCommands() {
    const isPt = currentLanguage === 'pt';
    return [
      {
        icon: '🏠',
        title: isPt ? 'Ir para o Início' : 'Go to Home',
        action: () => scrollToSection('hero')
      },
      {
        icon: '📚',
        title: isPt ? 'Ir para Currículo' : 'Go to Resume',
        action: () => scrollToSection('curriculo')
      },
      {
        icon: '💼',
        title: isPt ? 'Ir para Área Profissional' : 'Go to Professional',
        action: () => scrollToSection('profissional')
      },
      {
        icon: '💻',
        title: isPt ? 'Ir para Projetos' : 'Go to Projects',
        action: () => scrollToSection('projetos')
      },
      {
        icon: '🎓',
        title: isPt ? 'Ir para Diplomas' : 'Go to Degrees',
        action: () => scrollToSection('diplomas')
      },
      {
        icon: '📜',
        title: isPt ? 'Ir para Certificados' : 'Go to Certificates',
        action: () => scrollToSection('certificados')
      },
      {
        icon: '🎨',
        title: isPt ? 'Alternar Tema Claro/Escuro' : 'Toggle Theme Light/Dark',
        action: () => {
          setTheme(currentTheme === 'dark' ? 'light' : 'dark');
          closeCommandPalette();
        }
      },
      {
        icon: '🌐',
        title: isPt ? 'Mudar Idioma para Inglês' : 'Switch Language to Portuguese',
        action: () => {
          translatePage(currentLanguage === 'pt' ? 'en' : 'pt');
          closeCommandPalette();
        }
      },
      {
        icon: '📬',
        title: isPt ? 'Ir para Contato' : 'Go to Contact',
        action: () => scrollToSection('contato')
      }
    ];
  }

  // Renderiza comandos
  function renderCommands(query) {
    if (!commandList) return;
    
    const allCmds = getCommands();
    const filtered = allCmds.filter(cmd => 
      cmd.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      commandList.innerHTML = `<div class="command-empty">${currentLanguage === 'pt' ? 'Nenhum comando encontrado' : 'No commands found'}</div>`;
      return;
    }

    commandList.innerHTML = filtered.map((cmd, idx) => `
      <div class="command-item" data-index="${idx}">
        <span class="command-item-icon">${cmd.icon}</span>
        <span class="command-item-title">${cmd.title}</span>
        <span class="command-item-enter">&crarr;</span>
      </div>
    `).join('');

    // Escuta cliques nos comandos da lista
    const items = commandList.querySelectorAll('.command-item');
    items.forEach((item, idx) => {
      item.addEventListener('click', () => {
        filtered[idx].action();
        closeCommandPalette();
      });
      // Cursor hover effect
      item.addEventListener('mouseenter', () => {
        cursorOutline?.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        cursorOutline?.classList.remove('hover');
      });
    });
  }

  // Rola até uma seção da página
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }




  // --- NAVBAR SCROLL GLASSMORPHISM ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });


  // --- CONTATO: ENVIO SIMULADO COM FEEDBACK ---
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.contact-btn');
    if (!submitBtn) return;

    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLanguage === 'pt' ? 'Enviando...' : 'Sending...';

    // Simula uma resposta do servidor após 1.5s
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      contactForm.reset();
      
      // Exibe caixa de sucesso
      if (formSuccess) {
        formSuccess.classList.add('active');
        
        // Remove após 4 segundos
        setTimeout(() => {
          formSuccess.classList.remove('active');
        }, 4000);
      }
    }, 1500);
  });



  // --- INTERSECTION OBSERVER (ANIMAÇÕES DE SCROLL) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Verifica se é uma barra de skill para animar a largura
        if (entry.target.classList.contains('skill-card')) {
          const fill = entry.target.querySelector('.skill-bar-fill');
          if (fill) fill.style.width = fill.getAttribute('data-target');
        }
        
        // Opcional: descomente a linha abaixo para animar apenas na primeira vez
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleciona todos os elementos com a classe .reveal
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // Como projetos, diplomas e etc. são gerados dinamicamente, precisamos aplicar observer neles logo após renderizar.
  // Vamos encapsular o método antigo e injetar o observer e tilt.
  const originalRenderProjects = renderProjects;
  renderProjects = function(lang, filter) {
    originalRenderProjects(lang, filter);
    document.querySelectorAll('.project-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
    initVanillaTilt();
  };

  const originalRenderDiplomas = renderDiplomas;
  renderDiplomas = function(lang) {
    originalRenderDiplomas(lang);
    document.querySelectorAll('.diploma-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
    initVanillaTilt();
  };

  const originalRenderCertificates = renderCertificates;
  renderCertificates = function(lang) {
    originalRenderCertificates(lang);
    document.querySelectorAll('.certificate-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
    initVanillaTilt();
  };

  const originalRenderInterests = renderInterests;
  renderInterests = function(lang) {
    originalRenderInterests(lang);
    document.querySelectorAll('.interest-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  };

  const originalRenderSkills = renderSkills;
  renderSkills = function(lang) {
    originalRenderSkills(lang);
    document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));
  };

  // --- TYPEWRITER EFFECT ---
  const typewriterElement = document.getElementById('typewriter-text');
  let typewritingTimeout;
  const typewriterWords = {
    pt: [
      "Desenvolvedor de Software Multiplataforma",
      "Especialista em Front-end",
      "Apaixonado por Tecnologia"
    ],
    en: [
      "Multiplatform Software Developer",
      "Front-end Specialist",
      "Passionate about Technology"
    ]
  };

  let typewriterWordIndex = 0;
  let typewriterCharIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    if (!typewriterElement) return;
    const words = typewriterWords[currentLanguage] || typewriterWords['pt'];
    const currentWord = words[typewriterWordIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, typewriterCharIndex - 1);
      typewriterCharIndex--;
    } else {
      typewriterElement.textContent = currentWord.substring(0, typewriterCharIndex + 1);
      typewriterCharIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && typewriterCharIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && typewriterCharIndex === 0) {
      isDeleting = false;
      typewriterWordIndex = (typewriterWordIndex + 1) % words.length;
      typeSpeed = 500;
    }
    clearTimeout(typewritingTimeout);
    typewritingTimeout = setTimeout(typeWriter, typeSpeed);
  }
  setTimeout(typeWriter, 1500);

  // --- SCROLL PROGRESS & BACK TO TOP ---
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (scrollProgress && scrollHeight > 0) {
      const scrolled = (scrollTop / scrollHeight) * 100;
      scrollProgress.style.width = scrolled + '%';
    }

    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- GITHUB STATS FETCH ---
  async function fetchGitHubStats() {
    const container = document.getElementById('github-stats-container');
    if (!container) return;
    
    const githubUrl = window.portfolioData.personalInfo.github;
    const username = githubUrl.split('/').pop();

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('API Rate Limit or Network Error');
      const data = await response.json();
      
      const isPt = currentLanguage === 'pt';
      
      const createdAt = new Date(data.created_at);
      const dateStr = createdAt.toLocaleDateString(isPt ? 'pt-BR' : 'en-US', { year: 'numeric', month: 'short' });
      const hireableStr = data.hireable ? (isPt ? 'Sim' : 'Yes') : (isPt ? 'Não' : 'No');

      container.innerHTML = `
        <div class="github-stat-card">
          <img src="${data.avatar_url}" alt="Avatar" style="width: 45px; height: 45px; border-radius: 50%; border: 2px solid var(--color-accent-primary); margin-bottom: 0.25rem; display: inline-block;">
          <div class="github-stat-label">${isPt ? 'Perfil' : 'Profile'}</div>
        </div>
        <div class="github-stat-card">
          <div class="github-stat-value">${data.public_repos}</div>
          <div class="github-stat-label">${isPt ? 'Repositórios Públicos' : 'Public Repos'}</div>
        </div>
        <div class="github-stat-card">
          <div class="github-stat-value" style="font-size: 1.25rem; line-height: 1.5rem; margin-bottom: 0.25rem; margin-top: 0.2rem;">${dateStr}</div>
          <div class="github-stat-label">${isPt ? 'Criado em' : 'Created At'}</div>
        </div>
        <div class="github-stat-card">
          <div class="github-stat-value" style="font-size: 1.25rem; line-height: 1.5rem; margin-bottom: 0.25rem; margin-top: 0.2rem; color: ${data.hireable ? 'var(--color-accent-primary)' : 'inherit'};">${hireableStr}</div>
          <div class="github-stat-label">${isPt ? 'Disponível' : 'Hireable'}</div>
        </div>
      `;
    } catch (error) {
      console.error('Github Fetch Error:', error);
      // Fallback estático
      const isPt = currentLanguage === 'pt';
      container.innerHTML = `
        <div class="github-stat-card">
          <div class="github-stat-value">+10</div>
          <div class="github-stat-label">${isPt ? 'Repositórios Públicos' : 'Public Repos'}</div>
        </div>
      `;
    }
  }

  // Intercepta a tradução para também traduzir o Github Fetch dinamicamente e as Tech Filters
  const originalTranslatePage = translatePage;
  translatePage = function(lang) {
    originalTranslatePage(lang);
    fetchGitHubStats();
    // Reinicia o typewriter quando muda o idioma
    typewriterWordIndex = 0;
    typewriterCharIndex = 0;
    isDeleting = false;
  };

  // --- INICIALIZA A TRADUÇÃO E O CONTEÚDO ---
  translatePage(currentLanguage);
});
