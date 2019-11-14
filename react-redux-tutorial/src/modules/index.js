import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

/*
리듀서가 여러개 있고 나중에 createStore 함수를 사용하여 스토어를 만들 떄는 리듀서를 하나만 사용해야 한다.
그렇기 때문에 기존에 만들었던 리듀서를 하나로 합쳐주어야 하는데 이는 redux에서 제공하는 combineReducers라는 유틸 함수를 사용하여 처리한다.
*/
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
