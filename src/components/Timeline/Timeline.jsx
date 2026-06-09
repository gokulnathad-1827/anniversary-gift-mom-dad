import { FaHeart } from "react-icons/fa";
import { timelineData } from "../../data/timelineData";

function Timeline() {
    return (
        <section id="timeline">
            <section
                id="timeline"
                className="relative bg-gradient-to-b from-pink-50 to-white pt-16 pb-4 overflow-hidden"
            >
                {/* Floating Hearts */}
                <FaHeart className="absolute top-20 left-10 text-pink-300 text-3xl animate-bounce opacity-60" />
                <FaHeart className="absolute top-96 right-10 text-pink-400 text-4xl animate-pulse opacity-60" />
                <FaHeart className="absolute bottom-40 left-20 text-rose-400 text-5xl animate-bounce opacity-50" />
                <FaHeart className="absolute bottom-96 right-20 text-pink-500 text-3xl animate-pulse opacity-70" />

                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <h2
                        className="text-center mb-3"
                        style={{
                            fontSize: "clamp(2.5rem,6vw,4.5rem)",
                            color: "#d63384",
                            fontWeight: "700",
                        }}
                    >
                        Our Journey Together ❤️
                    </h2>

                    <p
                        className="text-center mb-12 text-gray-600"
                        style={{
                            fontSize: "clamp(1rem,2vw,1.3rem)",
                        }}
                    >
                        A story of love, family, dreams and beautiful memories
                    </p><br />

                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 h-full w-1 bg-pink-300 -translate-x-1/2"></div>

                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`mb-10 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    }`}
                            >
                                {/* Card */}
                                <div className="w-[42%]">
                                    <div
                                        className="
                    bg-white
                    rounded-3xl
                    shadow-xl
                    overflow-hidden
                    hover:scale-105
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-52 object-cover"
                                        />

                                        <div className="p-6">
                                            <p className="text-pink-500 font-semibold text-lg">
                                                {item.year}
                                            </p>

                                            <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-800">
                                                {item.icon} {item.title}
                                            </h3>

                                            <p className="text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Circle */}
                                <div className="w-[16%] flex justify-center">
                                    <div
                                        className="
                    w-16
                    h-16
                    rounded-full
                    text-white
                    text-2xl
                    flex
                    items-center
                    justify-center
                    shadow-xl
                    z-10
                  "
                                        style={{
                                            background:
                                                "linear-gradient(135deg,#ff4d94,#ff7eb3)",
                                            border: "4px solid white",
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Empty Side */}
                                <div className="w-[42%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Timeline;