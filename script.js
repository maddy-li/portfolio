function rotateImage() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var rotationAngle = (viewportWidth / 105);
    document.getElementById("cherry-blossom").style.transform = "rotate(" + rotationAngle + "deg)";
}

window.addEventListener("resize", rotateImage);
rotateImage();