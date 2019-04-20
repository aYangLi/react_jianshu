/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import { CHANGE_DETAIL,} from "./constants";
import axios from 'axios';

const chageDetail = (title,content) => ({
	type : CHANGE_DETAIL,
	title,
	content,
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id='+id).then(res => {
			let {title,content} = res.data.data;
			dispatch(chageDetail(title,content));
		})
	}
};
