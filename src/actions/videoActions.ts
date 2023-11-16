// src/actions/videoActions.ts
import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Video } from '../types';
export type VideoPayload = Video[];

export const fetchVideos: AsyncThunk<Video[], void, {}> = createAsyncThunk(
  'videos/fetchVideos',
  async () => {
    const api = 'https://jsonplaceholder.typicode.com/photos';
    const response = await axios.get(api);
    return response.data as VideoPayload;
  }
);
