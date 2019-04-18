/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import { CHANGE_HOME_DATA,ADD_HOME_LIST ,TOGGLE_SCROLL_TOP} from "./constants";
import axios from 'axios';

const changeHomeData = result => ({
	type : CHANGE_HOME_DATA,
	topList : result.topList,
	articleList: result.articleList,
	recommendList: result.recommendList,
});

const addHomeList = (list,page) => ({
	type: ADD_HOME_LIST,
	articleList: list,
	nextPage:page +1,
});

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then( res => {
			let result = res.data.data;
			const action = changeHomeData(result);
			dispatch(action)
		})
	}
};

export const getMoreList = (page) => {
	return dispatch => {
		axios.get(`/api/homeList.json?page=${page}`).then( res => {
			let result = res.data.data;
			const action = addHomeList(result,page);
			dispatch(action);
		})
	}
};

export const toggleTopShow = (flag) => ({
	type: TOGGLE_SCROLL_TOP,
	flag,
});

