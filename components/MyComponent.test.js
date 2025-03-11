import React from 'react';
import { render } from '@testing-library/react-native';
import MyComponent from './MyComponent';

test('renders the component with correct text', () => {
    const { getByTestId } = render(<MyComponent />);
    const textElement = getByTestId('welcome-text');

    expect(textElement).toBeTruthy();
    expect(textElement.props.children).toBe('Hello, World!');
});
