/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-14
 */

import React, {PureComponent} from 'react';
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



class Header extends PureComponent{
	getListArea () {
		const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave,changePage} = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (!newList.length) return ;
		for (let i = (page -1) * 5; i < page * 5; i++) {
			if (!newList[i]) break;
			pageList.push(
				<SearchInfoItem key={newList[i]}>
					{newList[i]}
				</SearchInfoItem>
			)
		}
		if (focused || mouseIn) {
			return (<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch onClick={ () => {changePage(page,totalPage,this.spinIcon)}}>
						<span ref={ icon => { this.spinIcon = icon}} className='iconfont spin'>&#xe746;</span>
						换一拼
					</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{pageList}
				</SearchInfoList>
			</SearchInfo>)
		} else {
			return null
		}
	}

	render() {
		const {focused, handleInputFocus, handleInputBlur, list} = this.props;
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
							in={focused}
							timeout={200}
							classNames = 'slide'
						>
							<NavSearch
								className = {focused ?'focused':''}
								onFocus = {() => {handleInputFocus(list)}}
								onBlur = {handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className= {focused ?'focused iconfont zoom':'iconfont zoom'}>&#xe699;</span>
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
		totalPage:state.getIn(['header','totalPage']),
		page:state.getIn(['header','page']),
		mouseIn:state.getIn(['header','mouseIn']),
		// focused: state.get('header').get('focused')
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus (list) {
			(list.size) || dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur () {
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter () {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave () {
			dispatch(actionCreators.mouseLeave());
		},
		changePage (page, totalPage,spinIcon) {
			let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0
			}
			spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page +1))
			} else {
				dispatch(actionCreators.changePage(1))
			}
		},
	}
};

export default connect(mapStateToProps ,mapDispatchToProps)(Header);