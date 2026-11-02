import { defineRouting } from "next-intl/routing";

// To add a language: add its code here and create messages/<code>.json.
export const routing = defineRouting({
  locales: ["sk", "en"],
  defaultLocale: "sk",
});
