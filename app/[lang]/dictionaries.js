// import "server-only";
const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
};
export const getDictionary = (locale, admin = false) => {
  if (admin) return dictionaries["en"]();
  const dictionary = dictionaries[locale]();
  return dictionary;
};
