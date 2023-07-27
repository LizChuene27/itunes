import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios'; // Import axios to be mocked
import App from './App';

// Mock the axios.get function to return a sample response
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));

test('renders iTunes Search App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/iTunes Search App/i);
  expect(titleElement).toBeInTheDocument();

  // Create a snapshot of the rendered component
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

// You can add more front-end tests as needed
