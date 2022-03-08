import React from 'react';
import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

/** Enzyme is more user-featured, friendly API**/

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    //expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Expensify');
    /*const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();*/
});