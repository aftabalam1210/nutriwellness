import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import './AudioPlayer.css';
import audioUrl from '../assets/music.mp3';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // New URL: Using a reliable CDN for ambient nature/relaxing music
    // Source: Local File (Gymnopedie No 1 - Kevin MacLeod)
    // Source: Local File (Gymnopedie No 1 - Kevin MacLeod)
    // const audioUrl = "/assets/music.mp3"; 


    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Attempt auto-play on mount (with error handling)
    useEffect(() => {
        const startAudio = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.5;
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    // Remove listeners once played
                    document.removeEventListener('click', startAudio);
                    document.removeEventListener('keydown', startAudio);
                }).catch((error) => {
                    console.log("Autoplay blocked. Waiting for interaction.");
                    setIsPlaying(false);
                });
            }
        };

        // Try immediately
        startAudio();

        // If blocked, add listeners to retry on first interaction
        const events = ['click', 'touchstart', 'scroll', 'keydown'];
        events.forEach(event => document.addEventListener(event, startAudio));

        return () => {
            events.forEach(event => document.removeEventListener(event, startAudio));
        };
    }, []);

    return (
        <div className="audio-player">
            <audio ref={audioRef} src={audioUrl} loop autoPlay />
            <button
                className={`audio-btn ${isPlaying ? 'playing' : ''}`}
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                {/* Changed default icon to Play to prompt user if paused */}

                <span className="audio-tooltip">
                    {isPlaying ? "Pause Ambient Music" : "Play Ambient Music"}
                </span>
            </button>
        </div>
    );
};

export default AudioPlayer;
