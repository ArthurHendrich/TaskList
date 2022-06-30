import styles from './App.module.css';
import './global.css';

import { Header } from './components/Header';
import { Content } from './components/Contents';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Content />
      </div>
    </div>
  );
}
