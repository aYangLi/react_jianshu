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
});

export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}