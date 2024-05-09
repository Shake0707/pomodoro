import { FC } from 'react'
import Title from './components/Title/Title'
import classes from './app.module.css';
import Swithcer from './components/Switcher/Swithcer';
import Pomodoro from './components/Pomodoro/Pomodoro';
import SettingsBtn from './components/SettingsBtn/SettingsBtn';
import Modal from './components/Modal/Modal';

const App: FC = () => {
  return (
    <div className={classes.container}>
      <Title />
      <Swithcer />
      <Pomodoro />
      <SettingsBtn />
      <Modal />
    </div>
  )
}

export default App