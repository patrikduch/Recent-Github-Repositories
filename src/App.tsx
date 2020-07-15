import React from 'react';
import './App.css';
import { GithubRepositoryContainer } from './redux/containers/github/Github-Repository-Container';

/**
 * @function App => Root component that encapsulates all necessary web content.
 */
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GithubRepositoryContainer />
      </header>
    </div>
  );
}

export default App;
