const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const works = [
  {
    title: "品牌视觉系统",
    category: "Brand Identity",
    description: "为新品牌建立主视觉、延展规范与传播素材，让品牌在不同场景下都保持统一记忆点。",
    tags: ["Logo", "KV", "Guideline"],
    gradient:
      "linear-gradient(135deg, rgba(8,22,59,1) 0%, rgba(51,34,102,1) 45%, rgba(253,181,21,0.92) 100%)",
  },
  {
    title: "活动主视觉包装",
    category: "Campaign Visual",
    description: "围绕活动主题输出海报、社媒素材与落地页视觉，强化传播节奏与点击欲望。",
    tags: ["Poster", "Social", "Landing"],
    gradient:
      "linear-gradient(135deg, rgba(255,103,103,1) 0%, rgba(146,83,255,1) 52%, rgba(8,22,59,1) 100%)",
  },
  {
    title: "电商专题页面",
    category: "Digital Experience",
    description: "从首屏到信息流组织，让页面在销售转化与视觉表达之间取得更好的平衡。",
    tags: ["E-commerce", "Banner", "UX"],
    gradient:
      "linear-gradient(135deg, rgba(253,181,21,1) 0%, rgba(255,232,187,1) 36%, rgba(15,52,121,1) 100%)",
  },
];

const skills = [
  { name: "Ps", label: "Photoshop", level: "熟悉度：80%", color: "#25c6ff", shadow: "rgba(37, 198, 255, 0.22)" },
  { name: "Ai", label: "Illustrator", level: "熟练度：60%", color: "#ff9b2f", shadow: "rgba(255, 155, 47, 0.22)" },
  { name: "Fg", label: "Figma", level: "熟练度：75%", color: "#ff61cd", shadow: "rgba(255, 97, 205, 0.2)" },
  { name: "Ae", label: "After Effects", level: "熟练度：60%", color: "#944cff", shadow: "rgba(148, 76, 255, 0.22)" },
];

