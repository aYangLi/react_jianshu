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

export const Logo = styled.div`
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

export const SearchWrap = styled.div`
	position: relative;
	float:left;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		transition: all 0.2s ease-in-out;
		background: #eee;
		&.focused{
			color: #fff;
			background: #777;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	box-sizing: border-box;
	background: #eee;
	border: none;
	outline: none;
	font-size: 14px;
	color: #666;
	border-radius: 19px;
	//transition: all 0.2s ease-in-out;
	&::placeholder {
	 color: #999;
	}
	&.focused{
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width:240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px ;
	padding: 0 20px;
	width: 240px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	background: #fff;
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.div`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin{
		display: inline-block;
		font-size: 12px;
		margin-right: 2px;
		transition: all 0.2s ease-in;
		transform: rotate(0deg);
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const  SearchInfoItem = styled.a`
	display: block;
	float: left;
	margin-right: 10px;
	margin-bottom: 12px;
	font-size: 12px;
	padding: 0 5px;
	line-height: 20px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
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

