import { FaHeart } from "react-icons/fa";
import { familyData } from "../../data/familyData";

function Family() {
    return (
        <section id="family">
            <section
                id="family"
                className="relative py-16 overflow-hidden"
                style={{
                    background: "linear-gradient(to bottom, #ffffff, #fff0f5)",
                }}
            >
                {/* Floating Hearts */}
                <FaHeart className="absolute top-10 left-10 text-pink-200 text-4xl animate-bounce opacity-50" />
                <FaHeart className="absolute top-20 right-20 text-pink-300 text-5xl animate-pulse opacity-50" />

                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <h2
                        className="text-center font-bold mb-3"
                        style={{
                            fontSize: "clamp(2rem,5vw,4rem)",
                            color: "#d63384",
                        }}
                    >
                        Our Beautiful Family 👨‍👩‍👧‍👦
                    </h2>

                    <p className="text-center text-gray-600 mb-12 text-lg">
                        Together we laugh, learn, grow and create memories that last forever.
                    </p><br />

                    {/* Family Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {familyData.map((member, index) => (
                            <div
                                key={index}
                                className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-72 object-cover"
                                />

                                <div className="p-5 text-center">

                                    <div className="text-4xl mb-2">
                                        {member.emoji}
                                    </div>

                                    <h3 className="text-xl font-bold text-pink-600">
                                        {member.name}
                                    </h3>

                                    <p className="text-sm text-gray-500 mb-3">
                                        {member.role}
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        {member.description}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Family Quote */}
                    <div className="mt-12 max-w-4xl mx-auto text-center bg-pink-50 rounded-3xl p-8">

                        <h3 className="text-2xl font-bold text-pink-600 mb-4">
                            ❤️ Family is Everything ❤️
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Every memory we create together becomes a treasure,
                            every challenge makes us stronger,
                            and every moment reminds us how blessed we are to have each other.
                        </p>

                    </div>

                </div>
            </section>
        </section>
    );
}

export default Family;