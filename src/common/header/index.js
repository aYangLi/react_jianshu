/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-14
 */

import React, {Component} from 'react';
import { HeaderWrap, Logo, Nav, NavItem, NavSearch, Addition  ,Buttion, SearchWrap} from './style';
import { CSSTransition } from 'react-transition-group';
class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			focused: false,
		};
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}

	render() {
		return  (
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
							in={this.state.focused}
							timeout={200}
							classNames = 'slide'
						>
							<NavSearch
								className = {this.state.focused ?'focused':''}
								onFocus = {this.handleInputFocus}
								onBlur = {this.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className= {this.state.focused ?'focused iconfont':'iconfont'}>&#xe699;</span>
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

	handleInputFocus () {
		this.setState({
			focused :true,
		});
	}
	handleInputBlur () {
		this.setState( {
			focused: false,
		})
	}
}

export default Header;