import{S as f,i as g}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="42545240-8b0483885ebe28877133c0801",p="https://pixabay.com/api/";function y(o){const r=`${p}?key=${d}&q=${o}`;return fetch(r).then(i=>{if(!i.ok)throw new Error("IMG error");return i.json()})}function h(o){return o.hits.map(({webformatURL:r,tags:i,largeImageURL:s,likes:e,views:t,comments:n,downloads:m})=>` <li>
        <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${r}" 
        alt="${i}"
        data-source="${s}">
        <div class="image-info">
                            <ul class="image-info-list">
                                <li class="image-item">
                                    <h2 class="image-text">Likes</h2>
                                    <p class="image-quantity">${e}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Views</h2>
                                    <p class="image-quantity">${t}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Comments</h2>
                                    <p class="image-quantity">${n}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Downloads</h2>
                                    <p class="image-quantity">${m}</p>
                                </li>
                            </ul>
                        </div>
      </li>`).join("")}function b(){return new f(".gallery-link",{captionsData:"alt",captionDelay:250})}const l=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");let u;l.addEventListener("submit",L);function L(o){o.preventDefault(),c.innerHTML="";const r=l.elements.search.value;a.style.display="block",y(r).then(i=>{i.hits.length===0?setTimeout(()=>{g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"}),a.style.display="none"},1e3):setTimeout(()=>{const s=h(i);c.innerHTML=s,a.style.display="none",u=b(),u.refresh(),l.reset()},1e3)}).catch(i=>{console.error("Fetch error:",i)})}
//# sourceMappingURL=commonHelpers.js.map
