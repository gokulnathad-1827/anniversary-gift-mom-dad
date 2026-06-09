import { FaHeart } from "react-icons/fa";

function Letter() {
    return (
        <section id="letter">
            <section
                className="relative py-20 overflow-hidden"
                style={{
                    background: "linear-gradient(to bottom, #fff0f5, #ffe4ec)",
                }}
            >
                {/* Floating Hearts */}
                <FaHeart className="absolute top-10 left-10 text-pink-200 text-4xl animate-bounce opacity-50" />
                <FaHeart className="absolute top-20 right-20 text-pink-300 text-5xl animate-pulse opacity-50" />
                <FaHeart className="absolute bottom-10 left-20 text-pink-200 text-4xl animate-bounce opacity-50" />

                <div className="max-w-5xl mx-auto px-4">

                    {/* Section Heading */}
                    <h2
                        className="text-center font-bold mb-10"
                        style={{
                            fontSize: "clamp(2rem,5vw,4rem)",
                            color: "#d63384",
                        }}
                    >
                        A Letter To Our Beloved Parents 💌
                    </h2>

                    {/* Letter Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">

                        <h3 className="text-2xl font-bold text-pink-600 mb-6">
                            Dear Amma and Appa ❤️
                        </h3>

                        <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                            On this special day, we want to thank you for every
                            sacrifice you made, every lesson you taught, every
                            challenge you overcame, and every dream you helped us
                            achieve.
                        </p>

                        <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                            Your love has been the foundation of our family.
                            Your strength has guided us through difficult times.
                            Your kindness and care have filled our home with
                            happiness and warmth.
                        </p>

                        <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                            For 21 wonderful years, you have shown us the true
                            meaning of love, trust, patience and togetherness.
                            Your journey inspires us every single day.
                        </p>

                        <p className="text-gray-700 text-lg leading-8 mb-8 text-left">
                            We are proud to be your children and grateful for
                            everything you have done for us.
                        </p>

                        {/* Special Wish */}
                        <div className="bg-pink-50 rounded-3xl p-6 md:p-8 my-8 border border-pink-100">

                            <h3 className="text-3xl font-bold text-pink-600 mb-8 text-center">
                                🌍 Our Special Wish
                            </h3>

                            <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                                As we celebrate your 21st Wedding Anniversary,
                                there is one special wish we would love to see
                                come true.
                            </p>

                            <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                                For years, you have worked hard for our family,
                                sacrificed your comforts, and always put our
                                happiness before your own.
                            </p>

                            <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                                Our heartfelt wish is to go on a family trip
                                together — Amma, Appa, Gokulnath and Vaisyasri.
                            </p>

                            <p className="text-gray-700 text-lg leading-8 mb-6 text-left">
                                Not because of the destination, but because of
                                the precious moments, laughter, photos and
                                memories we can create together.
                            </p>

                            <div className="h-px bg-pink-200 my-8"></div>

                            <h3 className="text-3xl font-bold text-pink-600 mb-8 text-center">
                                🌍 எங்களின் சிறப்பு ஆசை
                            </h3>

                            <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                                உங்கள் 21வது திருமண நாள் விழாவைக் கொண்டாடும்
                                இந்த அழகான தருணத்தில், எங்களுக்குள் இருக்கும்
                                ஒரு சிறப்பு ஆசையை உங்களுடன் பகிர்ந்து கொள்ள
                                விரும்புகிறோம்.
                            </p>

                            <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                                பல ஆண்டுகளாக நீங்கள் எங்கள் குடும்பத்திற்காக
                                கடினமாக உழைத்து, உங்கள் வசதிகளை தியாகம் செய்து,
                                எங்களின் மகிழ்ச்சியையே முதன்மையாக
                                வைத்துள்ளீர்கள்.
                            </p>

                            <p className="text-gray-700 text-lg leading-8 mb-5 text-left">
                                அம்மா, அப்பா, கோகுல்நாத் மற்றும் வைஷ்யஸ்ரீ
                                ஆகிய நால்வரும் சேர்ந்து ஒரு குடும்ப சுற்றுலா
                                செல்ல வேண்டும் என்பதே எங்களின் மனமார்ந்த ஆசை.
                            </p>

                            <p className="text-gray-700 text-lg leading-8 text-left">
                                அந்த பயணத்தின் இலக்கு முக்கியமல்ல; ஒன்றாக
                                செலவிடும் நேரம், சிரிப்புகள், புகைப்படங்கள்
                                மற்றும் இனிய நினைவுகளே எங்களுக்கு முக்கியம்.
                            </p>

                        </div>

                        {/* Ending */}
                        <p className="text-gray-700 text-lg leading-8 mb-8 text-left">
                            Happy 21st Wedding Anniversary ❤️
                        </p>

                        {/* Signature */}
                        <div className="border-t pt-8">

                            <div className="text-right">

                                <p className="text-2xl font-bold text-pink-600">
                                    With Endless Love ❤️
                                </p>

                                <p className="text-xl text-gray-700 mt-3">
                                    Gokulnath & Vaisyasri
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </section>
    );
}

export default Letter;