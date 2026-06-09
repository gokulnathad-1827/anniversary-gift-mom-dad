import { FaHeart } from "react-icons/fa";

function Finale() {
    return (
        <section
            className="relative overflow-hidden py-24 text-center text-white"
            style={{
                background:
                    "linear-gradient(135deg, #ff4d94 0%, #ff80ab 50%, #ffc1e3 100%)",
            }}
        >
            {/* Floating Hearts */}
            <FaHeart className="absolute top-16 left-16 text-white text-5xl opacity-30 animate-bounce" />
            <FaHeart className="absolute top-24 right-20 text-white text-4xl opacity-30 animate-pulse" />
            <FaHeart className="absolute bottom-20 left-24 text-white text-3xl opacity-20 animate-bounce" />
            <FaHeart className="absolute bottom-32 right-24 text-white text-4xl opacity-20 animate-pulse" />

            <div className="max-w-5xl mx-auto px-6">

                {/* Small Title */}
                <p className="uppercase tracking-[0.5em] text-sm md:text-base mb-6 opacity-90">
                    Celebrating 21 Beautiful Years
                </p>

                {/* Main Heading */}
                <h1
                    className="font-extrabold leading-tight mb-8"
                    style={{
                        fontSize: "clamp(3rem, 8vw, 6rem)",
                        textShadow: "0 6px 20px rgba(0,0,0,0.25)",
                    }}
                >
                    Happy
                    <br />
                    <span className="text-yellow-200">
                        21st Wedding
                    </span>
                    <br />
                    Anniversary ❤️
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-3xl mb-12">
                    21 Years of Love, Trust, Sacrifice & Togetherness
                </p>

                {/* Main Card */}
                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">

                    <p className="text-xl md:text-2xl leading-relaxed">
                        Thank you for showing us what true love looks like.
                        Through every challenge, every sacrifice, every smile,
                        and every success, you stood together and built a
                        beautiful family filled with love and happiness.
                    </p>

                    <div className="mt-10 border-t border-white/20 pt-8">

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ❤️ M. Dhandapani & Anbazhagi ❤️
                        </h2>

                        <p className="text-lg md:text-xl">
                            10 June 2005 — 10 June 2026
                        </p>

                    </div>

                </div>

                {/* Quote */}
                <div className="mt-12">
                    <p className="italic text-xl md:text-2xl">
                        "Every love story is beautiful,
                        but yours is our favorite."
                    </p>
                </div>

                {/* Final Anniversary Message */}
                <div className="mt-14">

                    <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl">

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            🎆 Happy 21st Wedding Anniversary 🎆
                        </h2>

                        <h3 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-200">
                            ❤️ M. Dhandapani & Anbazhagi ❤️
                        </h3>

                        <p className="text-lg md:text-2xl mb-6">
                            21 Years of Love, Trust & Togetherness
                        </p>

                        <p className="text-xl md:text-3xl font-semibold mb-4">
                            💞 Forever Together
                        </p>

                        <p className="text-lg md:text-xl mb-10">
                            10 June 2005 → 10 June 2026
                        </p>

                        <div className="w-24 h-1 bg-white/40 mx-auto mb-8"></div>

                        <p className="text-lg md:text-2xl leading-relaxed mb-4">
                            🌸 21 ஆண்டுகள் அன்பும்,
                            <br />
                            நம்பிக்கையும்,
                            <br />
                            தியாகமும்,
                            <br />
                            ஒற்றுமையும் நிறைந்த அழகான பயணம்.
                        </p>

                        <p className="text-lg md:text-2xl leading-relaxed mb-10">
                            ❤️ என்றும் இணைந்து...
                            <br />
                            என்றும் மகிழ்ச்சியுடன்...
                        </p>

                        <div className="border-t border-white/20 pt-8">

                            <p className="text-2xl md:text-3xl font-bold mb-4">
                                With Endless Love ❤️
                            </p>

                            <p className="text-2xl md:text-4xl font-bold mb-8 text-orange-400">
                                கோகுல்நாத் & வைஷ்யஸ்ரீ
                            </p>

                            <p className="text-2xl md:text-3xl font-bold mb-6 text-yellow-200">
                                Gokulnath & Vaisyasri
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Finale;