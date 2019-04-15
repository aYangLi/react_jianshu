/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import {SEARCH_FOCUS, SEARCH_BLUR} from "./constants";

export const searchFocus = () => ({
	type: SEARCH_FOCUS,
});

export const searchBlur = () => ({
	type: SEARCH_BLUR,
});