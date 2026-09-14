import { useState } from 'react'
import {
  Activity, ArrowRight, Brain, ChevronDown, Dna, FlaskConical, HeartPulse,
  Microscope, ShieldCheck, Sparkles, Stethoscope, Workflow, X, Menu, Mail,
  FileSearch, RefreshCw, Pill, ScanLine
} from 'lucide-react'

const useCases = [
  { icon: FileSearch, title: 'Rare & undiagnosed disease', text: 'Computational investigation of suspected genetic disease from WES/WGS data, phenotype and family information.', tags: ['WES / WGS', 'Variant prioritisation', 'Phenotype matching'] },
  { icon: Activity, title: 'Hereditary cancer', text: 'Germline analysis to identify and prioritise variants in genes associated with inherited cancer susceptibility.', tags: ['Germline analysis', 'Cancer genes', 'Evidence review'] },
  { icon: ScanLine, title: 'Clinical oncology', text: 'Somatic genomic analysis to characterise tumour alterations and support molecular profiling workflows.', tags: ['Somatic variants', 'CNV / SV', 'Molecular profiling'] },
  { icon: Pill, title: 'Pharmacogenomics', text: 'Analyse genomic variants associated with medication response and organise supporting pharmacogenomic evidence.', tags: ['Genotype analysis', 'Gene–drug evidence', 'Reporting'] },
  { icon: HeartPulse, title: 'Inherited cardiovascular disease', text: 'Support investigation of genetic causes of cardiomyopathies, arrhythmias and other inherited cardiac disorders.', tags: ['Gene panels', 'WES / WGS', 'Inheritance analysis'] },
  { icon: Brain, title: 'Neurogenetics', text: 'Analyse genomic data for neurological and developmental conditions using phenotype- and gene-driven prioritisation.', tags: ['Epilepsy', 'Developmental disorders', 'Gene prioritisation'] },
  { icon: Dna, title: 'Mitochondrial genomics', text: 'Computational analysis of mitochondrial variation, including heteroplasmy and disease-associated variants.', tags: ['mtDNA', 'Heteroplasmy', 'Annotation'] },
  { icon: Microscope, title: 'CNV & structural variants', text: 'Detect and characterise larger genomic alterations that can be missed by simple small-variant analysis.', tags: ['CNVs', 'SVs', 'Genomic rearrangements'] },
  { icon: RefreshCw, title: 'Clinical genomic reanalysis', text: 'Reanalyse historical cases as annotation databases, evidence and gene–disease knowledge evolve.', tags: ['Case reanalysis', 'Updated evidence', 'Reprioritisation'] },
]

const faqs = [
  ['What sequencing data can AfroGenomics analyse?', 'Our workflows can be designed around WES, WGS, targeted panels and other sequencing outputs. The exact pipeline depends on assay type, file format, coverage and the clinical question.'],
  ['Does AfroGenomics diagnose patients?', 'No. We provide computational analysis and interpretation-support infrastructure. Clinical diagnosis, patient counselling and final clinical decisions remain with appropriately qualified healthcare and laboratory professionals.'],
  ['Can you work with an existing laboratory?', 'Yes. The platform is designed to sit alongside existing sequencing and laboratory workflows. A laboratory can provide sequencing data and relevant clinical information while AfroGenomics handles the computational layer.'],
  ['Can old genomic cases be reanalysed?', 'Yes. Clinical genomic reanalysis is a core use case. Historical data can be processed against updated annotations, evidence and gene–disease knowledge.'],
  ['How is genomic data handled?', 'Workflows are designed around controlled access, traceability, reproducibility and appropriate data stewardship. Security, retention and hosting requirements can be agreed for each clinical partnership.'],
]

function Logo() {
  return <div className="brand"><span className="logo-mark"><Dna size={20}/></span><span>Afro<span>Genomics</span></span></div>
}

