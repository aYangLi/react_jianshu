/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-17
 */
import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";

class Login extends PureComponent {
	render() {
		const {loginStatus} = this.props;
		if (loginStatus) {
			return (
				<div>write</div>
			)
		} else {
			return <Redirect to='/login'/>
		}
	}
}

const  mapState = state => ({
	loginStatus: state.getIn(['login','login']),
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Login);