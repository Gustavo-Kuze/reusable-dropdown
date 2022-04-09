import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import MainContainer from './components/MainContainer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [alignment, setAlignment] = useState<'left' | 'right'>('left');
  const [items, setItems] = useState(['Rename', 'Delete', 'Share']);

  return (
    <div className="App">
      <header className="App-header">
        <MainContainer>
          <Dropdown
            isOpen={isOpen}
            align={alignment}
            onToggle={(open) => setIsOpen(open)}
            onItemClick={(item) => {
              alert(`${item} clicked`);
              setIsOpen(false);
            }}
            disabled={false}
            items={items}
          />
        </MainContainer>
      </header>
    </div>
  );
}

export default App;
