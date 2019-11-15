import { createAction, handleActions } from 'redux-actions';
/*
action 타입을 정의한다.
모듈이름/액션 이름
*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/*
액션 생성 함수
앞 부분에 export를 사용해줘서 추후 이 함수를 다른 파일에서 불러와 사용할 수 있게 한다.
*/
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

/*
초기 상태를 설정한다.
*/
const initialState = {
  number: 0,
};

/*
리듀서 함수 작성
현재 상태를 참조하여 새로운 객체를 생성해서 반환하는 코드를 작성한다.
*/
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
