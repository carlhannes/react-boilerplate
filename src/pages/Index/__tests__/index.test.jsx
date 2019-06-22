import React from 'react';
import { mount } from 'enzyme';

import Index from '../index';

jest.mock('../../../components/Sidebar/sidebar');

describe('Index page', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Index />);
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });
});
