import type { ProjectDetailContent } from "@/data/projectDetails";
import { useProjectTranslations } from "@/hooks/useProjectTranslations";

interface ProjectCaseStudyProps {
  content: ProjectDetailContent;
}

export default function ProjectCaseStudy({ content }: ProjectCaseStudyProps) {
  const { labels } = useProjectTranslations();

  return (
    <div className="space-y-16 mt-16">
      <section className="space-y-4 border-t border-gray-200 pt-12">
        <p className="text-xl md:text-2xl font-medium text-black leading-relaxed">
          {content.tagline}
        </p>
        <div className="space-y-1 text-gray-600">
          <p>
            <span className="font-semibold text-black">{labels.services}:</span>{" "}
            {content.services}
          </p>
          <p>
            <span className="font-semibold text-black">{labels.client}:</span>{" "}
            {content.client}
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          {content.contextTitle}
        </h2>
        {content.contextParagraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      {content.steps.map((step) => (
        <section key={step.number} className="space-y-6">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 mb-2">
              {step.number}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              {step.title}
            </h2>
            <p className="text-gray-500 italic">{step.subtitle}</p>
          </div>

          {step.paragraphs?.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {step.bullets && (
            <ul className="space-y-4">
              {step.bullets.map((bullet) => (
                <li key={bullet.label} className="text-gray-600 leading-relaxed">
                  <span className="font-semibold text-black">
                    {bullet.label}:
                  </span>{" "}
                  {bullet.text}
                </li>
              ))}
            </ul>
          )}

          {step.table && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-semibold text-black">
                      {labels.uiComponent}
                    </th>
                    <th className="py-3 font-semibold text-black">
                      {labels.engineering}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {step.table.map((row) => (
                    <tr
                      key={row.component}
                      className="border-b border-gray-100"
                    >
                      <td className="py-4 pr-4 align-top font-medium text-black">
                        {row.component}
                      </td>
                      <td className="py-4 align-top text-gray-600">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      <section className="space-y-6 border-t border-gray-200 pt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          {labels.impact}
        </h2>
        <blockquote className="border-l-4 border-black pl-6">
          <p className="text-gray-600 leading-relaxed italic">
            &ldquo;{content.impactQuote}&rdquo;
          </p>
          <footer className="mt-4 text-sm font-semibold text-black not-italic">
            — {content.impactAttribution}
          </footer>
        </blockquote>
      </section>
    </div>
  );
}
