import React from 'react';
import './App.css';
import { GithubRepositoryContainer } from './redux/containers/github/Github-Repository-Container';
import Header from './components/app/skeleton/Header';

/**
 * @function App => Root component that encapsulates all necessary web content.
 */
const App: React.FC = () => {
  return (
    <>
      <Header />
      <GithubRepositoryContainer />
      </>
  );
}

export default App;
