import { useEffect, useState } from "react";
import Sound from "react-sound";

export default function PlayButton({ phonetics }) {
  const [audio, setAudio] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
  };

  const stopAudio = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    let url = phonetics.filter((phonetic) => {
      if (phonetic["audio"] !== "") return phonetic["audio"];
    });
    setAudio(url[0]?.audio);
  }, phonetics);

  if (audio) {
    return (
      <button
        className={`play-button ${isPlaying ? "active" : ""}`}
        onClick={isPlaying ? stopAudio : playAudio}>
        <svg
          className='play-button'
          xmlns='http://www.w3.org/2000/svg'
          width='75'
          height='75'
          viewBox='0 0 75 75'>
          <g fill='#A445ED' fillRule='evenodd'>
            <circle cx='37.5' cy='37.5' r='37.5' opacity='.25' />
            <path d='M29 27v21l21-10.5z' />
          </g>
        </svg>
        <Sound
          url={audio}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          onFinishedPlaying={stopAudio}
        />
      </button>
    );
  }
  return null;
}