function App() {
  const [menu, setMenu] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const closeMenu = () => setMenu(false)
  const scrollTo = (id: string) => { closeMenu(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return <div className="site">
    <div className="announcement"><span className="pulse"/> CLINICAL GENOMICS • COMPUTATIONAL ANALYSIS <span>Built for African healthcare teams</span></div>

    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#top" onClick={closeMenu}><Logo/></a>
        <div className={`nav-links ${menu ? 'open' : ''}`}>
          <button onClick={() => scrollTo('platform')}>Platform</button>
          <button onClick={() => scrollTo('use-cases')}>Use cases</button>
          <button onClick={() => scrollTo('workflow')}>How it works</button>
          <button onClick={() => scrollTo('technology')}>Technology</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Talk to us <ArrowRight size={15}/></button>
        </div>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-grid"/>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span/> CLINICAL GENOMICS COMPUTING</div>
            <h1>From genomic data<br/><em>to clinical evidence.</em></h1>
            <p className="hero-lede">AfroGenomics provides computational analysis and interpretation support for clinical sequencing data — helping laboratories and healthcare teams identify, prioritise and investigate clinically relevant genomic variation.</p>
            <div className="hero-actions"><button className="button primary" onClick={() => scrollTo('contact')}>Discuss a clinical workflow <ArrowRight size={17}/></button><button className="button ghost" onClick={() => scrollTo('workflow')}>See how it works <span>↓</span></button></div>
            <div className="trust"><ShieldCheck size={17}/> Reproducible workflows <i/> <ShieldCheck size={17}/> Human-reviewed outputs <i/> <ShieldCheck size={17}/> Security-minded</div>
          </div>
          <div className="hero-visual">
            <div className="orb"><div className="orb-ring r1"/><div className="orb-ring r2"/><div className="orb-core"><Dna size={68}/></div><span className="node n1"/><span className="node n2"/><span className="node n3"/><span className="node n4"/></div>
            <div className="data-card card-a"><span className="mini-label">INPUT</span><strong>FASTQ / BAM / VCF</strong><small>Sequencing data</small></div>
            <div className="data-card card-b"><span className="mini-label">OUTPUT</span><strong>Clinical evidence</strong><small>Structured findings</small></div>
          </div>
        </div>
      </section>

      <section className="signal"><div className="container signal-grid"><div><b>01</b><span>Quality controlled</span></div><div><b>02</b><span>Reproducible analysis</span></div><div><b>03</b><span>Evidence-aware interpretation</span></div><div><b>04</b><span>Built for clinical workflows</span></div></div></section>

      <section className="section platform" id="platform"><div className="container two-col"><div><div className="eyebrow">THE COMPUTATIONAL LAYER</div><h2>Sequencing generates data.<br/><em>Clinical genomics needs answers.</em></h2></div><div className="section-copy"><p>Modern sequencing can produce millions of genomic observations. The challenge is determining which findings matter, which require investigation, and what evidence supports them.</p><p>AfroGenomics sits between sequencing and clinical review, turning raw genomic data into structured, traceable computational outputs for qualified professionals.</p></div></div><div className="container platform-cards"><div className="platform-card"><Workflow/><h3>Workflow orchestration</h3><p>Versioned pipelines that can be reproduced across cases and environments.</p></div><div className="platform-card"><FlaskConical/><h3>Variant analysis</h3><p>Calling, annotation and prioritisation across multiple classes of genomic variation.</p></div><div className="platform-card"><Sparkles/><h3>Evidence organisation</h3><p>Bring phenotype, population and clinical evidence together for review.</p></div><div className="platform-card"><ShieldCheck/><h3>Traceable outputs</h3><p>QC, provenance and analysis metadata accompany each workflow.</p></div></div></section>

      <section className="section cases" id="use-cases"><div className="container"><div className="section-heading"><div><div className="eyebrow">CLINICAL USE CASES</div><h2>Where computational genomics<br/><em>can help.</em></h2></div><p>Focused on the clinical questions where sequencing data needs rigorous computational analysis and structured evidence.</p></div><div className="case-grid">{useCases.map(({icon: Icon, title, text, tags}) => <article className="case-card" key={title}><div className="case-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p><div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div><button onClick={() => scrollTo('contact')}>Discuss this use case <ArrowRight size={14}/></button></article>)}</div></div></section>

      <section className="section workflow" id="workflow"><div className="container"><div className="center-heading"><div className="eyebrow">HOW IT WORKS</div><h2>From sequence<br/><em>to review.</em></h2><p>A computational workflow designed to make every step visible, reproducible and useful to the people responsible for clinical interpretation.</p></div><div className="pipeline"><div className="pipe-line"/>{[['01','Sequence','FASTQ / BAM / VCF'],['02','Analyse','QC • alignment • calling'],['03','Interpret','annotation • evidence • prioritisation'],['04','Review','structured findings for clinical review']].map(([n,t,d]) => <div className="pipe-step" key={n}><div className="pipe-num">{n}</div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

      <section className="section technology" id="technology"><div className="container tech-layout"><div><div className="eyebrow">TECHNICAL FOUNDATION</div><h2>Built on rigorous<br/><em>bioinformatics.</em></h2><p>Our workflows can combine established open-source and clinical genomics tooling with reproducible infrastructure. The stack is selected around the assay, clinical question and validation requirements.</p><div className="tech-pills"><span>Nextflow</span><span>Docker / Apptainer</span><span>Python / R</span><span>VEP</span><span>ClinVar</span><span>gnomAD</span><span>FastQC / MultiQC</span><span>Cloud / HPC</span></div></div><div className="terminal"><div className="terminal-top"><span/><span/><span/><label>afrogenomics / clinical-workflow</label></div><div className="terminal-body"><p><i>$</i> workflow run clinical_wes</p><p className="muted">Loading reference + annotation databases…</p><p><i>✓</i> quality control complete</p><p><i>✓</i> variant analysis complete</p><p><i>✓</i> evidence aggregation complete</p><p><i>→</i> 24 candidate variants prioritised</p><p className="accent">clinical_review / ready</p></div></div></div></section>

      <section className="section africa" id="about"><div className="container africa-grid"><div className="africa-mark"><Dna size={105}/><span>AFRICA</span></div><div><div className="eyebrow">WHY AFRICA</div><h2>Clinical genomics<br/><em>needs African context.</em></h2><p>African populations remain underrepresented in many genomic datasets. AfroGenomics is being built to strengthen the computational infrastructure available to African clinical genomics while developing population-aware capabilities over time.</p><div className="principles"><div><strong>01</strong><span>Population-aware analysis</span></div><div><strong>02</strong><span>Responsible data stewardship</span></div><div><strong>03</strong><span>Local scientific capacity</span></div></div></div></div></section>

      <section className="section boundary"><div className="container boundary-grid"><div><div className="eyebrow">OUR ROLE</div><h2>We provide the<br/><em>computational layer.</em></h2></div><div className="boundary-copy"><p>AfroGenomics does not replace sequencing laboratories, geneticists or clinicians. We provide computational analysis and interpretation-support infrastructure that can integrate into existing clinical workflows.</p><div className="role-grid"><div><span>YOU PROVIDE</span><b>Sequencing data<br/>Clinical phenotype<br/>Laboratory workflow</b></div><div><span>AFROGENOMICS</span><b>Analysis pipelines<br/>Annotation & prioritisation<br/>Reanalysis & structured outputs</b></div><div><span>CLINICAL TEAM</span><b>Clinical interpretation<br/>Diagnosis & counselling<br/>Final clinical decisions</b></div></div></div></div></section>

      <section className="section faq"><div className="container faq-grid"><div><div className="eyebrow">FAQ</div><h2>Questions,<br/><em>answered.</em></h2><p>Building a clinical genomics workflow? We can map the computational requirements around your existing laboratory process.</p></div><div>{faqs.map(([q,a], i) => <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown size={18}/></button>{openFaq === i && <p>{a}</p>}</div>)}</div></div></section>

      <section className="contact" id="contact"><div className="container contact-inner"><div><div className="eyebrow">START A CONVERSATION</div><h2>Have a clinical genomics workflow?<br/><em>Let's build the computational layer.</em></h2><p>Tell us what you sequence, the clinical question you are solving and where your current workflow needs computational support.</p></div><form onSubmit={e => e.preventDefault()}><label>Name<input placeholder="Your name"/></label><label>Organisation<input placeholder="Laboratory, hospital or organisation"/></label><label>Work email<input type="email" placeholder="you@organisation.com"/></label><label>What are you working on?<textarea placeholder="e.g. WES rare disease workflow, hereditary cancer panel…" rows={4}/></label><button className="button primary" type="submit">Discuss the workflow <ArrowRight size={17}/></button><small><Mail size={13}/> Your message starts a conversation; no automated clinical decisions are made here.</small></form></div></section>
    </main>

    <footer><div className="container footer-top"><Logo/><p>Computational genomics for clinical workflows in Africa.</p><div className="footer-links"><button onClick={() => scrollTo('platform')}>Platform</button><button onClick={() => scrollTo('use-cases')}>Use cases</button><button onClick={() => scrollTo('technology')}>Technology</button><button onClick={() => scrollTo('contact')}>Contact</button></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} AfroGenomics</span><span>Clinical genomics • Computational analysis</span></div></footer>
  </div>
}

export default App
