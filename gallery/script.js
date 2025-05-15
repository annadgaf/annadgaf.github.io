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
      lightboxVideo.src = video.src;
      lightboxVideo.style.display = 'block';
      lightboxImg.style.display = 'none';
    }

    lightbox.style.display = 'flex';
  });
});

document.querySelector('.lightbox .close').addEventListener('click', () => {
  const lightbox = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = '';
  document.getElementById('lightbox-video').src = '';
  lightbox.style.display = 'none';
});