import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import ModeSelect from './components/ModeSelect';
import GameScreen from './components/GameScreen';
import './App.css';

const App = () => {
  const [screen, setScreen] = useState('intro');
  const [mode, setMode] = useState(null);

  return (
    <div className="app">
      {screen === 'intro' && <IntroScreen setScreen={setScreen} />}
      {screen === 'modeSelect' && (
        <ModeSelect
          setMode={(selectedMode) => {
            setMode(selectedMode);
            setScreen('game');
          }}
        />
      )}
      {screen === 'game' && <GameScreen mode={mode} setScreen={setScreen} />}
    </div>
  );
};

export default App;
