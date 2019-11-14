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
export const changeInput = input => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = id => ({
  type: TOGGLE,
  id,
});

export const remove = id => ({
  type: REMOVE,
  id,
});

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
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((
          todo, //배열에 변화를 줄 떄는 배열 내장 함수를 사용하여 구현한다
        ) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
