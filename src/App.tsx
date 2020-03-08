import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const playerRef = useRef<any>(null);
  const loadedRef = useRef<any>(false);

  const handleClick = () => {
    if (!(playerRef.current && loadedRef.current)) {
      return;
    }

    playerRef.current.seekTo(3730);
  };

  useEffect(() => {
    const ytScriptTag = document.createElement('script');
    ytScriptTag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(ytScriptTag);

    const onPlayerReady = () => {
      loadedRef.current = true;
    };

    (window as any).onYouTubeIframeAPIReady = () => {
      const { YT } = window as any;
      playerRef.current = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'M5zxb_3d2FA',
        startSeconds: 3730,
        events: {
          onReady: onPlayerReady
        }
      });
    };
  });

  return (
    <div className="App">
      <button onClick={handleClick}>再生</button>
      <button>合いの手を入れる</button>
    </div>
  );
}

export default App;
