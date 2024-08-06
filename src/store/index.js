import { configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './warehouseSlice';

export const store = configureStore({
  reducer: {
    warehouse: warehouseReducer,
  },
});


export default store;
 