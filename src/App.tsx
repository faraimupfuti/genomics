import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Dna,
  FlaskConical,
  Globe2,
  HeartPulse,
  Menu,
  Network,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const capabilities = [
  { icon: Dna, title: 'Clinical genomics', text: 'Analysis workflows for WES, WGS, rare disease, oncology and pharmacogenomics—designed for clinical partners.' },
  { icon: FlaskConical, title: 'Research bioinformatics', text: 'Reproducible analysis across genomics, transcriptomics, metagenomics and population studies.' },
  { icon: Network, title: 'Genomic infrastructure', text: 'Secure pipelines, data orchestration and interpretation tooling that turn sequencing data into usable insight.' },
  { icon: Globe2, title: 'African genomic context', text: 'Build better interpretation with population-aware evidence and a long-term African genomic knowledge layer.' },
]

const packages = [
  {
    number: '01',
    icon: Dna,
    title: 'Research Genomics',
    label: 'PROJECT-BASED',
    text: 'Turn sequencing datasets into reproducible, research-ready outputs without building a bioinformatics team from scratch.',
    items: ['WES / WGS analysis', 'QC, alignment & variant calling', 'Annotation & prioritisation', 'Research-ready reports'],
    audience: 'Universities • researchers • biotech',
  },
  {
    number: '02',
    icon: HeartPulse,
    title: 'Clinical Genomics Support',
    label: 'CLINICAL PARTNER',
    text: 'Computational support for clinical genomics, delivered alongside qualified laboratories and professionals who retain clinical responsibility.',
    items: ['Clinical WES / WGS workflows', 'Variant annotation & prioritisation', 'Evidence review workspace', 'Traceable reporting outputs'],
    audience: 'Clinical labs • diagnostics • genetics teams',
  },
  {
    number: '03',
    icon: Network,
    title: 'Bioinformatics-as-a-Service',
    label: 'ONGOING',
    text: 'A flexible computational team and infrastructure layer for organisations that need recurring analysis, pipelines or genomic data operations.',
    items: ['Custom analysis pipelines', 'Cloud / HPC deployment', 'Workflow automation', 'Ongoing technical support'],
    audience: 'Labs • CROs • biotech • research institutes',
  },
  {
    number: '04',
    icon: Globe2,
    title: 'African Genomics Intelligence',
    label: 'STRATEGIC',
    text: 'Build population-aware genomic capability around African data, research cohorts and interpretation—creating a foundation for future precision health.',
    items: ['African population context', 'Population genomics', 'Knowledge-layer development', 'Custom genomic intelligence'],
    audience: 'Pharma • public health • research networks',
    featured: true,
  },
]

const buyingModels = [
  ['PROJECT', 'Pay per dataset, assay or defined analysis.', 'Best for a first project or research study.'],
  ['SUBSCRIPTION', 'Monthly access to workflows, infrastructure and support.', 'Best for recurring genomic analysis.'],
  ['ENTERPRISE', 'Custom infrastructure, integrations and dedicated support.', 'Best for laboratories and larger organisations.'],
]

const workflow = [
  ['01', 'Sequence', 'FASTQ, BAM or VCF arrives from your sequencing or laboratory partner.'],
  ['02', 'Analyse', 'Automated QC, alignment, variant calling, annotation and prioritisation run through versioned workflows.'],
  ['03', 'Interpret', 'Evidence is assembled into a review-ready workspace for qualified scientific or clinical professionals.'],
  ['04', 'Report', 'Clear outputs, traceability and audit history make results easier to review, communicate and reanalyse.'],
]

const sectors = ['Clinical laboratories', 'Universities & research institutes', 'Biotechnology', 'CROs & diagnostics', 'Public health', 'Population genomics']

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#top" aria-label="AfroGenomics home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" role="img">
          <path d="M13 7c10 5 10 25 18 30M31 7C21 12 21 32 13 37" />
          <path d="M16 12h12M15 19h14M15 26h14M16 33h12" />
        </svg>
      </span>
      <span className="brand-word"><strong>Afro</strong>Genomics</span>
    </a>
  )
}

