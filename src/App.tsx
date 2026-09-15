import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { ArrowRight, ChevronDown, Dna, GitBranch, FileText, RotateCcw, Menu, X, ShieldCheck, Database, Target, UserRound, SlidersHorizontal, CircleCheck, Activity, ScanLine, Pill, HeartPulse, Brain, Microscope, Lock, CheckCircle2, Globe2, Zap, RefreshCw, Handshake } from 'lucide-react'

const cases = [
 ['Rare & undiagnosed disease','Computational investigation of suspected genetic disease from WES/WGS data, phenotype and family information.',['WES / WGS','Phenotype matching','Variant prioritisation'],FileText],
 ['Hereditary cancer','Germline analysis to identify and prioritise variants in genes associated with inherited cancer susceptibility.',['Germline analysis','Cancer genes','Evidence review'],Activity],
 ['Clinical oncology','Somatic genomic analysis to characterise tumour alterations and support molecular profiling workflows.',['Somatic variants','CNV / SV','Molecular profiling'],ScanLine],
 ['Pharmacogenomics','Analyse genomic variants associated with medication response and organise supporting pharmacogenomic evidence.',['Genotype analysis','Gene–drug evidence','Reporting'],Pill],
 ['Inherited cardiovascular disease','Support investigation of genetic causes of cardiomyopathies, arrhythmias and inherited cardiac disorders.',['Gene panels','WES / WGS','Inheritance'],HeartPulse],
 ['Neurogenetics','Analyse genomic data for neurological and developmental conditions using phenotype- and gene-driven prioritisation.',['Epilepsy','Developmental disorders','Gene prioritisation'],Brain],
 ['Mitochondrial genomics','Computational analysis of mitochondrial variation, including heteroplasmy and disease-associated variants.',['mtDNA','Heteroplasmy','Annotation'],Dna],
 ['CNV & structural variants','Detect and characterise larger genomic alterations that can be missed by small-variant analysis.',['CNVs','SVs','Rearrangements'],Microscope],
 ['Clinical genomic reanalysis','Reanalyse historical cases as annotation databases, evidence and gene–disease knowledge evolve.',['Case reanalysis','Updated evidence','Reprioritisation'],RotateCcw],
]
const advantages = [
  [Handshake,'Built to partner, not replace','We plug into laboratories\u2019 existing sequencing workflows as the computational and interpretation layer \u2014 not another lab competing for samples.'],
  [Globe2,'African-context analysis','Standard annotation databases are trained on largely non-African data. We build population-aware analysis into the pipeline itself, not just the pitch.'],
  [RefreshCw,'Reanalysis is a standing service','Evidence and annotation databases move fast. We re-run historical cases against updated knowledge on an ongoing basis \u2014 most providers treat this as an afterthought.'],
  [Zap,'Built for speed and transparency','A software-native, automated pipeline means faster turnaround and clear visibility into where a case stands \u2014 not a black box.'],
]

const faqs = [
  ['What sequencing data can you analyse?','Workflows can be designed around WES, WGS, targeted panels and other sequencing outputs. The pipeline depends on assay type, file format, coverage and the clinical question.'],
  ['Do you diagnose patients?','No. AfroGenomics provides computational analysis and interpretation-support infrastructure. Clinical diagnosis, counselling and final clinical decisions remain with appropriately qualified professionals.'],
  ['Can you work with an existing laboratory?','Yes. AfroGenomics is designed to sit alongside existing sequencing and laboratory workflows.'],
  ['Can historical cases be reanalysed?','Yes. Historical datasets can be processed against updated annotations, evidence and gene–disease knowledge.'],
  ['How is genomic and health data protected?','Genetic data is treated as special personal information under POPIA. It is processed only with a lawful basis and explicit consent, access-controlled, and never used for automated clinical decisions. See our Privacy Policy for details.'],
]

