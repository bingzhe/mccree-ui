import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from "../index";
import { mount } from 'enzyme';

describe('icon', () => {
    it('render alipay icon.', () => {
        const json = renderer.create(<Icon name="alipay" />).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('render wechat icon.', () => {
        const json = renderer.create(<Icon name="wechat" />).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('onClick', () => {
        const fn = jest.fn();
        const component = mount(<Icon name="alipay" onClick={fn} />);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    });
});