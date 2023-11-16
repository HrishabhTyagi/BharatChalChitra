// src/components/Home.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos, selectVideos } from '../../reducers/videosSlice';
import { AppDispatch, RootState } from '../../store/store';
import './Home.css';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => selectVideos(state));

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="videoGrid" className="video-grid">
      {data.map((video) => (
        <div key={video.id} className="videoLink">
          <a href={video.url}>
            <img
              src={video.thumbnailUrl} alt={video.title}
              className="videoThumbnail"
            />
          </a>
          Video {video.id}
        </div>
      ))}
    </div>
  );
};

export default Home;
