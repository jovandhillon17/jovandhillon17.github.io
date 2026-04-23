// jovandhillon.com — all five variations in one file.
const { useState, useEffect, useRef } = React;
const C = window.CONTENT;

/* ══════ NEO-BRUTALIST ══════ */
function Brutalist() {
  return (
    <div className="v-brutalist">
      <nav className="br-nav">
        <a href="#top" className="br-nav__logo">jovan.dhillon</a>
        <div className="br-nav__links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="br-hero" id="top">
        <div className="br-hero__row">
          <div className="br-hero__main">
            <span className="br-tag">★ Available · Warwickshire, UK</span>
            <h1 className="br-hero__title">
              I fix IT.<br />
              <span className="hl">Properly.</span><br />
              No <span className="red">nonsense.</span>
            </h1>
            <p className="br-hero__lead">
              Technical Services Engineer. Microsoft 365, Entra ID, Intune, UniFi, and Apple fleets. Level 3 IT apprenticeship with Distinction. Still learning, still shipping.
            </p>
            <div className="br-hero__cta">
              <a href="mailto:hello@jovandhillon.com" className="br-btn br-btn--primary">Book a chat →</a>
              <a href="https://linkedin.jovandhillon.com" target="_blank" rel="noopener" className="br-btn br-btn--dark">LinkedIn ↗</a>
            </div>
          </div>
          <div className="br-card-stack">
            <div className="br-info-card br-info-card--accent">
              <div className="k">Qualification</div>
              <div className="v">L3 · Distinction</div>
            </div>
            <div className="br-info-card">
              <div className="k">Role</div>
              <div className="v">TSE @ MSP</div>
            </div>
            <div className="br-info-card br-info-card--dark">
              <div className="k">Stack size</div>
              <div className="v">8 tools</div>
            </div>
            <div className="br-info-card">
              <div className="k">Projects live</div>
              <div className="v">04</div>
            </div>
          </div>
        </div>
      </section>

      <div className="br-marquee">
        <div className="br-marquee__track">
          {Array(2).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span>MICROSOFT 365</span><span className="star">★</span>
              <span>ENTRA ID</span><span className="star">★</span>
              <span>INTUNE</span><span className="star">★</span>
              <span>UNIFI</span><span className="star">★</span>
              <span>APPLE FLEETS</span><span className="star">★</span>
              <span>POWERSHELL</span><span className="star">★</span>
              <span>AZURE</span><span className="star">★</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <section className="br-section" id="about">
        <div className="br-section__head">
          <span className="br-section__num">01</span>
          <h2 className="br-section__title">About the engineer.</h2>
          <span className="br-section__tag">file / about.md</span>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:32}}>
          <div style={{fontSize:'1.0625rem', lineHeight:1.7, fontWeight:500, maxWidth:'58ch'}}>
            <p style={{marginBottom:16}}>I started through an IT apprenticeship and learned the job by doing the job — real tickets, real installs, real networks. Just finished Level 3 with a Distinction.</p>
            <p style={{marginBottom:16}}>Day to day I'm on helpdesk tickets, M365 admin, Intune policy work, UniFi networks, and Apple device rollouts. I write occasionally for ApprenticeWatch about what it's actually like to start in IT.</p>
            <p>Not loud about it, but I care a lot about cable labelling, clean docs, and fleets that nobody notices because nothing is broken.</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {C.quickFacts.map(f => (
              <div key={f.k} style={{border:'3px solid var(--border)', padding:'14px 18px', background: f.accent ? 'var(--accent)' : 'var(--bg)'}}>
                <div style={{fontSize:'0.6875rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', opacity:0.7}}>{f.k}</div>
                <div style={{fontSize:'1rem', fontWeight:700, marginTop:4}}>{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section" id="work">
        <div className="br-section__head">
          <span className="br-section__num">02</span>
          <h2 className="br-section__title">What I do.</h2>
          <span className="br-section__tag">services / ∞</span>
        </div>
        <div className="br-grid">
          {C.services.map(s => (
            <div key={s.id} className="br-tile">
              <span className="br-tile__num">{s.id}</span>
              <h3 className="br-tile__name">{s.name}</h3>
              <p className="br-tile__desc">{s.desc}</p>
              <span className="br-tile__tag">→ {s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="br-section" id="stack">
        <div className="br-section__head">
          <span className="br-section__num">03</span>
          <h2 className="br-section__title">The stack.</h2>
          <span className="br-section__tag">tools / 08</span>
        </div>
        <div className="br-chips">
          {C.stack.map(s => (
            <span key={s.name} className={`br-chip ${s.status === 'live' ? 'br-chip--daily' : 'br-chip--learning'}`}>
              {s.name}
              <span style={{marginLeft:8, fontSize:'0.6875rem', opacity:0.7, letterSpacing:'0.06em', textTransform:'uppercase'}}>{s.note}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="br-section" id="projects">
        <div className="br-section__head">
          <span className="br-section__num">04</span>
          <h2 className="br-section__title">Projects shipped.</h2>
          <span className="br-section__tag">live / archived</span>
        </div>
        <div className="br-projects">
          {C.projects.map(p => (
            <a key={p.num} href={p.href || '#'} target={p.href ? '_blank' : '_self'} rel="noopener" className="br-project">
              <div className="br-project__meta"><span>{p.num} · {p.kind}</span><span>{p.year}</span></div>
              <h3 className="br-project__title">{p.title}</h3>
              <p className="br-project__desc">{p.desc}</p>
              <span className="br-project__arrow">{p.href ? 'VISIT →' : 'PRIVATE'}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="br-section">
        <div className="br-section__head">
          <span className="br-section__num">05</span>
          <h2 className="br-section__title">Right now.</h2>
          <span className="br-section__tag">updated · nov 2025</span>
        </div>
        <ul className="br-now-list">
          {C.now.map((n, i) => (
            <li key={i}><span className="num">{String(i+1).padStart(2,'0')}</span><span>{n}</span></li>
          ))}
        </ul>
      </section>

      <footer className="br-footer" id="contact">
        <div className="br-footer__inner">
          <div className="br-footer__giant">SAY<br/>HELLO.</div>
          <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:24}}>
            <a href="mailto:hello@jovandhillon.com" className="br-btn br-btn--primary">Email →</a>
            <a href="https://linkedin.jovandhillon.com" target="_blank" rel="noopener" className="br-btn">LinkedIn ↗</a>
            <a href="https://github.com/jovandhillon17" target="_blank" rel="noopener" className="br-btn">GitHub ↗</a>
          </div>
          <div className="br-footer__row">
            <span>© Jovan Dhillon · 2025 · Warwickshire</span>
            <span>Built with purpose. No frameworks harmed.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ══════ DASHBOARD ══════ */
function Sparkline({ points, color = 'var(--accent)' }) {
  const w = 100, h = 32;
  const max = Math.max(...points), min = Math.min(...points);
  const d = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / (max - min || 1)) * h;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{width:'100%',height:'100%'}} preserveAspectRatio="none">
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function Dashboard() {
  const spark = (seed) => Array.from({length: 20}, (_, i) => Math.sin(i * 0.4 + seed) * 10 + Math.cos(i * 0.7 + seed) * 5 + seed * 3 + 20);
  const heroPts = Array.from({length: 40}, (_, i) => Math.sin(i*0.3)*15 + Math.cos(i*0.7)*8 + i*0.3 + 30);

  return (
    <div className="v-dashboard">
      <div className="db-shell">
        <aside className="db-rail">
          <div className="db-rail__logo">JD</div>
          <div className="db-rail__icons">
            {['home','user','layers','terminal','folder','activity'].map((n,i) => (
              <div key={n} className={`db-rail__icon ${i===0?'active':''}`} title={n}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  {n==='home' && <path d="M3 12l9-9 9 9M5 10v10h14V10"/>}
                  {n==='user' && <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>}
                  {n==='layers' && <><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 14l9 5 9-5"/></>}
                  {n==='terminal' && <><path d="M4 6l5 5-5 5M12 16h8"/></>}
                  {n==='folder' && <path d="M3 6a2 2 0 012-2h4l2 3h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"/>}
                  {n==='activity' && <path d="M3 12h4l3-9 4 18 3-9h4"/>}
                </svg>
              </div>
            ))}
          </div>
        </aside>

        <main className="db-main">
          <div className="db-topbar">
            <div className="db-crumb">
              <span>~</span><span className="sep">/</span><span>jovandhillon</span><span className="sep">/</span><span className="cur">overview</span>
            </div>
            <div className="db-topbar__right">
              <span className="db-live"><span className="dot"></span>LIVE</span>
              <span>v2.0.0</span>
              <span>WARWICKSHIRE · UK</span>
            </div>
          </div>

          <section className="db-hero" id="top">
            <div>
              <div className="db-hero__label">// profile.engineer()</div>
              <h1 className="db-hero__title">
                Jovan Dhillon. <span className="mono">Technical Services Engineer</span> running quiet, well-built IT.
              </h1>
              <p className="db-hero__lead">
                M365. Entra ID. Intune. UniFi. Apple fleets. Fresh off a Distinction-level Level 3 apprenticeship. Currently embedded in an MSP shipping real work every day.
              </p>
              <div className="db-kpi-strip">
                <div className="db-kpi"><div className="db-kpi__k">Apprenticeship</div><div className="db-kpi__v">L3 · D*</div><div className="db-kpi__delta">completed 2025</div></div>
                <div className="db-kpi"><div className="db-kpi__k">Tools in use</div><div className="db-kpi__v">8</div><div className="db-kpi__delta">↑ growing</div></div>
                <div className="db-kpi"><div className="db-kpi__k">Projects live</div><div className="db-kpi__v">04</div><div className="db-kpi__delta">+1 drafting</div></div>
                <div className="db-kpi"><div className="db-kpi__k">Availability</div><div className="db-kpi__v">Open</div><div className="db-kpi__delta">· responding</div></div>
              </div>
            </div>
            <div className="db-hero__panel">
              <div className="ph"><span>ENGAGEMENT · LAST 30d</span><span style={{color:'var(--accent)'}}>▲ 38%</span></div>
              <div className="db-chart"><Sparkline points={heroPts} /></div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, paddingTop:12, borderTop:'1px solid var(--border)'}}>
                <div><div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'0.6875rem', color:'var(--fg-muted)', letterSpacing:'0.06em', textTransform:'uppercase'}}>Tickets</div><div style={{color:'#fff', fontWeight:700, fontSize:'1.125rem'}}>248</div></div>
                <div><div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'0.6875rem', color:'var(--fg-muted)', letterSpacing:'0.06em', textTransform:'uppercase'}}>Installs</div><div style={{color:'#fff', fontWeight:700, fontSize:'1.125rem'}}>32</div></div>
                <div><div style={{fontFamily:'JetBrains Mono, monospace', fontSize:'0.6875rem', color:'var(--fg-muted)', letterSpacing:'0.06em', textTransform:'uppercase'}}>Uptime</div><div style={{color:'var(--accent)', fontWeight:700, fontSize:'1.125rem'}}>99.8%</div></div>
              </div>
            </div>
          </section>

          <section className="db-sec" id="work">
            <div className="db-sec__head">
              <div>
                <div className="db-sec__id">SVC · 01 / capabilities</div>
                <h2 className="db-sec__title">What I ship</h2>
                <p className="db-sec__desc">Six areas, running live across real-world client infrastructure.</p>
              </div>
            </div>
            <div className="db-board">
              {C.services.map((s, i) => (
                <div key={s.id} className="db-card">
                  <div className="db-card__head">
                    <span>svc/{s.id}</span>
                    <span className="db-card__status"><span className="dot"></span>RUNNING</span>
                  </div>
                  <h3 className="db-card__name">{s.name}</h3>
                  <p className="db-card__desc">{s.desc}</p>
                  <div className="db-card__spark"><Sparkline points={spark(i+1)} color={i%2===0 ? 'var(--accent)' : 'var(--accent-2)'} /></div>
                </div>
              ))}
            </div>
          </section>

          <section className="db-sec" id="stack">
            <div className="db-sec__head">
              <div>
                <div className="db-sec__id">STK · 02 / toolchain</div>
                <h2 className="db-sec__title">Stack & status</h2>
              </div>
            </div>
            <table className="db-table">
              <thead><tr><th>#</th><th>Tool</th><th>Category</th><th>Activity</th><th>Status</th></tr></thead>
              <tbody>
                {C.stack.map((s, i) => (
                  <tr key={s.name}>
                    <td style={{color:'var(--fg-muted)',fontFamily:'JetBrains Mono, monospace'}}>{String(i+1).padStart(2,'0')}</td>
                    <td className="name">{s.name}</td>
                    <td className="cat">{s.cat}</td>
                    <td><div className="spark"><Sparkline points={spark(i*1.3)} color={s.status==='live'?'var(--accent)':'var(--warn)'} /></div></td>
                    <td className={`status ${s.status==='live'?'':'neutral'}`}>{s.status === 'live' ? '● ACTIVE' : '○ LEARNING'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="db-sec" id="projects">
            <div className="db-sec__head">
              <div>
                <div className="db-sec__id">PRJ · 03 / deployed</div>
                <h2 className="db-sec__title">Projects</h2>
              </div>
            </div>
            <div className="db-proj">
              {C.projects.map(p => (
                <a key={p.num} href={p.href || '#'} target={p.href?'_blank':'_self'} rel="noopener" className="db-proj__item">
                  <div className="db-proj__meta"><span>prj/{p.num} · {p.kind}</span><span>{p.year}</span></div>
                  <h3 className="db-proj__title">{p.title}</h3>
                  <p className="db-proj__desc">{p.desc}</p>
                  <span className="db-proj__link">{p.href ? '→ open' : '→ private'}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="db-sec">
            <div className="db-sec__head">
              <div>
                <div className="db-sec__id">LOG · 04 / current</div>
                <h2 className="db-sec__title">Now</h2>
              </div>
            </div>
            <ul className="db-now">
              {C.now.map((n, i) => (
                <li key={i}>
                  <span className="ts">[{String(i+1).padStart(2,'0')}:00]</span>
                  <span>{n}</span>
                  <span className="tag">live</span>
                </li>
              ))}
            </ul>
          </section>

          <footer className="db-footer">
            <div>© Jovan Dhillon · 2025 · Warwickshire, UK</div>
            <div style={{display:'flex',gap:16}}>
              <a href="mailto:hello@jovandhillon.com">hello@jovandhillon.com</a>
              <a href="https://linkedin.jovandhillon.com" target="_blank" rel="noopener">LINKEDIN ↗</a>
              <a href="https://github.com/jovandhillon17" target="_blank" rel="noopener">GITHUB ↗</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

/* ══════ AMBIENT ══════ */
function AmbientCanvas() {
  const ref = useRef(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function size() {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr; canvas.height = r.height * dpr;
    }
    size();
    window.addEventListener('resize', size);
    function onMove(e) {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    }
    window.addEventListener('mousemove', onMove);

    const N = 80;
    const pts = Array.from({length:N},()=>({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 200 + 80,
      seed: Math.random() * 1000,
      hue: Math.random() < 0.5 ? 'a' : 'b',
    }));

    function tick(t) {
      if (!running) return;
      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = 'rgba(7,6,15,0.04)';
      ctx.fillRect(0,0,w,h);
      for (const p of pts) {
        const ang = Math.sin((p.x*2 + t*0.00008 + p.seed)*1.8) + Math.cos((p.y*2 - t*0.00008 + p.seed*0.6)*1.4);
        const a = ang * Math.PI;
        p.x += Math.cos(a) * 0.0004;
        p.y += Math.sin(a) * 0.0004;
        // cursor gravity
        const dx = mouse.current.x - p.x, dy = mouse.current.y - p.y;
        const d = Math.sqrt(dx*dx+dy*dy) + 0.01;
        p.x += (dx/d) * 0.0005 * Math.max(0, 0.25 - d);
        p.y += (dy/d) * 0.0005 * Math.max(0, 0.25 - d);
        if (p.x < -0.1) p.x = 1.1; if (p.x > 1.1) p.x = -0.1;
        if (p.y < -0.1) p.y = 1.1; if (p.y > 1.1) p.y = -0.1;

        const px = p.x*w, py = p.y*h, pr = p.r*dpr;
        const g = ctx.createRadialGradient(px,py,0,px,py,pr);
        const color = p.hue === 'a' ? '200,156,255' : '255,128,200';
        g.addColorStop(0, `rgba(${color},0.16)`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(px,py,pr,0,Math.PI*2); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => { running=false; cancelAnimationFrame(raf); window.removeEventListener('resize',size); window.removeEventListener('mousemove',onMove); };
  }, []);
  return <canvas ref={ref} className="am-canvas" />;
}

function Ambient() {
  return (
    <div className="v-ambient">
      <AmbientCanvas />
      <div className="am-grain" />
      <div className="am-content">
        <nav className="am-nav">
          <div className="am-nav__logo">Jovan Dhillon</div>
          <div className="am-nav__links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="am-hero" id="top">
          <div className="am-hero__inner">
            <div className="am-hero__eyebrow">Technical Services Engineer · Warwickshire</div>
            <h1 className="am-hero__title">
              Modern IT, <em>quietly</em><br />
              <span className="outline">engineered</span> for<br />
              the way people<br />
              actually work.
            </h1>
            <p className="am-hero__lead">
              I'm Jovan. I run the quiet layer — Microsoft 365, Entra ID, Intune, UniFi networks, and Apple fleets — so the people above it can stop worrying about IT and just work.
            </p>
            <div className="am-hero__cta">
              <a href="mailto:hello@jovandhillon.com" className="am-btn am-btn--primary">Start a conversation →</a>
              <a href="#work" className="am-btn">See the work</a>
            </div>
          </div>
        </section>

        <section className="am-section" id="about">
          <div className="am-section__head">
            <div className="am-section__eyebrow">01 — About</div>
            <h2 className="am-section__title">A calm technical temperament, built on <em>real hands-on work</em>.</h2>
          </div>
          <div className="am-cards">
            {[
              {num:'01',name:'Apprentice-trained',desc:'Level 3 IT Apprenticeship completed with a Distinction. Learned the craft by shipping real work to real users.',tag:'Certified 2025'},
              {num:'02',name:'MSP-seasoned',desc:'Day-to-day across tickets, installs, client infrastructure, and project work inside a managed-services environment.',tag:'Active role'},
              {num:'03',name:'Cyber-aware',desc:'Security-first mindset baked in from the start — policy over patching, least-privilege by default, documented trails.',tag:'Always on'},
            ].map(c => (
              <div key={c.num} className="am-card">
                <div className="am-card__num">{c.num}</div>
                <h3 className="am-card__name">{c.name}</h3>
                <p className="am-card__desc">{c.desc}</p>
                <span className="am-card__tag">{c.tag}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="am-section" id="work">
          <div className="am-section__head">
            <div className="am-section__eyebrow">02 — Capabilities</div>
            <h2 className="am-section__title">Six things I do, <em>properly</em>.</h2>
          </div>
          <div className="am-stack-list">
            {C.services.map(s => (
              <div key={s.id} className="am-stack-row">
                <span className="num">{s.id}</span>
                <span className="nm">{s.name}</span>
                <span className="ct" style={{color:'var(--fg-muted)', lineHeight:1.55}}>{s.desc}</span>
                <span className="st live">{s.tag}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="am-section" id="stack">
          <div className="am-section__head">
            <div className="am-section__eyebrow">03 — Toolkit</div>
            <h2 className="am-section__title"><em>Daily rotation</em>, and what's next.</h2>
          </div>
          <div className="am-stack-list">
            {C.stack.map((s, i) => (
              <div key={s.name} className="am-stack-row">
                <span className="num">{String(i+1).padStart(2,'0')}</span>
                <span className="nm">{s.name}</span>
                <span className="ct">{s.cat}</span>
                <span className={`st ${s.status==='live'?'live':''}`}>{s.note}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="am-section" id="projects">
          <div className="am-section__head">
            <div className="am-section__eyebrow">04 — Projects</div>
            <h2 className="am-section__title">Small, specific, <em>built for keeps</em>.</h2>
          </div>
          <div className="am-projects">
            {C.projects.map(p => (
              <a key={p.num} href={p.href || '#'} target={p.href?'_blank':'_self'} rel="noopener" className="am-project">
                <span className="am-project__num">{p.num}</span>
                <h3 className="am-project__title">{p.title}</h3>
                <p className="am-project__desc">{p.desc}</p>
                <span className="am-project__arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="am-section">
          <div className="am-section__head">
            <div className="am-section__eyebrow">05 — Now</div>
            <h2 className="am-section__title">What I'm <em>focused on</em> this month.</h2>
          </div>
          <ul className="am-now-list">
            {C.now.map((n, i) => (
              <li key={i} data-n={String(i+1).padStart(2,'0')}>{n}</li>
            ))}
          </ul>
        </section>

        <footer className="am-footer" id="contact">
          <div className="am-footer__giant">Let's <em>talk</em>.</div>
          <div className="am-footer__mail">
            <a href="mailto:hello@jovandhillon.com">hello@jovandhillon.com</a>
          </div>
          <div className="am-footer__row">
            <a href="https://linkedin.jovandhillon.com" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/jovandhillon17" target="_blank" rel="noopener">GitHub</a>
            <span>© 2025 · Warwickshire</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ══════ EDITORIAL SERIF ══════ */
function EditorialSerif() {
  return (
    <div className="v-editorial">
      <header className="ed-masthead">
        <div className="ed-masthead__date">Vol. 01 · Warwickshire</div>
        <div className="ed-masthead__logo">Jovan <em>Dhillon</em></div>
        <div className="ed-masthead__issue">Issue № 25 · 2025</div>
      </header>
      <nav className="ed-subnav">
        <a href="#about">About</a>
        <a href="#work">Practice</a>
        <a href="#stack">Instruments</a>
        <a href="#projects">Dispatches</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="ed-hero" id="top">
        <div className="ed-hero__kicker">Cover · The Quiet Engineer</div>
        <h1 className="ed-hero__title">
          Modern IT, built <em>quietly</em>, built properly.
        </h1>
        <p className="ed-hero__deck">
          A Technical Services Engineer writing about the unglamorous craft of Microsoft 365, Entra ID, Intune, UniFi networks, and Apple fleets — where the good work is the work nobody notices.
        </p>
        <div className="ed-hero__meta">
          <span>By <a href="#">Jovan Dhillon</a></span>
          <span>Level 3 IT Apprentice · Distinction</span>
          <span>Reading time · 6 min</span>
          <span><a href="mailto:hello@jovandhillon.com">hello@jovandhillon.com</a></span>
        </div>
      </section>

      <div className="ed-marquee">
        <div className="ed-marquee__track">
          {Array(2).fill(0).map((_,i)=>(
            <React.Fragment key={i}>
              <span>Microsoft 365</span><span className="star">·</span>
              <span>Entra ID</span><span className="star">·</span>
              <span>Intune</span><span className="star">·</span>
              <span>UniFi</span><span className="star">·</span>
              <span>Apple fleets</span><span className="star">·</span>
              <span>PowerShell</span><span className="star">·</span>
              <span>Azure</span><span className="star">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <article className="ed-article" id="about">
        <div className="ed-article__head">
          <div className="ed-article__num">I · About</div>
          <h2 className="ed-article__title">An <em>apprenticeship</em> in doing things carefully.</h2>
        </div>
        <div className="ed-columns">
          <p>I came into IT through an apprenticeship because it seemed honest — learn the job while doing the job. Three years later, Level 3 complete with a Distinction, I'm still convinced it was the right door.</p>
          <p>The work itself is quiet. It's a calm helpdesk. A tidy Conditional Access policy. A UniFi network with sensible VLANs. A MacBook arriving with Intune already configured, so the new joiner just opens it and works.</p>
          <p>Most of what I do will never be celebrated. Nobody writes case studies about the ticket that didn't happen because the policy was right. That's fine. The goal is fewer interruptions, not louder ones.</p>
          <p>I write occasionally for <a href="https://apprenticewatch.com/resources/what-starting-my-it-apprenticeship-taught-me" target="_blank" rel="noopener" style={{color:'var(--accent)',borderBottom:'1px solid currentColor'}}>ApprenticeWatch</a> about what early-career IT actually feels like. Less corporate brochure, more honest diary entry.</p>
        </div>
      </article>

      <article className="ed-article" id="work">
        <div className="ed-article__head">
          <div className="ed-article__num">II · Practice</div>
          <h2 className="ed-article__title">Six things I do, <em>attentively</em>.</h2>
        </div>
        <div className="ed-list">
          {C.services.map(s => (
            <div key={s.id} className="ed-list__row">
              <span className="n">{s.id}</span>
              <span className="nm"><em>{s.name}</em></span>
              <span className="ds">{s.desc}</span>
              <span className="tg">{s.tag}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="ed-article" id="stack">
        <div className="ed-article__head">
          <div className="ed-article__num">III · Instruments</div>
          <h2 className="ed-article__title">The <em>tools</em> in rotation.</h2>
        </div>
        <div className="ed-stack">
          {C.stack.map(s => (
            <div key={s.name} className="ed-stack-item">
              <span className="dot"></span>
              {s.name} <span style={{color:'var(--fg-muted)',fontSize:'0.8125rem',fontStyle:'normal',marginLeft:8}}>· {s.note}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="ed-article" id="projects">
        <div className="ed-article__head">
          <div className="ed-article__num">IV · Dispatches</div>
          <h2 className="ed-article__title">Small things, <em>shipped carefully</em>.</h2>
        </div>
        <div className="ed-projects">
          {C.projects.map(p => (
            <a key={p.num} href={p.href || '#'} target={p.href?'_blank':'_self'} rel="noopener" className="ed-project">
              <div className="ed-project__byline"><span>№ {p.num} · {p.kind}</span><span>{p.year}</span></div>
              <h3 className="ed-project__title"><em>{p.title}</em></h3>
              <p className="ed-project__desc">{p.desc}</p>
              <span className="ed-project__link">→ {p.href ? 'read on' : 'private'}</span>
            </a>
          ))}
        </div>
      </article>

      <article className="ed-article">
        <div className="ed-article__head">
          <div className="ed-article__num">V · Currently</div>
          <h2 className="ed-article__title">A short note on the <em>present</em>.</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column', gap:20, fontSize:'1.0625rem', lineHeight:1.75, maxWidth:'70ch'}}>
          {C.now.map((n, i) => (
            <p key={i}><span style={{fontFamily:'JetBrains Mono, monospace', fontSize:'0.75rem', color:'var(--accent)', letterSpacing:'0.1em', marginRight:12}}>{String(i+1).padStart(2,'0')}</span>{n}</p>
          ))}
        </div>
      </article>

      <footer className="ed-footer" id="contact">
        <div className="ed-footer__giant"><em>&</em> hello,</div>
        <p style={{fontSize:'1.125rem', lineHeight:1.6, maxWidth:'50ch', marginBottom:28, color:'var(--fg-muted)'}}>
          If any of this resonates — a project, a role, a conversation — I'd love to hear from you.
        </p>
        <div style={{display:'flex',gap:32,flexWrap:'wrap', fontSize:'1.0625rem', fontStyle:'italic', marginBottom:48}}>
          <a href="mailto:hello@jovandhillon.com" style={{borderBottom:'1px solid var(--accent)', paddingBottom:2}}>hello@jovandhillon.com</a>
          <a href="https://linkedin.jovandhillon.com" target="_blank" rel="noopener" style={{borderBottom:'1px solid var(--accent)', paddingBottom:2}}>LinkedIn</a>
          <a href="https://github.com/jovandhillon17" target="_blank" rel="noopener" style={{borderBottom:'1px solid var(--accent)', paddingBottom:2}}>GitHub</a>
        </div>
        <div className="ed-footer__row">
          <span>© Jovan Dhillon · MMXXV</span>
          <span>Set in EB Garamond · printed on the web</span>
        </div>
      </footer>
    </div>
  );
}

/* ══════ TERMINAL CLI ══════ */
function CLI() {
  const [typedCmd, setTypedCmd] = useState('');
  const fullCmd = './whoami --verbose';
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTypedCmd(fullCmd.slice(0, i));
      if (i >= fullCmd.length) clearInterval(iv);
    }, 55);
    return () => clearInterval(iv);
  }, []);

  const banner = `
     ██╗ ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗
     ██║██╔═══██╗██║   ██║██╔══██╗████╗  ██║
     ██║██║   ██║██║   ██║███████║██╔██╗ ██║
██   ██║██║   ██║╚██╗ ██╔╝██╔══██║██║╚██╗██║
╚█████╔╝╚██████╔╝ ╚████╔╝ ██║  ██║██║ ╚████║
 ╚════╝  ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═══╝
`;

  return (
    <div className="v-cli">
      <div className="cli-bar">
        <div className="cli-bar__dots"><span></span><span></span><span></span></div>
        <div className="cli-bar__path">jovan@dhillon:~/portfolio</div>
        <div>zsh · 80×24</div>
      </div>
      <div className="cli-wrap">
        <pre className="cli-banner">{banner}</pre>
        <div style={{color:'var(--fg-muted)', marginBottom:20}}>
          jovandhillon.com · v2.0 · {`last login: ${new Date().toDateString().toLowerCase()}`}<br/>
          Type <span style={{color:'var(--accent)'}}>help</span> for a list of commands, or just keep scrolling.
        </div>

        <div className="cli-prompt"><span className="user">jovan@dhillon</span>:<span className="path">~</span></div>
        <div className="cli-cmd">{typedCmd}<span className="cli-cursor"></span></div>

        <div className="cli-out cli-block" data-label="whoami" id="about">
          <div><span className="c1">name</span>      : Jovan Dhillon</div>
          <div><span className="c1">role</span>      : Technical Services Engineer</div>
          <div><span className="c1">location</span>  : Warwickshire, UK</div>
          <div><span className="c1">quals</span>     : <span className="c2">L3 IT Apprenticeship · Distinction</span></div>
          <div><span className="c1">status</span>    : <span className="c3">available · responding · building</span></div>
          <div style={{marginTop:10, color:'var(--fg)', lineHeight:1.7}}>
            Hi. I run quiet, well-built IT for real businesses — Microsoft 365, Entra ID, Intune, UniFi, and Apple fleets. Fresh off a Distinction-level apprenticeship. MSP-trained. Still actively learning. Prefer policy over patching, documentation over heroics, and properly labelled cables.
          </div>
        </div>

        <div className="cli-prompt"><span className="user">jovan@dhillon</span>:<span className="path">~</span></div>
        <div className="cli-cmd">ls -la ./services</div>
        <div className="cli-out" id="work">
          <div className="dim">// 6 capabilities · mode: ship-mode</div>
          <div className="cli-services">
            {C.services.map(s => (
              <div key={s.id} className="cli-svc">
                <div className="cli-svc__id">svc/{s.id} · drwxr-xr-x</div>
                <div className="cli-svc__name">./{s.name.toLowerCase().replace(/ /g,'-').replace(/&/g,'and')}</div>
                <div className="cli-svc__desc">{s.desc}</div>
                <div className="cli-svc__tags"># {s.tag.replace(/ · /g, ' #')}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cli-prompt"><span className="user">jovan@dhillon</span>:<span className="path">~</span></div>
        <div className="cli-cmd">cat stack.json | jq</div>
        <div className="cli-out" id="stack">
          <table className="cli-table">
            <thead><tr><th>#</th><th>tool</th><th>category</th><th>status</th></tr></thead>
            <tbody>
              {C.stack.map((s,i)=>(
                <tr key={s.name}>
                  <td className="dim">{String(i+1).padStart(2,'0')}</td>
                  <td className="name">{s.name}</td>
                  <td className="dim">{s.cat}</td>
                  <td className={`status ${s.status==='live'?'':'neutral'}`}>
                    {s.status === 'live' ? `[●] active · ${s.note.toLowerCase()}` : `[○] ${s.note.toLowerCase()}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cli-prompt"><span className="user">jovan@dhillon</span>:<span className="path">~</span></div>
        <div className="cli-cmd">git log --oneline ./projects</div>
        <div className="cli-out" id="projects">
          <ul className="cli-projects">
            {C.projects.map(p=>(
              <li key={p.num}>
                <div className="cli-projects__head"><span>commit {p.num}a{p.year.slice(-2)} · {p.kind}</span><span>{p.year}</span></div>
                <div className="cli-projects__title"><span className="tag">feat:</span> {p.title}</div>
                <div className="cli-projects__desc">{p.desc}</div>
                {p.href && <a href={p.href} target="_blank" rel="noopener" className="cli-projects__url">→ {new URL(p.href).hostname.replace(/^www\./,'')}</a>}
              </li>
            ))}
          </ul>
        </div>

        <div className="cli-prompt"><span className="user">jovan@dhillon</span>:<span className="path">~</span></div>
        <div className="cli-cmd">tail -f now.log</div>
        <div className="cli-out">
          {C.now.map((n,i)=>(
            <div key={i} style={{padding:'4px 0'}}>
              <span className="dim">[{new Date().toISOString().slice(0,10)} {String(9+i).padStart(2,'0')}:2{i}]</span>{' '}
              <span className="c1">info</span>{' '}
              <span>{n}</span>
            </div>
          ))}
        </div>

        <div className="cli-prompt"><span className="user">jovan@dhillon</span>:<span className="path">~</span></div>
        <div className="cli-cmd">echo "let's talk" | mail -s "hello" jovan</div>
        <div className="cli-out cli-block" data-label="contact">
          <div>email  : <a href="mailto:hello@jovandhillon.com" style={{color:'var(--accent)'}}>hello@jovandhillon.com</a></div>
          <div className="cli-footer-links" style={{marginTop:10}}>
            <a href="https://linkedin.jovandhillon.com" target="_blank" rel="noopener">linkedin ↗</a>
            <a href="https://github.com/jovandhillon17" target="_blank" rel="noopener">github ↗</a>
          </div>
        </div>

        <div className="cli-prompt"><span className="user">jovan@dhillon</span>:<span className="path">~</span></div>
        <div className="cli-cmd"><span className="cli-cursor"></span></div>

        <div className="cli-help">
          <strong style={{color:'var(--accent)'}}>keyboard:</strong> <kbd>↑</kbd> <kbd>↓</kbd> scroll · <kbd>⌘</kbd>+<kbd>K</kbd> palette · <kbd>esc</kbd> clear · © jovan dhillon · {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

/* ══════ TWEAKS PANEL ══════ */
function Tweaks({ variation, setVariation }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onMsg(e) {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setOpen(true);
      if (d.type === '__deactivate_edit_mode') setOpen(false);
    }
    window.addEventListener('message', onMsg);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch(e){}
    return () => window.removeEventListener('message', onMsg);
  }, []);
  function persist(v) { try { window.parent.postMessage({type:'__edit_mode_set_keys', edits:{variation:v}},'*'); } catch(e){} }

  const vars = [
    {id:'brutalist', label:'Neo-brutalist', sub:'yellow + black'},
    {id:'dashboard', label:'Dashboard',     sub:'dataviz · dark'},
    {id:'ambient',   label:'Ambient',       sub:'moody · serif'},
    {id:'editorial', label:'Editorial',     sub:'NYT · warm'},
    {id:'cli',       label:'Terminal CLI',  sub:'phosphor · green'},
  ];

  return (
    <div className={`tweaks-panel ${open?'open':''}`}>
      <h4>Tweaks · Variation
        <span className="close" onClick={()=>setOpen(false)}>✕</span>
      </h4>
      <div className="tweaks-options">
        {vars.map(v=>(
          <button key={v.id} className={`tweaks-opt ${variation===v.id?'active':''}`}
                  onClick={()=>{setVariation(v.id); persist(v.id);}}>
            <span>{v.label}</span><span className="sub">{v.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Brutalist, Dashboard, Ambient, EditorialSerif, CLI, Tweaks });
