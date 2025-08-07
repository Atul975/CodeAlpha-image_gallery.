const images = document.querySelectorAll('.gallery img');
let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById('lightbox-img').src = images[index].src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

function filterGallery(category) {
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  });
}
