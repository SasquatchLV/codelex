import React from 'react';
import './App.scss';
import { mostWordsFound } from './mostWordsFound';

const App: React.FC = () => {
  mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']);

  return (
    <h1>Yo</h1>
  );
};

export default App;
