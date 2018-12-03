import React from 'react';
import  enzyme, {shallow} from 'enzyme';
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });
import Search from '../../src/components/search';

test('Search - render should return a form with 2 inputs and a label', () => {
  // Render a checkbox with label in the document
  const form = shallow(<Search />);

  const inputs = form.find('input');

  expect(inputs.length).toEqual(2);
});
