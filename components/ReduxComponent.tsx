import * as React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => (state.value += 1),
    decrement: (state) => (state.value -= 1),
  },
});
const { incremented, decrement } = counterSlice.actions;
// store
const store = configureStore({
  reducer: counterSlice.reducer,
});

const ReduxComponent: React.FC = () => {
  store.subscribe(() => console.log(store.getState()));

  // store.dispatch(incremented());

  return (
    <div>
      <div>{store.getState().value}</div>
      <button onClick={() => {}}>incremennt</button>
      <button> decrement</button>
    </div>
  );
};

export default ReduxComponent;
