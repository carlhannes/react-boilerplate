import React from 'react';
import { mount } from 'enzyme';

import About from '../about';

jest.mock('../../../components/Sidebar/sidebar');

describe('About page', () => {
  it('should render correctly', () => {
    const wrapper = mount(<About />);
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });
});
