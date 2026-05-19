import { useEffect, useState } from "react";
function useTypingAnimation(words) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentWord.substring(
            0,
            charIndex + 1
          )
        );
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setTimeout(
            () => setIsDeleting(true),
            1e3
          );
        }
      } else {
        setDisplayText(
          currentWord.substring(
            0,
            charIndex - 1
          )
        );
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex(
            (prev) => (prev + 1) % words.length
          );
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words
  ]);
  return displayText;
}
export {
  useTypingAnimation
};
