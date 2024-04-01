import { useState } from 'react';

import style from './App.module.css';
import { stratagemCategories } from './stratagems';
import { Game } from './components/Game.tsx';
import { Settings } from './components/Settings.tsx';
import { Button } from './components/Button.tsx';

export const App = () => {
  const [activeStratagems, setActiveStratagems] = useState(
    stratagemCategories.flatMap((c) => c.stratagems),
  );
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <div className={style.top}>
        <h1 className={style.header}>Stratagem paragon</h1>
        {!showSettings && (
          <Button onClick={() => setShowSettings(true)}>Settings</Button>
        )}
      </div>

      {showSettings ? (
        <Settings
          currentSelection={activeStratagems}
          updateSelection={(newSelection) => {
            setActiveStratagems(newSelection);
            setShowSettings(false);
          }}
        />
      ) : (
        <Game activeStratagems={activeStratagems} />
      )}
    </div>
  );
}