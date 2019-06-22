import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';

jest.mock('../../components/Sidebar/sidebar');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
