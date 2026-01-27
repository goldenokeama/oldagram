(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const p=document.getElementById("main");let a=[{name:"Vincent van Gogh",username:"vincey1853",location:"Zundert, Netherlands",avatar:"images/avatar-vangogh.jpg",post:"images/post-vangogh.jpg",comment:"just took a few mushrooms lol",likes:21},{name:"Gustave Courbet",username:"gus1819",location:"Ornans, France",avatar:"images/avatar-courbet.jpg",post:"images/post-courbet.jpg",comment:"i'm feelin a bit stressed tbh",likes:4},{name:"Joseph Ducreux",username:"jd1735",location:"Paris, France",avatar:"images/avatar-ducreux.jpg",post:"images/post-ducreux.jpg",comment:"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",likes:152}];function f(){let i="";for(let t=0;t<a.length;t++){const{name:o,username:c,location:e,avatar:n,post:l,comment:u,likes:g}=a[t];i+=`
        <section class="post-content">
            <div class="profile">
                <img
                    class="profile-img"
                    src="${n}"
                    alt="an avatar of ${o}"
                 />
    
                <div>
                    <h1 class="user-full-name">${o}</h1>
                    <p class="user-location">${e}</p>
                </div>
            </div>
          
            <img
                src="${l}"
                alt="a painted selfie of ${o}"
                class="post-img"
                id="post-img-${t}"
            />
          
            <div class="post-body">
                <div class="icons">
                    <img
                        src="images/icon-heart.png"
                        alt="a heart shaped icon, used for liking the post"
                        class="like-icon"
                        id="like-icon-${t}"
                    />
                    <img
                        src="images/icon-heart-filled.png"
                        alt="a heart shaped icon, used for liking the post"
                        class="like-icon filled"
                        id="like-icon-filled-${t}"
                    />
              
                    <img
                        src="images/icon-comment.png"
                        alt="a comment icon, used for commenting on the post"
                        class="comment-icon"
                    />

                    <img
                        src="images/icon-dm.png"
                        alt="a share icon, used for sharing the post"
                        class="share-icon"
                    />

                </div>
                
                <p class="like-count" id="like-count">
                    <span id="number-of-likes-${t}">${g}</span> likes
                </p>
                
                <p class="username-caption">
                    <strong>${c}</strong> ${u}
                </p>
            </div>
        </section>
    `}p.innerHTML=i}f();const k=document.getElementById("post-img-0"),h=document.getElementById("post-img-1"),y=document.getElementById("post-img-2"),v=document.getElementById("like-icon-0"),E=document.getElementById("like-icon-1"),L=document.getElementById("like-icon-2"),r=document.getElementById("like-icon-filled-0"),d=document.getElementById("like-icon-filled-1"),m=document.getElementById("like-icon-filled-2");r.style.display="none";d.style.display="none";m.style.display="none";k.addEventListener("dblclick",s);h.addEventListener("dblclick",s);y.addEventListener("dblclick",s);v.addEventListener("click",s);E.addEventListener("click",s);L.addEventListener("click",s);r.addEventListener("click",s);d.addEventListener("click",s);m.addEventListener("click",s);function s(i){const t=b(i),o=document.getElementById(`number-of-likes-${t}`),c=Number(o.innerText);o.innerText=c+1,I(t)}function I(i){document.getElementById(`like-icon-${i}`).style.display="none",document.getElementById(`like-icon-filled-${i}`).style.display="inline"}function b(i){const{target:t}=i;return Number(t.id.split("-").pop())}