function App() {
  const [open, setOpen] = useState(false)
  const [faq, setFaq] = useState<number | null>(0)

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div id="top" className="site-shell">
      <div className="topline"><span>GENOMIC DATA • ANALYSIS • INTERPRETATION</span><span className="topline-right">Built for Africa, designed for scale</span></div>

      <header className="nav-wrap">
        <nav className="nav container">
          <Logo compact />
          <div className={`nav-links ${open ? 'is-open' : ''}`}>
            <button onClick={() => go('platform')}>Platform</button>
            <button onClick={() => go('services')}>Capabilities</button>
            <button onClick={() => go('packages')}>Packages</button>
            <button onClick={() => go('approach')}>Approach</button>
            <button onClick={() => go('about')}>About</button>
            <button className="nav-cta" onClick={() => go('contact')}>Talk to us <ArrowUpRight size={15} /></button>
          </div>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> GENOMICS, BUILT FOR AFRICA</div>
            <h1>From sequence data<br /><em>to insight.</em></h1>
            <p className="hero-lead">AfroGenomics builds the computational layer between sequencing and understanding—helping clinical, research and biotechnology teams turn genomic data into decisions.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => go('contact')}>Explore a partnership <ArrowUpRight size={17} /></button>
              <button className="btn btn-ghost" onClick={() => go('platform')}><span className="play"><Play size={12} fill="currentColor" /></span> See how it works</button>
            </div>
            <div className="trust-row"><ShieldCheck size={17} /> Security-minded. Reproducible. Human-reviewed.</div>
          </div>

          <div className="hero-visual" aria-label="Abstract genomic data visualization">
            <div className="orbital orbital-a" /><div className="orbital orbital-b" />
            <div className="dna-large">
              {[0,1,2,3,4,5,6,7].map(i => <span key={i} className="dna-rung" style={{ '--i': i } as React.CSSProperties} />)}
              <span className="dna-strand dna-left" /><span className="dna-strand dna-right" />
            </div>
            <div className="data-chip chip-one"><span>WES</span><b>98.7%</b><small>QC PASS</small></div>
            <div className="data-chip chip-two"><span>VARIANT</span><b>7,421</b><small>ANNOTATED</small></div>
            <div className="data-chip chip-three"><span>GENOME</span><b>AFR</b><small>CONTEXT</small></div>
            <div className="grid-glow" />
          </div>
        </section>

        <section className="signal-strip">
          <div className="container signal-grid">
            <div><strong>01</strong><span>Sequence-aware<br />workflows</span></div>
            <div><strong>02</strong><span>Reproducible<br />analysis</span></div>
            <div><strong>03</strong><span>Human-led<br />interpretation</span></div>
            <div><strong>04</strong><span>Africa-first<br />genomic context</span></div>
          </div>
        </section>

        <section id="platform" className="section container platform-section">
          <div className="section-kicker">THE AFROGENOMICS LAYER</div>
          <div className="split-heading"><h2>One place for the work<br /><span>between the reads.</span></h2><p>Sequencing produces extraordinary amounts of data. We make the computational work around that data structured, traceable and useful.</p></div>
          <div className="platform-card">
            <div className="platform-top"><span className="status-dot" /> Pipeline workspace <span className="mini-label">LIVE ARCHITECTURE</span></div>
            <div className="pipeline">
              <div className="pipe-node"><span>01</span><Dna /><b>Input</b><small>FASTQ / BAM / VCF</small></div><div className="pipe-line" />
              <div className="pipe-node active"><span>02</span><Sparkles /><b>Analysis</b><small>QC / CALL / ANNOTATE</small></div><div className="pipe-line" />
              <div className="pipe-node"><span>03</span><Network /><b>Evidence</b><small>PRIORITISE / REVIEW</small></div><div className="pipe-line" />
              <div className="pipe-node"><span>04</span><HeartPulse /><b>Output</b><small>REPORT / API / DATA</small></div>
            </div>
            <div className="platform-bottom"><span>Versioned workflows</span><span>Containerised tools</span><span>Audit-ready metadata</span><span>Cloud or HPC</span></div>
          </div>
        </section>

        <section id="services" className="section section-tint">
          <div className="container">
            <div className="section-kicker">WHAT WE BUILD</div>
            <div className="split-heading"><h2>Computational genomics<br /><span>without the hidden box.</span></h2><p>Start with the analyses you need today. Build toward a genomic data platform tomorrow.</p></div>
            <div className="cap-grid">{capabilities.map(({ icon: Icon, title, text }, i) => <article className="cap-card" key={title}><div className="cap-number">0{i + 1}</div><div className="icon-box"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" onClick={(e) => { e.preventDefault(); go('contact') }}>Learn more <ArrowUpRight size={15} /></a></article>)}</div>
          </div>
        </section>

        <section id="packages" className="section packages-section">
          <div className="container">
            <div className="section-kicker">HOW CLIENTS WORK WITH US</div>
            <div className="split-heading"><h2>Choose the genomic<br /><span>capability you need.</span></h2><p>Start small, prove the workflow and scale when the science and volume demand it. Every package can be adapted to your assay, data environment and governance requirements.</p></div>
            <div className="package-grid">{packages.map(({ number, icon: Icon, title, label, text, items, audience, featured }) => <article className={`package-card ${featured ? 'package-card--featured' : ''}`} key={title}>
              <div className="package-head"><span className="cap-number">{number}</span><div className="package-icon"><Icon size={21} /></div><span className="package-label">{label}</span></div>
              <h3>{title}</h3><p className="package-text">{text}</p>
              <div className="package-items">{items.map(item => <span key={item}><Check size={14} /> {item}</span>)}</div>
              <div className="package-audience">{audience}</div>
              <button className="package-link" onClick={() => go('contact')}>Discuss this package <ArrowUpRight size={15} /></button>
            </article>)}</div>

            <div className="buying-models">
              <div className="buying-intro"><span className="section-kicker">COMMERCIAL MODEL</span><h3>Buy the service<br /><em>the way you need it.</em></h3></div>
              <div className="buying-grid">{buyingModels.map(([title, text, note]) => <div className="buying-card" key={title}><span>{title}</span><strong>{text}</strong><small>{note}</small></div>)}</div>
            </div>
          </div>
        </section>

        <section id="approach" className="section container approach-section">
          <div className="section-kicker">THE WORKFLOW</div>
          <div className="workflow-heading"><h2>Designed to be<br /><span>understood.</span></h2><p>Every analysis should be reproducible by a scientist, reviewable by a clinician and explainable to the people relying on the result.</p></div>
          <div className="workflow-list">{workflow.map(([num, title, text]) => <div className="workflow-row" key={num}><span className="workflow-num">{num}</span><h3>{title}</h3><p>{text}</p><span className="row-arrow"><ArrowUpRight size={18} /></span></div>)}</div>
        </section>

        <section id="about" className="section green-section">
          <div className="container about-grid">
            <div><div className="section-kicker light">WHY AFRICA</div><h2>A genomic future<br />needs <em>African</em> context.</h2></div>
            <div className="about-copy"><p>African populations hold some of the world’s greatest human genetic diversity, yet global genomic datasets have historically underrepresented them.</p><p>AfroGenomics is being built around that opportunity: rigorous computational genomics today, and an African genomic knowledge layer that becomes more valuable with every responsibly analysed dataset.</p><div className="about-points"><span><Check size={15} /> Population-aware evidence</span><span><Check size={15} /> Responsible data stewardship</span><span><Check size={15} /> Local scientific capacity</span></div></div>
          </div>
        </section>

        <section className="section container sectors-section">
          <div className="section-kicker">BUILT FOR TEAMS DOING REAL WORK</div><h2 className="center-heading">From the laboratory<br /><span>to the population.</span></h2>
          <div className="sector-cloud">{sectors.map((s, i) => <span key={s} className={i === 0 ? 'featured' : ''}>{s}</span>)}</div>
        </section>

        <section className="section faq-section container">
          <div className="faq-heading"><div className="section-kicker">A BETTER PLACE TO START</div><h2>Questions before<br /><span>the first sample?</span></h2></div>
          <div className="faqs">{[
            ['Do you sequence samples?', 'Not initially. AfroGenomics is focused on the computational layer. We can work with sequencing and laboratory partners so you do not need to build an in-house bioinformatics stack from scratch.'],
            ['Can this support clinical genomics?', 'Yes, with the right clinical-laboratory partnership and quality framework. The initial platform is designed as analysis and decision-support infrastructure, with qualified professionals retaining clinical responsibility.'],
            ['What data can we provide?', 'The platform roadmap supports common genomic formats such as FASTQ, BAM and VCF, with workflows tailored to the assay and use case.'],
            ['Can research teams use it first?', 'Absolutely. Research and biotechnology teams are an ideal starting point for validating workflows, building reproducibility and developing long-term partnerships.'],
          ].map(([q, a], i) => <div className={`faq ${faq === i ? 'open' : ''}`} key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><ChevronDown size={19} /></button>{faq === i && <p>{a}</p>}</div>)}</div>
        </section>

        <section id="contact" className="section contact-section container">
          <div className="contact-card"><div className="contact-copy"><div className="section-kicker light">LET'S BUILD</div><h2>Have genomic data?<br /><em>Let's make it useful.</em></h2><p>Tell us what you are sequencing, what you need to analyse and where you want to take it. We will map the right computational starting point.</p></div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><label>Name<input required placeholder="Your name" /></label><label>Organisation<input required placeholder="Organisation or laboratory" /></label><label>Work email<input required type="email" placeholder="you@organisation.org" /></label><label>What are you working on?<textarea placeholder="WES, WGS, oncology, research cohort…" rows={3} /></label><button className="btn btn-light" type="submit">Start a conversation <ArrowUpRight size={17} /></button><small>Form is ready for a backend or form service integration.</small></form></div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div><Logo /><p>Genomic data analysis and interpretation infrastructure for Africa.</p></div><div className="footer-links"><button onClick={() => go('platform')}>Platform</button><button onClick={() => go('packages')}>Packages</button><button onClick={() => go('approach')}>Approach</button><button onClick={() => go('about')}>Data stewardship</button></div><div className="footer-meta"><span>© {new Date().getFullYear()} AfroGenomics</span><span>Built with scientific rigour</span></div></div></footer>
    </div>
  )
}

export default App
