import React from 'react';
import { RecoilRoot } from 'recoil';
import SheetsContainer from './containers/SheetsContainer';
import Titlebar from './component/Titlebar/Titlebar';
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
    </RecoilRoot>
  );
}

export default App;
