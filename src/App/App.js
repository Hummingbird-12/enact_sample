import kind from '@enact/core/kind';
import React from 'react';

import css from './App.less';

import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

const AppBase = kind({
    name: 'App',

    styles: {
        css,
        className: 'app'
    },

    render: function (props) {
        return (
            <div className={props.className}>
	            Hello, Enact!
		    </div>
        );
    }
});

const App = MoonstoneDecorator(AppBase);
export default App;
export {App};
