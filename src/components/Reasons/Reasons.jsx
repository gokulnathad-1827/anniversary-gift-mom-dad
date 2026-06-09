import { useState } from "react";
import { FaGift, FaHeart, FaCheckCircle } from "react-icons/fa";
import { reasonsData } from "../../data/reasonsData";

function Reasons() {
    const [selectedReason, setSelectedReason] = useState(null);
    const [openedGifts, setOpenedGifts] = useState([]);

    const handleGiftClick = (reason) => {
        setSelectedReason(reason);

        if (!openedGifts.includes(reason.id)) {
            setOpenedGifts([...openedGifts, reason.id]);
        }
    };

    return (
        <section id="reasons">
            <section
                id="reasons"
                className="relative py-12 overflow-hidden"
                style={{
                    background: "linear-gradient(to bottom, #fff0f5, #ffffff)",
                }}
            >
                {/* Floating Hearts */}
                <FaHeart className="absolute top-10 left-10 text-pink-200 text-4xl animate-bounce opacity-50" />
                <FaHeart className="absolute top-20 right-20 text-pink-300 text-5xl animate-pulse opacity-50" />
                <FaHeart className="absolute bottom-10 left-20 text-pink-200 text-4xl animate-bounce opacity-50" />

                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <h2
                        className="text-center font-bold mb-2"
                        style={{
                            fontSize: "clamp(2rem,5vw,4rem)",
                            color: "#d63384",
                        }}
                    >
                        21 Reasons We Love You ❤️
                    </h2>

                    <p className="text-center text-gray-600 mb-3 text-base md:text-lg">
                        Click each gift to reveal a special reason.
                    </p><br />

                    {/* Progress */}
                    <div className="text-center mb-6">
                        <span className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-bold">
                            🎁 Opened: {openedGifts.length} / 21
                        </span>
                    </div>

                    {/* Gift Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">

                        {reasonsData.map((reason) => (
                            <button
                                key={reason.id}
                                onClick={() => handleGiftClick(reason)}
                                className="
                bg-gradient-to-br
                from-pink-50
                to-pink-100
                border-2
                border-pink-200
                rounded-3xl
                shadow-md
                p-4
                hover:scale-105
                transition-all
                duration-300
              "
                            >
                                <div className="flex flex-col items-center">

                                    {openedGifts.includes(reason.id) ? (
                                        <FaCheckCircle className="text-4xl text-green-500 mb-2" />
                                    ) : (
                                        <FaGift className="text-4xl text-pink-500 mb-2" />
                                    )}

                                    <p className="font-bold text-pink-600 text-sm md:text-base">
                                        Gift #{reason.id}
                                    </p>

                                </div>
                            </button>
                        ))}

                    </div>

                    {/* Reveal Card */}
                    {selectedReason && (
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 border border-pink-100">

                            <div className="text-center">

                                <div className="text-5xl mb-3">
                                    {selectedReason.icon}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
                                    Gift #{selectedReason.id} Opened 🎁
                                </h3>

                                <div className="bg-pink-50 rounded-2xl p-5 mb-4">
                                    <p className="text-gray-800 text-lg leading-relaxed">
                                        {selectedReason.english}
                                    </p>
                                </div>

                                <div className="h-px bg-pink-200 my-4"></div>

                                <div className="bg-rose-50 rounded-2xl p-5">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {selectedReason.tamil}
                                    </p>
                                </div>

                            </div>

                        </div>
                    )}

                    {/* Final Surprise */}
                    {openedGifts.length === 21 && (
                        <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-3xl shadow-2xl p-8 text-center">

                            <div className="text-5xl mb-3">
                                🎉
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-3">
                                Congratulations!
                            </h3>

                            <p className="text-lg mb-3">
                                You have unlocked all 21 reasons why we love you.
                            </p>

                            <p className="text-xl md:text-2xl font-semibold mb-5">
                                Happy 21st Wedding Anniversary ❤️
                            </p><br />

                            <div className="bg-white/20 rounded-2xl p-5">
                                <p className="text-base md:text-lg">
                                    Thank you for your love, sacrifices, care,
                                    guidance and support throughout our lives.
                                </p>

                                <p className="mt-4 font-bold text-xl md:text-2xl">
                                    With Love,
                                    <br />
                                    Gokulnath ❤️ Vaisyasri
                                </p>
                            </div>

                        </div>
                    )}

                </div>
            </section>
        </section>
    );
}

export default Reasons;