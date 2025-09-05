import { intervalToDuration } from "date-fns";
import LocalizedStrings from "react-localization";

// Tipos para as estruturas de dados
type WorkExperience = {
  period: string;
  timespan: string;
  name: string;
  role: string;
  technologies: string;
};

type Project = {
  name: string;
  description: string;
  tecnologies: string;
  image: string;
  gitLink: string | undefined;
  figma?: string | undefined;
};

type EducationItem = {
  name: string;
  institution: string;
  duration: string;
};

type SkillCategory = {
  name: string;
  items: Record<string, string>;
};

type EducationCategory = {
  name: string;
  items: Record<string, EducationItem>;
};

type AboutTextStructure = {
  work: string;
  projects: string;
  skills: string;
  workExperiences: Record<string, WorkExperience>;
  projectsList: Record<string, Project>;
  skillList: {
    education: EducationCategory;
    hardSkills: SkillCategory;
    softSkills: SkillCategory;
  };
};

const gazinWorkPeriod = intervalToDuration({
  start: new Date(2021, 7, 1, 0, 0, 0),
  end: new Date(),
});

const aboutTextPortuguese: AboutTextStructure = {
  work: 'TRABALHO',
  projects: 'PROJETOS',
  skills: 'HABILIDADES',
  workExperiences: {
    gazin: {
      period: '2021 - Hoje',
      timespan: `${gazinWorkPeriod.years} anos ${gazinWorkPeriod.months ? 'e ' + gazinWorkPeriod.months : ''} ${
        gazinWorkPeriod.months ? (gazinWorkPeriod.months > 1 ? 'meses' : 'mês') : ''
      }`,
      name: 'Gazin Tech',
      role: 'Desenvolvedor Fullstack',
      technologies: 'Node | Typescript | React | Monorepo',
    },
    benner: {
      period: '2019 - 2022',
      timespan: '2 anos e 3 meses',
      name: 'Benner Saúde',
      role: 'Desenvolvedor Fullstack',
      technologies: 'C# | .Net | SQL Server | Oracle Database',
    },
    cef: {
      period: '2016 - 2017',
      timespan: '1 ano e 1 mês',
      name: 'Caixa Econômica Federal',
      role: 'Estágiario',
      technologies: 'Visual Basic for Applications | CorelDraw',
    },
  },
  projectsList: {
    agilePoll: {
      name: 'Agile Poll',
      description: 'Sistema de votação para Scrum, Kanban e outras metodologias ágeis. Disponível em www.agilepoll.rhtua.com.br.',
      tecnologies: 'React | Typescript | Firebase | ChakraUI',
      image: '/media/agilepoll.png',
      gitLink: 'https://github.com/rhtua/agilePoll',
      figma: 'https://www.figma.com/design/H25QY4OjMa58C9JO1ACIyA/Agile-Poll'
    },
    portifolio_v1: {
      name: 'Portfólio v1',
      description: 'Primeira versão do meu portfólio, feito em Gatsby.',
      tecnologies: 'Gatsby | Javascript | TailwindCSS | GraphQL',
      image: '/media/portifolio_v1.png',
      gitLink: 'https://github.com/rhtua/portfolio_v1',
      figma: undefined,
    },
    devCrud: {
      name: 'DevCRUD',
      description:
        'Um gerenciador de registros de desenvolvedores, utilizando princípios de Clean Architecture, testes e um pequeno projeto de UI. Feito em uma semana como um desafio.',
      tecnologies: 'Figma | Docker | NodeJS | ReactJS',
      image: '/media/devcrud.webp',
      gitLink: 'https://github.com/rhtua/DevCRUD',
      figma: 'https://www.figma.com/file/6YFqx5xv9ftVflrMam1JcZ/DevCRUD',
    },
    vendaTurbinada: {
      name: 'Venda Turbinada',
      description: 'Página promocional para uma campanha de vendas da Gazin, com foco em conversão e usabilidade, também com painel de administração.',
      tecnologies: 'React | RemixJS | Typescript | ChakraUI',
      image: '/media/vendaturbinada.png',
      gitLink: undefined,
      figma: undefined,
    },
    letMeAsk: {
      name: 'Let Me Ask',
      description:
        'Um aplicativo para hospedar uma sala de perguntas e respostas para múltiplos temas, integrado com a Conta Google do usuário. Projeto da Next Level Week feito em uma semana.',
      tecnologies: 'Firebase  | Jest | SASS | ReactJS',
      image: '/media/letmeask.webp',
      gitLink: 'https://github.com/rhtua/Let-Me-Ask',
      figma: 'https://www.figma.com/file/OIYmTQkekcCKaUUQXfPK1L/Letmeask',
    },
    notado: {
      name: 'Notado',
      description: 'Breve sistema de gerenciamento escolar de notas e presença, para ser utilizado por alunos e educadores. Projeto de estágio.',
      tecnologies: 'Visual Studio | Entity | .Net MVC',
      image: '/media/notado.webp',
      gitLink: 'https://github.com/rhtua/Notado',
      figma: undefined,
    },
  },
  skillList: {
    education: {
      name: 'EDUCAÇÃO',
      items: {
        bachelor: {
            name: 'Bacharel em Engenharia de Software',
            institution: 'Centro Universitário Metropolitano de Maringá',
            duration: '2020 - 2024',
          },
          mba: {
            name: 'MBA em Engenharia de Software',
            institution: 'Universidade de São Paulo - USP/ESALQ',
            duration: '2024 - 2026',
          },
        },
      },
      hardSkills: {
        name: 'HARD SKILLS',
        items: {
          js: 'Javascript',
          react: 'ReactJS',
          node: 'NodeJS',
          ts: 'Typescript',
          sql: 'SQL',
          vite: 'Vite',
          html: 'HTML',
          csharp: 'C#',
          figma: 'Figma',
          gitlab: 'GitLab',
        },
      },
      softSkills: {
        name: 'SOFT SKILLS',
        items: {
          colaboration: 'Colaboração',
          criticalThinking: 'Pensamento Crítico',
          communication: 'Comunicação',
          problemSolving: 'Solução de Problemas',
          prioritization: 'Priorização',
          leadership: 'Liderança',
          ux: 'UX',
        },
      },
    },
  };

