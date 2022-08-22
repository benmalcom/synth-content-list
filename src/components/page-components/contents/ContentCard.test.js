import React from 'react';
import { content } from 'components/page-components/contents/fixture';
import { render, screen, userEvent } from 'test-utils';
import ContentCard from './ContentCard';

describe('<ContentCard />', () => {
  test('renders without crash', () => {
    const { getByTestId } = render(<ContentCard content={content} />);
    expect(screen.getByText(/Alejandro Escamilla/i)).not.toBeInTheDocument();
    userEvent.hover(getByTestId('content-card'));
    expect(screen.getByText(/Alejandro Escamilla/i)).toBeInTheDocument();
  });
});
