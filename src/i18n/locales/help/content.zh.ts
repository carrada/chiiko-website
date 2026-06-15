import type { HelpPageContent } from "../shared/types";

export const helpPageContent: HelpPageContent = {
  title: "帮助中心",
  subtitle: "找到最适合您咨询的联系渠道",
  intro: [
    "在 Chiikö，我们希望您的体验清晰、简单、无摩擦。因此，我们根据咨询类型组织联系渠道，让您的消息从一开始就到达合适的团队。",
    "如果您不确定该联系谁，没关系 — 我们会查看您的消息并在内部转达。",
  ],
  sectionTitle: "我们能如何帮助您？",
  sectionIntro: "以下是根据您的需求最合适的联系选项：",
  channels: [
    {
      title: "一般咨询",
      description:
        "如果您对我们的服务、流程、时间、可用性有疑问，或正在探索 Chiikö 是否适合您的项目，这是最好的起点。",
      emailLabel: "联系邮箱：",
      email: "hello@chiiko.design",
    },
    {
      title: "付款与账单",
      description:
        "有关付款、发票、账单问题或其他行政和财务事宜，请通过此渠道联系我们。",
      emailLabel: "联系邮箱：",
      email: "finance@chiiko.design",
    },
    {
      title: "合同与法律事务",
      description:
        "如果您的咨询涉及合同、协议、条款和条件或任何法律相关话题，此渠道能让我们更准确地为您提供协助。",
      emailLabel: "联系邮箱：",
      email: "councel@chiiko.design",
    },
    {
      title: "技术支持与网站问题",
      description:
        "如果您遇到技术问题、网站错误、性能问题，或项目上线后需要支持，这是合适的渠道。",
      emailLabel: "联系邮箱：",
      email: "support@chiiko.design",
    },
  ],
  responseTitle: "响应时间",
  responseText:
    "我们的团队在工作日的营业时间内查看消息。我们尽力尽快回复，并提供清晰、有用的解决方案。",
  closing:
    "感谢您对 Chiikö 的信任。我们随时在您项目的每个阶段为您提供支持。",
};
