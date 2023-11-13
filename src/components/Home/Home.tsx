import React from 'react';
import './Home.css';

const Home = () => {
  const visibleLinks = 15; // Display all the video links

  return (
    <div>
      <div id="videoGrid" className="video-grid">
        {[...Array(visibleLinks)].map((_, index) => (
          <div key={index} className="videoLink">
            {/* Replace the following with your actual video link data */}
            <img
              src={`https://via.placeholder.com/150?text=Thumbnail${index + 1}`}
              alt={`Thumbnail${index + 1}`}
              className="videoThumbnail"
            />
            <a href={`#video${index + 1}`}>Video {index + 1}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
