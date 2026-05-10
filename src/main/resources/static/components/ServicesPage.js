window.ServicesPage = () => {
    var A = 'var(--c-accent)';
    var T = 'var(--c-text)';
    var TS = 'var(--c-text-sub)';
    var TM = 'var(--c-text-muted)';
    var BG = 'var(--c-bg)';
    var SURF = 'var(--c-surface)';
    var CARD = 'var(--c-card)';
    var BDR = 'var(--c-border)';
    var BDRA = 'var(--c-border-accent)';
    var ABG = 'var(--c-accent-bg)';

    var cardStyle = { backgroundColor: CARD, border: '1px solid ' + BDR };
    var darkCardStyle = { backgroundColor: SURF, border: '1px solid ' + BDRA };

    return (
    <main className="min-h-screen" style={{backgroundColor: BG}}>
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
            <div className="max-w-3xl">
                <p className="font-label text-xs uppercase tracking-widest mb-4 font-bold" style={{color: A}}>Our Services</p>
                <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.08]" style={{color: T}}>
                    End-to-End<br/><span style={{color: A}}>Software Solutions.</span>
                </h1>
                <p className="font-body text-lg leading-relaxed mb-8" style={{color: TS}}>
                    From concept to deployment, comprehensive software services tailored to your business needs.
                </p>
                <div className="flex flex-wrap gap-4">
                    <ReactRouterDOM.Link to="/contact" className="px-6 py-3 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000'}}>
                        Start a Project
                    </ReactRouterDOM.Link>
                    <a href="#products" className="px-6 py-3 rounded-lg font-label text-sm font-semibold" style={{border: '1px solid ' + BDR, color: TS}}>
                        View Products
                    </a>
                </div>
            </div>
        </section>

        {/* Products label */}
        <section id="products" className="max-w-7xl mx-auto px-6 pb-6">
            <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{backgroundColor: ABG, border: '1px solid ' + BDRA, color: A}}>New</span>
                <h2 className="font-headline text-2xl font-bold" style={{color: T}}>Featured Products</h2>
            </div>
        </section>

        {/* Survey Tool */}
        <section className="max-w-7xl mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-7 relative overflow-hidden p-10 rounded-xl" style={darkCardStyle}>
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{background: A, opacity: 0.03, filter: 'blur(80px)', transform: 'translate(30%,-30%)'}}></div>
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                                <span className="material-symbols-outlined text-xl" style={{color: A}}>poll</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{color: A}}>Market Research</span>
                        </div>
                        <h3 className="font-headline text-3xl font-bold leading-tight mb-4" style={{color: T}}>Survey Tool for<br/>Market Research</h3>
                        <p className="leading-relaxed mb-8 text-sm max-w-lg" style={{color: TS}}>
                            Purpose-built for market research companies. Collect, analyze, and visualize responses at scale with logic branching, panel management, and real-time analytics.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {['Logic Branching','Panel Management','Real-time Analytics','Multi-language','Multi-channel Distribution','Export & Reporting'].map(function(f) {
                                return (
                                    <div key={f} className="flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{background: A}}></span>
                                        <span className="text-xs" style={{color: TS}}>{f}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <ReactRouterDOM.Link to="/contact" state={{service: 'Survey Tool'}} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000'}}>
                            Get Early Access <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </ReactRouterDOM.Link>
                    </div>
                </div>
                <div className="md:col-span-5 flex flex-col gap-5">
                    <div className="p-7 rounded-xl flex-1" style={cardStyle}>
                        <p className="font-label text-xs uppercase tracking-widest mb-6 font-bold" style={{color: A}}>Why it works</p>
                        <div className="grid grid-cols-2 gap-6">
                            {[['10×','Faster collection'],['98%','Accuracy'],['50+','Question types'],['Live','Real-time reports']].map(function(s) {
                                return (
                                    <div key={s[1]}>
                                        <p className="font-headline text-3xl font-extrabold mb-1" style={{color: A}}>{s[0]}</p>
                                        <p className="text-xs leading-snug" style={{color: TM}}>{s[1]}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="p-7 rounded-xl" style={cardStyle}>
                        <p className="font-label text-xs uppercase tracking-widest mb-4 font-bold" style={{color: A}}>Ideal For</p>
                        <div className="flex flex-wrap gap-2">
                            {['Market Research Firms','Brand Agencies','Academic Institutions','Product Teams','Consulting Firms'].map(function(tag) {
                                return <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{backgroundColor: ABG, color: TS}}>{tag}</span>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* AI Agent + Hire Devs */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* AI Agent */}
                <div className="relative overflow-hidden p-10 rounded-xl" style={darkCardStyle}>
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{background: A, opacity: 0.03, filter: 'blur(60px)', transform: 'translate(30%,-30%)'}}></div>
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                                <span className="material-symbols-outlined text-xl" style={{color: A}}>support_agent</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{color: A}}>AI Agent</span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold leading-tight mb-4" style={{color: T}}>AI Agent Sales<br/>Assistant</h3>
                        <p className="text-sm leading-relaxed mb-7" style={{color: TS}}>An intelligent sales co-pilot that qualifies leads, drafts personalized outreach, books meetings, and follows up automatically.</p>
                        <ul className="space-y-3 mb-8">
                            {['Automated lead qualification & scoring','Personalized email & LinkedIn outreach','Smart meeting scheduling & reminders','CRM sync (Salesforce, HubSpot, Pipedrive)','Conversation analytics & win/loss insights'].map(function(item) {
                                return (
                                    <li key={item} className="flex items-start gap-2 text-xs" style={{color: TS}}>
                                        <span className="material-symbols-outlined text-sm mt-0.5 flex-shrink-0" style={{color: A}}>check</span>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                        <ReactRouterDOM.Link to="/contact" state={{service: 'AI Agent'}} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000'}}>
                            Book a Demo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </ReactRouterDOM.Link>
                    </div>
                </div>
                {/* Hire Devs */}
                <div className="relative overflow-hidden p-10 rounded-xl" style={darkCardStyle}>
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{background: A, opacity: 0.03, filter: 'blur(60px)', transform: 'translate(-30%,30%)'}}></div>
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                                <span className="material-symbols-outlined text-xl" style={{color: A}}>engineering</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{color: A}}>On-demand Talent</span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold leading-tight mb-4" style={{color: T}}>Hire Dedicated<br/>Developers</h3>
                        <p className="text-sm leading-relaxed mb-7" style={{color: TS}}>Extend your team with pre-vetted developers who integrate seamlessly into your workflow. Ready in days, not months.</p>
                        <div className="grid grid-cols-2 gap-3 mb-7">
                            {[['code','Full-Stack'],['psychology','AI / ML'],['phone_iphone','Mobile'],['cloud','DevOps'],['palette','UI/UX'],['manage_search','QA']].map(function(r) {
                                return (
                                    <div key={r[1]} className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm" style={{color: A}}>{r[0]}</span>
                                        <span className="text-xs" style={{color: TS}}>{r[1]}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Part-time','Full-time','Project-based'].map(function(m) {
                                return <span key={m} className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{backgroundColor: ABG, border: '1px solid ' + BDRA, color: A}}>{m}</span>;
                            })}
                        </div>
                        <ReactRouterDOM.Link to="/contact" state={{service: 'Hire a Developer'}} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000'}}>
                            Hire Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </ReactRouterDOM.Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Core Services */}
        <section className="max-w-7xl mx-auto px-6 pb-6 pt-8" style={{borderTop: '1px solid ' + BDR}}>
            <div className="flex items-center gap-4 mb-8">
                <h2 className="font-headline text-2xl font-bold" style={{color: T}}>Core Services</h2>
                <div className="flex-1 h-px" style={{background: BDR}}></div>
            </div>
        </section>

        {/* Row 1 */}
        <section className="max-w-7xl mx-auto px-6 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-8 p-10 rounded-xl" style={cardStyle}>
                    <span className="material-symbols-outlined text-4xl mb-6" style={{color: A}}>database</span>
                    <h3 className="font-headline text-2xl font-bold mb-3" style={{color: T}}>Backend Development</h3>
                    <p className="text-sm leading-relaxed mb-6 max-w-xl" style={{color: TS}}>Robust server-side architectures with Spring Boot, Node.js, and Python. High-availability microservices, RESTful & GraphQL APIs, database optimization.</p>
                    <div className="flex flex-wrap gap-2">
                        {['Spring Boot','Node.js','Microservices','API Design'].map(function(t) {
                            return <span key={t} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{backgroundColor: ABG, color: A}}>{t}</span>;
                        })}
                    </div>
                </div>
                <div className="md:col-span-4 p-8 rounded-xl" style={cardStyle}>
                    <span className="material-symbols-outlined text-4xl mb-6" style={{color: A}}>verified_user</span>
                    <h3 className="font-headline text-xl font-bold mb-3" style={{color: T}}>Audit & Compliance</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{color: TS}}>SOC 2, GDPR, and HIPAA compliance with comprehensive audit trails and security protocols.</p>
                    <ul className="space-y-2">
                        {['SOC 2 Compliance','GDPR Implementation','Security Audits'].map(function(item) {
                            return <li key={item} className="flex items-center gap-2 text-xs" style={{color: TS}}><span className="material-symbols-outlined text-sm" style={{color: A}}>check</span>{item}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </section>

        {/* Row 2 */}
        <section className="max-w-7xl mx-auto px-6 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                    { icon:'smart_toy', title:'Workflow Automation', desc:'Custom RPA solutions, CI/CD pipelines, and intelligent automation that eliminates manual bottlenecks.', items:['CI/CD Implementation','RPA Development','Process Orchestration'] },
                    { icon:'web',       title:'Frontend Development', desc:'Modern, responsive web applications with React, Vue.js, and Angular. Performance-optimized UX.', items:['React / Vue / Angular','TypeScript','Performance Optimization'] },
                    { icon:'cloud',     title:'Cloud & DevOps', desc:'Cloud infrastructure setup, migration, and optimization on AWS, Azure, and GCP.', items:['AWS / Azure / GCP','CI/CD Pipelines','Kubernetes & Docker'] },
                ].map(function(s) {
                    return (
                        <div key={s.title} className="p-8 rounded-xl" style={cardStyle}>
                            <span className="material-symbols-outlined text-3xl mb-5" style={{color: A}}>{s.icon}</span>
                            <h3 className="font-headline text-lg font-bold mb-2" style={{color: T}}>{s.title}</h3>
                            <p className="text-sm leading-relaxed mb-5" style={{color: TS}}>{s.desc}</p>
                            <ul className="space-y-1.5">
                                {s.items.map(function(item) {
                                    return <li key={item} className="flex items-center gap-2 text-xs" style={{color: TS}}><span className="w-1 h-1 rounded-full flex-shrink-0" style={{background: A}}></span>{item}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Row 3 */}
        <section className="max-w-7xl mx-auto px-6 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                    { icon:'psychology', title:'AI & ML Solutions',  desc:'Custom AI/ML development, LLM integration, chatbots, and intelligent automation.', items:['LLM / ChatGPT Integration','Predictive Analytics','Custom AI Chatbots'] },
                    { icon:'smartphone', title:'Mobile Development', desc:'Native and cross-platform mobile apps with React Native, Flutter, and iOS/Android.', items:['React Native / Flutter','iOS & Android Native','App Store Deployment'] },
                    { icon:'palette',    title:'UI/UX Design',       desc:'User-centered design, wireframing, prototyping, and scalable design systems.', items:['Figma / Adobe XD','Design Systems','User Research'] },
                ].map(function(s) {
                    return (
                        <div key={s.title} className="p-8 rounded-xl" style={cardStyle}>
                            <span className="material-symbols-outlined text-3xl mb-5" style={{color: A}}>{s.icon}</span>
                            <h3 className="font-headline text-lg font-bold mb-2" style={{color: T}}>{s.title}</h3>
                            <p className="text-sm leading-relaxed mb-5" style={{color: TS}}>{s.desc}</p>
                            <ul className="space-y-1.5">
                                {s.items.map(function(item) {
                                    return <li key={item} className="flex items-center gap-2 text-xs" style={{color: TS}}><span className="w-1 h-1 rounded-full flex-shrink-0" style={{background: A}}></span>{item}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Row 4 */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {[
                    { icon:'analytics',     title:'Data Engineering',           desc:'ETL pipelines, data warehousing, and real-time analytics.' },
                    { icon:'api',           title:'API Integration',            desc:'Third-party integrations, payment gateways, system connectivity.' },
                    { icon:'upgrade',       title:'Legacy Modernization',       desc:'Migrate and modernize legacy systems to modern tech stacks.' },
                    { icon:'support_agent', title:'24/7 Support & Maintenance', desc:'Round-the-clock monitoring, maintenance, and technical support.' },
                ].map(function(s) {
                    return (
                        <div key={s.title} className="p-6 rounded-xl" style={cardStyle}>
                            <span className="material-symbols-outlined text-3xl mb-3" style={{color: A}}>{s.icon}</span>
                            <h3 className="font-headline text-base font-bold mb-2" style={{color: T}}>{s.title}</h3>
                            <p className="text-xs leading-relaxed" style={{color: TM}}>{s.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{backgroundColor: SURF, borderTop: '1px solid ' + BDRA}}>
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="font-headline text-4xl font-bold mb-4" style={{color: T}}>Ready to build something great?</h2>
                <p className="mb-10 max-w-xl mx-auto" style={{color: TS}}>Let's transform your ideas into scalable, production-ready solutions.</p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <ReactRouterDOM.Link to="/contact" className="px-8 py-3 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000'}}>Get Started</ReactRouterDOM.Link>
                    <ReactRouterDOM.Link to="/portfolio" className="px-8 py-3 rounded-lg font-label text-sm font-semibold" style={{border: '1px solid ' + BDR, color: TS}}>View Our Work</ReactRouterDOM.Link>
                </div>
            </div>
        </section>
    </main>
    );
};
