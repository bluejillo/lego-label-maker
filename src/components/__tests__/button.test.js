import '@testing-library/jest-dom';
import {render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

afterEach(() => {
    cleanup();
});

test('Should render button component', () => {
    const message = 'hello';
    render(<Button>{message}</Button>);
    const buttonEle = screen.getByTestId('button-test');
    expect(buttonEle).toBeInTheDocument();
    expect(buttonEle).toHaveTextContent(message);
});

test('Should fire onClick handler passed through props', async () => {
    const message = 'test';
    const testHandler = jest.fn();
    render(<Button onClick={testHandler}>{message}</Button>);
    const buttonEle = screen.getByTestId('button-test')
    fireEvent.click(buttonEle);
    expect(testHandler).toHaveBeenCalled();

});