const experiences = [
  {
    company: "XXXX品牌游戏公司",
    role: "担任平面设计师",
    date: "2021/7 - 2023/9",
    items: [
      "结合市场活动节奏，完成产品宣传 KV 与系列物料设计。",
      "负责活动专题页、运营 banner 与社媒视觉包装的持续更新。",
      "参与游戏上线传播素材制作与投放优化，提升整体点击效果。",
      "与运营、市场、策划协作，统一不同渠道的传播表达。",
      "基于数据反馈，迭代版式结构与视觉优先级。",
    ],
  },
  {
    company: "XXXXX品牌广告公司",
    role: "担任视觉设计师",
    date: "2023/10 - 至今",
    items: [
      "负责品牌活动与电商页面的整体视觉方向及落地执行。",
      "输出天猫、京东、抖音等平台的推广主图与营销物料。",
      "围绕产品特性设计节奏鲜明、重点清晰的传播视觉。",
      "参与创意提案与视觉演绎，提升方案呈现完成度。",
      "沉淀可复用的版式组件，提高团队协作效率。",
    ],
  },
];

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-medium tracking-[0.08em] text-[#4a4a4a] sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-[#fdb515]" />
      <p className="mt-6 text-sm leading-8 text-[#7c7c7c] sm:text-base">{subtitle}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#404040]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-[#fdb515]"
          >
            EVEY
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#7f7f7f] transition hover:text-[#fdb515]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#fdb515] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0c183d] transition hover:-translate-y-0.5 md:inline-flex"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-[#08163b] text-white">
        <div className="hero-glow" />
        <div className="hero-ribbon hero-ribbon--one" />
        <div className="hero-ribbon hero-ribbon--two" />
        <div className="hero-ribbon hero-ribbon--three" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 lg:min-h-[560px] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-white/65">
              Brand Designer
            </p>
            <h1 className="mt-4 text-[4.6rem] font-semibold leading-none text-[#fdb515] sm:text-[6rem] lg:text-[7rem]">
              Hey
            </h1>
            <div className="mt-6 max-w-md space-y-3">
              <p className="text-xl font-medium sm:text-3xl">
                我是设计师 <span className="text-[#fdb515]">— Evey</span>
              </p>
              <p className="text-sm leading-8 text-white/72 sm:text-base">
                擅长品牌视觉、活动主 KV、社媒包装与数字页面设计，
                用有重点、有节奏、有留白的视觉语言让内容更容易被看见。
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#works"
                className="rounded-full bg-[#fdb515] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0c183d] transition hover:-translate-y-0.5"
              >
                View Works
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white/90 transition hover:border-white/40 hover:bg-white/8"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[360px] rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                Creative Focus
              </p>
              <div className="mt-10 space-y-6">
                {[
                  ["01", "品牌识别 / Brand Identity"],
                  ["02", "活动包装 / Campaign Visual"],
                  ["03", "页面设计 / Digital Experience"],
                ].map(([index, text]) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-white/10 pb-4"
                  >
                    <span className="text-xs uppercase tracking-[0.22em] text-[#fdb515]">
                      {index}
                    </span>
                    <span className="text-sm text-white/78">{text}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-7 text-white/58">
                用风格统一的视觉系统，让品牌、活动与页面在不同渠道里都保持记忆点。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-18 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-6 lg:grid-cols-[200px_1fr_auto]">
            <div>
              <p className="text-2xl font-medium tracking-[0.08em] text-[#404040] sm:text-3xl">
                WELCOME
              </p>
              <div className="mt-5 h-[3px] w-12 rounded-full bg-[#fdb515]" />
            </div>
            <p className="max-w-xl text-sm leading-8 text-[#7c7c7c] sm:text-base">
              我的座右铭是：对设计保持好奇心、目的和热情，始终如一。先把重点做对，
              再让画面更美。
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#fdb515] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
            >
              More
            </a>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[2.25rem] bg-[linear-gradient(180deg,#fffdf8_0%,#fffaf0_100%)] px-6 py-8 shadow-[0_30px_80px_rgba(17,29,68,0.12)] lg:px-8 lg:py-10">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-[#fdb515]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#fff9eb_0%,#fffdf8_100%)] p-8 sm:min-h-[420px]">
                <div className="profile-arc" />
                <div className="profile-badge">DESIGNER</div>
                <div className="absolute inset-x-0 bottom-0 h-28 bg-[#fdb515]" />
                <div className="absolute left-8 top-24 text-[9rem] font-semibold leading-none text-[#121212] sm:text-[12rem]">
                  E
                </div>
                <div className="absolute bottom-10 left-8 max-w-[280px] rounded-[1.5rem] bg-white/92 p-6 shadow-[0_18px_40px_rgba(17,29,68,0.08)]">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#fdb515]">
                    Visual Portfolio
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#666666]">
                    通过鲜明重点、舒适留白和有节奏的信息层级，
                    让品牌表达更清楚，也更容易留下记忆点。
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white/96 px-7 py-8 shadow-[0_20px_50px_rgba(17,29,68,0.08)] sm:px-9 sm:py-10">
                <p className="text-sm text-[#747474]">视觉设计师</p>
                <h2 className="mt-2 text-3xl font-medium text-[#2f2f2f] sm:text-4xl">
                  Evey
                </h2>
                <div className="mt-5 h-[3px] w-12 rounded-full bg-[#fdb515]" />
                <p className="mt-6 text-sm leading-8 text-[#6f6f6f] sm:text-base">
                  我不是为了做满页面而设计，而是把内容放在正确的位置。
                  目前专注于品牌视觉、营销页面和内容包装，希望让信息传达更快、
                  画面气质更稳。
                </p>

                <div className="mt-8 grid gap-4 border-t border-[#ececec] pt-6 text-sm text-[#6b6b6b] sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#b3b3b3]">
                      Focus
                    </p>
                    <p className="mt-2">Brand / Campaign / Digital</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#b3b3b3]">
                      Based in
                    </p>
                    <p className="mt-2">Remote Friendly</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#b3b3b3]">
                      Email
                    </p>
                    <p className="mt-2">evey@portfolio.com</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#b3b3b3]">
                      Tools
                    </p>
                    <p className="mt-2">Photoshop / Illustrator / Figma / AE</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-[#666666]">
                  {[
                    "Behance",
                    "Dribbble",
                    "LinkedIn",
                    "Resume PDF",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#ece7d6] bg-[#fffaf0] px-4 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="bg-[#fcfcfc] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            title="精选作品"
            subtitle="围绕品牌、活动与数字页面输出一套更完整的视觉表达，用稳定风格提升识别度与转化效率。"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {works.map((work) => (
              <article
                key={work.title}
                className="gold-corner rounded-[2rem] bg-white p-4 shadow-[0_20px_50px_rgba(17,29,68,0.08)] transition duration-300 hover:-translate-y-1"
              >
                <div
                  className="relative overflow-hidden rounded-[1.5rem] p-6 text-white"
                  style={{ background: work.gradient }}
                >
                  <div className="absolute right-[-24px] top-[-32px] h-32 w-32 rounded-full bg-white/15" />
                  <div className="absolute bottom-[-42px] left-[-10px] h-28 w-44 rounded-full bg-[#fdb515]/25 blur-xl" />
                  <p className="relative text-xs uppercase tracking-[0.28em] text-white/70">
                    {work.category}
                  </p>
                  <h3 className="relative mt-16 text-2xl font-medium">{work.title}</h3>
                </div>

                <div className="px-2 pb-4 pt-6">
                  <p className="text-sm leading-8 text-[#6f6f6f]">{work.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#fff6de] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[#9b7d1c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            title="技能掌握"
            subtitle="对设计保持好奇心、目的和热情，始终如一。常用工具熟练，能够独立完成从概念到输出的完整流程。"
          />

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.name} className="text-center">
                <div
                  className="mx-auto flex h-26 w-26 items-center justify-center rounded-[1.65rem] border-[5px] bg-[#121212] text-4xl font-medium text-white shadow-[0_20px_40px_rgba(17,29,68,0.1)]"
                  style={{ borderColor: skill.color, color: skill.color, boxShadow: `0 20px 40px ${skill.shadow}` }}
                >
                  {skill.name}
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#8d8d8d]">
                  {skill.label}
                </p>
                <p className="mt-3 text-xl text-[#404040]">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative overflow-hidden bg-[#f7f7f7] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-[22rem] h-32 bg-white/80" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            title="工作经验"
            subtitle="在不同品牌与项目节奏里，持续训练审美判断、信息组织和多渠道视觉输出能力。"
          />

          <div className="mt-16 grid gap-8 xl:grid-cols-2">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="gold-corner rounded-[2rem] bg-white px-8 py-9 shadow-[0_20px_50px_rgba(17,29,68,0.08)]"
              >
                <p className="text-2xl leading-10 text-[#4a4a4a]">
                  <span className="mr-2 text-[#fdb515]">·</span>
                  {experience.company}
                  <span className="ml-2 text-[#6f6f6f]">（{experience.role}）</span>
                </p>
                <p className="mt-3 text-xl text-[#7c7c7c]">{experience.date}</p>
                <div className="mt-7 border-t border-[#ececec] pt-7">
                  <ol className="space-y-4 text-sm leading-8 text-[#6d6d6d] sm:text-base">
                    {experience.items.map((item, index) => (
                      <li key={item}>
                        {index + 1}、{item}
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#fdb515] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
            >
              More
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="rounded-[2.25rem] bg-[linear-gradient(135deg,#08163b_0%,#10235c_58%,#fdb515_160%)] px-8 py-12 text-white shadow-[0_30px_80px_rgba(17,29,68,0.18)] sm:px-12 sm:py-14">
            <p className="text-xs uppercase tracking-[0.34em] text-white/65">
              Contact
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-medium sm:text-4xl">
                  如果你正在寻找一位能把内容做得更清楚的设计师。
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/72 sm:text-base">
                  第一版先用占位信息搭好结构，后面你只需要把真实作品、头像、链接和简历替换进去，就能很快上线。
                </p>
              </div>
              <a
                href="mailto:evey@portfolio.com"
                className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0c183d] transition hover:-translate-y-0.5"
              >
                evey@portfolio.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-[#8a8a8a] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 Evey. Portfolio concept page.</p>
          <p>Built with Next.js for a fast first version.</p>
        </div>
      </footer>
    </main>
  );
}
