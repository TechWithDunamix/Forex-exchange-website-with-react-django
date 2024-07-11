import React, { useState } from 'react';

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='min-h-screen flex flex-col'>
            <header className="bg-white shadow-md w-full">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-green-600">
                            EX<span className='text-red-800'>change</span>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <a href="/" className="text-gray-700 hover:text-green-600 transition duration-300">Home</a>
                            <a href="/about" className="text-gray-700 hover:text-green-600 transition duration-300">About</a>
                            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">FAQs</a>
                            <a href="/contact-us" className="text-gray-700 hover:text-green-600 transition duration-300">Contact</a>
                        </nav>
                        <div className='hidden md:flex'>
                        	<a href='/login'
                        	className='shadow-md shadow-green-900 py-2 px-4 bg-green-600 mx-2 text-white rounded-[5px]'>Login</a>

                        	<a  href= '/signup' className='py-2 px-4 bg-green-300 mx-2 rounded-[5px]'>SignUp</a>

                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none focus:text-green-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden animate-slide-fade">
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition duration-300">Home</a>
                        <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition duration-300">About </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition duration-300">Faq </a>
                        <a href="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition duration-300">Contact</a>
                    </div>
                )}
            </header>

           

            <main className="flex-1 overflow-x-hidden">
                {children}
            </main>
        </div>
    );
};

export default Layout;
