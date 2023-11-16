// src/actions/videoActions.ts
import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HomeVideo } from '../types';
export type HomeVideoPayload = HomeVideo[];

export const fetchHomeVideos: AsyncThunk<HomeVideo[], void, {}> = createAsyncThunk(
  'videos/fetchVideos',
  async () => {
    const api = 'https://jsonplaceholder.typicode.com/photos';
    const response = await axios.get(api);
    return response.data as HomeVideoPayload;
  }
);
