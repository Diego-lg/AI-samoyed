const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
let imageIndexes = [];
for(let i=1; i< 88; i++){
    imageIndexes.push(i);
}

// shuffle the imageIndexes array
for (let i = imageIndexes.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [imageIndexes[i], imageIndexes[j]] = [imageIndexes[j], imageIndexes[i]];
}

function openPopup(img) {
  selectedImage.src = img.src;
  popup.style.display = 'flex';
}

function closePopup() {
  popup.style.display = 'none';
}

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

imageIndexes.forEach(i => {
  const image = document.createElement('img');
  image.src = `/images/1 (1).png`;
  image.alt = `Cover for Episode ${i+1}`;
  image.classList.add('galleryImg');

  // set random top and left positions for each image
  const randomTop = Math.floor(Math.random() * 90);
  const randomLeft = Math.floor(Math.random() * 90);
  image.style.top = `${randomTop}%`;
  image.style.left = `${randomLeft}%`;

  image.addEventListener('click', () => {
    // get the dimensions of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // set the dimensions of the popup to match the window dimensions
    popup.style.width = `${windowWidth}px`;
    popup.style.height = `${windowHeight}px`;
    openPopup(image);
  });
  console.log(imageIndexes);

  gallery.appendChild(image);
});
