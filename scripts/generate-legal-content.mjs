import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { privacy as privacyBase } from "./legal-content/privacy.mjs";
import { privacyI18n } from "./legal-content/privacy-i18n.mjs";
import { terms } from "./legal-content/terms.mjs";
import { termsI18n } from "./legal-content/terms-i18n.mjs";
import { cookies } from "./legal-content/cookies.mjs";
import { cookiesI18n } from "./legal-content/cookies-i18n.mjs";
import { notice } from "./legal-content/notice.mjs";
import { noticeI18n } from "./legal-content/notice-i18n.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const langs = ["es", "en", "fr", "de", "pt", "it", "ja", "ko", "nl", "zh"];

function writePage(baseDir, exportName, byLang) {
  mkdirSync(join(root, baseDir), { recursive: true });
  const created = [];
  for (const lang of langs) {
    const content = byLang[lang];
    if (!content) {
      throw new Error(`Missing ${exportName} content for language: ${lang}`);
    }
    const body = `import type { LegalPageContent } from "../../shared/types";

export const ${exportName}: LegalPageContent = ${JSON.stringify(content, null, 2)};
`;
    const filePath = join(root, baseDir, `content.${lang}.ts`);
    writeFileSync(filePath, body, "utf8");
    created.push(filePath);
  }
  return created;
}

function mergeContent(base, i18n) {
  return { ...base, ...i18n };
}

const privacy = mergeContent(privacyBase, privacyI18n);
const termsAll = mergeContent(terms, termsI18n);
const cookiesAll = mergeContent(cookies, cookiesI18n);
const noticeAll = mergeContent(notice, noticeI18n);

const allCreated = [
  ...writePage("src/i18n/locales/legal/privacy", "privacyPageContent", privacy),
  ...writePage("src/i18n/locales/legal/terms", "termsPageContent", termsAll),
  ...writePage("src/i18n/locales/legal/cookies", "cookiePageContent", cookiesAll),
  ...writePage("src/i18n/locales/legal/notice", "legalNoticePageContent", noticeAll),
];

console.log(`Generated ${allCreated.length} legal content files:`);
for (const file of allCreated) {
  console.log(file.replace(root + "/", ""));
}
