// Import necessary React Testing Library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component here
import Counter from '../components/Counter';

// Setup before each test
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Check if the component renders the message "Counter"
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Verify the initial count is 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Get the + button and the count element
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  // Fire a click event on the increment button
  fireEvent.click(incrementButton);

  // Check if the count is incremented
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Get the - button and the count element
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  // Fire a click event on the decrement button
  fireEvent.click(decrementButton);

  // Check if the count is decremented
  expect(countElement).toHaveTextContent('-1');
});
