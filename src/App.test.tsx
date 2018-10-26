import {mount} from 'enzyme';
import * as React from 'react';
import {MemoryRouter} from "react-router";

import App from './App';
import NavBar from "./NavBar";

describe('<App/>', function () {
    it('should test react-router', function () {
        // given
        // when
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <App/>
            </MemoryRouter>
        );

        // then
        expect(wrapper.find(NavBar)).toHaveLength(1);
    });
});
