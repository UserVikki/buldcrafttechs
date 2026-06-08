window.ServicesPage = () => {
    React.useEffect(() => {
        document.title = 'Services | BuildCraftTechs';
        document.querySelector('meta[name="description"]').content =
            'Backend development, microservices, cloud infrastructure, automation, and full-stack solutions by BuildCraftTechs — built to scale and ship fast.';
        document.querySelector('link[rel="canonical"]').href = 'https://buildcrafttechs.com/services';
    }, []);
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
        <section id="products" className="max-w-7xl mx-auto px-6 pb-8">
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{backgroundColor: ABG, border: '1px solid ' + BDRA, color: A}}>New</span>
                <span className="font-label text-xs uppercase tracking-widest font-bold" style={{color: A}}>Launch-Ready Products</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight" style={{color: T}}>Productized solutions,<br/><span style={{color: A}}>simple monthly pricing.</span></h2>
                <p className="text-sm leading-relaxed max-w-sm" style={{color: TS}}>
                    Fully built, hosted, and maintained by us. Pick a plan, go live fast, and scale without the upfront build cost.
                </p>
            </div>
        </section>

        {/* Survey Tool */}
        <section className="max-w-7xl mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-7 relative overflow-hidden p-10 md:p-12 rounded-2xl" style={{backgroundColor: SURF, border: '1px solid ' + BDRA, boxShadow: '0 0 0 1px ' + ABG + ', 0 30px 80px -40px ' + A}}>
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{background: A, opacity: 0.06, filter: 'blur(90px)', transform: 'translate(25%,-30%)'}}></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{background: A, opacity: 0.04, filter: 'blur(80px)', transform: 'translate(-25%,30%)'}}></div>
                    {/* Most Popular ribbon */}
                    <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5" style={{background: A, color: '#000'}}>
                        <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>Most Popular
                    </div>
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                                <span className="material-symbols-outlined text-2xl" style={{color: A}}>poll</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{color: A}}>Market Research · SaaS</span>
                        </div>
                        <h3 className="font-headline text-4xl md:text-5xl font-extrabold leading-[1.05] mb-5" style={{color: T}}>Survey Tool for<br/><span style={{color: A}}>Market Research</span></h3>
                        <p className="leading-relaxed mb-8 text-base max-w-lg" style={{color: TS}}>
                            Purpose-built for market research companies. Collect, analyze, and visualize responses at scale with logic branching, panel management, and real-time analytics.
                        </p>
                        {/* Price block */}
                        <div className="inline-flex items-end gap-4 mb-8 px-7 py-5 rounded-2xl" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                            <div className="flex items-start gap-1">
                                <span className="font-headline text-2xl font-bold mt-1.5" style={{color: A}}>₹</span>
                                <span className="font-headline text-6xl font-extrabold leading-none tracking-tight" style={{color: T}}>499</span>
                                <span className="font-label text-sm font-semibold mt-2" style={{color: TS}}>/month</span>
                            </div>
                            <div className="pb-1">
                                <p className="text-[11px] font-bold uppercase tracking-wider" style={{color: A}}>All-inclusive</p>
                                <p className="text-[11px]" style={{color: TM}}>No setup fees · Cancel anytime</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-9">
                            {['Logic Branching','Panel Management','Real-time Analytics','Multi-language','Multi-channel Distribution','Export & Reporting'].map(function(f) {
                                return (
                                    <div key={f} className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm flex-shrink-0" style={{color: A}}>check_circle</span>
                                        <span className="text-sm" style={{color: TS}}>{f}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <ReactRouterDOM.Link to="/contact" state={{service: 'Survey Tool — $499/month'}} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000', boxShadow: '0 12px 30px -10px ' + A}}>
                                Subscribe Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </ReactRouterDOM.Link>
                            <ReactRouterDOM.Link to="/contact" state={{service: 'Survey Tool — Demo'}} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-label text-sm font-semibold" style={{border: '1px solid ' + BDRA, color: TS}}>
                                Book a Demo
                            </ReactRouterDOM.Link>
                        </div>
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

        {/* Mobile Food Delivery App — full suite */}
        <section className="max-w-7xl mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-7 relative overflow-hidden p-10 md:p-12 rounded-2xl" style={{backgroundColor: SURF, border: '1px solid ' + BDRA, boxShadow: '0 0 0 1px ' + ABG + ', 0 30px 80px -40px ' + A}}>
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{background: A, opacity: 0.06, filter: 'blur(90px)', transform: 'translate(25%,-30%)'}}></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{background: A, opacity: 0.04, filter: 'blur(80px)', transform: 'translate(-25%,30%)'}}></div>
                    <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5" style={{background: A, color: '#000'}}>
                        <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "'FILL' 1"}}>rocket_launch</span>Complete Suite
                    </div>
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                                <span className="material-symbols-outlined text-2xl" style={{color: A}}>restaurant</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{color: A}}>Food Delivery · End-to-End</span>
                        </div>
                        <h3 className="font-headline text-4xl md:text-5xl font-extrabold leading-[1.05] mb-5" style={{color: T}}>Mobile Food<br/><span style={{color: A}}>Delivery Platform</span></h3>
                        <p className="leading-relaxed mb-8 text-base max-w-lg" style={{color: TS}}>
                            A complete, launch-ready food delivery business in a box — customer app, delivery partner app, admin dashboard, and full branding. We build, deploy, and maintain it all.
                        </p>
                        <div className="inline-flex items-end gap-4 mb-8 px-7 py-5 rounded-2xl" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                            <div className="flex items-start gap-1">
                                <span className="font-headline text-2xl font-bold mt-1.5" style={{color: A}}>₹</span>
                                <span className="font-headline text-6xl font-extrabold leading-none tracking-tight" style={{color: T}}>2500</span>
                                <span className="font-label text-sm font-semibold mt-2" style={{color: TS}}>/month</span>
                            </div>
                            <div className="pb-1">
                                <p className="text-[11px] font-bold uppercase tracking-wider" style={{color: A}}>Fully managed</p>
                                <p className="text-[11px]" style={{color: TM}}>All 3 apps + branding · Hosting included</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-9">
                            {['Live order tracking','Online payments','Push notifications','Menu & catalog manager','Promo codes & offers','Ratings & reviews'].map(function(f) {
                                return (
                                    <div key={f} className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm flex-shrink-0" style={{color: A}}>check_circle</span>
                                        <span className="text-sm" style={{color: TS}}>{f}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <ReactRouterDOM.Link to="/contact" state={{service: 'Mobile Food Delivery Platform — ₹2500/month'}} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000', boxShadow: '0 12px 30px -10px ' + A}}>
                                Launch My App <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </ReactRouterDOM.Link>
                            <ReactRouterDOM.Link to="/contact" state={{service: 'Mobile Food Delivery Platform — Demo'}} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-label text-sm font-semibold" style={{border: '1px solid ' + BDRA, color: TS}}>
                                Book a Demo
                            </ReactRouterDOM.Link>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5 flex flex-col gap-5">
                    <div className="p-7 rounded-xl flex-1" style={cardStyle}>
                        <p className="font-label text-xs uppercase tracking-widest mb-6 font-bold" style={{color: A}}>What's included</p>
                        <div className="flex flex-col gap-4">
                            {[['smartphone','Customer App','Browse, order & track — iOS & Android'],['delivery_dining','Delivery Partner App','Live routing, earnings & order pickup'],['admin_panel_settings','Admin Dashboard','Orders, menus, payouts & analytics'],['brush','Branding Kit','Logo, color system & app store assets']].map(function(r) {
                                return (
                                    <div key={r[1]} className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                                            <span className="material-symbols-outlined text-lg" style={{color: A}}>{r[0]}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold" style={{color: T}}>{r[1]}</p>
                                            <p className="text-xs leading-snug" style={{color: TM}}>{r[2]}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="p-7 rounded-xl" style={cardStyle}>
                        <p className="font-label text-xs uppercase tracking-widest mb-4 font-bold" style={{color: A}}>Perfect For</p>
                        <div className="flex flex-wrap gap-2">
                            {['Restaurants','Cloud Kitchens','Grocery Delivery','Multi-vendor Marketplaces','Cafés'].map(function(tag) {
                                return <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{backgroundColor: ABG, color: TS}}>{tag}</span>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* E-commerce Website */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-7 relative overflow-hidden p-10 md:p-12 rounded-2xl" style={{backgroundColor: SURF, border: '1px solid ' + BDRA, boxShadow: '0 0 0 1px ' + ABG + ', 0 30px 80px -40px ' + A}}>
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{background: A, opacity: 0.06, filter: 'blur(90px)', transform: 'translate(25%,-30%)'}}></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{background: A, opacity: 0.04, filter: 'blur(80px)', transform: 'translate(-25%,30%)'}}></div>
                    <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5" style={{background: A, color: '#000'}}>
                        <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "'FILL' 1"}}>sell</span>Best Value
                    </div>
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                                <span className="material-symbols-outlined text-2xl" style={{color: A}}>storefront</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{color: A}}>E-commerce · Online Store</span>
                        </div>
                        <h3 className="font-headline text-4xl md:text-5xl font-extrabold leading-[1.05] mb-5" style={{color: T}}>E-commerce<br/><span style={{color: A}}>Online Store</span></h3>
                        <p className="leading-relaxed mb-8 text-base max-w-lg" style={{color: TS}}>
                            A fast, conversion-ready online store to sell your products — complete with a powerful admin panel to manage inventory, orders, and payments from one place.
                        </p>
                        <div className="inline-flex items-end gap-4 mb-8 px-7 py-5 rounded-2xl" style={{backgroundColor: ABG, border: '1px solid ' + BDRA}}>
                            <div className="flex items-start gap-1">
                                <span className="font-headline text-2xl font-bold mt-1.5" style={{color: A}}>₹</span>
                                <span className="font-headline text-6xl font-extrabold leading-none tracking-tight" style={{color: T}}>999</span>
                                <span className="font-label text-sm font-semibold mt-2" style={{color: TS}}>/month</span>
                            </div>
                            <div className="pb-1">
                                <p className="text-[11px] font-bold uppercase tracking-wider" style={{color: A}}>Store + Admin</p>
                                <p className="text-[11px]" style={{color: TM}}>No setup fees · Hosting included</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-9">
                            {['Product & inventory manager','Secure online payments','Order & shipping management','Coupons & discounts','Customer accounts','SEO-ready storefront'].map(function(f) {
                                return (
                                    <div key={f} className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm flex-shrink-0" style={{color: A}}>check_circle</span>
                                        <span className="text-sm" style={{color: TS}}>{f}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <ReactRouterDOM.Link to="/contact" state={{service: 'E-commerce Online Store — ₹999/month'}} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-label text-sm font-bold active:scale-95" style={{background: A, color: '#000', boxShadow: '0 12px 30px -10px ' + A}}>
                                Start Selling <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </ReactRouterDOM.Link>
                            <ReactRouterDOM.Link to="/contact" state={{service: 'E-commerce Online Store — Demo'}} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-label text-sm font-semibold" style={{border: '1px solid ' + BDRA, color: TS}}>
                                Book a Demo
                            </ReactRouterDOM.Link>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5 flex flex-col gap-5">
                    <div className="p-7 rounded-xl flex-1" style={cardStyle}>
                        <p className="font-label text-xs uppercase tracking-widest mb-6 font-bold" style={{color: A}}>Why it works</p>
                        <div className="grid grid-cols-2 gap-6">
                            {[['1-day','Go live fast'],['100%','Mobile-ready'],['0%','Transaction lock-in'],['24/7','Store uptime']].map(function(s) {
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
                        <p className="font-label text-xs uppercase tracking-widest mb-4 font-bold" style={{color: A}}>Perfect For</p>
                        <div className="flex flex-wrap gap-2">
                            {['Retail Brands','D2C Startups','Boutiques','Handmade Sellers','Dropshippers'].map(function(tag) {
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

        {/* Client Reviews */}
        <section className="max-w-7xl mx-auto px-6 pb-6 pt-8" style={{borderTop: '1px solid ' + BDR}}>
            <div className="flex items-center gap-4 mb-2">
                <h2 className="font-headline text-2xl font-bold" style={{color: T}}>What Our Clients Say</h2>
                <div className="flex-1 h-px" style={{background: BDR}}></div>
            </div>
            <p className="text-sm mb-10" style={{color: TM}}>Trusted by teams across industries — here's what they have to say.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {[
                    {
                        quote: "BuildCraftTechs completely transformed our backend infrastructure. Their Spring Boot microservices cut our response times by 60% and the team was sharp, communicative, and delivered ahead of schedule.",
                        name: "Arjun Mehta",
                        role: "CTO",
                        company: "FinSight Analytics",
                        service: "Backend Development",
                        rating: 5
                    },
                    {
                        quote: "We needed a custom AI sales assistant in tight timelines. They built something our sales team actually loves using. Lead qualification is now fully automated and our pipeline accuracy improved dramatically.",
                        name: "Sarah O'Brien",
                        role: "VP of Sales",
                        company: "Nexora SaaS",
                        service: "AI Agent",
                        rating: 5
                    },
                    {
                        quote: "The dedicated developers we hired integrated into our Agile team within a week. Senior-level quality, great communication, and they proactively flagged issues before they became problems.",
                        name: "Priya Nair",
                        role: "Engineering Manager",
                        company: "CloudEdge Systems",
                        service: "Hire Developers",
                        rating: 5
                    }
                ].map(function(r) {
                    return (
                        <div key={r.name} className="p-8 rounded-xl flex flex-col gap-5" style={cardStyle}>
                            <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map(function(i) {
                                    return <span key={i} className="material-symbols-outlined text-sm" style={{color: i <= r.rating ? A : BDR, fontVariationSettings: "'FILL' 1"}}>star</span>;
                                })}
                            </div>
                            <p className="text-sm leading-relaxed flex-1" style={{color: TS}}>&ldquo;{r.quote}&rdquo;</p>
                            <div className="flex items-center gap-3 pt-2" style={{borderTop: '1px solid ' + BDR}}>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{backgroundColor: ABG, color: A}}>
                                    {r.name.split(' ').map(function(n) { return n[0]; }).join('')}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold truncate" style={{color: T}}>{r.name}</p>
                                    <p className="text-[10px] truncate" style={{color: TM}}>{r.role}, {r.company}</p>
                                </div>
                                <span className="px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider flex-shrink-0" style={{backgroundColor: ABG, color: A}}>{r.service}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                {[
                    {
                        quote: "Their survey tool is exactly what we needed for large-scale market research. Logic branching, real-time dashboards, multi-language support — all in one platform. Our clients are impressed and so are we.",
                        name: "Daniel Owusu",
                        role: "Head of Research",
                        company: "Stratosphere Insights",
                        service: "Survey Tool",
                        rating: 5
                    },
                    {
                        quote: "BuildCraftTechs handled our AWS migration and CI/CD pipeline setup flawlessly. Zero downtime, clean handoff documentation, and the team was available to answer questions throughout. Highly recommend.",
                        name: "Mei Lin",
                        role: "DevOps Lead",
                        company: "Orbis Digital",
                        service: "Cloud & DevOps",
                        rating: 5
                    }
                ].map(function(r) {
                    return (
                        <div key={r.name} className="p-8 rounded-xl flex flex-col gap-5" style={cardStyle}>
                            <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map(function(i) {
                                    return <span key={i} className="material-symbols-outlined text-sm" style={{color: i <= r.rating ? A : BDR, fontVariationSettings: "'FILL' 1"}}>star</span>;
                                })}
                            </div>
                            <p className="text-sm leading-relaxed flex-1" style={{color: TS}}>&ldquo;{r.quote}&rdquo;</p>
                            <div className="flex items-center gap-3 pt-2" style={{borderTop: '1px solid ' + BDR}}>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{backgroundColor: ABG, color: A}}>
                                    {r.name.split(' ').map(function(n) { return n[0]; }).join('')}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold truncate" style={{color: T}}>{r.name}</p>
                                    <p className="text-[10px] truncate" style={{color: TM}}>{r.role}, {r.company}</p>
                                </div>
                                <span className="px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider flex-shrink-0" style={{backgroundColor: ABG, color: A}}>{r.service}</span>
                            </div>
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