function Brand(){
  return <div className="brand">
    <svg viewBox="0 0 48 58" className="brand-dna" aria-hidden="true">
      <path d="M24.00,4.00 C22.90,4.59 19.23,6.38 17.39,7.57 C15.55,8.76 13.84,9.95 12.97,11.14 C12.10,12.33 11.80,13.52 12.19,14.71 C12.58,15.90 13.81,17.10 15.33,18.29 C16.85,19.48 19.18,20.67 21.33,21.86 C23.48,23.05 26.16,24.24 28.22,25.43 C30.28,26.62 32.41,27.81 33.71,29.00 C35.01,30.19 35.89,31.38 35.99,32.57 C36.09,33.76 35.43,34.95 34.30,36.14 C33.17,37.33 31.20,38.52 29.21,39.71 C27.23,40.90 24.57,42.10 22.39,43.29 C20.21,44.48 17.76,45.67 16.10,46.86 C14.44,48.05 13.02,49.24 12.43,50.43 C11.84,51.62 12.56,53.41 12.59,54.00" fill="none" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" opacity="0.4"/>
      <path d="M24.00,4.00 C25.10,4.59 28.77,6.38 30.61,7.57 C32.45,8.76 34.16,9.95 35.03,11.14 C35.90,12.33 36.20,13.52 35.81,14.71 C35.42,15.90 34.19,17.10 32.67,18.29 C31.15,19.48 28.82,20.67 26.67,21.86 C24.52,23.05 21.84,24.24 19.78,25.43 C17.72,26.62 15.58,27.81 14.29,29.00 C12.99,30.19 12.11,31.38 12.01,32.57 C11.91,33.76 12.57,34.95 13.70,36.14 C14.83,37.33 16.80,38.52 18.79,39.71 C20.77,40.90 23.43,42.10 25.61,43.29 C27.79,44.48 30.24,45.67 31.90,46.86 C33.56,48.05 34.98,49.24 35.57,50.43 C36.16,51.62 35.44,53.41 35.41,54.00" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"/>
      <line x1="15.51" y1="8.81" x2="32.49" y2="8.81" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <line x1="15.51" y1="18.42" x2="32.49" y2="18.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <line x1="15.51" y1="28.04" x2="32.49" y2="28.04" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <line x1="15.51" y1="37.65" x2="32.49" y2="37.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <line x1="15.51" y1="47.27" x2="32.49" y2="47.27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <circle cx="24" cy="4" r="2" fill="currentColor"/>
      <circle cx="35.41" cy="54" r="2" fill="currentColor"/>
      <circle cx="12.59" cy="54" r="2" fill="currentColor"/>
    </svg>
    <div><strong>AfroGenomics</strong><small>CLINICAL GENOMICS COMPUTING</small></div>
  </div>
}

function CookieNotice(){
  const [visible,setVisible] = useState(false)
  useEffect(()=>{ if(!localStorage.getItem('ag-consent')) setVisible(true) },[])
  const choose = (choice:'accepted'|'declined')=>{ localStorage.setItem('ag-consent',choice); setVisible(false) }
  if(!visible) return null
  return <div className="cookie-notice" role="dialog" aria-label="Privacy notice">
    <p><Lock size={14}/> We use essential cookies to run this site. We don't process health or genomic data through this website — see our <a href="/privacy">Privacy Policy</a> for how any personal information you submit is handled under POPIA.</p>
    <div><button className="ghost" onClick={()=>choose('declined')}>Decline non-essential</button><button className="primary" onClick={()=>choose('accepted')}>Accept</button></div>
  </div>
}

function LegalLayout({title,updated,children}:{title:string,updated:string,children:ReactNode}){
  return <div className="legal">
    <header><div className="container nav"><a href="/"><Brand/></a></div></header>
    <main className="container legal-body">
      <a className="back" href="/">&larr; Back to home</a>
      <h1>{title}</h1>
      <p className="updated">Last updated: {updated}</p>
      {children}
    </main>
    <Footer/>
  </div>
}

function PrivacyPage(){
  return <LegalLayout title="Privacy Policy" updated="15 September 2026">
    <p>AfroGenomics (Pty) Ltd ("AfroGenomics", "we", "us") is committed to protecting personal information in line with South Africa's Protection of Personal Information Act, 2013 (POPIA). This policy explains what we collect through this website and how it is used.</p>
    <h2>What we collect</h2>
    <p>Through the contact form we collect your name, organisation, work email and the message you provide. We do not collect genomic, sequencing or patient health data through this website — clinical data is only ever exchanged with laboratory and healthcare partners under a separate, signed data processing agreement.</p>
    <h2>Special personal information</h2>
    <p>Genetic and health information is classified as "special personal information" under POPIA. Where AfroGenomics processes such data as part of a client engagement, it does so only under explicit consent, a documented lawful basis, and appropriate technical and organisational safeguards, and never to make an automated clinical decision.</p>
    <h2>Your rights</h2>
    <p>Under POPIA you may request access to, correction of, or deletion of your personal information, object to processing, and lodge a complaint with the Information Regulator (South Africa). To exercise these rights, contact our Information Officer below.</p>
    <h2>Information Officer</h2>
    <p>Email: <a href="mailto:privacy@afrogenomics.com">privacy@afrogenomics.com</a> (placeholder — update once registered with the Information Regulator).</p>
    <h2>Cookies</h2>
    <p>This site uses only essential cookies required for it to function. No advertising or cross-site tracking cookies are set.</p>
  </LegalLayout>
}

