import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import UploadFile from './uploadFile';
import PrintLabels from './PrintLabels';

const PageWrapper = styled.main`
    padding: 2rem;
    margin: 2rem;
    background-color: white;
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
    <PageWrapper>
        <HeroHeader>Lego Label Maker</HeroHeader>
        <UploadFile onSubmitHandler={onSubmitHandler}/>
        {brickParts.length > 0 && <PrintLabels brickParts={brickParts}/>}
    </PageWrapper>
  );
}

export default App;
