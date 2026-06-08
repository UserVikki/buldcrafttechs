window.HomePage = () => {
    React.useEffect(() => {
        document.title = 'BuildCraftTechs | Precision Engineered Software Architecture';
        document.querySelector('meta[name="description"]').content =
            'BuildCraftTechs builds high-performance software — scalable backends, microservices, cloud infrastructure, and automation solutions for startups and businesses.';
        document.querySelector('link[rel="canonical"]').href = 'https://buildcrafttechs.com/';
    }, []);
    return (
    <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-36 md:pt-36 md:pb-52">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{background: 'var(--c-glow)', filter: 'blur(120px)', transform: 'translate(30%,-20%)'}}></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full" style={{background: 'var(--c-glow)', filter: 'blur(100px)', transform: 'translate(-20%,20%)'}}></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-[11px] font-bold uppercase tracking-widest"
                        style={{backgroundColor: 'var(--c-accent-bg)', border: '1px solid var(--c-border-accent)', color: 'var(--c-accent)'}}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background: 'var(--c-accent)'}}></span>
                        Premium Engineering Team
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.04] mb-8" style={{color: 'var(--c-text)'}}>
                        We Build{' '}
                        <span style={{color: 'var(--c-accent)'}}>High-Performance</span>{' '}
                        Software — Fast
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed mb-4 max-w-2xl" style={{color: 'var(--c-text-sub)'}}>
                        From scalable backend systems to intelligent automation, we help startups and businesses ship reliable technology faster without compromising architectural quality.
                    </p>
                    <p className="text-sm font-semibold mb-10 tracking-wide" style={{color: 'var(--c-text-muted)'}}>
                        Fast execution. Clean architecture. Systems built to scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <ReactRouterDOM.Link to="/contact"
                            className="px-8 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 active:scale-95"
                            style={{background: 'var(--c-accent)', color: '#000000'}}>
                            Book a Strategy Call
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </ReactRouterDOM.Link>
                        <ReactRouterDOM.Link to="/contact"
                            className="px-8 py-4 rounded-lg font-semibold text-base text-center active:scale-95"
                            style={{border: '1px solid var(--c-border)', color: 'var(--c-text-sub)'}}>
                            Start Your Project
                        </ReactRouterDOM.Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Core Competencies */}
        <section className="py-24" style={{backgroundColor: 'var(--c-surface)', borderTop: '1px solid var(--c-border)'}} id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <p className="font-label text-xs uppercase tracking-widest font-bold mb-3" style={{color: 'var(--c-accent)'}}>What We Do</p>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight" style={{color: 'var(--c-text)'}}>Core Competencies</h2>
                    </div>
                    <p className="text-sm max-w-md" style={{color: 'var(--c-text-sub)'}}>Our technical stack is optimized for high-throughput environments and seamless system orchestration.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    <div className="md:col-span-8 p-10 rounded-xl relative overflow-hidden group"
                        style={{backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)'}}>
                        <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" style={{color: 'var(--c-text)'}}>
                            <span className="material-symbols-outlined" style={{fontSize: '180px'}}>terminal</span>
                        </div>
                        <div className="relative">
                            <span className="material-symbols-outlined text-4xl mb-6" style={{color: 'var(--c-accent)'}}>database</span>
                            <h3 className="font-headline text-2xl font-bold mb-4" style={{color: 'var(--c-text)'}}>Backend Development</h3>
                            <p className="mb-8 max-w-lg text-sm leading-relaxed" style={{color: 'var(--c-text-sub)'}}>Robust, cloud-native architectures designed to handle millions of requests. We specialize in microservices, distributed systems, and SQL/NoSQL optimization.</p>
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm font-medium">
                                {['Microservices','Cloud Infrastructure','Data Modeling','Real-time Processing'].map(item => (
                                    <li key={item} className="flex items-center gap-2" style={{color: 'var(--c-text-sub)'}}>
                                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{background: 'var(--c-accent)'}}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-4 p-8 rounded-xl"
                        style={{backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)'}}>
                        <span className="material-symbols-outlined text-4xl mb-6" style={{color: 'var(--c-accent)'}}>settings_suggest</span>
                        <h3 className="font-headline text-xl font-bold mb-4" style={{color: 'var(--c-text)'}}>Automation Solutions</h3>
                        <p className="text-sm leading-relaxed mb-6" style={{color: 'var(--c-text-sub)'}}>Eliminate manual bottlenecks. We build custom RPA and workflow automation tools that save hundreds of engineering hours.</p>
                        <ReactRouterDOM.Link to="/services"
                            className="font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:gap-3"
                            style={{color: 'var(--c-accent)'}}>
                            Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </ReactRouterDOM.Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
};
