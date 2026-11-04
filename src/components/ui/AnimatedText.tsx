import React from 'react';
import { motion } from 'motion/react';

interface AnimatedLettersProps {
  text: string;
  className?: string;
  letterClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function AnimatedLetters({
  text,
  className = '',
  letterClassName = '',
  delay = 0,
  duration = 0.65,
  stagger = 0.035,
}: AnimatedLettersProps) {
  const characters = Array.from(text);

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {characters.map((char, index) => {
        if (char === ' ') {
          return (
            <span key={index} className="inline-block">
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={index}
            className="inline-block overflow-hidden leading-[1.05] align-bottom"
          >
            <motion.span
              className={`inline-block ${letterClassName}`}
              initial={{ y: '120%', opacity: 0, rotateZ: 4 }}
              animate={{ y: '0%', opacity: 1, rotateZ: 0 }}
              transition={{
                duration,
                delay: delay + index * stagger,
                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth crisp snap
              }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

interface AnimatedWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}

export function AnimatedWords({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.06,
}: AnimatedWordsProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.28em] last:mr-0 align-bottom">
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