const aboutTextEnglish: AboutTextStructure = {
  work: "WORK",
  projects: "PROJECTS",
  skills: "SKILLS",
  workExperiences: {
    gazin: {
      period: "2021 - Today",
      timespan: `${gazinWorkPeriod.years} years ${
        gazinWorkPeriod.months ? "and " + gazinWorkPeriod.months : ""
      } ${
        gazinWorkPeriod.months
          ? gazinWorkPeriod.months > 1
            ? "months"
            : "month"
          : ""
      }`,
      name: "Gazin Tech",
      role: "Fullstack Developer",
      technologies: "Node | Typescript | React | Monorepo",
    },
    benner: {
      period: "2019 - 2022",
      timespan: "2 years and 3 months",
      name: "Benner Saúde",
      role: "Fullstack Developer",
      technologies: "C# | .Net | SQL Server | Oracle Database",
    },
    cef: {
      period: "2016 - 2017",
      timespan: "1 year and 1 month",
      name: "Caixa Econômica Federal",
      role: "Intern",
      technologies: "Visual Basic for Applications | CorelDraw",
    },
  },
  projectsList: {
    notado: {
      name: "Notado",
      description:
        "Small school management system to administrate grades and attendance, to be used by teachers and students. Internship project.",
      tecnologies: "Visual Studio | Entity | .Net MVC",
      image: "/media/notado.webp",
      gitLink: "https://github.com/rhtua/Notado",
      figma: undefined,
    },
    letMeAsk: {
      name: "Let Me Ask",
      description:
        "A app to host a Q&A room to multiple purposes, integrated with Google Account. Next Level Week project made in a week.",
      tecnologies: "Firebase  | Jest | SASS | ReactJS",
      image: "/media/letmeask.webp",
      gitLink: "https://github.com/rhtua/Let-Me-Ask",
      figma: "https://www.figma.com/file/OIYmTQkekcCKaUUQXfPK1L/Let-Me-Ask",
    },
    devCrud: {
      name: "DevCRUD",
      description:
        "A developer record manager, using Clean Architecture principles, tests and a small UI project. Done in a week as a test.",
      tecnologies: "Figma | Docker | NodeJS | ReactJS",
      image: "/media/devcrud.webp",
      gitLink: "https://github.com/rhtua/DevCRUD",
      figma: "https://www.figma.com/file/6YFqx5xv9ftVflrMam1JcZ/DevCRUD",
    },
    vendaTurbinada: {
      name: "Venda Turbinada",
      description:
        "Promotional page for a Gazin sales campaign, focused on conversion and usability, also with an admin panel.",
      tecnologies: "React | RemixJS | Typescript | ChakraUI",
      image: "/media/vendaturbinada.png",
      gitLink: undefined,
      figma: undefined
    },
    agilePoll: {
      name: "Agile Poll",
      description:
        "Voting system for Scrum, Kanban and other agile methodologies. Available at www.agilepoll.rhtua.com.br.",
      tecnologies: "React | Typescript | Firebase | ChakraUI",
      image: "/media/agilepoll.png",
      gitLink: "https://github.com/rhtua/agilePoll",
      figma: undefined
    },
    portifolio_v1: {
      name: "Portfólio v1",
      description: "First version of my portfolio, built with Gatsby.",
      tecnologies: "Gatsby | Javascript | TailwindCSS | GraphQL",
      image: "/media/portifolio_v1.png",
      gitLink: "https://github.com/rhtua/portfolio_v1",
      figma: undefined,
    },
  },
  skillList: {
    education: {
      name: "EDUCATION",
      items: {
        bachelor: {
          name: "Bachelor of Software Engineering",
          institution: "Centro Universitário Metropolitano de Maringá",
          duration: "2020 - 2024",
        },
        mba: {
          name: "Master in Software Engineering",
          institution: "Universidade de São Paulo - USP/ESALQ",
          duration: "2024 - 2026",
        },
      },
    },
    hardSkills: {
      name: "HARD SKILLS",
      items: {
        js: "Javascript",
        react: "ReactJS",
        node: "NodeJS",
        ts: "Typescript",
        sql: "SQL",
        vite: "Vite",
        html: "HTML",
        csharp: "C#",
        figma: "Figma",
        gitlab: "GitLab",
      },
    },
    softSkills: {
      name: "SOFT SKILLS",
      items: {
        colaboration: "Collaboration",
        prioritization: "Prioritization",
        communication: "Communication",
        problemSolving: "Problem Solving",
        criticalThinking: "Critical Thinking",
        leadership: "Leadership",
        ux: "UX",
      },
    },
  },
};

export const aboutText = new LocalizedStrings({
  pt: aboutTextPortuguese,
  en: aboutTextEnglish,
});
