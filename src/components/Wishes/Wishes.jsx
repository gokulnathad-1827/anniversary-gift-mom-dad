import { FaHeart } from "react-icons/fa";
import { wishesData } from "../../data/wishesData";

function Wishes() {
    return (
        <section id="wishes">
            <section
                className="relative py-20 overflow-hidden"
                style={{
                    background: "linear-gradient(to bottom,#ffffff,#fff0f5)",
                }}
            >
                {/* Floating Hearts */}
                <FaHeart className="absolute top-10 left-10 text-pink-200 text-4xl animate-bounce opacity-50" />
                <FaHeart className="absolute top-20 right-20 text-pink-300 text-5xl animate-pulse opacity-50" />
                <FaHeart className="absolute bottom-10 left-20 text-pink-200 text-4xl animate-bounce opacity-50" />

                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <h2
                        className="text-center font-bold mb-4"
                        style={{
                            fontSize: "clamp(2rem,5vw,4rem)",
                            color: "#d63384",
                        }}
                    >
                        Our Wishes For You ❤️
                    </h2>

                    <p className="text-center text-gray-600 mb-12 text-lg">
                        May the coming years be even more beautiful than the last 21 years.
                    </p>

                    {/* Wishes Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {wishesData.map((wish, index) => (
                            <div
                                key={index}
                                className="
                                bg-white
                                rounded-3xl
                                shadow-lg
                                p-8
                                hover:-translate-y-2
                                hover:shadow-2xl
                                transition-all
                                duration-300
                                border
                                border-pink-100
                            "
                            >
                                <div className="text-center">

                                    <div className="text-5xl mb-4">
                                        {wish.emoji}
                                    </div>

                                    <h3 className="text-2xl font-bold text-pink-600 mb-4">
                                        {wish.title}
                                    </h3>

                                    {/* English */}
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        {wish.text}
                                    </p>

                                    <div className="h-px bg-pink-200 my-4"></div>

                                    {/* Tamil */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {wish.tamil}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </section >
    );
}

export default Wishes;