import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm border-b border-teal-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-teal-600 tracking-tight">
                            Sakhi AI
                        </Link>
                    </div>
                    <div className="hidden sm:flex sm:space-x-8">
                        <Link href="/" className="border-transparent text-gray-500 hover:text-teal-600 hover:border-teal-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition">
                            Home
                        </Link>
                        <Link href="/predict" className="border-transparent text-gray-500 hover:text-teal-600 hover:border-teal-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition">
                            Predict
                        </Link>
                        <Link href="/about" className="border-transparent text-gray-500 hover:text-teal-600 hover:border-teal-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
