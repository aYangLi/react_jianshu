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
import axios from 'axios';
import {fromJS} from "immutable";

export const searchFocus = () => ({
	type: SEARCH_FOCUS,
});

export const searchBlur = () => ({
	type: SEARCH_BLUR,
});

const changeList = (data) => ({
	type: CHANGE_LIST,
	data:fromJS(data),
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