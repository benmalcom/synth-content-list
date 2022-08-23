import React from 'react';
import { content } from 'components/page-components/contents/fixture';
import { render, screen } from 'test-utils';
import ContentCard from './ContentCard';

describe('<ContentCard />', () => {
  test('renders without crash', async () => {
    const onClickMock = jest.fn();
    render(<ContentCard content={content} onClickContent={onClickMock} />);
    expect(screen.queryByText(/Alejandro Escamilla/i)).toBeInTheDocument();
    expect(screen.queryByText(/Alejandro Escamilla/i)).not.toBeVisible();
  });
});