function TermsPage(){
  return <LegalLayout title="Terms of Use" updated="15 September 2026">
    <p>These terms govern use of the AfroGenomics website. By using this site you agree to these terms.</p>
    <h2>No clinical advice</h2>
    <p>Content on this website is informational only and does not constitute medical, diagnostic or clinical advice. AfroGenomics provides computational analysis and interpretation-support infrastructure; clinical diagnosis, counselling and final decisions remain with appropriately qualified professionals.</p>
    <h2>Intellectual property</h2>
    <p>All content, branding and design on this site are the property of AfroGenomics (Pty) Ltd unless otherwise stated.</p>
    <h2>Service engagements</h2>
    <p>Any clinical or laboratory engagement is governed by a separate written agreement, including applicable data processing and confidentiality terms.</p>
    <h2>Contact</h2>
    <p>Questions about these terms: <a href="mailto:hello@afrogenomics.com">hello@afrogenomics.com</a> (placeholder — update once your company domain and registration are finalised).</p>
  </LegalLayout>
}

function Footer(){
  const go=(id:string)=>{ if(location.pathname!=='/'){ location.href = '/#'+id; return } document.getElementById(id)?.scrollIntoView({behavior:'smooth'}) }
  return <footer>
    <div className="container foot">
      <Brand/>
      <p>Computational genomics for clinical workflows in Africa.<br/>AfroGenomics (Pty) Ltd — registration pending, South Africa.</p>
      <div><button onClick={()=>go('platform')}>Platform</button><button onClick={()=>go('use-cases')}>Use cases</button><button onClick={()=>go('advantages')}>Why us</button><button onClick={()=>go('contact')}>Contact</button></div>
    </div>
    <div className="container copy">
      <span>© {new Date().getFullYear()} AfroGenomics <span>Clinical genomics • Computational analysis</span></span>
      <span className="legal-links"><a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Use</a></span>
    </div>
  </footer>
}

function ContactForm(){
  const [status,setStatus] = useState<'idle'|'error'|'sent'>('idle')
  const [fields,setFields] = useState({name:'',org:'',email:'',message:'',consent:false,company:''})
  const set = (k:string,v:string|boolean)=>setFields(f=>({...f,[k]:v}))
  const submit = (e:FormEvent)=>{
    e.preventDefault()
    if(fields.company) return // honeypot: bots fill hidden fields, humans don't
    if(!fields.name || !fields.email || !fields.message || !fields.consent){ setStatus('error'); return }
    const body = `Organisation: ${fields.org}\nEmail: ${fields.email}\n\n${fields.message}`
    window.location.href = `mailto:hello@afrogenomics.com?subject=${encodeURIComponent('Clinical workflow enquiry from '+fields.name)}&body=${encodeURIComponent(body)}`
    setStatus('sent')
  }
  if(status==='sent') return <div className="form-sent"><CheckCircle2 size={22}/><h3>Thanks, {fields.name.split(' ')[0]}.</h3><p>Your email client should have opened with your message ready to send. If it didn't, email us directly at <a href="mailto:hello@afrogenomics.com">hello@afrogenomics.com</a>.</p></div>
  return <form onSubmit={submit} noValidate>
    <input type="text" name="company" value={fields.company} onChange={e=>set('company',e.target.value)} tabIndex={-1} aria-hidden="true" autoComplete="off" className="hp"/>
    <label htmlFor="cf-name">Name<input id="cf-name" placeholder="Your name" value={fields.name} onChange={e=>set('name',e.target.value)} required/></label>
    <label htmlFor="cf-org">Organisation<input id="cf-org" placeholder="Laboratory, hospital or organisation" value={fields.org} onChange={e=>set('org',e.target.value)}/></label>
    <label htmlFor="cf-email">Work email<input id="cf-email" type="email" placeholder="you@organisation.com" value={fields.email} onChange={e=>set('email',e.target.value)} required/></label>
    <label htmlFor="cf-msg">What are you working on?<textarea id="cf-msg" rows={4} placeholder="e.g. WES rare disease workflow…" value={fields.message} onChange={e=>set('message',e.target.value)} required/></label>
    <label className="consent"><input type="checkbox" checked={fields.consent} onChange={e=>set('consent',e.target.checked)} required/> I consent to AfroGenomics processing this information to respond to my enquiry, per the <a href="/privacy">Privacy Policy</a>.</label>
    {status==='error' && <p className="form-error" role="alert">Please complete your name, work email, message and consent before sending.</p>}
    <button className="primary" type="submit">Discuss the workflow <ArrowRight size={16}/></button>
    <small><ShieldCheck size={12}/> No automated clinical decisions are made here.</small>
  </form>
}

