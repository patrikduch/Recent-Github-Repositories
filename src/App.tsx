import React from 'react';
import './App.css';
import useDidMount from './hooks/dom/component.didmount.hook';
import { fetchNewestRepos } from './api/end-points/Github-API';

/**
 * @function App => Root component that encapsulates all necessary web content.
 */
const App: React.FC = () => {

  useDidMount(() => {
    fetchNewestRepos().then((res) => {
      console.log(res.data)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        Patrik Duch
      </header>
    </div>
  );
}

export default App;
