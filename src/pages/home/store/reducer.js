/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import {CHANGE_HOME_DATA,ADD_HOME_LIST} from "./constants";

import {fromJS} from "immutable";

const  defaultState = fromJS({
	topList:[],
	articleList:[],
	recommendList:[],
	articlePage:1,
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_HOME_DATA:
			return state.merge({
				topList:fromJS(action.topList),
				articleList:fromJS(action.articleList),
				recommendList:fromJS(action.recommendList),
			});
		case ADD_HOME_LIST:
			return state.merge({
				articleList:state.get('articleList').concat(fromJS(action.articleList)),
				articlePage:action.nextPage,
			});
		default:
			return state;
	}
}