import { Education, Experience, Skill, Project, Certificate, PersonalInterest } from '../types';

export const personalInfo = {
  name: 'João Pedro Luvisari Severiano',
  title: 'Desenvolvedor de Software Multiplataforma',
  tagline: 'Transformando ideias em experiências digitais memoráveis',
  email: 'joaopedroluvisariseveriano@gmail.com',
  location: 'São José dos Campos, Brasil',
  github: 'https://github.com/JoaoPedroLuvisariSeveriano',
  linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-luvisari-severiano-bb1aa9303/',
  instagram: 'https://www.instagram.com/pedro_luvisari/'
};

export const education: Education[] = [
  {
    id: '1',
    institution: 'Fatec Jacareí',
    degree: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
    period: '2025 - 2028 (cursando)',
    description: 'Formação tecnológica focada em desenvolvimento de software multiplataforma, arquitetura de sistemas e práticas ágeis.'
  },
  {
    id: '2',
    institution: 'ETEC São José dos Campos',
    degree: 'Técnico em Desenvolvimento de Sistemas',
    period: '2024 - 2025',
    description: 'Formação técnica com foco em programação, banco de dados e desenvolvimento web.'
  }
];

export const experiences: Experience[] = [];

export const skills: Skill[] = [
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
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'TCC ETEC – PetNexus',
    description: 'O PetNexus é um sistema de gerenciamento de PetShop e clínica veterinária, que possibilita a marcação de consultas e cirurgias para o seu Pet, além de oferecer uma área de gestão de controle de estoque e venda de produtos.',
    tags: ['JavaScript', 'PHP', 'SCSS', 'HTML', 'CSS', 'Hack'],
    githubUrl: 'https://github.com/JoaoPedroLuvisariSeveriano/PetNexus'
  },
  {
    id: '2',
    title: 'ABP FATEC – AgriRS-Lab',
    description: 'O projeto ABP (Aprendizagem Baseada em Projeto), desenvolvido como atividade do 1° semestre do curso de Desenvolvimento de Software Multiplataforma da Fatec Jacareí, tem como objetivo criar um website para o Laboratório de Sensoriamento Remoto Agrícola do INPE (AgriRS Lab).\n\nO site busca:\n• Centralizar informações importantes sobre o laboratório.\n• Ampliar a visibilidade das pesquisas e projetos do AgriRS Lab.\n• Facilitar o acesso do público às iniciativas e atividades do laboratório.\n• Divulgar informações sobre a equipe, áreas de atuação, publicações científicas, oportunidades de trabalho e formas de contato.\n\nO projeto contribui para manter as atividades e descobertas científicas atualizadas para a comunidade e promove a divulgação do laboratório para interessados em conhecer ou colaborar com o trabalho desenvolvido.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/KaimanByte/AgriRS-Lab'
  },
  {
    id: '3',
    title: 'ABP FATEC – 2º Período',
    description: 'O projeto acadêmico integrador desenvolvido no 2º período do curso de Desenvolvimento de Software Multiplataforma da Fatec Jacareí tem como foco a criação de soluções tecnológicas para problemas reais da secretaria da Fatec Jacareí.\n\nEsse projeto busca aplicar os conhecimentos adquiridos em sala de aula em um contexto prático, promovendo inovação e contribuindo para a melhoria dos processos internos da instituição.',
    tags: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS'],
    githubUrl: 'https://github.com'
  }
];

export const certificates: Certificate[] = [
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
    title: 'Gerenciamento de Ameaças Cibernéticas',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    credentialUrl: 'https://www.netacad.com'
  },
  {
    id: '4',
    title: 'Introdução à Cibersegurança',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
    credentialUrl: 'https://www.netacad.com'
  },
  {
    id: '5',
    title: 'Escola de Inovadores (20ª Edição)',
    issuer: 'Escola de Inovadores',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400',
    credentialUrl: 'https://escoladeinovadores.com.br'
  }
];

export const personalInterests: PersonalInterest[] = [
  {
    id: '1',
    title: 'Música',
    description: 'Gosto de ouvir Música',
    icon: '🎵',
    color: '#f43f5e',
    styles: ['Eletrônico', 'Reggae', 'Hip Hop']
  },
  {
    id: '2',
    title: 'Games',
    description: 'Gosto de jogar',
    icon: '🎮',
    color: '#8b5cf6',
    styles: ['FPS', 'MMORPG', 'Estratégia']
  },
  {
    id: '3',
    title: 'Fotografia',
    description: 'Gosto de tirar fotos',
    icon: '📷',
    color: '#10b981',
    styles: ['Natureza', 'Urbana', 'Viagens']
  },
  {
    id: '4',
    title: 'Leitura',
    description: 'Gosto de ler',
    icon: '📚',
    color: '#f59e0b',
    styles: ['Ficção', 'Tecnologia', 'Desenvolvimento Pessoal']
  },
  {
    id: '5',
    title: 'Cinema',
    description: 'Gosto de assistir filmes',
    icon: '🎬',
    color: '#ec4899',
    styles: ['Ficção Científica', 'Drama', 'Ação']
  },
  {
    id: '6',
    title: 'Viajar',
    description: 'Gosto de viajar',
    icon: '✈️',
    color: '#06b6d4',
    styles: ['Explorar novas culturas', 'Conhecer novos lugares', 'Inspiração para novos projetos']
  }
];

