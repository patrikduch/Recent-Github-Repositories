import React from 'react';
import './App.css';
import { GithubRepositoryContainer } from './redux/containers/github/Github-Repository-Container';
import NavigationBar from './components/navbar/Navigation-Bar';
import Header from './components/skeleton/Header';

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
