import React from 'react';
import { shallow } from 'enzyme';
import Button, { blockName } from './Button';

let wrapper;

describe('Button Component Suite', () => {
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('should handle mouse interaction', () => {
    const mouseEvents = {
      onClick: jest.fn(),
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
      onMouseDown: jest.fn(),
      onMouseUp: jest.fn(),
    };
    wrapper.setProps({ children: 'Test', ...mouseEvents });

    wrapper.simulate('click');
    expect(mouseEvents.onClick).toHaveBeenCalled();

    wrapper.simulate('mouseenter');
    expect(mouseEvents.onMouseEnter).toHaveBeenCalled();
    expect(wrapper.hasClass(`${blockName}--hover`)).toBeTruthy();

    wrapper.simulate('mouseleave');
    expect(mouseEvents.onMouseLeave).toHaveBeenCalled();
    expect(wrapper.hasClass(`${blockName}--hover`)).toBeFalsy();

    wrapper.simulate('mousedown');
    expect(mouseEvents.onMouseDown).toHaveBeenCalled();
    expect(wrapper.hasClass(`${blockName}--active`)).toBeTruthy();

    wrapper.simulate('mouseup');
    expect(mouseEvents.onMouseUp).toHaveBeenCalled();
    expect(wrapper.hasClass(`${blockName}--active`)).toBeFalsy();
  })
});



