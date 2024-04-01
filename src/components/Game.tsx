import { useCallback, useEffect, useState } from 'react';

import { Direction, Stratagem } from '../types';
import style from '../App.module.css';
import { Arrow } from './Arrow';
import { getRandomItem } from '../utils';

const keyMappings: { [key in Direction]: string[] } = {
  [Direction.UP]: ['w', 'ArrowUp'],
  [Direction.RIGHT]: ['d', 'ArrowRight'],
  [Direction.DOWN]: ['s', 'ArrowDown'],
  [Direction.LEFT]: ['a', 'ArrowLeft'],
};
const allMappedKeys = Object.values(keyMappings).flat();

interface Props {
  activeStratagems: Stratagem[];
}
export const Game = ({ activeStratagems }: Props) => {
  const [currentStratagem, setCurrentStratagem] = useState<Stratagem>(
    getRandomItem(activeStratagems),
  );
  const [currentInput, setCurrentInput] = useState<Direction[]>([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [streakHighScore, setStreakHighScore] = useState(0);

  const setStreak = useCallback((streak: number) => {
    setCurrentStreak(streak);
    setStreakHighScore((state) => (state < streak ? streak : state));
  }, []);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (!currentStratagem) {
        return;
      }

      const expectedDirection =
        currentStratagem.combination[currentInput.length];
      const expectedInput = keyMappings[expectedDirection];

      if (expectedInput.includes(event.key)) {
        setCurrentInput((c) => [...c, expectedDirection]);
      } else if (allMappedKeys.includes(event.key)) {
        setStreak(0);
        setCurrentStratagem(getRandomItem(activeStratagems));
        setCurrentInput([]);
      }
    };

    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [setStreak, currentInput, currentStratagem, activeStratagems]);

  useEffect(() => {
    if (
      currentStratagem &&
      currentStratagem.combination.length === currentInput.length
    ) {
      setStreak(currentStreak + 1);
      setCurrentStratagem(getRandomItem(activeStratagems));
      setCurrentInput([]);
    }
  }, [
    setStreak,
    currentStreak,
    currentStratagem,
    currentInput,
    activeStratagems,
  ]);

  return (
    <div>
      <p>Streak high score: {streakHighScore}</p>
      <p>Current streak: {currentStreak}</p>

      {currentStratagem ? (
        <div className={style.stratagem}>
          <h2 className={style.stratagemName}>{currentStratagem.name}</h2>
          <div className={style.stratagemKeys}>
            {currentStratagem?.combination.map((direction, index) => (
              <Arrow
                key={direction + index}
                direction={direction}
                filled={currentInput[index] === direction}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={style.stratagem}>
          <p>No active stratagems :(</p>{' '}
        </div>
      )}
    </div>
  );
};
