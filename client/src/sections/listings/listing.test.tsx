import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {Listings} from './index';


test('Render Listings', async () => {
  render(<Listings title="TinyHouse Listings"/>);

  expect(screen.getByRole('heading')).toHaveTextContent('TinyHouse Listings');
});
