import React, { useState } from 'react';
import { Howl } from 'howler'; // Import from 'react-howler' if you are using that package

function BackgroundAudio() {
  const [audioPlaying, setAudioPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioPlaying) {
      // Create a new Howl instance with your audio file
      const sound = new Howl({
        src: ['assets/background.mp3'], // Adjust the path to your audio file
        loop: true,
        volume: 0.5, // Adjust the volume if needed
      });

      sound.play();
      setAudioPlaying(true);
    }
  };

  return (
    <div>
      <button onClick={toggleAudio}>
        {audioPlaying ? 'Pause Audio' : 'Play Audio'}
      </button>
    </div>
  );
}

export default BackgroundAudio;
