import { File } from 'phosphor-react';
import { useState } from 'react';
import styles from './Contents.module.css';
import { ListItem } from './ListItem';
import { Search } from './Search';

interface Item {
  id: number;
  name: string;
  done: boolean;
}

export function Content() {
  const [lists, setLists] = useState<Item[]>([]);

  const [taskAmount, setTaskAmount] = useState(0);
  const [fineshedTask, setFinishedTask] = useState(0);

  let show = true;
  if (taskAmount > 0) {
    show = false;
  } else {
    show = true;
  }

  const handleAddTask = (taskName: string) => {
    let newList = [...lists];
    newList.push({
      id: lists.length + 1,
      name: taskName,
      done: false,
    });
    if (lists.length >= 0) setTaskAmount(taskAmount + 1);
    setLists(newList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...lists];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
        if (done) {
          setFinishedTask(fineshedTask + 1);
        } else {
          setFinishedTask(fineshedTask - 1);
        }
      }
    }
    setLists(newList);
  };

  const DeletTask = (taskToDelete: string) => {
    let TaskWithoutDeletedOne = lists.filter((list) => {
      return list !== lists.find((list) => list.name === taskToDelete);
    });
    setLists(TaskWithoutDeletedOne);
    setTaskAmount(taskAmount - 1);
  };

  return (
    <>
      <Search onEnter={handleAddTask} />
      <div>
        <header className={styles.content}>
          <div className={styles.task}>
            <div className={styles.taskText}>Tarefas Criadas</div>
            <div className={styles.taskAmount}>{taskAmount}</div>
          </div>
          <div className={styles.count}>
            <div className={styles.countText}>Concluidas</div>
            <div className={styles.countAmount}>
              {fineshedTask} de {taskAmount}
            </div>
          </div>
        </header>

        {show ? (
          <main className={styles.main}>
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>
                <File size={60} />
              </div>
              <div className={styles.emptyText}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          </main>
        ) : (
          <div className={styles.list}>
            {lists.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  item={item}
                  onChange={handleTaskChange}
                  onDeleteTask={DeletTask}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
