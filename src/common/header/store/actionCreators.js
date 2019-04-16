/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from "./constants";
import axios from 'axios';
import {fromJS} from "immutable";

const changeList = (data) => ({
	type: CHANGE_LIST,
	data:fromJS(data),
	totalPage: Math.ceil(data.length/5),
});

export const searchFocus = () => ({
	type: SEARCH_FOCUS,
});

export const searchBlur = () => ({
	type: SEARCH_BLUR,
});

export const mouseEnter = () => ({
	type: MOUSE_ENTER,
});

export const mouseLeave = () => ({
	type: MOUSE_LEAVE,
});

export const changePage = page => ({
	type: CHANGE_PAGE,
	page,
});

export const  getList = () => {
	return ( dispatch ) => {
		// alert('1')
		axios.get('/api/headerList.json').then(res => {
			// alert(res);
			const data = res.data.data;
			dispatch(changeList(data));
		})
	}
}