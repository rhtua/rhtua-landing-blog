import { intervalToDuration } from "date-fns";
import LocalizedStrings from "react-localization";

const gazinWorkPeriod = intervalToDuration({
  start: new Date(2021, 7, 1, 0, 0, 0),
  end: new Date(),
});

const aboutTextPortuguese = {
  work: "TRABALHO",
  projects: "PROJETOS",
  skills: "HABILIDADES",
  workExperiences: {
    gazin: {
      period: "2021 - Hoje",
      timespan: `${gazinWorkPeriod.years} anos ${
        gazinWorkPeriod.months ? "e " + gazinWorkPeriod.months : ""
      } ${
        gazinWorkPeriod.months
          ? gazinWorkPeriod.months > 1
            ? "meses"
            : "mês"
          : ""
      }`,
      name: "Gazin Tech",
      role: "Desenvolvedor Fullstack",
      technologies: "Node | Typescript | React | Monorepo",
    },
    benner: {
      period: "2019 - 2022",
      timespan: "2 anos e 3 meses",
      name: "Benner Saúde",
      role: "Desenvolvedor Fullstack",
      technologies: "C# | .Net | SQL Server | Oracle Database",
    },
    cef: {
      period: "2016 - 2017",
      timespan: "1 ano e 1 mês",
      name: "Caixa Econômica Federal",
      role: "Estágiario",
      technologies: "Visual Basic for Applications | CorelDraw",
    },
  },
  projectsList: {
    notado: {
      name: "Notado",
      description:
        "Breve sistema de gerenciamento escolar de notas e presença, para ser utilizado por alunos e educadores. Projeto de estágio.",
      tecnologies: "Visual Studio | Entity | .Net MVC",
      image: "/media/notado.webp",
      gitLink: "https://github.com/rhtua/Notado",
      figma: undefined,
    },
    letMeAsk: {
      name: "Let Me Ask",
      description:
        "Um aplicativo para hospedar uma sala de perguntas e respostas para múltiplos temas, integrado com a Conta Google do usuário. Projeto da Next Level Week feito em uma semana.",
      tecnologies: "Firebase  | Jest | SASS | ReactJS",
      image: "/media/letmeask.webp",
      gitLink: "https://github.com/rhtua/Let-Me-Ask",
      figma: "https://www.figma.com/file/OIYmTQkekcCKaUUQXfPK1L/Letmeask",
    },
    devCrud: {
      name: "DevCRUD",
      description:
        "Um gerenciador de registros de desenvolvedores, utilizando princípios de Clean Architecture, testes e um pequeno projeto de UI. Feito em uma semana como um desafio.",
      tecnologies: "Figma | Docker | NodeJS | ReactJS",
      image: "/media/devcrud.webp",
      gitLink: "https://github.com/rhtua/DevCRUD",
      figma: "https://www.figma.com/file/6YFqx5xv9ftVflrMam1JcZ/DevCRUD",
    },
  },
  skillList: {
    education: {
      name: "EDUCAÇÃO",
      items: {
        bachelor: {
          name: "Bacharel em Engenharia de Software",
          institution: "Centro Universitário Metropolitano de Maringá",
          duration: "2020 - 2024",
        },
        mba: {
          name: "MBA em Engenharia de Software",
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
        colaboration: "Colaboração",
        criticalThinking: "Pensamento Crítico",
        communication: "Comunicação",
        problemSolving: "Solução de Problemas",
        prioritization: "Priorização",
        leadership: "Liderança",
        ux: "UX",
      },
    },
  },
};

const aboutTextEnglish = {
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
