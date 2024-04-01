import { useState } from 'react';

import { Stratagem } from '../types';
import { stratagemCategories } from '../stratagems';
import appStyle from '../App.module.css';
import { Button, InlineButton } from './Button';
import style from './Settings.module.css';

interface Props {
  currentSelection: Stratagem[];
  updateSelection: (selection: Stratagem[]) => void;
}
export const Settings = ({ currentSelection, updateSelection }: Props) => {
  const [selection, setSelection] = useState(currentSelection);

  const toggleStratagem = (stratagem: Stratagem) => {
    setSelection((state) =>
      state.includes(stratagem)
        ? state.filter((s) => s !== stratagem)
        : state.concat(stratagem),
    );
  };

  const onSave = () => {
    updateSelection(selection);
  };

  return (
    <div>
      <h2>
        Active stratagems{' '}
        <InlineButton
          onClick={() =>
            setSelection(stratagemCategories.flatMap((c) => c.stratagems))
          }
        >
          All
        </InlineButton>
        <InlineButton onClick={() => setSelection([])}>None</InlineButton>
      </h2>
      <ul className={style.list}>
        {stratagemCategories.map((category) => {
          return (
            <li key={category.name} className={style.listItem}>
              {category.name}
              <ul className={style.list}>
                {category.stratagems.map((stratagem) => {
                  return (
                    <li key={stratagem.name} className={style.listItem}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selection.includes(stratagem)}
                          onChange={() => toggleStratagem(stratagem)}
                        />
                        {stratagem.name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className={appStyle.buttons}>
        <Button onClick={onSave}>Save</Button>
      </div>
    </div>
  );
};
