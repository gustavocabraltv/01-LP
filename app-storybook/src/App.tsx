import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonIcon from './components/ButtonIcon';
import {useQuery} from '@apollo/client'
import GetLandingPage from './graphql/queries/getLandingPage';

function App() {
  const {loading, error, data} = useQuery(GetLandingPage)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>{data.landingPage.header.title}</h1>
        <h1>{data.landingPage.header.description}</h1>
      <ButtonIcon
      color="blue"
      tamanho="pequeno"
    >
      Get Started Now
    </ButtonIcon>
        <h1>noiz</h1>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
