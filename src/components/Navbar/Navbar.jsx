import { FaHeart } from "react-icons/fa";

function Navbar() {
    return (
        <nav
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                bg-white/500
                backdrop-blur-xl
                border-b
                border-white/10
            "
        >
            <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">

                    <FaHeart className="text-pink-500 text-xl" />

                    <h3
                        className="
                            font-bold
                            text-xl
                            md:text-2xl
                            text-yellow-200
                            tracking-wide
                        "
                    >
                        D & A ❤️
                    </h3>

                </div>

                {/* Menu */}
                <div
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-8
                        text-sm
                        font-semibold
                    "
                >
                    <a href="#timeline" className="text-pink-500 hover:text-pink-400 transition">
                        Timeline
                    </a>

                    <a href="#memories" className="text-pink-500 hover:text-pink-400 transition">
                        Memories
                    </a>

                    <a href="#reasons" className="text-pink-500 hover:text-pink-400 transition">
                        Reasons
                    </a>

                    <a href="#family" className="text-pink-500 hover:text-pink-400 transition">
                        Family
                    </a>

                    <a href="#letter" className="text-pink-500 hover:text-pink-400 transition">
                        Letter
                    </a>

                    <a href="#wishes" className="text-pink-500 hover:text-pink-400 transition">
                        Wishes
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;