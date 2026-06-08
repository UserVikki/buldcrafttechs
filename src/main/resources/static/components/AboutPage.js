window.AboutPage = () => {
    React.useEffect(() => {
        document.title = 'About Us | BuildCraftTechs';
        document.querySelector('meta[name="description"]').content =
            'Learn about BuildCraftTechs — a precision engineering team specializing in backend architecture, fintech systems, and scalable automation for high-growth startups.';
        document.querySelector('link[rel="canonical"]').href = 'https://buildcrafttechs.com/about';
    }, []);
    return (
    <main>
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                    <span className="font-label text-xs uppercase tracking-widest font-bold mb-4 block" style={{color: 'var(--c-accent)'}}>Our Identity</span>
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-8" style={{color: 'var(--c-text)'}}>
                        Precision-engineered<br/>
                        <span style={{color: 'var(--c-accent)'}}>backend architecture.</span>
                    </h1>
                </div>
                <div className="lg:col-span-4 pb-4">
                    <p className="text-lg leading-relaxed" style={{color: 'var(--c-text-sub)'}}>
                        BuildCraftTechs creates the invisible strength behind modern fintech and high-growth startups. We specialize in the complex, the scalable, and the automated.
                    </p>
                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-24">
            <div className="relative h-[500px] rounded-xl overflow-hidden" style={{border: '1px solid var(--c-border)'}}>
                <img className="w-full h-full object-cover opacity-70" alt="High-tech server room"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ETYCC9fB_-CZAvgXlrhkrSoyJty3ZHbYeP1grOQdJYqjN-7L7NkwWUYGl0LEuyfhpnzQqCdZAP7_V-F_2PQojYVG5CBM9akfKj8dXWNzTmVIbekjtsoBsipXLoeHq5fD63wPKyOekcPPZkOPSb2u3_-mOh6XODbMAC8_B2Lc_JzbpMyi8oFr-nU2_oSpv7CPrgh_7ok6s6mQWTTAtOKfbdDd0gziVH93DwUak3YReYALFwQgrSwHCZ3IXAsZvM9Pgy0RvvT4YA"/>
                <div className="absolute inset-0" style={{background: 'linear-gradient(to top, var(--c-bg), transparent)'}}></div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24" style={{borderTop: '1px solid var(--c-border)'}}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                    { value: '99.9%', label: 'Uptime Guaranteed' },
                    { value: '1.2M',  label: 'Transactions / Sec' },
                    { value: '150+',  label: 'Automated Workflows' },
                    { value: '15ms',  label: 'Avg Latency' },
                ].map((s, i) => (
                    <div key={s.label}>
                        <h4 className="text-5xl font-extrabold mb-2" style={{color: i % 2 === 0 ? 'var(--c-accent)' : 'var(--c-text)'}}>{s.value}</h4>
                        <p className="text-xs uppercase tracking-widest font-bold" style={{color: 'var(--c-text-muted)'}}>{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    </main>
    );
};
