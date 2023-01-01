import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import UploadFile from './uploadFile';
import PrintLabels from "./PrintLabels";

const PageWrapper = styled.div`
    width: 55pc;
    padding: 2rem;
    background-color: white;
    margin: 0 auto;
`;

const HeroHeader = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`;

function App() {
    let [brickParts, setBrickParts] = useState([]);
    const onSubmitHandler = (newBrickParts) => {
        setBrickParts(newBrickParts);
    };
  return (
    <PageWrapper className="App">
        <HeroHeader>Lego Label Maker</HeroHeader>
        <UploadFile onSubmitHandler={onSubmitHandler}/>
        {brickParts.length > 0 && <PrintLabels brickParts={brickParts}/>}
    </PageWrapper>
  );
}

export default App;
