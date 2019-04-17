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
import {ListItem , ListInfo} from "../tyle";

class List extends  Component {
	render() {
		const {list} = this.props;
		return (
			<div>
				{list.map( item => {
					return (
						<ListItem key={item.get('id')}>
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
			</div>
		)
	}
}
const mapState = (state) => ({
	list: state.getIn(['home','articleList']),
});

export default connect(mapState, null)(List);