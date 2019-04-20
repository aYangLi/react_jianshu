/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import { CHANGE_LOGIN,CHANGE_LOGOUT} from "./constants";
import axios from 'axios';

const changeLogin = (login) => ({
	type : CHANGE_LOGIN,
	login,
});

export const logout =  () => ({
	type : CHANGE_LOGOUT,
});

export const login = (account,password) => {
	return (dispatch) => {
		axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin(result));
			} else {
				alert('登录失败');
			}
		})
	}
};

