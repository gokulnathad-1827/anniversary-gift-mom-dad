import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { memoriesData } from "../../data/memoriesData";

function Memories() {
    const [selectedYear, setSelectedYear] = useState("2025");

    const currentMemory = memoriesData[selectedYear];

    return (
        <section id="memories">
            <section
                className="relative -mt-20 pt-4 pb-16 overflow-hidden"
                style={{
                    background: "linear-gradient(to bottom, #fff, #fff0f5)",
                }}
            >
                {/* Floating Hearts */}
                <FaHeart className="absolute top-10 left-10 text-pink-200 text-3xl animate-bounce opacity-50" />

                <FaHeart className="absolute top-10 right-16 text-pink-300 text-4xl animate-pulse opacity-50" />

                <FaHeart className="absolute bottom-10 right-10 text-pink-300 text-4xl animate-bounce opacity-50" />

                <div className="max-w-6xl mx-auto px-4">

                    {/* Heading */}
                    <h2
                        className="text-center mb-3"
                        style={{
                            fontSize: "clamp(2rem,4vw,4rem)",
                            color: "#d63384",
                            fontWeight: "500",
                        }}
                    >
                        Our Journey Through The Years ❤️
                    </h2>

                    {/* Subtitle */}
                    <p className="text-center text-gray-700 mb-6 text-base md:text-lg">
                        Reliving the beautiful moments we created together.
                    </p>

                    {/* Year Buttons */}
                    <div className="flex justify-center gap-3 flex-wrap mb-6">
                        {Object.keys(memoriesData).map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`px-5 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 ${selectedYear === year
                                    ? "bg-pink-500 text-white scale-105 shadow-lg"
                                    : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Video Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto">

                        {/* Video Area */}
                        <div className="bg-black flex justify-center items-center p-4">
                            <video
                                key={selectedYear}
                                controls
                                className="w-full max-w-[350px] md:max-w-[450px] rounded-2xl"
                            >
                                <source src={currentMemory.video} type="video/mp4" />
                            </video>
                        </div>

                        {/* Description */}
                        <div className="p-6 md:p-8 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-3">
                                {currentMemory.title}
                            </h3>

                            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                                {currentMemory.description}
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </section>
    );
}

export default Memories;