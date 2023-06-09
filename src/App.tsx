import React from 'react';
import { RecoilRoot } from 'recoil';
import SheetsContainer from './containers/SheetsContainer';
import Titlebar from './component/Titlebar/Titlebar';
import Bottombar from './component/BottomBar/Bottombar';
import "./App.css";
import "./index.css";

function App() {

  const handleUploadClick = () => {
    // Handle the upload logic here
    console.log("Upload button clicked");
  };

  return (
    <RecoilRoot>
         <Titlebar onUploadSheet={handleUploadClick} />
         <SheetsContainer></SheetsContainer>
         <Bottombar />
    </RecoilRoot>
  );
}

export default App;
