function changeImage() {
    var image = document.getElementById('imgClickAndChange');
    if (image.src.match("1")) {
        image.src = "Cpic/2.jpg";
    }else {
        image.src = "Cpic/1.jpg";
    }
}