// src/redux/videosSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HomeVideo } from '../types';
import { fetchHomeVideos } from '../actions/homeActions';

interface VideosState {
  data: HomeVideo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: VideosState = {
  data: [],
  status: 'idle',
  error: null,
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeVideos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchHomeVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchHomeVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch videos';
      });
  },
});

export const selectVideos = (state: { videos: VideosState }) => state.videos;

export default videosSlice.reducer;
