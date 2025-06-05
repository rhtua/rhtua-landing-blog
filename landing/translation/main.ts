import LocalizedStrings from "react-localization";

const mainTextPortuguese = {
  experience: "EXPERIÊNCIA",
  menu: "CONTATO",
  or: "ou",
  contact: "FALE COMIGO",
  getInTouch: "FALE COMIGO",
  rights: "Todos os direitos reservados",
};

const mainTextEnglish = {
  experience: "EXPERIENCE",
  menu: "CONTACT",
  or: "or",
  contact: "GET IN TOUCH",
  getInTouch: "SEND A MESSAGE",
  rights: "All rights reserved",
};

export const mainText = new LocalizedStrings({
  pt: mainTextPortuguese,
  en: mainTextEnglish,
});
