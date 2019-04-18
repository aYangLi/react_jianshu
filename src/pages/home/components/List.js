/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-17
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {actionCreators} from '../store';

import {ListItem , ListInfo, LoadMore} from "../tyle";

class List extends  Component {
	render() {
		const {list,page} = this.props;
		return (
			<div>
				{list.map( (item,index) => {
					return (
						<ListItem key={index}>
							<img
								className='list-pic'
								src={item.get('imgUrl')}
								alt='图片'
							/>
							<ListInfo>
								<h3 className='title'>{item.get('title')}</h3>
								<p className='desc'>{item.get('desc')}</p>
							</ListInfo>
						</ListItem>
					)
				})}
				<LoadMore onClick={() => {this.props.getMoreList(page)}}>加载更多</LoadMore>
			</div>
		)
	}
}
const mapState = (state) => ({
	list: state.getIn(['home','articleList']),
	page: state.getIn(['home','articlePage'])
});

const mapDispatch = dispatch => ({
	getMoreList (page) {
		dispatch(actionCreators.getMoreList(page))
	}
});

export default connect(mapState, mapDispatch)(List);