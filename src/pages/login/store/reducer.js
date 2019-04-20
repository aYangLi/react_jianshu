/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-20
 */
import {CHANGE_LOGIN,CHANGE_LOGOUT} from "./constants";

import {fromJS} from "immutable";

const  defaultState = fromJS({
	login: false,
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_LOGIN:
			return state.set('login',action.login);
		case CHANGE_LOGOUT:
			return state.set('login',false);
		default:
			return state;
	}
}