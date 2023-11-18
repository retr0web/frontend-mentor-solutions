const shareIcon = document.querySelector('.svg-container');
const shareLinks = document.querySelector('.social-media');
shareLinks.style.opacity = "0";
shareLinks.style.pointerEvents = "none";

function handleShare() {
    shareLinks.style.opacity = shareLinks.style.opacity == "0" ? "1" : "0";
    shareLinks.style.pointerEvents = shareLinks.style.pointerEvents == "none" ? "all" : "none";
    shareIcon.classList.toggle("mobile-share");
}

shareIcon.addEventListener('click', handleShare);