function MainSite(){
  const [menu,setMenu] = useState(false)
  const [faq,setFaq] = useState<number|null>(null)
  const go = (id:string)=>{ setMenu(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}) }
  useEffect(()=>{ if(location.hash){ const id=location.hash.slice(1); requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView()) } },[])
  return <div>
    <a className="skip-link" href="#home">Skip to content</a>
    <header><div className="container nav">
      <a href="#home" aria-label="AfroGenomics home"><Brand/></a>
      <nav className={'links '+(menu?'open':'')} id="primary-nav" aria-label="Primary">
        <button className="active" onClick={()=>go('home')}>Home</button>
        <button onClick={()=>go('platform')}>Platform</button>
        <button onClick={()=>go('use-cases')}>Clinical Use Cases</button>
        <button onClick={()=>go('advantages')}>Why Us</button>
        <button onClick={()=>go('workflow')}>How It Works</button>
        <button onClick={()=>go('technology')}>Technology</button>
        <button onClick={()=>go('about')}>About</button>
        <button className="talk" onClick={()=>go('contact')}>Talk to Us <ArrowRight size={15}/></button>
      </nav>
      <button className="menu" aria-expanded={menu} aria-controls="primary-nav" aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
    </div></header>
    <main>
      <section className="hero" id="home"><div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">CLINICAL GENOMICS <span>•</span> COMPUTATIONAL ANALYSIS</div>
          <h1>From genomic data<br/>to <em>clinical evidence.</em></h1>
          <p>AfroGenomics provides computational analysis and interpretation support for clinical sequencing data, helping <b>laboratories and healthcare teams</b> identify, prioritise and investigate clinically relevant genomic variation.</p>
          <div className="actions"><button className="primary" onClick={()=>go('use-cases')}>Explore Clinical Use Cases <ArrowRight size={17}/></button><button className="how" onClick={()=>go('workflow')}><span>▷</span> How It Works</button></div>
          <div className="metrics">
            <div><Dna/><b>WES / WGS</b><small>Whole Exome &<br/>Whole Genome</small></div>
            <div><GitBranch/><b>Variant Analysis</b><small>From raw data<br/>to insights</small></div>
            <div><FileText/><b>Clinical Interpretation<br/>Support</b><small>Evidence-based<br/>prioritisation</small></div>
            <div><RotateCcw/><b>Genomic Reanalysis</b><small>New evidence.<br/>New answers.</small></div>
          </div>
          <div className="trust-strip"><span><Lock size={12}/> POPIA-aligned data handling</span><span><ShieldCheck size={12}/> No automated clinical decisions</span></div>
        </div>
        <div className="hero-image">
          <picture><source srcSet="/assets/hero-reference.webp" type="image/webp"/><img src="/assets/hero-reference.png" alt="Illustration of a DNA double helix beside a genomic variant report showing a BRCA1 finding" width="776" height="573" fetchPriority="high"/></picture>
        </div>
      </div></section>

      <section className="challenge" id="platform"><div className="container challenge-grid">
        <div><div className="eyebrow">THE CHALLENGE</div><h2>Sequencing generates data.<br/>Clinical genomics <em>needs answers.</em></h2><p>Modern sequencing can generate millions of genomic observations. The challenge is determining which findings matter, which require further investigation, and what evidence supports them.</p><p>AfroGenomics provides the computational workflows that sit between sequencing and clinical review.</p></div>
        <div>
          <div className="mini-pipeline">{[['FASTQ / BAM / VCF',FileText],['QC',CircleCheck],['Alignment',SlidersHorizontal],['Variant Calling',Dna],['Annotation',FileText],['Evidence',Database],['Prioritisation',Target],['Clinical Review',UserRound]].map(([t,I])=>{const C=I as any;return <div key={t as string}><C size={19}/><b>{t as string}</b></div>})}</div>
          <picture><source srcSet="/assets/pipeline-reference.webp" type="image/webp"/><img className="pipeline-image" src="/assets/pipeline-reference.png" alt="Diagram of the clinical genomic computational workflow, from raw sequencing files to clinical review" width="1001" height="300" loading="lazy"/></picture>
        </div>
      </div></section>

      <section className="cases" id="use-cases"><div className="container">
        <div className="section-head"><div><div className="eyebrow">CLINICAL USE CASES</div><h2>Computational support<br/>for <em>clinical genomics.</em></h2></div><p>Focused on the clinical questions where sequencing data needs rigorous analysis, evidence organisation and structured review.</p></div>
        <div className="case-grid">{cases.map(([t,tx,tags,I])=>{const C=I as any;return <article className="case" key={t as string}><div className="icon"><C size={20}/></div><h3>{t as string}</h3><p>{tx as string}</p><div className="tags">{(tags as string[]).map(x=><span key={x}>{x}</span>)}</div><button onClick={()=>go('contact')}>Discuss this use case <ArrowRight size={13}/></button></article>})}</div>
      </div></section>

      <section className="advantages" id="advantages"><div className="container">
        <div className="center"><div className="eyebrow">WHY AFROGENOMICS</div><h2>Built differently<br/>from the <em>ground up.</em></h2><p>Most genetic testing providers bundle sequencing and interpretation together. AfroGenomics is the computational layer designed to sit alongside them.</p></div>
        <div className="adv-grid">{advantages.map(([I,t,tx])=>{const C=I as any;return <div className="adv" key={t as string}><div className="icon"><C size={20}/></div><h3>{t as string}</h3><p>{tx as string}</p></div>})}</div>
      </div></section>

      <section className="workflow" id="workflow"><div className="container">
        <div className="center"><div className="eyebrow">HOW IT WORKS</div><h2>From sequence<br/>to <em>clinical review.</em></h2><p>A transparent computational workflow designed around quality, reproducibility and traceability.</p></div>
        <div className="steps">{[['01','Sequence','FASTQ / BAM / VCF'],['02','Analyse','QC • alignment • variant calling'],['03','Interpret','annotation • evidence • prioritisation'],['04','Review','structured findings for clinical review']].map(s=><div key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
      </div></section>

      <section className="technology" id="technology"><div className="container tech">
        <div><div className="eyebrow">TECHNOLOGY</div><h2>Built on rigorous<br/><em>bioinformatics.</em></h2><p>Reproducible workflows can combine established genomics tooling with cloud or HPC infrastructure, selected around the assay and clinical question.</p><div className="pills">{['Nextflow','Docker / Apptainer','Python / R','VEP','ClinVar','gnomAD','FastQC / MultiQC','Cloud / HPC'].map(x=><span key={x}>{x}</span>)}</div></div>
        <div className="terminal"><div className="termbar">● ● ● <span>afrogenomics / clinical-workflow</span></div><pre>$ workflow run clinical_wes{`\n`}Loading reference + annotation databases…{`\n`}✓ quality control complete{`\n`}✓ variant analysis complete{`\n`}✓ evidence aggregation complete{`\n`}→ 24 candidate variants prioritised{`\n`}<b>clinical_review / ready</b></pre></div>
      </div></section>

      <section className="about" id="about"><div className="container about-grid">
        <div className="africa"><span>AFRICA</span></div>
        <div><div className="eyebrow">WHY AFRICA</div><h2>Clinical genomics<br/><em>needs African context.</em></h2><p>African populations remain underrepresented in many genomic datasets. AfroGenomics is being built to strengthen the computational infrastructure available to African clinical genomics while developing population-aware capabilities over time.</p>
          <div className="principles"><div><b>01</b>Population-aware analysis</div><div><b>02</b>Responsible data stewardship</div><div><b>03</b>Local scientific capacity</div></div>
        </div>
      </div></section>

      <section className="faq"><div className="container faq-grid">
        <div><div className="eyebrow">FAQ</div><h2>Questions,<br/><em>answered.</em></h2></div>
        <div>{faqs.map(([q,a],i)=><div className="faqrow" key={q}><button aria-expanded={faq===i} aria-controls={`faq-${i}`} onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span><ChevronDown size={17}/></button>{faq===i && <p id={`faq-${i}`}>{a}</p>}</div>)}</div>
      </div></section>

      <section className="contact" id="contact"><div className="container contact-grid">
        <div><div className="eyebrow">START A CONVERSATION</div><h2>Have a clinical genomics workflow?<br/><em>Let's build the computational layer.</em></h2><p>Tell us what you sequence, the clinical question you are solving and where your workflow needs computational support.</p></div>
        <ContactForm/>
      </div></section>
    </main>
    <Footer/>
    <CookieNotice/>
  </div>
}

function App(){
  const path = typeof window!=='undefined' ? window.location.pathname : '/'
  if(path==='/privacy') return <PrivacyPage/>
  if(path==='/terms') return <TermsPage/>
  return <MainSite/>
}
export default App
