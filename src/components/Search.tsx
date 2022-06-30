import { useState, KeyboardEvent } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './Search.module.css';

interface Props {
  onEnter: (taskName: string) => void;
}

export function Search({ onEnter }: Props) {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && inputText !== ' ') {
      onEnter(inputText);
      setInputText('');
    }
  };

  const handleList = () => {
    onEnter(inputText);
    setInputText('');
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.sendInformation}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <div className={styles.searchBar}>
          <button type="submit" onClick={handleList}>
            <span>Criar</span>
            <PlusCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
