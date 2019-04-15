import  React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './style.js';
import {Iconfont} from "./statics/iconfont/iconfont";

ReactDOM.render(<Fragment>
	<GlobalStyle/>
	<Iconfont/>
	<App/>
</Fragment>, document.getElementById('root'));
