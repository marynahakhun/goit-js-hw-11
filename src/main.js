import { pixabayApi } from './js/pixabay-api.js';
import { renderImages, initializeLightbox } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
let lightbox;

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    const value = form.elements['search'].value;
    loader.style.display = "block"; 

    pixabayApi(value)
        .then(data => {
            if (data.hits.length === 0) {
                setTimeout(() => {
                    iziToast.error({
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        messageColor: '#FFFFFF',
                        backgroundColor: '#B51B1B',
                        position: 'center',
                    });
                    loader.style.display = "none";
                }, 1000);
                
                 
            } else {
                setTimeout(() => {
                    const imagesHTML = renderImages(data);
                gallery.innerHTML= imagesHTML;
                loader.style.display = "none"; 
                lightbox = initializeLightbox();
                lightbox.refresh();
                form.reset(); 
                }, 1000);
               
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        })
}
