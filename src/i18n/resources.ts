import type { AppLanguage } from "@/lib/i18n";

import es from "./locales/es.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import pt from "./locales/pt.json";
import it from "./locales/it.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import nl from "./locales/nl.json";
import zh from "./locales/zh.json";

import { projectContent as projectsEs } from "./locales/projects/content.es";
import { projectContent as projectsEn } from "./locales/projects/content.en";
import { projectContent as projectsFr } from "./locales/projects/content.fr";
import { projectContent as projectsDe } from "./locales/projects/content.de";
import { projectContent as projectsPt } from "./locales/projects/content.pt";
import { projectContent as projectsIt } from "./locales/projects/content.it";
import { projectContent as projectsJa } from "./locales/projects/content.ja";
import { projectContent as projectsKo } from "./locales/projects/content.ko";
import { projectContent as projectsNl } from "./locales/projects/content.nl";
import { projectContent as projectsZh } from "./locales/projects/content.zh";

import { plansPageContent as plansEs } from "./locales/plans/content.es";
import { plansPageContent as plansEn } from "./locales/plans/content.en";
import { plansPageContent as plansFr } from "./locales/plans/content.fr";
import { plansPageContent as plansDe } from "./locales/plans/content.de";
import { plansPageContent as plansPt } from "./locales/plans/content.pt";
import { plansPageContent as plansIt } from "./locales/plans/content.it";
import { plansPageContent as plansJa } from "./locales/plans/content.ja";
import { plansPageContent as plansKo } from "./locales/plans/content.ko";
import { plansPageContent as plansNl } from "./locales/plans/content.nl";
import { plansPageContent as plansZh } from "./locales/plans/content.zh";

import { howWeWorkContent as howWeWorkEs } from "./locales/howWeWork/content.es";
import { howWeWorkContent as howWeWorkEn } from "./locales/howWeWork/content.en";
import { howWeWorkContent as howWeWorkFr } from "./locales/howWeWork/content.fr";
import { howWeWorkContent as howWeWorkDe } from "./locales/howWeWork/content.de";
import { howWeWorkContent as howWeWorkPt } from "./locales/howWeWork/content.pt";
import { howWeWorkContent as howWeWorkIt } from "./locales/howWeWork/content.it";
import { howWeWorkContent as howWeWorkJa } from "./locales/howWeWork/content.ja";
import { howWeWorkContent as howWeWorkKo } from "./locales/howWeWork/content.ko";
import { howWeWorkContent as howWeWorkNl } from "./locales/howWeWork/content.nl";
import { howWeWorkContent as howWeWorkZh } from "./locales/howWeWork/content.zh";

import { contactPageContent as contactEs } from "./locales/contact/content.es";
import { contactPageContent as contactEn } from "./locales/contact/content.en";
import { contactPageContent as contactFr } from "./locales/contact/content.fr";
import { contactPageContent as contactDe } from "./locales/contact/content.de";
import { contactPageContent as contactPt } from "./locales/contact/content.pt";
import { contactPageContent as contactIt } from "./locales/contact/content.it";
import { contactPageContent as contactJa } from "./locales/contact/content.ja";
import { contactPageContent as contactKo } from "./locales/contact/content.ko";
import { contactPageContent as contactNl } from "./locales/contact/content.nl";
import { contactPageContent as contactZh } from "./locales/contact/content.zh";

import { faqPageContent as faqEs } from "./locales/faq/content.es";
import { faqPageContent as faqEn } from "./locales/faq/content.en";
import { faqPageContent as faqFr } from "./locales/faq/content.fr";
import { faqPageContent as faqDe } from "./locales/faq/content.de";
import { faqPageContent as faqPt } from "./locales/faq/content.pt";
import { faqPageContent as faqIt } from "./locales/faq/content.it";
import { faqPageContent as faqJa } from "./locales/faq/content.ja";
import { faqPageContent as faqKo } from "./locales/faq/content.ko";
import { faqPageContent as faqNl } from "./locales/faq/content.nl";
import { faqPageContent as faqZh } from "./locales/faq/content.zh";

