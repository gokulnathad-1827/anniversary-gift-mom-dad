import { useState } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                bg-white/30
                backdrop-blur-xl
                border-b
                border-pink-10
                shadow-sm
            "
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-12 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <FaHeart className="text-pink-500 text-lg" />

                    <h3 className="font-bold text-lg md:text-xl text-pink-600">
                        D & A ❤️
                    </h3>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold">

                    <a href="#timeline" className="text-pink-500 hover:text-pink-400">
                        Timeline
                    </a>

                    <a href="#memories" className="text-pink-500 hover:text-pink-400">
                        Memories
                    </a>

                    <a href="#reasons" className="text-pink-500 hover:text-pink-400">
                        Reasons
                    </a>

                    <a href="#family" className="text-pink-500 hover:text-pink-400">
                        Family
                    </a>

                    <a href="#letter" className="text-pink-500 hover:text-pink-400">
                        Letter
                    </a>

                    <a href="#wishes" className="text-pink-500 hover:text-pink-400">
                        Wishes
                    </a>

                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-pink-500 text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-pink-100 shadow-lg">

                    <a
                        href="#timeline"
                        className="block px-6 py-3 text-pink-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Timeline
                    </a>

                    <a
                        href="#memories"
                        className="block px-6 py-3 text-pink-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Memories
                    </a>

                    <a
                        href="#reasons"
                        className="block px-6 py-3 text-pink-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Reasons
                    </a>

                    <a
                        href="#family"
                        className="block px-6 py-3 text-pink-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Family
                    </a>

                    <a
                        href="#letter"
                        className="block px-6 py-3 text-pink-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Letter
                    </a>

                    <a
                        href="#wishes"
                        className="block px-6 py-3 text-pink-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Wishes
                    </a>

                </div>
            )}
        </nav>
    );
}

export default Navbar;