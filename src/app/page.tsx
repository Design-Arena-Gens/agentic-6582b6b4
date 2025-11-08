import { primaryAccount, secondaryAccounts, additionalAccounts } from '@/data/accounts';
import { roadmapPhases, weeklyOperatingRhythm, kpiTracks } from '@/data/roadmap';
import {
  algorithmTactics,
  communityFrameworks,
  contentPillars,
  offerLadder,
  riskMitigations,
} from '@/data/playbook';

const gradientBox =
  'relative isolate overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-[0_40px_120px_-60px_rgba(94,74,227,0.9)] backdrop-blur-xl';

const Section = ({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string;
  eyebrow: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-6">
    <div className="max-w-3xl space-y-2">
      <p className="text-sm uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? <p className="text-lg text-slate-200/80">{description}</p> : null}
    </div>
    {children}
  </section>
);

const StatChip = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-100/80">
    {label}
  </span>
);

const Pill = ({ text }: { text: string }) => (
  <span className="rounded-full bg-primary/20 px-3 py-1 text-sm text-primary">{text}</span>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-sm text-slate-200/80">
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(94,74,227,0.35),transparent_55%)] px-4 pb-24 pt-16 text-slate-100 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <section className={`${gradientBox} mt-8 border-white/10 p-10`}> 
          <div className="absolute inset-0 -z-10 bg-grid bg-[size:24px_24px] opacity-20" />
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="space-y-6 md:max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-accent">Playbook Command Center</p>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Hybrid Fitness · Lifestyle · Founder Growth Lab
              </h1>
              <p className="text-lg text-slate-200/80">
                Field intelligence synthesizing Ava&apos;s viral scripting, Sam&apos;s editing grammar, and Peter&apos;s cinematic attention mechanics into a 10-month operating system to scale a hybrid fitness founder brand to 100K+ followers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Pill text="Goal · 100K followers in 10 months" />
                <Pill text="ICP · Hybrid founders 28-40" />
                <Pill text="Core Platforms · Instagram · TikTok · YouTube Shorts" />
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-100/90">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">North Star</p>
                <p className="text-lg font-semibold text-white">Average +3.2K net new followers / month</p>
                <p className="text-slate-200/70">Backed by weekly retention audits, DM pipeline scoring, and community amplification loops.</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">Growth Engines</p>
                <ul className="space-y-1 text-slate-200/75">
                  <li>• Hero Reels + carousels engineered for 70% retention</li>
                  <li>• DM automation funnels delivering lead magnets + booking calls</li>
                  <li>• Challenge, community, and partnership flywheels</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Section
          eyebrow="Primary Intelligence"
          title={`Deep Deconstruction · ${primaryAccount.handle}`}
          description="Dissecting Ava's operating system to adapt viral scripting, batching, and algorithm mastery."
        >
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div className={`${gradientBox} border-white/10`}> 
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <StatChip label={`Owner · ${primaryAccount.owner}`} />
                  <StatChip label={`Followers · ${primaryAccount.followers}`} />
                  <StatChip label={`Platform · ${primaryAccount.platform}`} />
                </div>
                <p className="text-lg text-slate-100/90">{primaryAccount.positioning}</p>
                <p className="text-sm text-slate-200/70">{primaryAccount.differentiation}</p>
                <div className="grid gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 text-slate-100/80">
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-white/70">
                      Hero Formats
                    </h3>
                    <BulletList items={primaryAccount.heroFormats} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-white/70">
                      Conversion Assets
                    </h3>
                    <BulletList items={primaryAccount.conversionAssets} />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className={`${gradientBox} border-white/10`}> 
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Standout Metrics</h3>
                <BulletList items={primaryAccount.standoutMetrics} />
              </div>
              <div className={`${gradientBox} border-white/10`}> 
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Growth Loops</h3>
                <BulletList items={primaryAccount.growthLoops} />
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {primaryAccount.narrativeLevers.map((lever) => (
              <div key={lever.title} className={`${gradientBox} border-white/10`}> 
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Narrative Lever</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{lever.title}</h3>
                <p className="text-sm text-slate-200/80">{lever.description}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-200/70">
                  {lever.proofPoints.map((proof) => (
                    <div key={proof} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"></span>
                      <span>{proof}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {primaryAccount.contentSystems.map((system) => (
              <div key={system.name} className={`${gradientBox} border-white/10`}> 
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Content System</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{system.name}</h3>
                <p className="text-sm text-slate-200/80">{system.purpose}</p>
                <div className="mt-4 space-y-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  Cadence · {system.cadence}
                </div>
                <div className="mt-3">
                  <BulletList items={system.playbook} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Secondary & Tertiary"
          title="Supporting Creator Intelligence"
          description="Extracted signal from Sam John and Peter Visuals, then expanded to parallel hybrid creators for inspiration + partnership targets."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {secondaryAccounts.map((account) => (
              <article key={account.handle} className={`${gradientBox} border-white/10`}> 
                <header className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <StatChip label={account.handle} />
                    <StatChip label={`Followers · ${account.followers}`} />
                    <StatChip label={account.platform} />
                  </div>
                  <p className="text-sm text-slate-200/80">{account.positioning}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Differentiator · {account.differentiation}
                  </p>
                </header>
                <div className="mt-4 grid gap-4 text-sm text-slate-200/80">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.25em] text-accent">Hero Formats</h4>
                    <BulletList items={account.heroFormats} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.25em] text-accent">Conversion Assets</h4>
                    <BulletList items={account.conversionAssets} />
                  </div>
                  <div className="grid gap-3">
                    {account.narrativeLevers.map((lever) => (
                      <div key={lever.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <h5 className="text-sm font-semibold text-white">{lever.title}</h5>
                        <p className="text-xs text-slate-200/70">{lever.description}</p>
                        <BulletList items={lever.proofPoints} />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {additionalAccounts.map((account) => (
              <div key={account.handle} className="rounded-2xl border border-white/5 bg-white/5 p-6">
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  <span>{account.handle}</span>
                  <span>·</span>
                  <span>{account.followers}</span>
                  <span>·</span>
                  <span>{account.platform}</span>
                </div>
                <h4 className="mt-2 text-base font-semibold text-white">{account.owner}</h4>
                <p className="text-sm text-slate-200/80">{account.positioning}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
                  Edge · {account.differentiation}
                </p>
                <div className="mt-3 grid gap-2 text-sm text-slate-200/80">
                  <strong className="text-xs uppercase tracking-[0.2em] text-accent">Hero Formats</strong>
                  <BulletList items={account.heroFormats} />
                </div>
                <div className="mt-3 grid gap-2 text-sm text-slate-200/80">
                  <strong className="text-xs uppercase tracking-[0.2em] text-accent">Conversion + Proof</strong>
                  <BulletList items={[...account.conversionAssets, ...account.standoutMetrics]} />
                </div>
                <div className="mt-3 text-sm text-slate-200/80">
                  <strong className="text-xs uppercase tracking-[0.2em] text-accent">Growth Loops</strong>
                  <BulletList items={account.growthLoops} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Content Architecture"
          title="Pillar Stack & Algorithm Plays"
          description="Three content pillars engineered with platform-native execution tactics and algorithm levers."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {contentPillars.map((pillar) => (
              <div key={pillar.title} className={`${gradientBox} border-white/10`}> 
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-200/80">{pillar.promise}</p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Proof Assets</h4>
                  <BulletList items={pillar.proof} />
                </div>
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Content Angles</h4>
                  <BulletList items={pillar.contentAngles} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {algorithmTactics.map((tactic) => (
              <div key={tactic.title} className={`${gradientBox} border-white/10`}> 
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Algorithm Play</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{tactic.title}</h3>
                <p className="text-sm text-slate-200/80">{tactic.breakdown}</p>
                <div className="mt-4">
                  <BulletList items={tactic.execution} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Community + Offers"
          title="Community Flywheels & Monetization Ladder"
          description="Design rituals that compound engagement, then align offers to audience maturity."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {communityFrameworks.map((move) => (
              <div key={move.name} className={`${gradientBox} border-white/10`}> 
                <h3 className="text-lg font-semibold text-white">{move.name}</h3>
                <p className="text-sm text-slate-200/80">{move.intent}</p>
                <div className="mt-4">
                  <BulletList items={move.rituals} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {offerLadder.map((offer) => (
              <div key={offer.name} className={`${gradientBox} border-white/10`}> 
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-white">{offer.name}</h3>
                  <span className="text-sm text-accent">{offer.price}</span>
                </div>
                <p className="text-sm text-slate-200/80">{offer.promise}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/60">
                  Positioning · {offer.positioning}
                </p>
                <div className="mt-4">
                  <BulletList items={offer.nurture} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Execution Map"
          title="10-Month Roadmap & Operating Rhythm"
          description="Phased execution plan aligned to follower growth milestones, lead capture, and monetization." 
        >
          <div className="grid gap-6">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className={`${gradientBox} border-white/10`}> 
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">{phase.months}</p>
                    <h3 className="text-2xl font-semibold text-white">{phase.phase}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-accent">
                    North Star · {phase.northStar}
                  </div>
                </div>
                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Objectives</h4>
                    <BulletList items={phase.objectives} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Leading Indicators</h4>
                    <BulletList items={phase.leadingIndicators} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Experiments</h4>
                    <BulletList items={phase.experiments} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className={`${gradientBox} border-white/10`}> 
              <h3 className="text-lg font-semibold text-white">Weekly Operating Rhythm</h3>
              <div className="mt-4 space-y-5">
                {weeklyOperatingRhythm.map((rhythm) => (
                  <div key={rhythm.cadence} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <h4 className="text-sm font-semibold text-white">{rhythm.cadence}</h4>
                    <BulletList items={rhythm.focus} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${gradientBox} border-white/10`}> 
              <h3 className="text-lg font-semibold text-white">KPI Control Tower</h3>
              <div className="mt-4 space-y-4">
                {kpiTracks.map((kpi) => (
                  <div key={kpi.name} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200/80">
                    <h4 className="text-sm font-semibold text-white">{kpi.name}</h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Target · {kpi.target}</p>
                    <p className="mt-2">Instrumentation · {kpi.instrumentation}</p>
                    <p className="mt-2 text-accent">Trigger · {kpi.actionTrigger}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Risk Deck"
          title="Risk Radar & Counter Moves"
          description="Pre-committed actions to protect reach, production velocity, and lead quality."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {riskMitigations.map((risk) => (
              <div key={risk.risk} className={`${gradientBox} border-white/10`}> 
                <h3 className="text-lg font-semibold text-white">{risk.risk}</h3>
                <div className="mt-3">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Leading Signals</h4>
                  <BulletList items={risk.leadingSignals} />
                </div>
                <div className="mt-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Counter Moves</h4>
                  <BulletList items={risk.counterMoves} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <footer className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-slate-200/70">
          Activate the operating system → measure weekly → iterate aggressively. Borrow the spirit of Ava, Sam, and Peter, but encode your differentiator: data-backed vulnerability and cinematic proof.
        </footer>
      </div>
    </main>
  );
}
