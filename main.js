function openLightbox(imgSrc) {
    document.getElementById("theLightbox").style.display = "block";
    sourceImg = document.createElement("img");

    sourceImg.src = imgSrc;

    lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.appendChild(sourceImg);
}

function closeLightbox() {
    document.getElementById("theLightbox").style.display = "none";
    document.getElementById("lightbox-img").replaceChildren();
}