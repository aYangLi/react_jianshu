/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
const  defaultState = {
	focused: false,
};

export default (state = defaultState, action) => {
	if (action.type === 'search_focus') {
		return  {
			focused :true,
		}
	}
	if (action.type === 'search_blur') {
		return  {
			focused :false,
		}
	}
	return state;
}