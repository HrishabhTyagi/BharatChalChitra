// src/redux/videosSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Video } from '../types';

export const fetchVideos = createAsyncThunk<Video[]>('videos/fetchVideos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return response.data as Video[];
});

interface VideosState {
  data: Video[];
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
      .addCase(fetchVideos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch videos';
      });
  },
});

export const selectVideos = (state: { videos: VideosState }) => state.videos;

export default videosSlice.reducer;
