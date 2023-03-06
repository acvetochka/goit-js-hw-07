import { galleryItems } from "./gallery-items.js";
// Change code below this line

//create items of img
function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

//add items of img to HTML
const gallery = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", items);

// console.log(createGalleryItem(galleryItems));

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const isImgClick = event.target.classList.contains("gallery__image");
  if (!isImgClick) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });

  document.removeEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });

  instance.show();
}

console.log(galleryItems);
