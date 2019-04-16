/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST} from "./constants";

import {fromJS} from "immutable";

const  defaultState = fromJS({
	focused: false,
	list:[],
});

export default (state = defaultState, action) => {
	if (action.type === SEARCH_FOCUS) {
		// immutable 对象的 set 方法，会结合之前immutable对象的值
		// 和设置的值，会返回一个全新的对象
		return state.set('focused', true)
	}
	if (action.type === SEARCH_BLUR) {
		return state.set('focused', false);
	}
	if (action.type === CHANGE_LIST) {
		return state.set('list',action.data);
	}
	return state;
}