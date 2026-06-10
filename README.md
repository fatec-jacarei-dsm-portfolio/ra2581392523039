# Portfólio de Projetos - Fatec Jacareí

**Aluno:** João Pedro Luvisari Severiano  
**Curso:** Desenvolvimento de Software Multiplataforma  
**Turma:** 2º Semestre de 2025

---

**Portfólio Online**

🔗 [Acesse o Portfólio](https://fatec-jacarei-dsm-portfolio.github.io/ra2581392523039/)

---

**Vídeos de Apresentação**

🎤 2DSM - [Vídeo](https://www.youtube.com/watch?v=3y4TXbOuQno)  
🎤 4DSM - [Vídeo](LINK_VIDEO_4DSM)  
🎤 6DSM - [Vídeo](LINK_VIDEO_6DSM)

---

## ✨ Funcionalidades Avançadas

Embora seja um site 100% estático sem dependências externas, o portfólio conta com recursos de alta fidelidade visual e interatividade:

| Recurso | Descrição |
| :--- | :--- |
| 🎨 **Design Dark Premium** | Tema escuro refinado com efeitos de glassmorphism, gradientes e sombras harmoniosas. Suporta também modo claro nativo. |
| 🖱️ **Cursor Customizado** | Ponteiro e anel interativos que seguem o mouse de forma suave usando interpolação física (*lerp*) e reagem a elementos clicáveis. |
| 🌐 **Tradutor Dinâmico Instantâneo** | Suporte multilíngue completo (**Português** e **Inglês**) que traduz toda a interface instantaneamente em tempo real. |
| ⌨️ **Command Palette (Ctrl + K)** | Paleta interativa inspirada em editores profissionais que permite navegar pelas seções e alternar idioma ou tema via atalhos do teclado. |
| 🃏 **Cards 3D e Transições** | Layout responsivo com efeitos táteis de aproximação, gradientes de borda ativos e modais animados para detalhes dos projetos. |

| 📜 **Galeria de Conquistas** | Seções organizadas para exibição de Diplomas e Certificados profissionais com lupa de zoom interativa integrada. |

---

## 🏗️ Estrutura Limpa de Arquivos

O projeto está organizado dentro do diretório `/docs`, atendendo diretamente à configuração administrativa de publicação do GitHub Pages da FATEC, mantendo a raiz organizada e limpa:

```
Portfolio/
├── docs/                                          # Diretório principal de publicação do site
│   ├── assets/
│   │   ├── Diploma Desenvolvimento de Sistemas ETEC.jpeg  # Imagem de visualização do diploma
│   │   ├── Perfil atualizada.JPG                          # Foto profissional de perfil
│   │   └── vite.svg                                       # Ícone/Favicon da página
│   ├── css/
│   │   └── style.css                                      # Design System, variáveis de tema e estilos unificados
│   ├── js/
│   │   ├── data.js                                        # Banco de dados estruturado do site (textos e traduções bilingues)
│   │   └── script.js                                      # Controladores dinâmicos de interações (Tradutor, Temas, Cursor, Modais)
│   └── index.html                                         # Arquivo principal do site estruturado semanticamente em HTML5
└── README.md                                              # Documentação profissional do projeto
```

---

## 🛠️ Tecnologias Utilizadas

O desenvolvimento priorizou o uso de padrões nativos e modernos da web para maior velocidade e independência de compilação:

*   **Estruturação**: [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) semântico com otimizações de SEO.
*   **Estilização**: [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) moderno usando Custom Properties (variáveis), Grid, Flexbox e Keyframe Animations.
*   **Lógica de Interações**: [JavaScript Vanilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) nativo no padrão ES6+ com manipulação direta do DOM, manipuladores assíncronos e armazenamento local (*localStorage*).

---

## 🚀 Como Visualizar o Projeto Localmente

Por ser um projeto puramente estático, a execução local é extremamente simples e não necessita de nenhuma instalação prévia de pacotes (`npm`, `node_modules`, etc.):

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/JoaoPedroLuvisariSeveriano/Portfolio.git
    ```
2.  **Acesse o diretório**:
    ```bash
    cd Portfolio
    ```
3.  **Abra o arquivo principal**:
    Dê um duplo clique diretamente no arquivo `docs/index.html` ou abra-o por meio de qualquer navegador de sua preferência. O site carregará instantaneamente com todas as suas funções e imagens funcionando perfeitamente de forma off-line.

---

## 🌐 Hospedagem no GitHub Pages

O deploy e a hospedagem do portfólio são realizados através do **GitHub Pages** de forma totalmente estática e nativa:

*   **Configuração e Segurança**: Devido às diretrizes de administração do GitHub da FATEC Jacareí, a publicação está configurada para servir diretamente a pasta `/docs` na branch principal (`main`). Isso garante que a página seja publicada de forma limpa, segura e sem builds desnecessários que atrasem o carregamento.
*   **Atualização**: Qualquer alteração enviada ao repositório via `git push` é atualizada e sincronizada em menos de 10 segundos pelo próprio serviço de Pages do GitHub.
*   **URL Final de Acesso**: [https://fatec-jacarei-dsm-portfolio.github.io/ra2581392523039/](https://fatec-jacarei-dsm-portfolio.github.io/ra2581392523039/)

---

## 📬 Contatos Profissionais

<div align="center">

| Plataforma | Link |
| :--- | :--- |
| 💼 **LinkedIn** | [João Pedro Luvisari Severiano](https://www.linkedin.com/in/joão-pedro-luvisari-severiano-bb1aa9303/) |
| 🐙 **GitHub** | [@JoaoPedroLuvisariSeveriano](https://github.com/JoaoPedroLuvisariSeveriano) |
| 📍 **Localização** | São José dos Campos, SP – Brasil |

</div>

---

## 📄 Licença

Este projeto é open-source e está licenciado sob a licença **MIT**.
