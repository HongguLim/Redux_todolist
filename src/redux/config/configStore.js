import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";
// config : 구성한다.
// store: 우리가 아는 그 store
// 우리가 아는 그 store를 구성하는 파일

// * 3 STEPS *

// 1. rootReducer를 만든다.
// reducer > state와 action으로 이루어진 store의 구성조각
const rootReducer = combineReducers({
  todos,
});

// 2. store를 만든다.
const store = createStore(rootReducer);

// 3. 내보낸다.
export default store;
