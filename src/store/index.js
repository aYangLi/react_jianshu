/**
 * @Desc:
 * @Usage:
 * @Notify:
 * @depend:
 *
 *
 * Created by aYang on 2019-04-15
 */
import {createStore} from "redux";
import reducer from './reducer';

const store = createStore(reducer);

export default store;