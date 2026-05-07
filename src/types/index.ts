export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Link direto do vídeo no YouTube (ex: https://www.youtube.com/watch?v=xxxx) */
  youtubeUrl?: string;
  /** Se preferir, pode passar apenas o ID do vídeo (ex: xxxx) */
  youtubeVideoId?: string;
  image?: string;
  /** Origem do projeto: 'fatec' | 'etec' */
  source?: 'fatec' | 'etec';
}


export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
}

export interface PersonalInterest {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  styles?: string[];
}

