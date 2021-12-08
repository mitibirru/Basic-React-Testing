import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
	test('renders Hello world', () => {
		// Arrange
		render(<Greeting />);

		// Act
		// ...nothing

		// Assert
		const helloWorldElement = screen.getByText('Hello World', {
			exact: false,
		});
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders good to see you if button was not clicked', () => {
		render(<Greeting />);

		const outputElement = screen.getByText('good to see you', {
			exact: false,
		});
		expect(outputElement).toBeInTheDocument();
	});

	test('renders Changed! if button was clicked', () => {
		render(<Greeting />);

		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const outputElement = screen.getByText('Changed!', {
			exact: false,
		});
		expect(outputElement).toBeInTheDocument();
	});

  test('does not render "good to see you" if the button was not clicked', () => {
    render(<Greeting />);

		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const outputElement = screen.getByText('good to see you', {
			exact: false,
		});
		expect(outputElement).toBeNull();
  })
});