import { helpPageContent as helpEs } from "./locales/help/content.es";
import { helpPageContent as helpEn } from "./locales/help/content.en";
import { helpPageContent as helpFr } from "./locales/help/content.fr";
import { helpPageContent as helpDe } from "./locales/help/content.de";
import { helpPageContent as helpPt } from "./locales/help/content.pt";
import { helpPageContent as helpIt } from "./locales/help/content.it";
import { helpPageContent as helpJa } from "./locales/help/content.ja";
import { helpPageContent as helpKo } from "./locales/help/content.ko";
import { helpPageContent as helpNl } from "./locales/help/content.nl";
import { helpPageContent as helpZh } from "./locales/help/content.zh";
import { legalBundles } from "./legalBundles";

type JsonBundle = Record<string, string>;

function merge(
  base: JsonBundle,
  bundles: Record<string, unknown>
): { translation: Record<string, unknown> } {
  return { translation: { ...base, ...bundles } };
}

const legal = legalBundles as Record<AppLanguage, Record<string, unknown>>;

export const i18nResources: Record<
  AppLanguage,
  { translation: Record<string, unknown> }
> = {
  es: merge(es, {
    projects: projectsEs,
    plansPage: plansEs,
    howWeWork: howWeWorkEs,
    contactPage: contactEs,
    faqPage: faqEs,
    helpPage: helpEs,
    ...legal.es,
  }),
  en: merge(en, {
    projects: projectsEn,
    plansPage: plansEn,
    howWeWork: howWeWorkEn,
    contactPage: contactEn,
    faqPage: faqEn,
    helpPage: helpEn,
    ...legal.en,
  }),
  fr: merge(fr, {
    projects: projectsFr,
    plansPage: plansFr,
    howWeWork: howWeWorkFr,
    contactPage: contactFr,
    faqPage: faqFr,
    helpPage: helpFr,
    ...legal.fr,
  }),
  de: merge(de, {
    projects: projectsDe,
    plansPage: plansDe,
    howWeWork: howWeWorkDe,
    contactPage: contactDe,
    faqPage: faqDe,
    helpPage: helpDe,
    ...legal.de,
  }),
  pt: merge(pt, {
    projects: projectsPt,
    plansPage: plansPt,
    howWeWork: howWeWorkPt,
    contactPage: contactPt,
    faqPage: faqPt,
    helpPage: helpPt,
    ...legal.pt,
  }),
  it: merge(it, {
    projects: projectsIt,
    plansPage: plansIt,
    howWeWork: howWeWorkIt,
    contactPage: contactIt,
    faqPage: faqIt,
    helpPage: helpIt,
    ...legal.it,
  }),
  ja: merge(ja, {
    projects: projectsJa,
    plansPage: plansJa,
    howWeWork: howWeWorkJa,
    contactPage: contactJa,
    faqPage: faqJa,
    helpPage: helpJa,
    ...legal.ja,
  }),
  ko: merge(ko, {
    projects: projectsKo,
    plansPage: plansKo,
    howWeWork: howWeWorkKo,
    contactPage: contactKo,
    faqPage: faqKo,
    helpPage: helpKo,
    ...legal.ko,
  }),
  nl: merge(nl, {
    projects: projectsNl,
    plansPage: plansNl,
    howWeWork: howWeWorkNl,
    contactPage: contactNl,
    faqPage: faqNl,
    helpPage: helpNl,
    ...legal.nl,
  }),
  zh: merge(zh, {
    projects: projectsZh,
    plansPage: plansZh,
    howWeWork: howWeWorkZh,
    contactPage: contactZh,
    faqPage: faqZh,
    helpPage: helpZh,
    ...legal.zh,
  }),
};
