import React from 'react';
import renderer from 'react-test-renderer';
import { DurationDropDown } from './DurationDropDown';

describe('DurationDropDown', () => {
  it('renders the same way every time', () => {
    const tree = renderer.create(<DurationDropDown increments={30} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
