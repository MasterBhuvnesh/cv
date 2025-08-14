"use client";

import React, { useEffect, useRef, useState } from "react";

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M5 3v18l15-9L5 3z" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
  </svg>
);

const VolumeIcon = ({ muted }: { muted: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    {muted ? (
      <path d="M16.5 12a4.5 4.5 0 0 1-4.5 4.5v-9A4.5 4.5 0 0 1 16.5 12zM19 12c0-1.77-.77-3.34-1.96-4.44l-1.42 1.42A6.5 6.5 0 0 1 18.5 12 6.5 6.5 0 0 1 16.62 15.02l1.42 1.42C18.23 15.34 19 13.77 19 12z" />
    ) : (
      <path d="M3 9v6h4l5 5V4L7 9H3z" />
    )}
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

const AudioButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [muted, setMuted] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // load audio from public folder
    audioRef.current = new Audio("/lines.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    const handleEnded = () => setPlaying(false);
    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep audio volume in sync
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // mute toggle
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  // close panel on outside click but do NOT pause audio
  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!panelOpen) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setPanelOpen(false);
      }
    };
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [panelOpen]);

  const play = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setPlaying(true);
  setPanelOpen(true); // open panel when playing
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to play audio", err);
    }
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setPlaying(false);
  };

  // Main button behavior:
  // - if not playing: start playback
  // - if playing: open the player panel (do NOT pause)
  const onMainButtonClick = () => {
    if (playing) {
      // when already playing, toggle the panel (click should not pause music)
      setPanelOpen((open) => !open);
    } else {
      play();
    }
  };

  const toggleMute = () => setMuted((m) => !m);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-pressed={playing}
        onClick={onMainButtonClick}
        title={playing ? "Open player" : "Play music"}
        className="fixed right-4 bottom-8 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 overflow-hidden"
      >
        {playing ? (
          // show song image while playing; clicking opens panel
          <img src="/icon.jpeg" alt="Now playing" className="h-12 w-12 object-cover" />
        ) : (
          <PlayIcon />
        )}
      </button>

      {/* Popup card (black/white/gray theme) */}
      {panelOpen && (
        <div
          ref={panelRef}
          // position the popup to the left of the button
          className="fixed right-20 bottom-8 z-50 w-64 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 ease-in-out bg-white"
        >
          <div className="px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="pl-2 pb-1">
                <h3 className="text-gray-900 text-sm sm:text-base">Lines</h3>
                <p className="text-xs sm:text-sm text-gray-600">lines.mp3</p>
              </div>
              <span className="text-[12px] text-gray-500">Now</span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => {
                    if (playing) pause();
                    else play();
                  }}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-900 text-white hover:opacity-90"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? <PauseIcon /> : <PlayIcon />}
                </button>
              </div>

              <div className="flex items-center gap-2 w-1/2">
                <button
                  onClick={toggleMute}
                  className="inline-flex items-center justify-center h-8 w-8 rounded bg-gray-100 text-gray-700 hover:text-gray-900"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  <VolumeIcon muted={muted} />
                </button>

                <input
                  aria-label="Volume"
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setVolume(v);
                    if (v === 0) setMuted(true);
                    else setMuted(false);
                  }}
                  className="w-full h-2 bg-gray-200 accent-gray-900 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioButton;
