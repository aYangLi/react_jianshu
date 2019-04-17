/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import {} from "./constants";

import {fromJS} from "immutable";

const  defaultState = fromJS({
	topList:[{
		id:1,
		title:'社会热点',
		url:'https://upload-images.jianshu.io/upload_images/1929704-8ca2a1706fb55ecc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32',
	},{
		id:2,
		title:'手绘',
		url:'https://upload-images.jianshu.io/upload_images/1929704-8ca2a1706fb55ecc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32',
	}],
	articleList:[
		{
			id:1,
			title:'从贫民窟女孩到哈佛高材生，她用逆袭告诉我们奋斗的意义！',
			desc:'本文原创，转载请联系 / 最近网上的一段言论火了： 在某档节目中，有位人事经理爆出了招聘的潜规则：“因为收到的简历多、时间紧，所以大企业筛选简历艾薇儿发斯蒂芬',
			imgUrl:'https://upload-images.jianshu.io/upload_images/1217754-63116fe134d1de9d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
		},
		{
			id:2,
			title:'从贫民窟女孩到哈佛高材生，她用逆袭告诉我们奋斗的意义！',
			desc:'本文原创，转载请联系 / 最近网上的一段言论火了： 在某档节目中，有位人事经理爆出了招聘的潜规则：“因为收到的简历多、时间紧，所以大企业筛选简历艾薇儿发斯蒂芬',
			imgUrl:'https://upload-images.jianshu.io/upload_images/1217754-63116fe134d1de9d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
		},
		{
			id:3,
			title:'从贫民窟女孩到哈佛高材生，她用逆袭告诉我们奋斗的意义！',
			desc:'本文原创，转载请联系 / 最近网上的一段言论火了： 在某档节目中，有位人事经理爆出了招聘的潜规则：“因为收到的简历多、时间紧，所以大企业筛选简历艾薇儿发斯蒂芬',
			imgUrl:'https://upload-images.jianshu.io/upload_images/1217754-63116fe134d1de9d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
		},
		{
			id:4,
			title:'从贫民窟女孩到哈佛高材生，她用逆袭告诉我们奋斗的意义！',
			desc:'本文原创，转载请联系 / 最近网上的一段言论火了： 在某档节目中，有位人事经理爆出了招聘的潜规则：“因为收到的简历多、时间紧，所以大企业筛选简历艾薇儿发斯蒂芬',
			imgUrl:'https://upload-images.jianshu.io/upload_images/1217754-63116fe134d1de9d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
		},
	]
});

export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}