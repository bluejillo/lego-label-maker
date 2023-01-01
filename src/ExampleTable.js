import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    margin-top: 0.5rem;
`;
const Thead = styled.thead`
    background: darkgrey;
    font-weight: 500;
`;
const Th = styled.th`
    border: solid 1px black;
    padding: 0.5rem;
`;
const Td = styled.td`
    border: solid 1px black;
    padding: 0.5rem;
`;
export const ExampleTable = () => {
    return (
        <Table>
            <Thead>
                <tr>
                  <Th>PartID</Th>
                  <Th>PartName</Th>
                  <Th>GroupID</Th>
                </tr>
            </Thead>
            <tbody>
                <tr>
                  <Td>123</Td>
                  <Td>4 stud brick</Td>
                  <Td></Td>
                </tr>
                <tr>
                  <Td>222</Td>
                  <Td>1 stud brick</Td>
                  <Td>1</Td>
                </tr>
                <tr>
                  <Td>333</Td>
                  <Td>1 stud flat brick</Td>
                  <Td>1</Td>
                </tr>
                <tr>
                    <Td>555</Td>
                    <Td>transparent stud</Td>
                    <Td></Td>
                </tr>
                <tr>
                  <Td>456</Td>
                  <Td>6 stud brick</Td>
                  <Td>2</Td>
                </tr>
                <tr>
                  <Td>775</Td>
                  <Td>2x6 stud brick</Td>
                  <Td>2</Td>
                </tr>
            </tbody>
        </Table>
    );
};