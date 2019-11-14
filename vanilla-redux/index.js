import { createStore } from "redux";

/*store를 만들기 위해 createStore함수 사용
상단에 import { createStore } from 'redux';사용
파라미터에는 reducer함수를 넣어준다.
*/
const store = createStore(reducer);
/*
render함수는 상태가 없데이트될 때마다 호출되며, 리액트의 render함수와는 다르게  이미 html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경해 줍니다.
*/
render();
/*
상태가 바뀔 때마다 render함수가 호출되도록 하려면 store의 내장 함수 subscribe를 사용하여 수행 할 수 있다.
subscribe 함수의 파라미터로는 함수 형태의 값을 전달해 준다.
이렇게 전달된 함수는 추후 action이 발생하여 상태가 업데이트 될 때마다 호출된다.
여기선 subscribe함수를 직접 사용하지만 나중에 리액트에서 리덕스를 사용할 때는 사용할 필요가 없다.
컴포넌트에서 리덕스 상태를 조회하는 과정에서 react-redux라는 라이브러리가 이 작업을 대신 해준다.
*/
store.subscribe(render);

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

divToggle.onClick = () => {
  console.log("why");
  store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
  console.log("won't");
  store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
  console.log("you work");
  store.dispatch(decrease());
};

/*
action 이름 정의
action의 이름은 대문자 문자열 형태이며 고유해야 한다.
*/
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

/*
action 생성 함수 작성
action 객체는 반드시 type값을 가지고 있어야 한다.
그 외에 추후 상태를 업데이트할 때 참고하고자 하는 값은 마음대로 넣을 수 있다.
*/
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

/*
초깃값 설정
초깃값의 형태는 자유
숫자일 수도, 문자열일 수도, 객체일 수도 있다.
*/
const initialState = {
  toggle: false,
  counter: 0
};

/*
reducer 함수 정의
reducer는 변화를 일으키는 함수
함수의 파라미터로는 state와 action값을 받아온다.
*/

//state가 undefined일 떄는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  //action.type에 따라 작업을 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

const render = () => {
  const state = store.getState(); //현재 상태를 불러온다
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};
