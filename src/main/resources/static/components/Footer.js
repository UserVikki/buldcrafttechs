window.Footer = () => (
    <footer style={{backgroundColor: 'var(--c-surface)', borderTop: '1px solid var(--c-border)'}} className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
                <div className="font-headline font-extrabold text-xl tracking-tighter mb-4" style={{color: 'var(--c-text)'}}>
                    Build<span style={{color: 'var(--c-accent)'}}>Craft</span>Techs
                </div>
                <p className="max-w-sm text-sm leading-relaxed mb-8" style={{color: 'var(--c-text-muted)'}}>
                    Professional grade software architecture for the modern web. Engineering excellence delivered with precision and speed.
                </p>
                <div className="flex gap-3">
                    {['share', 'alternate_email'].map(icon => (
                        <a key={icon} href="#" className="w-9 h-9 flex items-center justify-center rounded-lg"
                            style={{backgroundColor: 'var(--c-accent-bg)', border: '1px solid var(--c-border-accent)', color: 'var(--c-accent)'}}>
                            <span className="material-symbols-outlined text-sm">{icon}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h5 className="font-label text-xs uppercase tracking-widest font-bold mb-6" style={{color: 'var(--c-accent)'}}>Navigation</h5>
                    <ul className="space-y-3">
                        {[['/', 'Home'],['/services','Services'],['/portfolio','Portfolio'],['/about','About'],['/contact','Contact']].map(([path, label]) => (
                            <li key={path}>
                                <ReactRouterDOM.Link to={path} className="text-sm hover:opacity-100" style={{color: 'var(--c-text-sub)'}}>
                                    {label}
                                </ReactRouterDOM.Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5 className="font-label text-xs uppercase tracking-widest font-bold mb-6" style={{color: 'var(--c-accent)'}}>Services</h5>
                    <ul className="space-y-3">
                        {['Backend Systems','API Development','Cloud & DevOps','AI & Automation'].map(s => (
                            <li key={s}>
                                <ReactRouterDOM.Link to="/services" className="text-sm" style={{color: 'var(--c-text-sub)'}}>
                                    {s}
                                </ReactRouterDOM.Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{borderTop: '1px solid var(--c-border)'}}>
            <p className="text-xs uppercase tracking-widest" style={{color: 'var(--c-text-muted)'}}>© 2024 BuildCraftTechs. Precision Engineered.</p>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest" style={{color: 'var(--c-accent)'}}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{backgroundColor: 'var(--c-accent)'}}></span>
                All Systems Operational
            </span>
        </div>
    </footer>
);
