import { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

function MusicPlayer() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggleMusic = () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlaying(!playing);
    };

    return (
        <>
            <audio
                ref={audioRef}
                loop
                preload="auto"
                src="/public/music/anniversary.mp3"
            />

            <button
                onClick={toggleMusic}
                className="
                    fixed
                    bottom-6
                    right-6
                    z-50
                    w-16
                    h-16
                    rounded-full
                    bg-gradient-to-r
                    from-pink-500
                    to-rose-500
                    text-white
                    shadow-2xl
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-all
                    duration-300
                "
            >
                {playing ? (
                    <FaPause size={22} />
                ) : (
                    <FaMusic size={22} />
                )}
            </button>
        </>
    );
}

export default MusicPlayer;