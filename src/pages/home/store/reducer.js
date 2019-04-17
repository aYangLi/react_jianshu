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
	topList:[],
	articleList:[],
	recommendList:[],
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'change_home_data':
			return state.merge({
				topList:fromJS(action.topList),
				articleList:fromJS(action.articleList),
				recommendList:fromJS(action.recommendList),
			});
		default:
			return state;
	}
}