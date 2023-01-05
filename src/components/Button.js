import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    background-color: #006298;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
`;

export const Button = (props) => {
    return(
        <StyledButton data-testid='button-test' onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
}