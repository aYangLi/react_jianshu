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
	box-sizing: border-box;
	padding-right: 70px;
	margin: 0 auto;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 20px;
	margin-top: 9px;
	box-sizing: border-box;
	background: #eee;
	border: none;
	outline: none;
	font-size: 14px;
	border-radius: 19px;
	&::placeholder {
	 color: #999;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Buttion = styled.div`
	float:right;
	line-height: 38px;
	margin-top: 9px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	margin-right: 20px;
	padding: 0 20px;
	font-size: 14px;
	&.reg{
		color: #ec6149;
	}
	&.writing {
		color: #fff;
		background: #ec6149;
	} 
`;