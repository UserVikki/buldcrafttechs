window.ContactPage = () => {
    React.useEffect(() => {
        document.title = 'Contact Us | BuildCraftTechs';
        document.querySelector('meta[name="description"]').content =
            'Get in touch with BuildCraftTechs to discuss your project — backend systems, automation, or custom software development.';
        document.querySelector('link[rel="canonical"]').href = 'https://buildcrafttechs.com/contact';
    }, []);
    const location = ReactRouterDOM.useLocation();
    const SERVICES = [
        'Survey Tool',
        'Mobile Food Delivery Platform',
        'E-commerce Online Store',
        'AI Agent',
        'Hire a Developer',
        'Others'
    ];
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [service, setService] = React.useState((location.state && location.state.service) || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            mobile: e.target.mobile.value,
            subject: service,
            message: e.target.message.value
        };
        const startTime = Date.now();
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).catch(() => {});
        setTimeout(() => {
            setIsLoading(false);
            setFormSubmitted(true);
        }, Math.max(1500 - (Date.now() - startTime), 0));
    };

    const onFocus = (e) => e.target.style.borderColor = 'var(--c-accent)';
    const onBlur  = (e) => e.target.style.borderColor = 'var(--c-border)';

    const inputStyle = { borderColor: 'var(--c-border)', color: 'var(--c-text)', background: 'transparent' };
    const inputClass = "border-0 border-b-2 px-0 py-3 outline-none focus:outline-none focus:ring-0 text-lg w-full placeholder:opacity-30";

    return (
        <main className="min-h-screen flex items-center" style={{backgroundColor: 'var(--c-bg)'}}>
            <section className="w-full py-24 px-6">
                <div className="max-w-xl mx-auto">
                    {formSubmitted ? (
                        <div className="text-center py-20">
                            <span className="material-symbols-outlined text-5xl mb-6 block" style={{color: 'var(--c-accent)'}}>mark_email_read</span>
                            <h2 className="font-headline text-3xl font-bold mb-3" style={{color: 'var(--c-text)'}}>Got it.</h2>
                            <p style={{color: 'var(--c-text-sub)'}}>We'll reply to your email shortly.</p>
                        </div>
                    ) : (
                        <React.Fragment>
                            <div className="mb-14">
                                <p className="font-label text-xs uppercase tracking-widest mb-4 font-bold" style={{color: 'var(--c-accent)'}}>Contact</p>
                                <h1 className="font-headline text-5xl font-extrabold tracking-tight mb-4" style={{color: 'var(--c-text)'}}>
                                    Say hello.
                                </h1>
                                <p className="text-lg" style={{color: 'var(--c-text-sub)'}}>
                                    Drop us a message — we reply to every email.
                                </p>
                            </div>

                            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="font-label text-xs uppercase tracking-widest font-semibold" style={{color: 'var(--c-accent)'}}>Name</label>
                                    <input required id="name" name="name" type="text" placeholder="Your name" disabled={isLoading}
                                        onFocus={onFocus} onBlur={onBlur}
                                        className={inputClass} style={inputStyle}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="font-label text-xs uppercase tracking-widest font-semibold" style={{color: 'var(--c-accent)'}}>Email</label>
                                    <input required id="email" name="email" type="email" placeholder="you@example.com" disabled={isLoading}
                                        onFocus={onFocus} onBlur={onBlur}
                                        className={inputClass} style={inputStyle}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="mobile" className="font-label text-xs uppercase tracking-widest font-semibold" style={{color: 'var(--c-accent)'}}>
                                        Mobile <span className="normal-case tracking-normal font-normal" style={{color: 'var(--c-text-muted)'}}>(optional)</span>
                                    </label>
                                    <input id="mobile" name="mobile" type="tel" placeholder="+1 (555) 000-0000" disabled={isLoading}
                                        onFocus={onFocus} onBlur={onBlur}
                                        className={inputClass} style={inputStyle}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="service" className="font-label text-xs uppercase tracking-widest font-semibold" style={{color: 'var(--c-accent)'}}>Service</label>
                                    <div className="relative">
                                        <select required id="service" name="service" value={service} onChange={e => setService(e.target.value)} disabled={isLoading}
                                            onFocus={onFocus} onBlur={onBlur}
                                            className={inputClass + " appearance-none cursor-pointer"}
                                            style={{borderColor: 'var(--c-border)', color: 'var(--c-text)', background: 'var(--c-bg)'}}>
                                            <option value="" disabled>Select a service</option>
                                            {service && !SERVICES.includes(service) && (
                                                <option value={service}>{service}</option>
                                            )}
                                            {SERVICES.map(function(s) {
                                                return <option key={s} value={s}>{s}</option>;
                                            })}
                                        </select>
                                        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-base" style={{color: 'var(--c-text-muted)'}}>expand_more</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="font-label text-xs uppercase tracking-widest font-semibold" style={{color: 'var(--c-accent)'}}>Message</label>
                                    <textarea required id="message" name="message" rows="5" placeholder="What are you building?" disabled={isLoading}
                                        onFocus={onFocus} onBlur={onBlur}
                                        className={inputClass + " resize-none"} style={inputStyle}/>
                                </div>
                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-xs" style={{color: 'var(--c-text-muted)'}}>buildcrafttechs@gmail.com</p>
                                    <button type="submit" disabled={isLoading}
                                        className="px-8 py-3 rounded-lg font-label text-sm font-bold tracking-wide active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                                        style={{background: 'var(--c-accent)', color: '#000000'}}>
                                        {isLoading ? (
                                            <React.Fragment>
                                                <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                                                Sending
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                Send
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </React.Fragment>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </React.Fragment>
                    )}
                </div>
            </section>
        </main>
    );
};
