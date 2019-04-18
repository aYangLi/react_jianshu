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
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from "./tyle";
import {connect} from "react-redux";
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import {actionCreators} from './store'




class Home extends  PureComponent {

	handleScrollTop () {
		window.scrollTo(0,0);
	}

	render() {
		let {showScroll} = this.props;
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src="https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/625/h/270" alt=""/>
					<Topic/>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Writer/>
				</HomeRight>
				{
					showScroll?<BackTop onClick={this.handleScrollTop}>回顶</BackTop>:null
				}

			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}

	bindEvents () {
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}
}

const mapState = state => ({
	showScroll: state.getIn(['home','showScroll']),
});

const mapDispatchToProps = dispatch => ({
	changeHomeData () {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow () {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true));
		} else {
			dispatch(actionCreators.toggleTopShow(false));
		}
	}
});

export default connect(mapState,mapDispatchToProps)(Home);