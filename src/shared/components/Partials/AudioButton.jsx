import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import audioSfx from '../sfx/lanalana.mp3'
import React, { useState, useEffect } from "react";


const useAudio = url => {
  const [audio] = useState(new Audio(audioSfx));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const AudioButton = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
      <button className="musicbitch" onClick={toggle}>{playing ? <MusicNoteIcon className="material-icons music-on"/> : <MusicOffIcon className="material-icons music-off"/>}</button>
  );
};


export default AudioButton