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
import { HeaderWrap, Logo, Nav, NavItem, NavSearch, Addition  ,Buttion} from './style';

class Header extends Component {
	render() {
		return  (
			<HeaderWrap>
				<Logo></Logo>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登录</NavItem>
					<NavItem className='right'>Aa</NavItem>
					<NavSearch></NavSearch>
				</Nav>
				<Addition>
					<Buttion className='writing'>写文章</Buttion>
					<Buttion className='reg'>注册</Buttion>
				</Addition>
			</HeaderWrap>
		)
	}
}

export default Header;