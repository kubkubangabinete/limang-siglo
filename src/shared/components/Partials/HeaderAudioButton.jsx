// Importing the necessary modules
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import audioSfxHome from "../sfx/Just-Relax_Lesfm.mp3";
import audioSfx1 from "../sfx/Chapter1.mp3";
import audioSfx2 from "../sfx/Chapter2.mp3";
import audioSfx3 from "../sfx/Chapter3.mp3";
import audioSfx4 from "../sfx/Chapter4.mp3";
import audioSfx5 from "../sfx/Chapter5.mp3";
import Tour from 'reactour';

const steps = [
  {
    selector: '.menu-element-ii',
  },
  // Add more steps as needed
];


// Creating a custom hook for audio
const useAudio = () => {
  const { pathname } = useLocation();
  const [audioMap, setAudioMap] = useState(new Map());
  const [playing, setPlaying] = useState(false);

  // Function to toggle audio play/pause
  const toggle = () => {
    const audio = audioMap.get(pathname);
    if (playing) {
      audio.pause();
      setPlaying(false);
      sessionStorage.setItem('muteState', 'muted');
    } else {
      audio.play();
      setPlaying(true);
      sessionStorage.setItem('muteState', 'unmuted');
    }
  };

  useEffect(() => {
    let audio = audioMap.get(pathname);

    if (!audio) {
      let audioSfx;

      switch (pathname) {
        case "/":
          audioSfx = audioSfxHome;
          break;
        case "/chapters-directory/chapter-1":
          audioSfx = audioSfx1;
          break;
        case "/chapters-directory/chapter-2":
          // Adding the subcomponents to exclude from re-render
        case "/chapters-directory/chapter-2/pre-colonial":
        case "/chapters-directory/chapter-2/pre-colonial/2":
        case "/chapters-directory/chapter-2/spanish":
        case "/chapters-directory/chapter-2/american":
        case "/chapters-directory/chapter-2/philippines":
          audioSfx = audioSfx2;
          break;
        case "/chapters-directory/chapter-3":
          audioSfx = audioSfx3;
          break;
        case "/chapters-directory/chapter-4":
          audioSfx = audioSfx4;
          break;
        case "/chapters-directory/chapter-5":
          audioSfx = audioSfx5;
          break;
        default:
          audioSfx = audioSfxHome;
          break;
      }

      audio = new Audio(audioSfx);
      setAudioMap(audioMap.set(pathname, audio));
      if (sessionStorage.getItem('muteState') === 'unmuted') {
        audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } else {
      if (sessionStorage.getItem('muteState') === 'unmuted') {
        audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    }

    // Event listener to reset state when audio ends
    audio.addEventListener("ended", () => setPlaying(false));

    // Clean up the previous audio instance
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
      audio.pause();
    };

  }, [pathname]);


  return [playing, toggle];
};

// HeaderAudioButton component to render the audio toggle button
const HeaderAudioButton = () => {
  const [isTourOpen, setIsTourOpen] = useState(false); // added state for reactour
  const [playing, toggle] = useAudio();

  return (
    <a className="menu-element-ii">
      <button className="musicbitch" onClick={toggle}>
        {playing ? (
          <MusicNoteIcon className="material-icons music-on" />
        ) : (
          <MusicOffIcon className="material-icons music-off" />
        )}
      </button>
    </a>
  );
};

// Exporting the HeaderAudioButton component
export default HeaderAudioButton;
