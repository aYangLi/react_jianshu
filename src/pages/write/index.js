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
import {
	LoginWrapper,
	LoginBox,
	Input,
	Button,
} from "./style";
import {connect} from "react-redux";
import {actionCreators} from './store';

class Login extends PureComponent {
	render() {
		const {login, loginStatus} = this.props;
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' ref={ (input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={x => this.password = x}/>
						<Button onClick={() => {login(this.account,this.password)}}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		} else {
			return <Redirect to='/'/>
		}
	}
}

const  mapState = state => ({
	loginStatus: state.getIn(['login','login']),
});

const mapDispatch = dispatch => ({
	login:(accountElem, passwordElem) => {
		dispatch(actionCreators.login(accountElem.value,passwordElem.value));
	}
});

export default connect(mapState, mapDispatch)(Login);