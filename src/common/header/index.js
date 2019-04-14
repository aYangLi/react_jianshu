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
import { HeaderWrap, Logo, Nav } from './style';

class Header extends Component {
	render() {
		return  (
			<HeaderWrap>
				<Logo></Logo>
				<Nav></Nav>
			</HeaderWrap>
		)
	}
}

export default Header;