import type { BlogPageContent } from "./types";

const body = (paragraphs: string[]) => paragraphs;

export const blogPageContent: BlogPageContent = {
  seoTitle: "Blog | Chiikö",
  seoDescription: "来自工作室的纪实：走访 Google 与 Pinterest、推进 Sophie Gomez 项目、在 UNAM 开展工作坊与讲座、支持 Compufest。",
  title: "博客",
  description: "Chiikö 工作室关于设计、开发与数字战略的实践思考。",
  readMore: "阅读文章",
  readTimeLabel: "分钟阅读",
  backToBlog: "← 返回博客",
  posts: [
    {
      slug: "google-ecosystem-visit",
      title: "生态中的灵感：走访 Google",
      excerpt: "交互设计并非只在屏幕前诞生，而是源于对技术生态的整体理解。",
      category: "灵感",
      body: body([
        "交互设计不是在屏幕前封闭完成的工作，而是在理解整个技术生态后逐步成熟的方法。",
        "本月我们走访了位于墨西哥城的 Google 办公空间，重点观察其团队如何处理规模化体验、用户路径与物理空间和数字界面的衔接。",
        "对于像 Chiikö 这样的精品工作室，这类交流并不意味着复制既有公式，而是提炼一致性、可达性与性能方面可落地的经验。",
        "回到工作室后，我们带着更清晰的判断标准，重新聚焦每一个产品决策。",
      ]),
    },
    {
      slug: "pinterest-visual-culture-visit",
      title: "视觉策展与文化：走访 Pinterest",
      excerpt: "有意图的设计离不开持续的视觉训练与对创意群体行为的理解。",
      category: "视觉文化",
      body: body([
        "要持续进行有意图的设计，必须不断训练视觉判断，并理解创意群体的行为逻辑。",
        "在墨西哥城创新空间走访中，我们参观了 Pinterest，深入感受其如何把灵感与视觉策展转化为日常数字体验。",
        "这次交流帮助我们理解视觉趋势如何转译为直观流畅的界面，并在当代文化语境中保持清晰表达。",
        "回到 Chiikö 后，我们正把这些收获用于下一批交付物的视觉叙事结构。",
      ]),
    },
    {
      slug: "sophie-gomez-digital-identity",
      title: "为舞台打磨数字身份：Sophie Gomez 新项目",
      excerpt: "把艺术生涯转化为数字体验，需要感性理解与结构化表达并行。",
      category: "项目",
      body: body([
        "将艺术轨迹转译为数字体验，需要细致倾听、严谨排版与清晰叙事三者协同。",
        "我们已正式启动与演员 Sophie Gomez 的合作，为其全新官方网站与作品集 sophiegomez.me 进行设计与开发。",
        "项目目标是以瑞士设计原则构建极简环境，尽量消除视觉噪声，让她在镜头与舞台上的作品成为绝对核心。",
        "目前我们处于信息架构与概念设计阶段，完整案例将很快发布。",
      ]),
    },
    {
      slug: "unam-democratic-design-workshop",
      title: "视觉基础：理学院民主设计工作坊",
      excerpt: "优秀设计依赖结构清晰，而非工具复杂。",
      category: "社区",
      body: body([
        "设计质量并不由工具复杂度决定，而取决于信息结构是否清晰有序。",
        "本月我们重返 UNAM 理学院，开展一场关于构图与表达的实践工作坊。",
        "我们没有把重点放在 Canva 的功能操作，而是围绕通用原则展开：字阶层级、留白控制、对比关系与视觉平衡。",
        "看到不同科学方向的学生把这些规则应用到研究呈现中，我们更加确信设计是帮助组织思路、促进理解的民主工具。",
      ]),
    },
    {
      slug: "anti-marketing-unam",
      title: "反营销：在 UNAM 讨论相关性高于噪声",
      excerpt: "在内容过载的数字环境中，真实与意图才是长期优势。",
      category: "战略",
      body: body([
        "当数字渠道被同质内容填满时，真实可信的定位比单纯数量更有价值。",
        "我们在 UNAM 理学院进行了第二场讲座，以反营销为核心视角讨论当代品牌策略。",
        "我们质疑虚荣指标、算法过饱和与高压式销售话术，并分享如何通过真实价值与诚实表达建立长期权威。",
        "与科学背景受众的对话让我们的观点持续接受现实检验，也再次证明相关性终将战胜噪声。",
      ]),
    },
    {
      slug: "compufest-2026-sponsors",
      title: "支持本地创造者：Compufest 2026 官方赞助",
      excerpt: "独立技术文化的成长来自集体支持，而非偶然。",
      category: "社区",
      body: body([
        "独立技术生态不会自然扩张，它依赖对共享空间的持续投入与支持。",
        "Chiikö 作为官方赞助方加入 Compufest 2026，支持这一汇聚开发者、设计者与技术爱好者的社区活动。",
        "这对我们而言不只是标识曝光，更是对创造者文化、开放交流与深思熟虑的软件实践的实际承诺。",
        "活动期间建立的连接与对话给了我们巨大动力，推动我们继续提升数字设计与开发的边界。",
      ]),
    }
  ],
};
