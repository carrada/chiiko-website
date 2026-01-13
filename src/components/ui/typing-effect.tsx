"use client";
import { useState, useEffect } from "react";

export const TypingEffect = ({
  words = ["Landing Pages", "Component Blocks"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Safety check: reset if words array is empty
    if (!words || words.length === 0) return;

    // Reset index if it exceeds array bounds
    if (currentWordIndex >= words.length) {
      setCurrentWordIndex(0);
      return;
    }

    const currentWord = words[currentWordIndex];

    let mainTimeout: ReturnType<typeof setTimeout>;
    let pauseTimeout: ReturnType<typeof setTimeout>;

    mainTimeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          } else {
            // Finished typing, wait then start deleting
            pauseTimeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => {
      clearTimeout(mainTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="font-sans text-6xl md:text-7xl font-bold tracking-tight text-black flex items-center">
      {currentText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};
