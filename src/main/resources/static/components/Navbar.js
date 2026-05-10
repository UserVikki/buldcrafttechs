window.Navbar = () => {
    const location = ReactRouterDOM.useLocation();
    const isActive = (path) => location.pathname === path;

    const [isDark, setIsDark] = React.useState(
        document.body.classList.contains('dark')
    );

    const toggleTheme = () => {
        const nowDark = document.body.classList.toggle('dark');
        setIsDark(nowDark);
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    };

    // Sync state if body class was set before React mounted
    React.useEffect(function() {
        setIsDark(document.body.classList.contains('dark'));
    }, []);

    return (
        <header style={{backgroundColor: 'var(--c-navbar)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid var(--c-navbar-border)'}} className="top-0 sticky z-50">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
                <div className="flex items-center gap-10">
                    <ReactRouterDOM.Link to="/" className="font-headline font-extrabold text-xl tracking-tighter" style={{color: 'var(--c-text)'}}>
                        Build<span style={{color: 'var(--c-accent)'}}>Craft</span>Techs
                    </ReactRouterDOM.Link>
                    <div className="hidden md:flex items-center gap-7">
                        {[['/', 'Home'],['/services','Services'],['/portfolio','Portfolio'],['/about','About'],['/contact','Contact']].map(([path, label]) => (
                            <ReactRouterDOM.Link key={path} to={path}
                                className="font-medium text-sm tracking-tight"
                                style={{
                                    color: isActive(path) ? 'var(--c-accent)' : 'var(--c-text-sub)',
                                    borderBottom: isActive(path) ? '1px solid var(--c-accent)' : '1px solid transparent',
                                    paddingBottom: '2px',
                                }}
                            >{label}</ReactRouterDOM.Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {/* Theme toggle */}
                    <button onClick={toggleTheme}
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)', color: 'var(--c-accent)'}}
                        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
                        <span className="material-symbols-outlined text-sm">
                            {isDark ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <ReactRouterDOM.Link to="/contact"
                        className="px-5 py-2.5 rounded-lg font-semibold text-sm active:scale-95"
                        style={{background: 'var(--c-accent)', color: '#000000'}}>
                        Book a Consultation
                    </ReactRouterDOM.Link>
                </div>
            </nav>
        </header>
    );
};
