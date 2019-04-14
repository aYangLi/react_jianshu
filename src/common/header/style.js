/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-14
 */

import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrap = styled.header`
	position:relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/'
})`
	position:absolute;
	left:	0;
	right: 0;
	display: block;
	height: 56px;
	width: 100px;
	background: url(${logoPic}) no-repeat center;
	background-size: contain;
`;

export const Nav = styled.nav`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	background: blue;
`;