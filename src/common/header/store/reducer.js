/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE,CHANGE_PAGE} from "./constants";

import {fromJS} from "immutable";

const  defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list:[],
	page:1,
	totalPage:1,
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case  SEARCH_FOCUS:
			// immutable 对象的 set 方法，会结合之前immutable对象的值
			// 和设置的值，会返回一个全新的对象
			return state.set('focused', true);
		case SEARCH_BLUR:
			return state.set('focused', false);
		case CHANGE_LIST:
			return state.merge({
				list:action.data,
				totalPage:action.totalPage,
			})
			// state.set('list',action.data).set('totalPage',action.totalPage);
		case MOUSE_ENTER:
			return  state.set('mouseIn',true);
		case MOUSE_LEAVE:
			return  state.set('mouseIn',false);
		case CHANGE_PAGE:
			return  state.set('page',action.page);
		default:
			return state;
	}
}