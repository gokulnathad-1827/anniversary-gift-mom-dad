import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Timeline from "./components/Timeline/Timeline";
import Memories from "./components/Memories/Memories";
import Reasons from "./components/Reasons/Reasons";
import Family from "./components/Family/Family";
import Letter from "./components/Letter/Letter";
import Wishes from "./components/Wishes/Wishes";
import Finale from "./components/Finale/Finale";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
      <Memories />
      <Reasons />
      <Family />
      <Letter />
      <Wishes />
      <Finale />
      <MusicPlayer />
    </>
  );
}

export default App;