/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-17
 */
import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {TopicWrapper,TopicItem} from "../tyle";

class Topic extends  PureComponent {
	render() {
		let {list} = this.props;
		return (
			<TopicWrapper>
				{
					list.map( item => (
						<TopicItem key={item.get('id')}>
							<img alt='图片' className='topic-pic' src={item.get('url')}/>
							{item.get('title')}
						</TopicItem>
					))
				}
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','topList']),
});

export default connect(mapState, null)(Topic);