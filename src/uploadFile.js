import React, { useState } from 'react';
import styled from 'styled-components';
import { usePapaParse } from 'react-papaparse';
import { Button } from './Button';
import { ExampleTable } from "./ExampleTable";

const ALLOWED_EXTENSIONS = ["csv"];

const Error = styled.div`
  background-color: lightpink;
  padding: 2rem;
  margin: 0.5rem 0;
`;
const ExampleContainer = styled.div`
    margin: 1rem 0;
`;
const FormContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin: 2rem 0;
`;
function UploadFile({ onSubmitHandler }) {
  const [selectedFile, setSelectedFile] = useState("");
  const [error, setError] = useState("");
  const { readString } = usePapaParse();
  const changeHandler = (event) => {
    setError("");
    if(event.target.files.length) {
      let inputFile = event.target.files[0];
      let fileExtension = inputFile?.type.split("/")[1];
      if(!ALLOWED_EXTENSIONS.includes(fileExtension)) {
        setError("Unsupported file type. Please select a CSV file.");
        return;
      }
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    if (!selectedFile) return setError("Please select a CSV file.");
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      let csv = readString(target.result, { header: true });
      let labelList = csv?.data.reduce((allBricks, brick) => ([
        ...allBricks,
        [...(allBricks[brick.GroupID] || []), brick]
      ]), []);
      onSubmitHandler(labelList);
    };
    reader.readAsText(selectedFile);
  };
  return (
    <div className="upload-file__container">
        <p>Your CSV document must include the headers; 'PartID', 'PartName', and 'GroupID'.
        Part names will be line clamped to two lines.</p>
        <p>For a full list of parts and part numbers available in Lego Label Maker, see Bricklink's <a href='https://www.bricklink.com/catalogList.asp?catType=P&colorPart=9&v=3' target="_blank" rel="noreferrer">light grey parts list</a>.</p>
        <p>To group labels for a "left" and "right" label, use a unique GroupID (only one pair per group). See example below.</p>
        <ExampleContainer>
            <strong>Example CSV:</strong>
            <ExampleTable/>
        </ExampleContainer>
        {error && <Error>{error}</Error>}
        <FormContainer>
            <input type="file" name="file" onChange={changeHandler}/>
            <Button onClick={handleSubmission}>Generate Labels</Button>
        </FormContainer>
    </div>
  );
}

export default UploadFile;
