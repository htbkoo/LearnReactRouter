import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

describe('<App/>', function () {
    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
