/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-14
 */

import React from 'react';
import { connect } from "react-redux";
import { actionCreators } from './store';
import { HeaderWrap, Logo, Nav, NavItem, NavSearch, Addition  ,Buttion, SearchWrap} from './style';
import { CSSTransition } from 'react-transition-group';

const Header = props => {
	return (
		<HeaderWrap>
			<Logo></Logo>
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'>
					<span className="iconfont">&#xe636;</span>
				</NavItem>
				<SearchWrap>
					<CSSTransition
						in={props.focused}
						timeout={200}
						classNames = 'slide'
					>
						<NavSearch
							className = {props.focused ?'focused':''}
							onFocus = {props.handleInputFocus}
							onBlur = {props.handleInputBlur}
						></NavSearch>
					</CSSTransition>
					<span className= {props.focused ?'focused iconfont':'iconfont'}>&#xe699;</span>
				</SearchWrap>
			</Nav>
			<Addition>
				<Buttion className='writing'>
					<span className="iconfont">&#xe616;</span>
					写文章
				</Buttion>
				<Buttion className='reg'>注册</Buttion>
			</Addition>
		</HeaderWrap>
	)
}

const mapStateToProps = (state) => {
	return {
		focused : state.getIn(['header','focused']),
		// focused: state.get('header').get('focused')
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus () {
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur () {
			dispatch(actionCreators.searchBlur())
		}
	}
};

export default connect(mapStateToProps ,mapDispatchToProps)(Header);