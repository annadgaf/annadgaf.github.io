document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const img = item.querySelector('img');
    const video = item.querySelector('video');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');

    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.style.display = 'block';
      lightboxVideo.style.display = 'none';
    } else if (video) {
      // Clone the video element to reset its state
      const newVideo = video.cloneNode(true);
      newVideo.controls = true;
      newVideo.autoplay = true;
      newVideo.style.maxWidth = '100%';
      newVideo.style.maxHeight = '100%';
      newVideo.style.borderRadius = '10px';

      lightboxImg.style.display = 'none';
      lightboxVideo.replaceWith(newVideo);
      newVideo.id = 'lightbox-video'; // Maintain the ID for future access
    }

    lightbox.style.display = 'flex';
  });
});

// Close the lightbox and stop video playback
document.querySelector('.lightbox .close').addEventListener('click', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');

  lightboxImg.src = '';
  lightboxImg.style.display = 'none';

  // Stop video by replacing it with a fresh node
  const newVideo = lightboxVideo.cloneNode(false);
  newVideo.id = 'lightbox-video';
  newVideo.controls = true;
  lightboxVideo.replaceWith(newVideo);

  lightbox.style.display = 'none';
});