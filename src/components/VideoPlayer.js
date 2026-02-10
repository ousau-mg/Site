import React from 'react';

export default function VideoPlayer({ url, isLocal = false }) {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      {isLocal ? (
        <video controls style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <source src={url} type="video/mp4" />
        </video>
      ) : (
        <iframe
          width="560"
          height="315"
          src={url.replace("watch?v=", "embed/")}
          frameBorder="0"
          allowFullScreen
          style={{ borderRadius: '8px' }}
        />
      )}
    </div>
  );
}