import React from 'react';
import { createRoot } from 'react-dom/client';
import PhotoAlbum from 'react-photo-album';
import './main.css';

const photos = [
  {
    src: '/IMG_5787 copy.JPG',
    width: 1200,
    height: 800,
    alt: 'Photo 1',
  },
  {
    src: '/Keenland Jockey copy.jpg',
    width: 1200,
    height: 800,
    alt: 'Photo 2',
  },
  {
    src: '/Rafting Trip copy.jpg',
    width: 1200,
    height: 800,
    alt: 'Photo 3',
  },
  {
    src: '/reflection copy.jpg',
    width: 1200,
    height: 800,
    alt: 'Photo 4',
  },
];

function App() {
  return (
    <main className="page">
      <h1>Welcome to Jeff's Website</h1>
      <p>Browse a few favorite moments from this React-powered gallery.</p>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        sizes={{
          size: '1168px',
          sizes: [
            {
              viewport: '(max-width: 1200px)',
              size: 'calc(100vw - 32px)',
            },
          ],
        }}
      />
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
