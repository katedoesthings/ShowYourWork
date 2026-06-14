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

function openSection(openSectionId)
{
    var allElements = document.querySelectorAll('[id]');

    allElements.forEach((section) =>{
        section.style.display = "none";
    });

    document.getElementById(openSectionId).style.display = "block";
}