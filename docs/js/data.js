// Dados do Portfólio Acadêmico (João Pedro Luvisari Severiano)
// Estruturado como variáveis globais para garantir compatibilidade com carregamento local (protocolo file://)

window.portfolioData = {
  personalInfo: {
    name: 'João Pedro Luvisari Severiano',
    title: {
      pt: 'Desenvolvedor de Software Multiplataforma',
      en: 'Multiplatform Software Developer'
    },
    tagline: {
      pt: 'Transformando ideias em experiências digitais memoráveis',
      en: 'Transforming ideas into memorable digital experiences'
    },
    location: 'São José dos Campos, SP – Brasil',
    github: 'https://github.com/JoaoPedroLuvisariSeveriano',
    linkedin: 'https://www.linkedin.com/in/joão-pedro-luvisari-severiano-bb1aa9303/',
    instagram: 'https://www.instagram.com/pedro_luvisari/',
    avatarUrl: './assets/Perfil atualizada.JPG'
  },
  
  education: [
    {
      id: '1',
      institution: 'Fatec Jacareí',
      degree: {
        pt: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
        en: 'Multiplatform Software Development Technologist'
      },
      period: '2025 - 2028 (cursando)',
      description: {
        pt: 'Formação tecnológica focada em desenvolvimento de software multiplataforma, arquitetura de sistemas e práticas ágeis.',
        en: 'Technological training focused on multiplatform software development, systems architecture, and agile practices.'
      }
    },
    {
      id: '2',
      institution: 'ETEC São José dos Campos',
      degree: {
        pt: 'Técnico em Desenvolvimento de Sistemas',
        en: 'Systems Development Technician'
      },
      period: '2024 - 2025',
      description: {
        pt: 'Formação técnica com foco em programação, banco de dados e desenvolvimento web.',
        en: 'Technical training focusing on programming, database, and web development.'
      }
    }
  ],
  
  skills: [
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'HTML', level: 95, category: 'frontend' },
    { name: 'CSS', level: 92, category: 'frontend' },
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Python', level: 70, category: 'backend' },
    { name: 'SQL', level: 72, category: 'backend' },
    { name: 'PHP', level: 75, category: 'backend' },
    { name: 'Hack', level: 65, category: 'backend' },
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Figma', level: 80, category: 'tools' },
    { name: 'Trello', level: 85, category: 'tools' },
    { name: 'Comunicação', level: 92, category: 'soft' },
    { name: 'Trabalho em Equipe', level: 88, category: 'soft' },
    { name: 'Resolução de Problemas', level: 90, category: 'soft' }
  ],
  
  projects: [
    {
      id: '1',
      title: 'TCC ETEC – PetNexus',
      description: {
        pt: `PetNexus (TCC – ETEC) é um sistema web para gestão de PetShop e clínica veterinária. O projeto permite:\n• Agendamento de consultas e cirurgias\n• Controle de estoque e registro de vendas\n• Organização por funcionalidades (cadastros, fluxo de atendimento e relatórios)\n\nTecnologias utilizadas:\n• Frontend: JavaScript, HTML, CSS (SCSS)\n• Backend: PHP\n• Estilo/Layouts: SCSS\n• Protótipos/Planejamento: Hack (ideias e prototipação durante o desenvolvimento)`,
        en: `PetNexus (ETEC TCC) is a web system for PetShop and veterinary clinic management, allowing:\n• Appointment and surgery scheduling\n• Inventory control and sales logging\n• Organization by features (registrations, customer flow, and reports)\n\nTechnologies used:\n• Frontend: JavaScript, HTML, CSS (SCSS)\n• Backend: PHP\n• Style/Layouts: SCSS\n• Prototyping/Planning: Hack (ideas and prototyping during development)`
      },
      tags: ['JavaScript', 'PHP', 'SCSS', 'HTML', 'CSS', 'Hack'],
      githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/PetNexus',
      source: 'etec'
    },
    {
      id: '2',
      title: 'ABP FATEC 1 – AgriRS-Lab',
      description: {
        pt: 'O projeto ABP (Aprendizagem Baseada em Projeto), desenvolvido como atividade do 1° semestre do curso de Desenvolvimento de Software Multiplataforma da Fatec Jacareí, tem como objetivo criar um website para o Laboratório de Sensoriamento Remoto Agrícola do INPE (AgriRS Lab).\n\nO site busca:\n• Centralizar informações importantes sobre o laboratório.\n• Ampliar a visibilidade das pesquisas e projetos do AgriRS Lab.\n• Facilitar o acesso do público às iniciativas e atividades do laboratório.\n• Divulgar informações sobre a equipe, áreas de atuação, publicações científicas, oportunidades de trabalho e formas de contato.\n\nO projeto contribui para manter as atividades e descobertas científicas atualizadas para a comunidade e promove a divulgação do laboratório para interessados em conhecer ou colaborar com o trabalho desenvolvido.',
        en: 'The ABP project (Project-Based Learning), developed as a 1st-semester activity of the Multiplatform Software Development course at Fatec Jacareí, aims to create a website for INPE\'s Agricultural Remote Sensing Laboratory (AgriRS Lab).\n\nThe site seeks to:\n• Centralize important information about the laboratory.\n• Expand visibility for AgriRS Lab research and projects.\n• Facilitate public access to lab initiatives and activities.\n• Disseminate details about the team, fields of work, scientific publications, job opportunities, and contact methods.\n\nThe project contributes to keeping scientific activities and discoveries up to date for the community and promotes the lab to those interested in knowing or collaborating with their work.'
      },
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/KaimanByte/AgriRS-Lab',
      youtubeUrl: 'https://www.youtube-nocookie.com/embed/jQnsITIP0jw',
      source: 'fatec'
    },
    {
      id: '3',
      title: 'ABP FATEC 2 – Conecta Fatec Jacareí',
      description: {
        pt: 'O projeto acadêmico integrador desenvolvido no 2º período do curso de Desenvolvimento de Software Multiplataforma da Fatec Jacareí tem como foco a criação de soluções tecnológicas para problemas reais da secretaria da Fatec Jacareí.\n\nEsse projeto busca aplicar os conhecimentos adquiridos em sala de aula em um contexto prático, promovendo inovação e contribuindo para a melhoria dos processos internos da instituição.',
        en: 'The academic integration project developed in the 2nd semester of the Multiplatform Software Development course at Fatec Jacareí focuses on creating technological solutions for real problems at Fatec Jacareí\'s secretariat.\n\nThis project aims to apply classroom knowledge in a practical context, promoting innovation and contributing to the improvement of the institution\'s internal processes.'
      },
      tags: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/KaimanByte/Conecta-Fatec-Jacarei',
      youtubeUrl: 'https://www.youtube-nocookie.com/embed/1fbtvei8AE8?start=39',
      source: 'fatec'
    },
    {
      id: '4',
      title: 'Sistema de Gestão Acadêmica',
      description: {
        pt: 'Sistema de Gestão Acadêmica é uma aplicação web full-stack desenvolvida para facilitar a administração de instituições de ensino. O projeto oferece módulos para cadastro e gerenciamento de alunos, cursos, turmas, professores e lançamentos de notas, com APIs REST no back-end e interface responsiva no front-end. O código está organizado em pastas /frontend e /backend, permitindo desenvolvimento e deploy independentes. Linguagens utilizadas: TypeScript (97.4%), JavaScript (2.2%) e outras.',
        en: 'Academic Management System is a full-stack web application developed to facilitate the administration of educational institutions. The project offers modules for registering and managing students, courses, classes, teachers, and grade entries, with REST APIs on the backend and a responsive interface on the frontend. The code is organized into /frontend and /backend folders, allowing independent development and deployment. Languages used: TypeScript (97.4%), JavaScript (2.2%), and others.'
      },
      tags: ['TypeScript', 'JavaScript', 'Other'],
      githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/Sistema-de-Gestao-Academica',
      source: 'personal'
    },
    {
      id: '5',
      title: 'Desafio Game ODS',
      description: {
        pt: 'Jogo interativo focado nos Objetivos de Desenvolvimento Sustentável (ODS) da ONU. O projeto une entretenimento e educação para conscientizar os jogadores sobre sustentabilidade através de suas mecânicas.',
        en: 'Interactive game focused on the UN\'s Sustainable Development Goals (SDGs). The project combines entertainment and education to raise players\' awareness about sustainability through gameplay mechanics.'
      },
      tags: ['Game Development', 'ODS', 'Educação'],
      githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/Desafio-Game-ODS',
      source: 'personal'
    },
    {
      id: '6',
      title: 'Fractais Julia e Mandelbrot',
      description: {
        pt: 'Aplicação voltada para a renderização matemática e estudo dos famosos conjuntos de fractais de Julia e Mandelbrot, permitindo a exploração visual de padrões complexos infinitos.',
        en: 'Application focused on mathematical rendering and study of the famous Julia and Mandelbrot fractal sets, allowing visual exploration of complex infinite patterns.'
      },
      tags: ['Matemática', 'Fractais', 'Visualização'],
      githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/Fractais-Julia-Mandelbrot-',
      source: 'personal'
    },
    {
      id: '7',
      title: 'Sistema de Automação',
      description: {
        pt: 'Sistema projetado para a automação e otimização de tarefas e processos operacionais, visando aumentar a produtividade e minimizar a ocorrência de falhas manuais.',
        en: 'System designed for the automation and optimization of operational tasks and processes, aiming to increase productivity and minimize the occurrence of manual errors.'
      },
      tags: ['Automação', 'Produtividade', 'Sistemas'],
      githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/Projeto-Sistema-de-Atomacao',
      source: 'personal'
    },
    {
      id: '8',
      title: 'Materiais Visuais',
      description: {
        pt: 'Projeto focado em design gráfico e comunicação visual, demonstrando a criação de diversos materiais visuais, construção de interfaces e aplicação de identidade visual.',
        en: 'Project focused on graphic design and visual communication, demonstrating the creation of various visual materials, interface construction, and visual identity application.'
      },
      tags: ['Design Gráfico', 'UI/UX', 'Comunicação Visual'],
      githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/Projeto-Materiais-Visuais',
      source: 'personal'
    },
    {
      id: '9',
      title: 'Plataforma Digital de Cursos - GPC Consultoria',
      description: {
        pt: 'Plataforma web de ensino à distância (EAD) desenvolvida para a GPC Consultoria, oferecendo recursos completos para a disponibilização de aulas, gestão de cursos e acompanhamento de alunos.',
        en: 'Distance learning (E-learning) web platform developed for GPC Consultoria, offering complete features for hosting classes, managing courses, and tracking student progress.'
      },
      tags: ['Web Development', 'EAD', 'Plataforma'],
      githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/Plataforma-Digital-de-Cursos-GPC-Consultoria',
      source: 'personal'
    },
    {
      id: '10',
      title: 'Jogo de Damas',
      description: {
        pt: 'Desenvolvimento de uma versão digital e interativa do clássico Jogo de Damas. O projeto foca na construção de uma interface amigável e na implementação de algoritmos para as regras do jogo, validação de movimentos e captura de peças, demonstrando fortes habilidades em lógica de programação.',
        en: 'Development of a digital and interactive version of the classic Checkers game. The project focuses on building a user-friendly interface and implementing algorithms for game rules, move validation, and piece capturing, demonstrating strong skills in programming logic.'
      },
      tags: ['Game Development', 'Jogos', 'Lógica'],
      githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/Jogo-de-Damas',
      source: 'personal'
    }
  ],
  
  etecPortfolios: [
    {
      id: 'etec-portfolio-1',
      title: 'Portfólio ETEC – 1º Período (2024)',
      description: {
        pt: 'Portfólio desenvolvido durante o 1º período do Curso Técnico em Desenvolvimento de Sistemas na ETEC São José dos Campos. Contém projetos, atividades e aprendizados do período.',
        en: 'Portfolio developed during the 1st semester of the Systems Development Technical Course at ETEC São José dos Campos. Contains projects, activities, and learnings from the period.'
      },
      url: 'https://sites.google.com/view/joopedroluvisariseveriano/p%C3%A1gina-inicial?authuser=1',
      year: '2024 – 1º Período',
      icon: '📚',
      color: '#6366f1'
    },
    {
      id: 'etec-portfolio-2',
      title: 'Portfólio ETEC – 2º Período (2024)',
      description: {
        pt: 'Portfólio desenvolvido durante o 2º período do Curso Técnico em Desenvolvimento de Sistemas na ETEC São José dos Campos. Inclui o TCC PetNexus e projetos avançados do curso.',
        en: 'Portfolio developed during the 2nd semester of the Systems Development Technical Course at ETEC São José dos Campos. Includes the PetNexus TCC and advanced projects.'
      },
      url: 'https://sites.google.com/view/joopedroluvisariseveriano1/p%C3%A1gina-inicial?authuser=1',
      year: '2024 – 2º Período',
      icon: '🎓',
      color: '#8b5cf6'
    }
  ],
  
  certificates: [
    {
      id: '1',
      title: 'Getting Started with Cisco Packet Tracer',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
      credentialUrl: 'https://www.netacad.com'
    },
    {
      id: '2',
      title: 'Linux Unhatched',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400',
      credentialUrl: 'https://www.netacad.com'
    },
    {
      id: '3',
      title: {
        pt: 'Gerenciamento de Ameaças Cibernéticas',
        en: 'Cyber Threat Management'
      },
      issuer: 'Cisco Networking Academy',
      date: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
      credentialUrl: 'https://www.netacad.com'
    },
    {
      id: '4',
      title: {
        pt: 'Introdução à Cibersegurança',
        en: 'Introduction to Cybersecurity'
      },
      issuer: 'Cisco Networking Academy',
      date: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
      credentialUrl: 'https://www.netacad.com'
    },
    {
      id: '5',
      title: {
        pt: 'Escola de Inovadores (20ª Edição)',
        en: 'School of Innovators (20th Edition)'
      },
      issuer: 'Escola de Inovadores',
      date: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400',
      credentialUrl: 'https://escoladeinovadores.com.br'
    }
  ],
  
  diplomas: [
    {
      id: '1',
      title: {
        pt: 'Técnico em Desenvolvimento de Sistemas',
        en: 'Systems Development Technician'
      },
      issuer: 'ETEC São José dos Campos',
      date: '2024',
      imageUrl: './assets/Diploma Desenvolvimento de Sistemas ETEC.jpeg',
      credentialUrl: ''
    }
  ],
  
  personalInterests: [
    {
      id: '1',
      title: { pt: 'Música', en: 'Music' },
      description: { pt: 'Gosto de ouvir Música', en: 'I like listening to Music' },
      icon: '🎵',
      color: '#f43f5e',
      styles: {
        pt: ['Eletrônico', 'Reggae', 'Hip Hop'],
        en: ['Electronic', 'Reggae', 'Hip Hop']
      }
    },
    {
      id: '2',
      title: { pt: 'Games', en: 'Games' },
      description: { pt: 'Gosto de jogar', en: 'I like playing games' },
      icon: '🎮',
      color: '#8b5cf6',
      styles: {
        pt: ['FPS', 'MMORPG', 'Estratégia'],
        en: ['FPS', 'MMORPG', 'Strategy']
      }
    },
    {
      id: '3',
      title: { pt: 'Fotografia', en: 'Photography' },
      description: { pt: 'Gosto de tirar fotos', en: 'I like taking photos' },
      icon: '📷',
      color: '#10b981',
      styles: {
        pt: ['Natureza', 'Urbana', 'Viagens'],
        en: ['Nature', 'Urban', 'Travel']
      }
    },
    {
      id: '4',
      title: { pt: 'Leitura', en: 'Reading' },
      description: { pt: 'Gosto de ler', en: 'I like reading' },
      icon: '📖',
      color: '#f59e0b',
      styles: {
        pt: ['Ficção', 'Tecnologia', 'Desenvolvimento Pessoal'],
        en: ['Fiction', 'Technology', 'Personal Development']
      }
    },
    {
      id: '5',
      title: { pt: 'Cinema', en: 'Cinema' },
      description: { pt: 'Gosto de assistir filmes', en: 'I like watching movies' },
      icon: '🎬',
      color: '#ec4899',
      styles: {
        pt: ['Ficção Científica', 'Drama', 'Ação'],
        en: ['Sci-Fi', 'Drama', 'Action']
      }
    },
    {
      id: '6',
      title: { pt: 'Viajar', en: 'Travel' },
      description: { pt: 'Gosto de viajar', en: 'I like traveling' },
      icon: '✈️',
      color: '#06b6d4',
      styles: {
        pt: ['Explorar novas culturas', 'Conhecer novos lugares', 'Inspiração para novos projetos'],
        en: ['Exploring new cultures', 'Knowing new places', 'Inspiration for new projects']
      }
    }
  ]
};

