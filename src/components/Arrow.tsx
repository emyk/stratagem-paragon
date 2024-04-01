import { Direction } from '../types.ts';
import style from './Arrow.module.css';

export const Arrow = ({
  direction,
  filled,
}: {
  direction: Direction;
  filled: boolean;
}) => {
  const path =
    direction === Direction.LEFT
      ? 'M22.3 10.8v1.8H5.5l5.2 5.1L9.3 19l-7.5-7.3 7.7-7.3 1.4 1.3-5.2 5.1h16.6Z'
      : direction === Direction.DOWN
        ? 'M11.1 1.5h1.8v16.8l5.1-5.2 1.3 1.4L12 22l-7.3-7.6L6 13l5.1 5.2V1.5Z'
        : direction === Direction.RIGHT
          ? 'M1.8 12.6v-1.8h16.8l-5.2-5.1 1.4-1.3 7.5 7.3-7.7 7.3-1.4-1.3 5.2-5.1H1.8Z'
          : 'M12.9 22h-1.8V5.2L6 10.4 4.7 9 12 1.5l7.3 7.6-1.3 1.4-5.1-5.2V22Z';

  return (
    <div className={`${style.arrow} ${filled ? style.filled : ''}`}>
      <svg viewBox="0 0 23 23">
        <path d={path}></path>
      </svg>
    </div>
  );
};
