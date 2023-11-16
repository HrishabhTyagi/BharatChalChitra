// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../reducers/videosSlice';

const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
