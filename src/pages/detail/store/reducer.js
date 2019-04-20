/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-20
 */
import {CHANGE_DETAIL,} from "./constants";

import {fromJS} from "immutable";

const  defaultState = fromJS({
	title:'',
	content:'',
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_DETAIL:
			return state.merge({
				title:action.title,
				content:action.content,
			});
		default:
			return state;
	}
}