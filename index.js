const mainElement = document.getElementById("main");

let posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "./images/avatar-vangogh.jpg",
    post: "./images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "./images/avatar-courbet.jpg",
    post: "./images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "./images/avatar-ducreux.jpg",
    post: "./images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function renderPosts() {
  let postsHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const { name, username, location, avatar, post, comment, likes } = posts[i];

    postsHTML += `
        <section class="post-content">
            <div class="profile">
                <img
                    class="profile-img"
                    src="${avatar}"
                    alt="an avatar of ${name}"
                 />
    
                <div>
                    <h1 class="user-full-name">${name}</h1>
                    <p class="user-location">${location}</p>
                </div>
            </div>
          
            <img
                src="${post}"
                alt="a painted selfie of ${name}"
                class="post-img"
                id="post-img-${i}"
            />
          
            <div class="post-body">
                <div class="icons">
                    <img
                        src="./images/icon-heart.png"
                        alt="a heart shaped icon, used for liking the post"
                        class="like-icon"
                        id="like-icon-${i}"
                    />
                    <img
                        src="./images/icon-heart-filled.png"
                        alt="a heart shaped icon, used for liking the post"
                        class="like-icon filled"
                        id="like-icon-filled-${i}"
                    />
              
                    <img
                        src="./images/icon-comment.png"
                        alt="a comment icon, used for commenting on the post"
                        class="comment-icon"
                    />

                    <img
                        src="./images/icon-dm.png"
                        alt="a share icon, used for sharing the post"
                        class="share-icon"
                    />

                </div>
                
                <p class="like-count" id="like-count">
                    <span id="number-of-likes-${i}">${likes}</span> likes
                </p>
                
                <p class="username-caption">
                    <strong>${username}</strong> ${comment}
                </p>
            </div>
        </section>
    `;
  }

  mainElement.innerHTML = postsHTML;
}

renderPosts();

const firstPostImg = document.getElementById("post-img-0");
const secondPostImg = document.getElementById("post-img-1");
const thirdPostImg = document.getElementById("post-img-2");

const firstPostLike = document.getElementById("like-icon-0");
const secondPostLike = document.getElementById("like-icon-1");
const thirdPostLike = document.getElementById("like-icon-2");

const firstPostLikeFilled = document.getElementById("like-icon-filled-0");
const secondPostLikeFilled = document.getElementById("like-icon-filled-1");
const thirdPostLikeFilled = document.getElementById("like-icon-filled-2");

firstPostLikeFilled.style.display = "none";
secondPostLikeFilled.style.display = "none";
thirdPostLikeFilled.style.display = "none";

firstPostImg.addEventListener("dblclick", handleClick);
secondPostImg.addEventListener("dblclick", handleClick);
thirdPostImg.addEventListener("dblclick", handleClick);

firstPostLike.addEventListener("click", handleClick);
secondPostLike.addEventListener("click", handleClick);
thirdPostLike.addEventListener("click", handleClick);

firstPostLikeFilled.addEventListener("click", handleClick);
secondPostLikeFilled.addEventListener("click", handleClick);
thirdPostLikeFilled.addEventListener("click", handleClick);

function handleClick(event) {
  const postId = getIdOfDoubleClickedPost(event);

  const doubleClickedPostLikesElement = document.getElementById(
    `number-of-likes-${postId}`
  );

  const likes = Number(doubleClickedPostLikesElement.innerText);

  doubleClickedPostLikesElement.innerText = likes + 1;

  hideTheClickedPostHeartIcon(postId);
}

function hideTheClickedPostHeartIcon(postId) {
  document.getElementById(`like-icon-${postId}`).style.display = "none";
  document.getElementById(`like-icon-filled-${postId}`).style.display =
    "inline";
}

function getIdOfDoubleClickedPost(event) {
  const { target } = event;
  // e.g target.id = post-img-0
  return Number(target.id.split("-").pop());
}
