import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
/*
action 타입 정의
모듈이름/액션이름
*/
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

/*
action생성 함수 만들기
action 생성 함수에서 파라미터가 필요하다.
전달받은 파라미터는 액션 객체 안에 추가 필드로 들어가게 된다.
*/
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
/*
초기상태
*/
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'redux basic',
      done: true,
    },
    {
      id: 2,
      text: 'redux with react',
      done: false,
    },
  ],
};

/*
리듀서 함수
객체에 한 개 이상의 값이 들어가므로 불변성을 유지해줘야 한다.
*/
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
