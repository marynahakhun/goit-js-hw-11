import{S as f,i as c}from"./assets/vendor-7659544d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="42545240-8b0483885ebe28877133c0801",d="https://pixabay.com/api/";function y(o){const i=`${d}?key=${p}&q=${o}`;return fetch(i).then(r=>{if(!r.ok)throw new Error("IMG error");return r.json()})}function h(o){return o.hits.map(({webformatURL:i,tags:r,largeImageURL:s,likes:e,views:t,comments:n,downloads:g})=>` <li>
        <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${i}" 
        alt="${r}"
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
                                    <p class="image-quantity">${g}</p>
                                </li>
                            </ul>
                        </div>
      </li>`).join("")}function b(){return new f(".gallery-link",{captionsData:"alt",captionDelay:250})}const a=document.querySelector(".form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");let m;a.addEventListener("submit",F);function F(o){o.preventDefault(),u.innerHTML="";const i=a.elements.search.value;l.style.display="block",y(i).then(r=>{if(r.hits.length===0)c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"}),l.style.display="none",a.reset();else if(!i.trim())c.error({message:"Заповніть це поле!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}),l.style.display="none";else{const s=h(r);u.innerHTML=s,l.style.display="none",m=b(),m.refresh(),a.reset()}}).catch(r=>{console.error("Fetch error:",r)})}
//# sourceMappingURL=commonHelpers.js.map
