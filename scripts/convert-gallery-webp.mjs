import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const SRC = path.join(ROOT, "src", "data");

const GALLERY_FOLDERS = {
  eamx: "EAMXChiiko",
  compufest: "compufestChiiko",
  emicarrada: "emicarradaChiiko",
  alancrespo_ai: "AlanCrespoChiiko",
};

const SOURCE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".JPG",
  ".JPEG",
  ".PNG",
]);

async function convertFolder(folder) {
  const dir = path.join(PUBLIC, folder);
  const files = fs.readdirSync(dir).filter((file) => {
    const ext = path.extname(file);
    return SOURCE_EXTENSIONS.has(ext);
  });

  let converted = 0;
  const webpFiles = [];

  for (const file of files.sort()) {
    const input = path.join(dir, file);
    const webpName = `${path.basename(file, path.extname(file))}.webp`;
    const output = path.join(dir, webpName);

    const inputStat = fs.statSync(input);
    if (fs.existsSync(output)) {
      const outputStat = fs.statSync(output);
      if (outputStat.mtimeMs >= inputStat.mtimeMs) {
        webpFiles.push(webpName);
        continue;
      }
    }

    await sharp(input)
      .rotate()
      .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(output);

    converted++;
    webpFiles.push(webpName);
  }

  return { converted, webpFiles: webpFiles.sort() };
}

const filesBySlug = {};
let totalConverted = 0;

for (const [slug, folder] of Object.entries(GALLERY_FOLDERS)) {
  const { converted, webpFiles } = await convertFolder(folder);
  filesBySlug[slug] = webpFiles;
  totalConverted += converted;
  console.log(`${folder}: ${webpFiles.length} webp (${converted} converted)`);
}

const gallerySource = `import type { MasonryItem } from "@/components/ui/Masonry";

const GALLERY_FOLDERS: Record<string, string> = ${JSON.stringify(GALLERY_FOLDERS, null, 2)};

const GALLERY_FILES: Record<string, string[]> = ${JSON.stringify(filesBySlug, null, 2)};

const MASONRY_HEIGHTS = [520, 380, 440, 300, 360, 480, 420, 340, 560, 400, 500, 320];

export function getProjectMasonryItems(slug: string): MasonryItem[] {
  const folder = GALLERY_FOLDERS[slug];
  const files = GALLERY_FILES[slug];
  if (!folder || !files) return [];

  return files.map((file, index) => ({
    id: \`\${slug}-\${index}\`,
    img: \`/\${folder}/\${encodeURIComponent(file)}\`,
    height: MASONRY_HEIGHTS[index % MASONRY_HEIGHTS.length],
  }));
}
`;

fs.writeFileSync(path.join(SRC, "projectGallery.ts"), gallerySource);
console.log(`Total converted: ${totalConverted}`);
console.log("Updated src/data/projectGallery.ts");
