window.PortfolioPage = () => {
    React.useEffect(() => {
        document.title = 'Portfolio | BuildCraftTechs';
        document.querySelector('meta[name="description"]').content =
            'Explore BuildCraftTechs projects — real-world software systems, backend platforms, and automation tools built for scale.';
        document.querySelector('link[rel="canonical"]').href = 'https://buildcrafttechs.com/portfolio';
    }, []);
    var A    = 'var(--c-accent)';
    var T    = 'var(--c-text)';
    var TS   = 'var(--c-text-sub)';
    var TM   = 'var(--c-text-muted)';
    var BG   = 'var(--c-bg)';
    var SURF = 'var(--c-surface)';
    var CARD = 'var(--c-card)';
    var CARD2= 'var(--c-card2)';
    var BDR  = 'var(--c-border)';
    var BDRA = 'var(--c-border-accent)';
    var ABG  = 'var(--c-accent-bg)';

    var cardStyle = { backgroundColor: CARD, border: '1px solid ' + BDR };

    return (
    <main className="min-h-screen" style={{backgroundColor: BG}}>
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
            <div className="max-w-3xl">
                <p className="font-label text-xs uppercase tracking-widest mb-4 font-bold" style={{color: A}}>Our Work</p>
                <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-6" style={{color: T}}>
                    Portfolio of<br/><span style={{color: A}}>Technical Excellence.</span>
                </h1>
                <p className="text-lg leading-relaxed max-w-2xl" style={{color: TS}}>
                    From high-frequency trading systems to enterprise security — mission-critical software that powers businesses worldwide.
                </p>
            </div>
        </section>

        {/* Featured */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-8 rounded-xl overflow-hidden" style={cardStyle}>
                    <div className="aspect-video w-full flex items-center justify-center" style={{backgroundColor: SURF, borderBottom: '1px solid ' + BDR}}>
                        <div className="text-center">
                            <span className="material-symbols-outlined text-6xl mb-4" style={{color: A}}>trending_up</span>
                            <div className="flex items-center justify-center gap-3" style={{color: TS}}>
                                <span className="text-2xl font-mono" style={{color: T}}>$2.4B</span>
                                <span className="text-sm">Daily Volume</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['FinTech','High Frequency','Real-time'].map(function(tag, i) {
                                return <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{backgroundColor: i === 0 ? ABG : 'transparent', border: '1px solid ' + (i === 0 ? BDRA : BDR), color: i === 0 ? A : TS}}>{tag}</span>;
                            })}
                        </div>
                        <h2 className="font-headline text-2xl font-bold mb-3" style={{color: T}}>High-Performance Trading Platform</h2>
                        <p className="leading-relaxed mb-6 text-sm" style={{color: TS}}>Ultra-low latency trading system processing 1M+ orders/second. Real-time market data feeds, algorithmic trading engines, and risk management.</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {[['<10μs','Latency'],['99.99%','Uptime'],['1M+','Orders/sec']].map(function(s) {
                                return (
                                    <div key={s[1]} className="text-center p-3 rounded-lg" style={{backgroundColor: SURF}}>
                                        <p className="text-lg font-bold" style={{color: T}}>{s[0]}</p>
                                        <p className="text-xs" style={{color: TM}}>{s[1]}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['Java','Kafka','Redis','FIX Protocol'].map(function(t) {
                                return <span key={t} className="px-2 py-1 rounded text-[10px] font-medium" style={{backgroundColor: CARD2, color: TS}}>{t}</span>;
                            })}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4 p-8 rounded-xl flex flex-col" style={{backgroundColor: SURF, border: '1px solid ' + BDRA}}>
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                        <span className="material-symbols-outlined" style={{color: A}}>security</span>
                    </div>
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block w-fit" style={{backgroundColor: ABG, color: A}}>Security</span>
                    <h2 className="font-headline text-2xl font-bold mb-3" style={{color: T}}>VAPT Services</h2>
                    <p className="leading-relaxed mb-6 text-sm" style={{color: TS}}>Comprehensive Vulnerability Assessment & Penetration Testing. Certified experts identify and remediate threats before they become breaches.</p>
                    <ul className="space-y-3 mt-auto">
                        {['Web & API Penetration Testing','Network Security Assessment','Cloud Security Audit','OWASP Top 10 Compliance'].map(function(item) {
                            return <li key={item} className="flex items-center gap-3 text-sm" style={{color: TS}}><span className="material-symbols-outlined text-sm" style={{color: A}}>check</span>{item}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </section>

        {/* Row 2 */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                    { icon:'poll',   title:'Enterprise Survey Dashboard', desc:'Multi-tenant survey platform with real-time analytics and AI-powered sentiment analysis. 10M+ responses.', items:['Real-time Response Tracking','AI Sentiment Analysis','Custom Report Builder'], tech:['React','Node.js','MongoDB','D3.js'] },
                    { icon:'shield', title:'Risk Management System (RMS)', desc:'Enterprise-grade risk platform for financial institutions. Real-time monitoring, regulatory compliance, automated alerts.', items:['Real-time Risk Monitoring','Basel III/IV Compliance','VaR & Stress Testing'], tech:['Spring Boot','Python','PostgreSQL','Grafana'] },
                ].map(function(p) {
                    return (
                        <div key={p.title} className="rounded-xl overflow-hidden" style={cardStyle}>
                            <div className="h-44 flex items-center justify-center" style={{backgroundColor: SURF, borderBottom: '1px solid ' + BDR}}>
                                <span className="material-symbols-outlined text-5xl" style={{color: A}}>{p.icon}</span>
                            </div>
                            <div className="p-6">
                                <h2 className="font-headline text-xl font-bold mb-3" style={{color: T}}>{p.title}</h2>
                                <p className="text-sm leading-relaxed mb-4" style={{color: TS}}>{p.desc}</p>
                                <ul className="space-y-2 mb-4">
                                    {p.items.map(function(item) {
                                        return <li key={item} className="flex items-center gap-2 text-xs" style={{color: TS}}><span className="w-1 h-1 rounded-full flex-shrink-0" style={{background: A}}></span>{item}</li>;
                                    })}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map(function(t) {
                                        return <span key={t} className="px-2 py-1 rounded text-[10px] font-medium" style={{backgroundColor: CARD2, color: TS}}>{t}</span>;
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Row 3 */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                    { icon:'shopping_cart',    tag:'E-commerce', title:'Multi-Vendor Marketplace',  desc:'50K+ daily transactions with real-time inventory and payment processing.', tech:['Next.js','Stripe','AWS'] },
                    { icon:'health_and_safety',tag:'Healthcare',  title:'Telemedicine Platform',     desc:'HIPAA-compliant video consultations and EHR integration for 500+ clinics.', tech:['React','WebRTC','HIPAA'] },
                    { icon:'sensors',          tag:'IoT',         title:'Industrial IoT Platform',   desc:'10M+ sensor events/day with predictive maintenance.', tech:['MQTT','TimescaleDB','ML'] },
                ].map(function(p) {
                    return (
                        <div key={p.title} className="p-6 rounded-xl" style={cardStyle}>
                            <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                                <span className="material-symbols-outlined" style={{color: A}}>{p.icon}</span>
                            </div>
                            <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{backgroundColor: ABG, color: A}}>{p.tag}</span>
                            <h3 className="font-headline text-lg font-bold mt-3 mb-2" style={{color: T}}>{p.title}</h3>
                            <p className="text-sm leading-relaxed mb-4" style={{color: TS}}>{p.desc}</p>
                            <div className="flex flex-wrap gap-1">
                                {p.tech.map(function(t) {
                                    return <span key={t} className="px-2 py-1 rounded text-[9px]" style={{backgroundColor: CARD2, color: TM}}>{t}</span>;
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Row 4 */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {[
                    { icon:'deployed_code', title:'DevOps Pipeline',     desc:'90% faster deployments with zero-downtime CI/CD.' },
                    { icon:'token',         title:'Blockchain Solution',  desc:'Supply chain traceability with smart contracts.' },
                    { icon:'smart_toy',     title:'AI Customer Support',  desc:'LLM chatbot handling 80% queries, 95% satisfaction.' },
                    { icon:'database',      title:'Enterprise Data Lake', desc:'50TB+ daily with real-time analytics.' },
                ].map(function(p) {
                    return (
                        <div key={p.title} className="p-5 rounded-xl" style={cardStyle}>
                            <span className="material-symbols-outlined text-3xl mb-3" style={{color: A}}>{p.icon}</span>
                            <h3 className="font-headline text-sm font-bold mb-2" style={{color: T}}>{p.title}</h3>
                            <p className="text-xs leading-relaxed" style={{color: TM}}>{p.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{backgroundColor: SURF, borderTop: '1px solid ' + BDRA}}>
            <div className="max-w-2xl mx-auto px-6 text-center">
                <h2 className="font-headline text-4xl font-bold mb-4" style={{color: T}}>Have a Project in Mind?</h2>
                <p className="mb-10" style={{color: TS}}>Let's discuss how we can help bring your vision to life.</p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <ReactRouterDOM.Link to="/contact" className="px-8 py-3 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000'}}>Start Your Project</ReactRouterDOM.Link>
                    <ReactRouterDOM.Link to="/services" className="px-8 py-3 rounded-lg font-label text-sm font-semibold" style={{border: '1px solid ' + BDR, color: TS}}>Explore Services</ReactRouterDOM.Link>
                </div>
            </div>
        </section>
    </main>
    );
};
