const Footer = () => {
    return (
        <footer className="bg-teal-50 border-t border-teal-100 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-base text-teal-900">
                    &copy; {new Date().getFullYear()} Sakhi AI. Educational Use Only.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
