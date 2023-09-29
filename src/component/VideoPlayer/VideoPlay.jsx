import React, { useEffect, useRef } from 'react';
import './VideoPlayer.css';

const VideoPlay = () => {
    const videoRef = useRef("");

    function iframeRef( frameRef ) {
        return frameRef.contentWindow
            ? frameRef.contentWindow.document
            : frameRef.contentDocument
    }

    useEffect(() => {
        setTimeout(() =>{
            const videoEle = iframeRef( document.querySelector("video") )
            console.log(videoEle);
        },1000);
    },[])
  return (
    <div>
      <h1>Video App</h1>
      <iframe
        height="400"
        width="500"
        src="https://www.youtube.com/embed/O5hShUO6wxs?autoplay=1"
        allow="autoplay"
        fullscreen="true"
      ></iframe>
    </div>
  );
};

export default VideoPlay;
