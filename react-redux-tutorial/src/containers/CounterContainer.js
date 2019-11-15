import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
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

export default React.memo(CounterContainer);

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
