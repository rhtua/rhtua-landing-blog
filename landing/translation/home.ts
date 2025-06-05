import LocalizedStrings from "react-localization";

const homeTextPortuguese = {
  hi: "Olá, sou o Arthur Fusieger",
  se: "Engenheiro de Software",
  description:
    "Desenvolvedor de software como profissão e problem solver por natureza",
  knowMore: "CONHEÇA",
};

const homeTextEnglish = {
  hi: "Hello, I'm Arthur Fusieger",
  se: "Software Engineer",
  description:
    "Software developer by profession and a problem solver by nature.",
  knowMore: "KNOW MORE",
};

export const homeText = new LocalizedStrings({
  pt: homeTextPortuguese,
  en: homeTextEnglish,
});
