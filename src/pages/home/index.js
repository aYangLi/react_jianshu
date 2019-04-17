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
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from "./tyle";
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';



class Home extends  Component {
	render() {
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
			</HomeWrapper>
		)
	}
}

export default Home;