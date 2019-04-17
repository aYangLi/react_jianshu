/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import { CHANGE_LIST,} from "./constants";
import axios from 'axios';
import {fromJS} from "immutable";

const changeList = (data) => ({
	type: CHANGE_LIST,
	data:fromJS(data),
	totalPage: Math.ceil(data.length/5),
});

