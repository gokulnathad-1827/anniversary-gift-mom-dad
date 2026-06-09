import { FaHeart } from "react-icons/fa";

function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('/photos/hero/Couple.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* Floating Hearts */}
            <FaHeart className="absolute top-20 left-20 text-pink-400 text-5xl animate-bounce z-10" />

            <FaHeart className="absolute top-40 right-52 text-pink-300 text-4xl animate-pulse z-10" />

            <FaHeart className="absolute bottom-24 right-24 text-red-400 text-6xl animate-bounce z-10" />

            <FaHeart className="absolute top-20 right-20 text-pink-400 text-5xl animate-bounce z-10" />

            <FaHeart className="absolute 40 left-52 text-pink-300 text-4xl animate-pulse z-10" />

            <FaHeart className="absolute bottom-24 left-24 text-red-400 text-6xl animate-bounce z-10" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl text-center px-4">

                {/* Celebrating */}
                <p
                    className="uppercase tracking-[0.6em] mb-3"
                    style={{
                        color: "#f8d98a",
                        fontSize: "clamp(0.8rem,1.5vw,1.1rem)",
                        letterSpacing: "0.5em",
                    }}
                >
                    Celebrating
                </p>

                {/* 21 Years */}
                <h1
                    className="font-bold leading-none mb-2"
                    style={{
                        fontSize: "clamp(5rem,12vw,9rem)",
                        color: "#f8d98a",
                        textShadow: "0 5px 20px rgba(0,0,0,0.8)",
                    }}
                >
                    21 Years
                </h1><br />

                {/* Subtitle */}
                <h2
                    className="mb-5 font-light text-white"
                    style={{
                        fontSize: "clamp(1.5rem,4vw,3rem)",
                        textShadow: "0 3px 10px rgba(0,0,0,0.7)",
                    }}
                >
                    of Love, Trust & Togetherness
                </h2><br />

                {/* Names */}
                <h3
                    className="font-bold mb-4"
                    style={{
                        fontSize: "clamp(2rem,5vw,4rem)",
                        color: "#f8d98a",
                        textShadow: "0 3px 10px rgba(0,0,0,0.7)",
                    }}
                >
                    M. Dhandapani
                    <span className="mx-3 text-pink-400">❤️</span>
                    Anbazhagi
                </h3><br />

                {/* Quote */}
                <p
                    className="italic mb-5 text-white"
                    style={{
                        fontSize: "clamp(1rem,2vw,1.5rem)",
                        textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                    }}
                >
                    “Every love story is beautiful,
                    <br />
                    but yours is our favorite.”
                </p><br />

                {/* Date */}
                <p
                    className="mb-8"
                    style={{
                        fontSize: "clamp(1.3rem,1.8vw,1.3rem)",
                        color: "#f8d98a",
                    }}
                >
                    10 June 2005 • 10 June 2026
                </p><br />

                {/* Button */}
                <a
                    href="#timeline"
                    className="inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                        background: "linear-gradient(135deg,#f8d98a,#d4af37)",
                        color: "#111",
                        boxShadow: "0 8px 25px rgba(212,175,55,0.4)",
                    }}
                >
                    Begin Our Journey ❤️
                </a>

            </div>
        </section>
    );
}

export default Hero;