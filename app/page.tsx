const navItems = [
  { href: "#works", label: "WORK" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

const profileInfo = {
  givenName: "EVEY",
  familyName: "GUAN",
  education: {
    title: "Central Academy of Fine Arts",
    lines: ["Graduated from CAFA in 2014", "Animation major"],
  },
  experience: {
    title: "10 years of UI/UX design experience",
    lines: ["3/10  →  B2B product in Beijing", "7/10  →  Blockchain / Web3 in Shanghai"],
  },
  contact: [
    ["Email", "495998553@qq.com"],
    ["Phone", "86 139 367 39333"],
    ["Wechat", "Evey1_276709"],
  ],
};

const timelineItems = [
  { year: "2025", title: "AGLD / AWE / World.fun" },
  { year: "2024", title: "Web3 Project / Pixel Game" },
  { year: "2021", title: "STP / Adventure Forge" },
  { year: "2019", title: "Ballet Crypto" },
  { year: "2018", title: "BTCC" },
  { year: "2015", title: "Worktile" },
  { year: "", title: "Freelancer" },
];

const projectCards = [
  {
    title: "Paraton",
    subtitle: "Freelancer",
    meta: "Website / Logo",
    accent: "from-[#05070c] via-[#08111f] to-[#0a1629]",
    artwork: (
      <div className="portfolio-cover portfolio-cover--paraton">
        <div className="portfolio-cover__grid" />
        <div className="portfolio-cover__beam" />
        <div className="portfolio-cover__mark">
          <span className="portfolio-cover__icon portfolio-cover__icon--paraton" />
          <span>ParaTon</span>
        </div>
      </div>
    ),
  },
  {
    title: "GameTalk",
    subtitle: "Freelancer",
    meta: "Website / App",
    accent: "from-[#242424] via-[#2f2f2f] to-[#1b1b1b]",
    artwork: (
      <div className="portfolio-cover portfolio-cover--gametalk">
        <div className="portfolio-window">
          <div className="portfolio-window__bar" />
          <div className="portfolio-window__hero">
            <div className="portfolio-window__headline" />
            <div className="portfolio-window__headline short" />
            <div className="portfolio-window__chips">
              <span />
              <span />
            </div>
          </div>
          <div className="portfolio-window__stats">
            <span />
            <span />
            <span />
          </div>
          <div className="portfolio-window__tiles">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Supernet",
    subtitle: "Freelancer",
    meta: "Website",
    accent: "from-[#0e2cff] via-[#1b4cff] to-[#3b6bff]",
    artwork: (
      <div className="portfolio-cover portfolio-cover--supernet">
        <div className="portfolio-cover__dots" />
        <div className="portfolio-cover__wave" />
        <div className="portfolio-cover__mark portfolio-cover__mark--light">
          <span className="portfolio-cover__icon portfolio-cover__icon--globe" />
          <span>Supernet</span>
        </div>
      </div>
    ),
  },
  {
    title: "Message+",
    subtitle: "Freelancer",
    meta: "Website / App",
    accent: "from-[#08c44f] via-[#0fcb52] to-[#15d95c]",
    artwork: (
      <div className="portfolio-cover portfolio-cover--message">
        <div className="portfolio-cover__message-icon">
          <span className="portfolio-cover__message-bubble" />
          <span className="portfolio-cover__message-plus" />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(17,17,17,0.94)] backdrop-blur-md">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-3 sm:px-7 lg:px-10">
          <a href="#home" className="text-[12px] tracking-[0.02em] text-[var(--foreground-soft)]">
            2015
          </a>

          <nav className="flex items-center justify-center gap-7 text-[12px] sm:gap-12 lg:gap-20">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={index === 0 ? "font-medium tracking-[0.02em] text-[var(--foreground)]" : "tracking-[0.02em] text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <span className="text-[12px] tracking-[0.02em] text-[var(--foreground-soft)]">2026</span>
        </div>
      </header>

      <section id="home" className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1fr_1fr]">
          <div className="border-b border-[var(--line)] px-5 py-7 sm:px-7 lg:min-h-[430px] lg:border-b-0 lg:border-r lg:px-10 lg:py-8">
            <div className="grid grid-cols-1 gap-y-1 leading-none sm:gap-y-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-10">
              <h1 className="text-[3.2rem] font-semibold tracking-[-0.085em] text-[var(--foreground)] sm:text-[4.4rem] lg:text-[5.45rem] xl:text-[6.5rem]">
                {profileInfo.givenName}
              </h1>
              <h1 className="text-[3.2rem] font-semibold tracking-[-0.085em] text-[var(--foreground-dim)] sm:text-[4.4rem] lg:text-[5.45rem] xl:text-[6.5rem] lg:justify-self-start">
                {profileInfo.familyName}
              </h1>
            </div>

            <div id="about" className="mt-6 grid gap-7 text-[13px] leading-[1.5] text-[var(--foreground-soft)] sm:grid-cols-2 lg:mt-5 lg:max-w-[660px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-7">
              <div>
                <p className="text-[0.96rem] text-[var(--foreground)]">{profileInfo.education.title}</p>
                <div className="mt-2 space-y-1.5 text-[var(--foreground-muted)]">
                  {profileInfo.education.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[0.96rem] text-[var(--foreground)]">{profileInfo.experience.title}</p>
                <div className="mt-2 space-y-1.5 text-[var(--foreground-muted)]">
                  {profileInfo.experience.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-[var(--line)] pt-13 sm:mt-16 lg:mt-18 lg:pt-16">
              <div className="max-w-[300px]">
                <p className="text-[0.96rem] text-[var(--foreground)]">Contact</p>
                <dl className="mt-3 grid grid-cols-[72px_1fr] gap-y-1.5 text-[13px] leading-[1.5] text-[var(--foreground-soft)] sm:grid-cols-[84px_1fr]">
                  {profileInfo.contact.map(([label, value]) => (
                    <div key={label} className="contents">
                      <dt className="text-[var(--foreground-muted)]">{label}</dt>
                      <dd className="text-[var(--foreground)]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="px-5 py-7 sm:px-7 lg:flex lg:min-h-[430px] lg:flex-col lg:px-10 lg:py-8">
            <div className="space-y-3 lg:mt-6 lg:max-w-[470px]">
              {timelineItems.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="grid grid-cols-[52px_1fr] gap-4 text-[13px] leading-[1.5] sm:grid-cols-[60px_1fr]"
                >
                  <span className="text-[var(--foreground)]">{item.year}</span>
                  <span className="text-[var(--foreground-soft)]">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-transparent pt-5 text-[13px] text-[var(--foreground)] lg:mt-auto lg:pt-0">
              <span className="text-[var(--foreground-soft)]">Light mode</span>
              <span className="px-4 text-[var(--foreground-muted)]">/</span>
              <span>Dark mode</span>
            </div>
          </div>
        </div>
      </section>

      <section id="works">
        <div className="mx-auto grid max-w-[1440px] gap-0 sm:grid-cols-2 xl:grid-cols-4">
          {projectCards.map((card, index) => (
            <article
              key={card.title}
              className={`border-b border-[var(--line)] px-5 py-7 sm:px-7 lg:px-10 xl:border-b-0 ${index < projectCards.length - 1 ? "xl:border-r" : ""}`}
            >
              <div className="flex min-h-full flex-col">
                <div>
                  <h2 className="text-[1.55rem] font-normal tracking-[-0.04em] text-[var(--foreground)]">
                    {card.title}
                  </h2>
                  <p className="mt-1 text-[13px] text-[var(--foreground-muted)]">{card.subtitle}</p>
                  <div className="mt-2 h-px w-full bg-[var(--line-strong)]" />
                  <p className="mt-2 text-[13px] text-[var(--foreground-muted)]">{card.meta}</p>
                </div>

                <div className={`mt-5 overflow-hidden bg-gradient-to-br ${card.accent}`}>
                  {card.artwork}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
