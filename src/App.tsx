import React from 'react';
import Cell from './component/Cell/Cell';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
        <Cell>hello</Cell>
    </RecoilRoot>
  );
}

export default App;
