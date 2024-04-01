import { ReactNode } from 'react';
import style from './Button.module.css';

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => (
  <button type="button" className={style.button} onClick={onClick}>
    {children}
  </button>
);

export const InlineButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => (
  <button type="button" className={style.inlineButton} onClick={onClick}>
    {children}
  </button>
);
