// App Shell - Main Application Component
window.App = () => {
    const { useEffect } = React;
    const { useLocation } = ReactRouterDOM;
    
    // Get components from window scope
    const { Navbar, Footer, HomePage, ServicesPage, PortfolioPage, AboutPage, ContactPage } = window;

    // Scroll to top on route change
    const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    };

    return (
        <ReactRouterDOM.BrowserRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow">
                    <ReactRouterDOM.Routes>
                        <ReactRouterDOM.Route path="/" element={<HomePage />} />
                        <ReactRouterDOM.Route path="/services" element={<ServicesPage />} />
                        <ReactRouterDOM.Route path="/portfolio" element={<PortfolioPage />} />
                        <ReactRouterDOM.Route path="/about" element={<AboutPage />} />
                        <ReactRouterDOM.Route path="/contact" element={<ContactPage />} />
                    </ReactRouterDOM.Routes>
                </div>
                <Footer />
            </div>
        </ReactRouterDOM.BrowserRouter>
    );
};

// Initialize the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