window.portfolioTranslations = {
  pt: {
    nav: {
      hero: 'Início',
      curriculo: 'Currículo',
      profissional: 'Profissional',
      projetos: 'Projetos',
      diplomas: 'Diplomas',
      certificados: 'Certificados',
      interesses: 'Interesses',
      contact: 'Contato',
      switchLanguage: 'Mudar para Inglês',
      switchTheme: 'Mudar para Modo Claro',
      switchThemeDark: 'Mudar para Modo Escuro'
    },
    hero: {
      title: 'Desenvolvedor de Software Multiplataforma',
      tagline: 'Transformando ideias em experiências digitais memoráveis',
      cta_projects: 'Ver Projetos',
      cta_resume: 'Meu Currículo',
      scroll: 'Role para explorar'
    },
    projects: {
      title: 'Projetos Acadêmicos',
      subtitle: 'Projetos desenvolvidos durante minha formação que demonstram minhas habilidades técnicas e criatividade',
      filter_all: 'Todos',
      repo: 'Repositório',
      details: 'Ver Detalhes',
      fatec_section: 'Projetos da FATEC',
      fatec_subtitle: 'Projetos desenvolvidos ao longo do curso de Desenvolvimento de Software Multiplataforma na Fatec Jacareí',
      personal_section: 'Projetos Pessoais',
      personal_subtitle: 'Projetos desenvolvidos de forma independente que demonstram iniciativa e habilidades individuais',
      personal_badge: 'Projetos Independentes',
      etec_section: 'Portfólios da ETEC',
      etec_subtitle: 'Portfólios desenvolvidos durante o curso Técnico em Desenvolvimento de Sistemas na ETEC São José dos Campos',
      etec_visit: 'Acessar Portfólio',
      etec_year1: '2023 – 1º Ano',
      etec_year2: '2024 – 2º Ano'
    },
    contact: {
      title: 'Vamos conversar?',
      subtitle: 'Estou sempre aberto a novos desafios e oportunidades.',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar mensagem. Tente novamente.',
      sending: 'Enviando...',
      location: 'Localização',
      emailTitle: 'E-mail'
    },
    commandPalette: {
      placeholder: 'O que você está procurando?',
      shortcut: 'ESC',
      toggleTheme: 'Mudar Tema',
      switchLanguage: 'Mudar Idioma'
    },

    skills: {
      title: 'Minhas Habilidades',
      subtitle: 'Tecnologias e ferramentas que utilizo no dia a dia.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Ferramentas',
        soft: 'Soft Skills'
      }
    },
    areaProfissional: {
      title: 'Área Profissional',
      subtitle: 'Minha trajetória profissional e contribuições no mercado de tecnologia',
      role: 'Desenvolvedor',
      description: 'Sou um profissional dedicado ao desenvolvimento web, com foco em criar experiências digitais memoráveis e funcionais. Atualmente busco minha primeira oportunidade no mercado de tecnologia, animado para aplicar os conhecimentos adquiridos durante minha formação acadêmica.',
      stats: {
        years: 'Anos de Experiência',
        projects: 'Projetos Concluídos',
        techs: 'Tecnologias',
        commitment: 'Comprometimento'
      },
      philosophy: {
        title: 'Minha Filosofia',
        quote: '"A tecnologia deve ser uma extensão da criatividade humana, não uma barreira. Cada linha de código é uma oportunidade de criar algo que faça a diferença na vida das pessoas."',
        values: ['Foco em Resultados', 'Melhoria Contínua', 'Colaboração', 'Inovação']
      }
    },
    certificados: {
      title: 'Certificados',
      subtitle: 'Certificações e cursos que evidenciam meu comprometimento com o aprendizado contínuo',
      stats: {
        certs: 'Certificados',
        institutions: 'Instituições',
        year: 'Ano Atual'
      },
      issuedBy: 'Emitido por',
      viewCredential: 'Ver Credencial'
    },
    diplomas: {
      title: 'Diplomas',
      subtitle: 'Formação técnica e graus acadêmicos conquistados',
      stats: {
        diplomas: 'Diplomas',
        institutions: 'Instituições',
        year: 'Ano Atual'
      },
      issuedBy: 'Emitido por',
      viewCredential: 'Ver Credencial'
    },
    curriculo: {
      title: 'Currículo',
      subtitle: 'Minha trajetória acadêmica e evolução profissional',
      education: 'Formação Acadêmica',
      experience: 'Experiência Profissional',
      present: 'Presente',
      downloadBtn: 'Baixar Currículo (PDF)',
      emptyExperience: 'Buscando minha primeira oportunidade profissional na área de tecnologia, com muito foco em aprendizado contínuo e desenvolvimento de projetos práticos.'
    },
    interesses: {
      title: 'Interesses Pessoais',
      subtitle: 'O que me inspira e movimenta fora do mundo do código',
      quote: '"A criatividade é a inteligência se divertindo. Busco sempre encontrar inspiração em tudo ao meu redor, transformando experiências cotidianas em motivação para novos projetos."',
      author: '— João Pedro',
      featured: 'Destaque',
      inspiration: {
        title: 'Fontes de Inspiração',
        innovation: { title: 'Inovação', desc: 'Tecnologias emergentes e novas abordagens para problemas antigos' },
        art: { title: 'Arte & Design', desc: 'Fotografia, ilustração e design de interfaces' },
        travel: { title: 'Viagens', desc: 'Novas culturas e perspectivas de vida' },
        learning: { title: 'Aprendizado', desc: 'Livros, podcasts e cursos diversos' }
      }
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      developedWith: 'Feito com',
      using: 'usando',
      by: 'por'
    },
    projectModal: {
      techs: 'Tecnologias Utilizadas',
      links: 'Links do Projeto',
      repo: 'Repositório',
      video: 'Vídeo Demonstrativo',
      watchVideo: 'Assistir no YouTube',
      sourceCode: 'Código Fonte',
      about: 'Sobre o Projeto',
      challenges: 'Desafios',
      challengesDesc: 'Implementação de arquitetura escalável e integração de APIs.',
      takeaways: 'Aprendizado',
      takeawaysDesc: 'Domínio de hooks avançados e animações complexas.',
      videoNotAvailable: 'Vídeo não disponível',
      localNoticeTitle: 'Modo de Arquivo Local Off-line',
      localNoticeDesc: 'Por razões de segurança, o YouTube impede a reprodução direta de vídeos dentro de páginas abertas localmente (protocolo file://). Na versão publicada online no GitHub Pages, o vídeo será reproduzido diretamente aqui sem qualquer erro.',
      localNoticeBtn: 'Abrir Vídeo no YouTube'
    }
  },
  en: {
    nav: {
      hero: 'Home',
      curriculo: 'Resume',
      profissional: 'Experience',
      projetos: 'Projects',
      diplomas: 'Degrees',
      certificados: 'Certificates',
      interesses: 'Interests',
      contact: 'Contact',
      switchLanguage: 'Switch to Portuguese',
      switchTheme: 'Switch to Light Mode',
      switchThemeDark: 'Switch to Dark Mode'
    },
    hero: {
      title: 'Multiplatform Software Developer',
      tagline: 'Transforming ideas into memorable digital experiences',
      cta_projects: 'View Projects',
      cta_resume: 'My Resume',
      scroll: 'Scroll to explore'
    },
    projects: {
      title: 'Academic Projects',
      subtitle: 'Projects developed during my education that demonstrate my technical skills and creativity',
      filter_all: 'All',
      repo: 'Repository',
      details: 'View Details',
      fatec_section: 'FATEC Projects',
      fatec_subtitle: 'Projects developed during the Multiplatform Software Development course at Fatec Jacareí',
      personal_section: 'Personal Projects',
      personal_subtitle: 'Projects developed independently showcasing individual initiative and skills',
      personal_badge: 'Independent Projects',
      etec_section: 'ETEC Portfolios',
      etec_subtitle: 'Portfolios developed during the Systems Development Technical course at ETEC São José dos Campos',
      etec_visit: 'View Portfolio',
      etec_year1: '2023 – 1st Year',
      etec_year2: '2024 – 2nd Year'
    },
    contact: {
      title: 'Let\'s talk?',
      subtitle: 'I\'m always open to new challenges and opportunities.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      sending: 'Sending...',
      location: 'Location',
      emailTitle: 'Email'
    },
    commandPalette: {
      placeholder: 'What are you looking for?',
      shortcut: 'ESC',
      toggleTheme: 'Toggle Theme',
      switchLanguage: 'Switch Language'
    },

    skills: {
      title: 'My Skills',
      subtitle: 'Technologies and tools I use on a daily basis.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools',
        soft: 'Soft Skills'
      }
    },
    areaProfissional: {
      title: 'Professional Area',
      subtitle: 'My professional journey and contributions to the tech market',
      role: 'Developer',
      description: 'I am a professional dedicated to web development, focusing on creating memorable and functional digital experiences. Currently seeking my first opportunity in the technology market, excited to apply the knowledge acquired during my academic background.',
      stats: {
        years: 'Years of Experience',
        projects: 'Completed Projects',
        techs: 'Technologies',
        commitment: 'Commitment'
      },
      philosophy: {
        title: 'My Philosophy',
        quote: '"Technology should be an extension of human creativity, not a barrier. Every line of code is an opportunity to create something that makes a difference in people\'s lives."',
        values: ['Focus on Results', 'Continuous Improvement', 'Collaboration', 'Innovation']
      }
    },
    certificados: {
      title: 'Certificates',
      subtitle: 'Certifications and courses that show my commitment to continuous learning',
      stats: {
        certs: 'Certificates',
        institutions: 'Institutions',
        year: 'Current Year'
      },
      issuedBy: 'Issued by',
      viewCredential: 'View Credential'
    },
    diplomas: {
      title: 'Degrees',
      subtitle: 'Technical education and academic degrees achieved',
      stats: {
        diplomas: 'Degrees',
        institutions: 'Institutions',
        year: 'Current Year'
      },
      issuedBy: 'Issued by',
      viewCredential: 'View Credential'
    },
    curriculo: {
      title: 'Resume',
      subtitle: 'My academic journey and professional evolution',
      education: 'Education',
      experience: 'Professional Experience',
      present: 'Present',
      downloadBtn: 'Download Resume (PDF)',
      emptyExperience: 'Seeking my first professional opportunity in technology, with a strong focus on continuous learning and practical project development.'
    },
    interesses: {
      title: 'Personal Interests',
      subtitle: 'What inspires and moves me outside the world of code',
      quote: '"Creativity is intelligence having fun. I always seek to find inspiration in everything around me, transforming everyday experiences into motivation for new projects."',
      author: '— João Pedro',
      featured: 'Featured',
      inspiration: {
        title: 'Sources of Inspiration',
        innovation: { title: 'Innovation', desc: 'Emerging technologies and new approaches to old problems' },
        art: { title: 'Art & Design', desc: 'Photography, illustration, and interface design' },
        travel: { title: 'Travel', desc: 'New cultures and life perspectives' },
        learning: { title: 'Learning', desc: 'Books, podcasts, and various courses' }
      }
    },
    footer: {
      rights: 'All rights reserved.',
      developedWith: 'Made with',
      using: 'using',
      by: 'by'
    },
    projectModal: {
      techs: 'Technologies Used',
      links: 'Project Links',
      repo: 'Repository',
      video: 'Demo Video',
      watchVideo: 'Watch on YouTube',
      sourceCode: 'Source Code',
      about: 'About the Project',
      challenges: 'Challenges',
      challengesDesc: 'Implementing scalable architecture and API integration.',
      takeaways: 'Key Takeaways',
      takeawaysDesc: 'Mastery of advanced hooks and complex animations.',
      videoNotAvailable: 'Video not available',
      localNoticeTitle: 'Offline Local File Mode',
      localNoticeDesc: 'For security reasons, YouTube prevents direct video playback inside locally opened HTML files (file:// protocol). In the online published version on GitHub Pages, the video will play directly here without any errors.',
      localNoticeBtn: 'Open Video on YouTube'
    }
  }
};
