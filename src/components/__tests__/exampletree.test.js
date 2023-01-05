import renderer from 'react-test-renderer';
import { ExampleTable } from '../ExampleTable';
import { cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

test('Example table matches snapshot', () => {
    const table = renderer.create(<ExampleTable/>).toJSON();
    expect(table).toMatchSnapshot();
});