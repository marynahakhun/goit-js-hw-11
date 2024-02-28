import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(data) {
    return data.hits.map(({webformatURL, tags, largeImageURL, likes, views, comments, downloads})=>{
        return ` <li>
        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" 
        alt="${tags}"
        data-source="${largeImageURL}">
        <div class="image-info">
                            <ul class="image-info-list">
                                <li class="image-item">
                                    <h2 class="image-text">Likes</h2>
                                    <p class="image-quantity">${likes}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Views</h2>
                                    <p class="image-quantity">${views}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Comments</h2>
                                    <p class="image-quantity">${comments}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Downloads</h2>
                                    <p class="image-quantity">${downloads}</p>
                                </li>
                            </ul>
                        </div>
      </li>`;
    }).join("");
}

export function initializeLightbox() {
    return new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}
