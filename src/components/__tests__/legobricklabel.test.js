import '@testing-library/jest-dom';
import {render, screen, cleanup } from '@testing-library/react';
import { LegoBrickLabel } from "../LegoBrickLabel";

afterEach(() => {
   cleanup();
});

test('should render label', () => {
    const brickParts = [[{'PartID': 123, 'PartName': 'My Part', }]];
    render(<LegoBrickLabel brickParts={brickParts}/>);
    const brickLabelEle = screen.getByTestId('left-brick-123');
    expect(brickLabelEle).toBeInTheDocument();
});