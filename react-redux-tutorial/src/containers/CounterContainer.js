import React from 'react';
import { connect } from 'react-redux'; //컴포넌트를 리덕스와 연동하기 위해 connect를 사용해야 한다.
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// //리덕스 store 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// //state를 파라미터로 받아오며, 이 값은 현재 store가 지니고 있는 상태를 가리킨다.
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// //action생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
// //store의 내장 함수 dispatch를 파라미터로 받아온다.
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     console.log('increase');
//   },
//   decrease: () => {
//     console.log('decrease');
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
