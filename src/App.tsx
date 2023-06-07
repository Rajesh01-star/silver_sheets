import React from 'react';
import { RecoilRoot } from 'recoil';
import SheetsContainer from './containers/SheetsContainer';
import "./App.css";

function App() {

  return (
    <RecoilRoot>
        <SheetsContainer></SheetsContainer>
    </RecoilRoot>
  );
}

export default App;
