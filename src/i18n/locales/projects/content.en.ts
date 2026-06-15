import type { ProjectDetailContent } from "@/data/projectDetails";

export const projectContent = {
  page: {
    title: "Projects",
    description:
      "Here you can explore our latest projects and case studies.",
    seoDescription: "Explore our projects and case studies",
    back: "← Back to projects",
    visitWebsite: "Visit website",
  },
  labels: {
    services: "Services",
    client: "Client",
    context: "The Context",
    impact: "The Impact",
    uiComponent: "UI Component",
    engineering: "Engineering & Experience",
  },
  items: {
    eamx: {
      title: "EAMX",
      description:
        "Architecture and structural precision brought to the digital plane.",
      services:
        "Digital Strategy, Interaction Design, Advanced Frontend Development.",
      client: "EAMX Arquitectos.",
    },
    compufest: {
      title: "Compufest [1]",
      description:
        "The largest student computing and programming event at UNAM.",
      services: "Digital Strategy, UI/UX Design, Web Development.",
      client: "Compufest / UNAM Student Community.",
    },
    emicarrada: {
      title: "emicarrada.com",
      description:
        "The intersection of software engineering and digital craftsmanship.",
      services: "Art Direction, Advanced Frontend Development, WebGL 3D.",
      client: "Cristopher Carrada.",
    },
    alancrespo_ai: {
      title: "Alan Crespo",
      description:
        "From academia to global leadership in Artificial Intelligence (Deep Tech).",
      services:
        "Visual Identity Design, B2B Positioning Strategy, Content Engineering.",
      client: "Alan Crespo Murillo.",
    },
  },
  details: {
    eamx: {
      tagline:
        "Architecture and structural precision brought to the digital plane.",
      services:
        "Digital Strategy, Interaction Design, Advanced Frontend Development.",
      client: "EAMX Arquitectos.",
      contextTitle: "The Context",
      contextParagraphs: [
        "A contemporary architecture studio that designs spaces with millimetric rigor cannot afford a generic digital portfolio. The challenge with EAMX was to translate their working philosophy — grounded in aesthetics, functionality, and durability — into a web experience.",
        "They needed their platform to do more than display projects in a traditional corporate grid; it had to convey pure, uncompromising innovation. They wanted users to feel spatiality and design from the very first click.",
      ],
      steps: [
        {
          number: "01",
          title: "Strategy: Interaction as a manifesto",
          subtitle:
            "We analyze your brand, your market, and the project's real objective before designing.",
          paragraphs: [
            "We rejected the idea of a passive website entirely. The strategy focused on building a sensory environment where user interaction would set the pace of discovery.",
            "For a market that values design above all else, we decided that every section should behave with its own physical rules. The goal was to create a playful, immersive journey anchored in absolute aesthetic rigor — one that would validate the studio's technical mastery to high-profile clients.",
          ],
        },
        {
          number: "02",
          title: "Design & Development: Digital craftsmanship with applied physics",
          subtitle:
            "We design and build a clear, fast, and differentiated experience.",
          paragraphs: [
            "We pushed the interface to the extreme with monumental typography and brutalist contrast. On the engineering side, we built the site using Next.js and an advanced animation engine to achieve fluid interactions typically seen only in native applications:",
          ],
          bullets: [
            {
              label: "Revealing exploration",
              text: 'We implemented an interactive component on the homepage where users wield their cursor as a "flashlight," tearing through the dark canvas via SVG masks to uncover the studio\'s true vision.',
            },
            {
              label: "Controlled chaos (3D physics)",
              text: "We broke the static grid. The gallery is a canvas where architectural projects float; users can grab, drag, and drop photographs that respond with bounce and three-dimensional tilt physics.",
            },
            {
              label: "Immersive context",
              text: "We integrated a dynamic link system for their standards (such as ISO certifications or cities). On hover, floating cards deploy with high-quality visual previews, keeping users engaged without breaking their reading flow.",
            },
          ],
        },
        {
          number: "03",
          title: "Delivery & Evolution: A high-end digital showroom",
          subtitle:
            "We launch the site and prepare it to grow, measure, and scale.",
          paragraphs: [
            "The result is far more than a landing page; it is a demonstration of technical capability. We close the journey with a dynamically lit stage that elevates the call to action, inviting conversion in a theatrical way.",
            "We delivered a robust, optimized platform capable of handling complex interactions without sacrificing load-time milliseconds. EAMX's digital ecosystem is now positioned as a work of design in its own right, with a component architecture ready to scale and integrate future projects with the same level of spectacle.",
          ],
        },
      ],
      impactQuote:
        "We wanted our website to reflect the same obsession with detail and innovation that we put into our physical works, but every agency offered us boring catalogs. The team immediately understood that we needed an experience, not a brochure. Watching users play with our gallery and discover the site is exactly the same sense of wonder we aim for when someone enters one of our buildings. They brought our digital presentation to the same level as our architecture.",
      impactAttribution: "Project Direction, EAMX",
    } satisfies ProjectDetailContent,

    compufest: {
      tagline:
        "The largest student computing and programming event at UNAM.",
      services: "Digital Strategy, UI/UX Design, Web Development.",
      client: "Compufest / UNAM Student Community.",
      contextTitle: "The Context",
      contextParagraphs: [
        "An event of this magnitude demands a digital presence to match. Initially, the vision for Compufest was conservative: a basic static page circulated through word of mouth. However, to establish a first-class hackathon and attract key players in the tech industry, the platform had to be far more than a simple digital brochure — it had to be a statement of intent.",
        "This is where we stepped in to elevate the proposal, transforming a university idea into a digital brand attractive to industry giants and the developer community.",
      ],
      steps: [
        {
          number: "01",
          title: "Strategy: Vision beyond the code",
          subtitle:
            "We analyze the brand, the market, and the project's real objective before designing.",
          paragraphs: [
            "The main challenge was not simply informing about dates and schedules, but building immediate credibility. We identified that the target audience — engineering students, experienced developers, and, crucially, high-profile corporate sponsors — required an experience that spoke their technical language.",
            "We shifted the original strategy: instead of a generic page, we conceptualized a digital hub designed specifically to validate the event's scale, facilitate mass registration, and serve as an infallible sales tool for securing speakers and strategic partnerships.",
          ],
        },
        {
          number: "02",
          title: "Design & Development: Hacker aesthetics, premium engineering",
          subtitle:
            "We design and build a clear, fast, and differentiated experience.",
          paragraphs: [
            'The art direction drew on the classic imagery of computing, elevated to high-end web design standards. We implemented a dark-mode interface accented with monospaced typefaces and visual elements inspired by ASCII art and command terminals. This "raw," technical aesthetic resonated immediately with the programming community.',
            "On the engineering side, development focused on speed, architectural clarity, and precision in every interaction. We built an interface that is not only visually striking but also handles the hackathon's information load, schedules, and speaker profiles with absolute fluidity, applying Swiss design principles: maximum legibility, intentional use of negative space, and elimination of visual noise.",
          ],
        },
        {
          number: "03",
          title: "Delivery & Evolution: From university to industry",
          subtitle:
            "We launch the site and prepare it to grow, measure, and scale.",
          paragraphs: [
            "The site launch marked a turning point in Compufest's organization. The web platform became the event's growth engine, enabling organizers to project an institutional, highly professional image.",
            "The result of this digital infrastructure was decisive: the event secured backing from major international sponsors (including Google for Education), attracted entire tech communities, and filled its speaker lineup. The delivered codebase served not only edition [1] but also established a robust architecture ready to scale in future festival iterations.",
          ],
        },
      ],
      impactQuote:
        "We didn't have a website for our event. We were simply going to put up a page, pass it around by word of mouth, and hope for the best. But Chiiko convinced us not to do that, and it was one of the best decisions we could have made for the event. Without the website, we would never have filled our speaker lineup, attracted communities and sponsors, or had the foundation to showcase the hackathon to the world. The largest student computing and programming event at UNAM was also made possible by Chiiko.",
      impactAttribution: "Organizing Team, Compufest",
    } satisfies ProjectDetailContent,

    emicarrada: {
      tagline:
        "The intersection of software engineering and digital craftsmanship.",
      services: "Art Direction, Advanced Frontend Development, WebGL 3D.",
      client: "Cristopher Carrada.",
      contextTitle: "The Context",
      contextParagraphs: [
        "A developer's portfolio should not be limited to listing skills; it must be irrefutable proof of them. The challenge of this project was to build a deep visual identity — anchored in navy blue tones and orange accents — that could blend a technical and scientific profile with a modern, polished editorial presentation.",
        "We were not looking for a static digital résumé, but an interactive ecosystem that reflected the precision of high-end software engineering and the attention to detail of structural minimalism.",
      ],
      steps: [
        {
          number: "01",
          title: "Strategy: Show, don't just tell",
          subtitle:
            "We analyze the brand, the market, and the project's real objective before designing.",
          paragraphs: [
            "The core strategy was to use interaction as a narrative language. Instead of predictable text blocks, we decided that every section of the site should invite users to interact with the code.",
            'We defined a coherent thematic identity orbiting the figure of the "developer/scientist/creator." The symbols of this identity — 3D glasses and the command terminal — became the primary vehicles for navigating biography, services, and portfolio, transforming visitors from passive readers into active users.',
          ],
        },
        {
          number: "02",
          title: "Design & Development: Interactive architecture",
          subtitle:
            "We design and build a clear, fast, and differentiated experience.",
          paragraphs: [
            "The site was built under a strict philosophy of performance and fluidity. From the animated SVG preloader that gives way to a cascading entry of elements, every interaction is orchestrated to create a layered construction sensation.",
            "We implemented advanced interface components that challenge the traditional layout:",
          ],
          table: [
            {
              component: "Interactive 3D Hero",
              description:
                "A three-dimensional glasses model manipulable by the user, rendered in WebGL with real-time light and shadow physics.",
            },
            {
              component: "Functional Terminal (CLI)",
              description:
                "The biography and contact form are not plain text; they are functional command-line interfaces that respond to real user inputs.",
            },
            {
              component: "Editorial Gallery (Blog)",
              description:
                "A navigation pattern inspired by native iOS design (Apple Cards Carousel). Cards expand to full screen with a backdrop blur effect.",
            },
            {
              component: "Expandable Cards",
              description:
                "The project portfolio uses expansion and blur animations to reveal technological architectures without leaving the main view.",
            },
          ],
        },
        {
          number: "03",
          title: "Delivery & Evolution: A technical manifesto",
          subtitle:
            "We launch the site and prepare it to grow, measure, and scale.",
          paragraphs: [
            "The final deployment is a robust, highly optimized platform that serves as an operations hub for a personal brand. The site incorporates a modular architecture that allows future integration of experimental components (such as gravity physics on cards or dynamic docks).",
            "The result is a portfolio that filters out the noise: it attracts clients and collaborators who value technical excellence, immediately establishing a quality standard and confirming that high-level design and clean code are inseparable.",
          ],
        },
      ],
      impactQuote:
        "Designing your own portfolio is probably the most complex challenge for a studio. I needed a space that not only documented my projects in technology and science, but spoke for itself about my quality standards. The decision to integrate real 3D environments and interactive terminals completely changed the perception of my profile. The site stopped being a simple business card and became a real-time demonstration of what digital craftsmanship means. It has been key to establishing technical authority from the very first second.",
      impactAttribution:
        "Cristopher Carrada, Software Developer and Founder of Chiiko",
    } satisfies ProjectDetailContent,

    alancrespo_ai: {
      tagline:
        "From academia to global leadership in Artificial Intelligence (Deep Tech).",
      services:
        "Visual Identity Design, B2B Positioning Strategy, Content Engineering.",
      client: "Alan Crespo Murillo.",
      contextTitle: "The Context",
      contextParagraphs: [
        'In an era saturated with incomprehensible algorithms ("Black Boxes") and generic profiles, Alan Crespo\'s technical authority was fragmented and invisible to the algorithm. Despite possessing deep scientific knowledge, his digital presence failed to retain audiences or project his true value.',
        'The challenge was not to create a polished résumé, but to build the visual and narrative infrastructure of an institution. We needed to transform his profile to establish him as the undisputed reference for the "Scientist-Founder" model.',
      ],
      steps: [
        {
          number: "01",
          title: "Strategy: From noise to auditable authority",
          subtitle:
            "We analyze your brand, your market, and the project's real objective before designing.",
          paragraphs: [
            "We quickly identified that the market (C-level executives and decision-makers) was not looking for motivation or basic tutorials; they were terrified of the legal and operational risk of implementing AI incorrectly.",
            'We changed the angle entirely. We positioned Alan not as a tech enthusiast, but as a Systemic Risk Advisor and Architect of Trust. The strategy centered on the "White Box" and technological governance, creating a defensive moat built on hard science.',
          ],
        },
        {
          number: "02",
          title: 'Design & Development: The aesthetics of the "White Box"',
          subtitle:
            "We design and build a clear, fast, and differentiated experience.",
          paragraphs: [
            "We translated this strategic vision into a highly structured brand and content ecosystem:",
            "High-Level Visual Identity: We designed a polygonal isotype (the hummingbird and the brain) that reflects technical precision and systemic vision. We implemented a sophisticated color palette with Muted Pastel Orange (#ccb176), Sky Blue (#93b1cd), and Vivid Red accents (#ce1125), supported by bold typefaces (Archivo Black and Garet) to ensure editorial clarity.",
            "Modular Content Engineering:",
          ],
          bullets: [
            {
              label: "LinkedIn",
              text: 'We deployed "Heavy Artillery" aimed at corporate audiences, addressing legal risks and systems architecture.',
            },
            {
              label: "X (Twitter)",
              text: 'We built a "Deep Tech" debate laboratory, translating complex milestones such as Whole Brain Emulation and Reinforcement Learning to generate intellectual friction.',
            },
            {
              label: "Instagram",
              text: 'We humanized the genius, documenting his "Scientific Lifestyle" at conferences and chess boards to build aspirational status.',
            },
          ],
        },
        {
          number: "03",
          title: "Delivery & Evolution: Dominating the B2B ecosystem",
          subtitle:
            "We launch the ecosystem and prepare it to grow, measure, and scale.",
          paragraphs: [
            "The impact was immediate and exponential. In just 30 days, we went from a flat line of inactivity to generating over 11,300 cross-platform organic impressions (6.1K on Instagram, 3.2K on LinkedIn, and 2K on X) with zero dollars invested in advertising.",
            "Technical performance exceeded any industry standard. On X, we achieved a massive Engagement Rate of 13.6% (when the industry average is 1% to 2%), validating the brand before a tech elite of verified followers. Today, the infrastructure is ready for Phase 2: taking visual production to Tokyo to position Alan as a global thought leader.",
          ],
        },
      ],
      impactQuote:
        "Moving from academia and private consulting into the public eye is complex. I had the knowledge, but I was trapped in my own 'Black Box.' The team didn't just design a logo; they audited my discourse, identified exactly which part of my technical knowledge held thousands of dollars in value for the corporate market, and packaged it into an impeccable visual identity. Going from being invisible to the algorithm to generating debates with the tech elite on X and executives on LinkedIn in a single month is proof that strategic design and high-friction content are the best investment.",
      impactAttribution: "Alan Crespo Murillo, Scientist-Founder",
    } satisfies ProjectDetailContent,
  },
};
