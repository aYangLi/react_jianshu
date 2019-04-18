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
import {RecommendItem,RecommendWrap} from "../tyle";

class Recommend extends  PureComponent {
	render() {
		let {list} = this.props;
		return (
			<RecommendWrap>
				{
					list.map( item => {
						return (
							<RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
						)
					})
				}
			</RecommendWrap>
		)
	}
}

const mapState = state => ({
	list: state.getIn(['home','recommendList'])
});

export default connect(mapState,null)(Recommend);