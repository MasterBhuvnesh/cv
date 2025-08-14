"use client";

import React, { useEffect, useRef, useState } from "react";

const PlayIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M5 3v18l15-9L5 3z" />
  </svg>
);

const PauseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
  </svg>
);

const AudioButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [panelOpen, setPanelOpen] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.6);
  const [muted, setMuted] = useState<boolean>(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/lines.mp3");
    audioRef.current.loop = true;
    if (audioRef.current) audioRef.current.volume = volume;

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

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  // Close panel on outside click but do NOT pause audio
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
      setPanelOpen(true);
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

  const onMainButtonClick = () => {
    if (playing) setPanelOpen((open) => !open);
    else play();
  };

  return (
    <div className="hidden md:block">
      {/* Desktop circular button on left (md+) */}
      <button
        ref={buttonRef}
        type="button"
        aria-pressed={playing}
        onClick={onMainButtonClick}
        title={playing ? "Open player" : "Play music"}
        className="fixed left-4 bottom-8 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white overflow-hidden"
      >
        {playing ? (
          <img src="/icon.jpeg" alt="Now playing" className="h-12 w-12 object-cover" />
        ) : (
          <PlayIcon />
        )}
      </button>

      {/* Popup card (desktop) - appears to the right of the left button */}
      {panelOpen && (
        <div
          ref={panelRef}
          className="fixed z-50 rounded-xl shadow-sm overflow-hidden transition-shadow duration-200 ease-in-out left-20 bottom-8 w-64 bg-gray-900 text-white"
        >
          <div className="px-3 py-3">
            <div className="flex items-center justify-between">
              <div className="pl-2 pb-1">
                <h3 className="text-sm font-medium">Lines</h3>
                <p className="text-xs text-gray-300">lines.mp3</p>
              </div>
              <span className="text-[12px] text-gray-400">Now</span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => {
                    if (playing) pause();
                    else play();
                  }}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white text-gray-900 hover:opacity-95"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? <PauseIcon /> : <PlayIcon />}
                </button>
              </div>

              <div className="flex items-center gap-2 w-1/2">
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
                  className="w-full h-2 bg-gray-700 accent-white rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioButton;
