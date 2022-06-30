import { Trash } from 'phosphor-react';
import * as C from './styles';

interface Props {
  item: {
    id: number;
    name: string;
    done: boolean;
  };
  onChange: (id: number, done: boolean) => void;
  onDeleteTask: (taskToDelete: string) => void;
}

export function ListItem({ item, onChange, onDeleteTask }: Props) {
  function handleDeleteTask() {
    onDeleteTask(item.name);
  }

  return (
    <C.Container done={item.done}>
      <C.InfoItens>
        <input
          type="checkbox"
          checked={item.done}
          onChange={(e) => onChange(item.id, e.target.checked)}
        />
        <label>{item.name}</label>
      </C.InfoItens>
      <C.Delete>
        <button>
          <Trash size={24} onClick={handleDeleteTask} />
        </button>
      </C.Delete>
    </C.Container>
  );
}
