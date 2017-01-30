import React from 'react';
import './w3.css';
import './App.css';
import Tabs from './Containers/Tabs';
import ChangeTab from './Containers/ChangeTab';
import Units from './Containers/Units';

const App = () => (
  <div>
    <Tabs />
    <ChangeTab />
    <Units />
  </div>
)

export default App;
