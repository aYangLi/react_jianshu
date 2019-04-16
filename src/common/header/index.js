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
import { connect } from "react-redux";
import { actionCreators } from './store';
import {
	HeaderWrap,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition  ,
	Buttion,
	SearchWrap,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
} from './style';

import { CSSTransition } from 'react-transition-group';



class Header extends Component{
	getListArea () {
		if (this.props.focused) {
			return (<SearchInfo>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch>
						换一拼
					</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{
						this.props.list.map( (item,index) => {
							return <SearchInfoItem key={index}>
								{item}
							</SearchInfoItem>
						})
					}

				</SearchInfoList>
			</SearchInfo>)
		} else {
			return null
		}
	}

	render() {
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
							in={this.props.focused}
							timeout={200}
							classNames = 'slide'
						>
							<NavSearch
								className = {this.props.focused ?'focused':''}
								onFocus = {this.props.handleInputFocus}
								onBlur = {this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className= {this.props.focused ?'focused iconfont':'iconfont'}>&#xe699;</span>
						{this.getListArea()}
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


const mapStateToProps = (state) => {
	return {
		focused : state.getIn(['header','focused']),
		list:state.getIn(['header','list']),
		// focused: state.get('header').get('focused')
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus () {
			dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur () {
			dispatch(actionCreators.searchBlur())
		}
	}
};

export default connect(mapStateToProps ,mapDispatchToProps)(Header);