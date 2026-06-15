import type { ReactNode } from "react";
import type { LegalBlock, LegalPageContent } from "@/i18n/locales/shared/types";

const paragraphClass =
  "text-base md:text-lg text-gray-700 leading-relaxed font-light";
const listClass =
  "list-disc list-inside space-y-2 text-base md:text-lg text-gray-700 font-light ml-4";

function linkifyPart(part: string, keyPrefix: string) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const emailPattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  const segments: ReactNode[] = [];
  let remaining = part;
  let index = 0;

  while (remaining.length > 0) {
    const urlMatch = remaining.match(urlPattern);
    const emailMatch = remaining.match(emailPattern);
    const urlIndex = urlMatch ? remaining.indexOf(urlMatch[0]) : -1;
    const emailIndex = emailMatch ? remaining.indexOf(emailMatch[0]) : -1;

    let match: RegExpMatchArray | null = null;
    let matchIndex = -1;

    if (urlIndex >= 0 && (emailIndex < 0 || urlIndex <= emailIndex)) {
      match = urlMatch;
      matchIndex = urlIndex;
    } else if (emailIndex >= 0) {
      match = emailMatch;
      matchIndex = emailIndex;
    }

    if (!match || matchIndex < 0) {
      segments.push(remaining);
      break;
    }

    if (matchIndex > 0) {
      segments.push(remaining.slice(0, matchIndex));
    }

    const value = match[0];
    const href = value.includes("@") ? `mailto:${value}` : value;
    segments.push(
      <a
        key={`${keyPrefix}-${index}`}
        href={href}
        className="text-gray-900 underline hover:opacity-70 transition-opacity"
      >
        {value}
      </a>,
    );
    index += 1;
    remaining = remaining.slice(matchIndex + value.length);
  }

  return segments;
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-medium">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return (
          <span key={index}>{linkifyPart(part, `rt-${index}`)}</span>
        );
      })}
    </>
  );
}

function LegalBlockView({
  block,
  className,
}: {
  block: LegalBlock;
  className?: string;
}) {
  if (block.type === "h3") {
    return (
      <h3 className="text-xl md:text-2xl font-medium text-black mb-4">
        {block.text}
      </h3>
    );
  }

  if (block.type === "ul" && block.items) {
    return (
      <ul className={`${listClass}${className ? ` ${className}` : ""}`}>
        {block.items.map((item, index) => (
          <li key={index}>
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "p" && block.text) {
    return (
      <p className={`${paragraphClass}${className ? ` ${className}` : ""}`}>
        <RichText text={block.text} />
      </p>
    );
  }

  return null;
}

function BlockGroup({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <LegalBlockView key={index} block={block} />
      ))}
    </>
  );
}

export default function LegalDocumentView({ content }: { content: LegalPageContent }) {
  return (
    <>
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          {content.title}
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-light">
          <RichText text={content.lastUpdated} />
        </p>
      </div>

      {content.intro.length > 0 && (
        <div className="mb-12 md:mb-16">
          {content.intro.map((block, index) => (
            <LegalBlockView
              key={index}
              block={block}
              className={index < content.intro.length - 1 ? "mb-4" : undefined}
            />
          ))}
        </div>
      )}

      {content.sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-12 md:mb-16">
          {section.title ? (
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
              {section.title}
            </h2>
          ) : null}
          {section.blocks.map((block, blockIndex) => {
            const next = section.blocks[blockIndex + 1];
            const addMargin =
              (block.type === "p" && next && next.type !== "p") ||
              (block.type === "ul" && next !== undefined);
            return (
              <LegalBlockView
                key={blockIndex}
                block={block}
                className={addMargin ? "mb-4" : undefined}
              />
            );
          })}
        </section>
      ))}

      {content.closing && content.closing.length > 0 && (
        <div className="mb-12 md:mb-16">
          <BlockGroup blocks={content.closing} />
        </div>
      )}

      {content.footer && content.footer.length > 0 && (
        <div className="border-t border-gray-200 pt-8 mt-12">
          {content.footer.map((block, index) => (
            <LegalBlockView
              key={index}
              block={{
                ...block,
                type: "p",
                text: block.text,
              }}
              className="text-sm md:text-base text-gray-600"
            />
          ))}
        </div>
      )}
    </>
  );
}
