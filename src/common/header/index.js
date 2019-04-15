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

class Header extends Component {
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
						<NavSearch></NavSearch>
						<span className="iconfont">&#xe699;</span>
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
}

export default Header;