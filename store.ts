import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newSlice'

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;