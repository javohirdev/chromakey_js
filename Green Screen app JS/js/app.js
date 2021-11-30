var imgFG = null;
var imgBG = null;
  
// Bu funksiya old (green elementli) rasmni inputdan oladi
function frontImg() {
    var fileInput = document.getElementById("fgFile");
    var canvas = document.getElementById("img1");
    imgFG = new SimpleImage(fileInput);
    imgFG.drawTo(canvas);
}
  
// Bu funksiya orqa rasm oladi
function backImg() {
    var fileInput = document.getElementById("bgFile");
    var canvas = document.getElementById("img2");
    imgBG = new SimpleImage(fileInput);
    imgBG.drawTo(canvas);
}
  
// Biz ulagan kutubxonaning qisqa algoritmi
function resultImg() {
    clear();
    var img = document.getElementById("img1");
    var outputImage = new SimpleImage(
        imgFG.width, imgFG.height);
  
    for (var pixel of imgFG.values()) {
        if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
            var x = pixel.getX();
            var y = pixel.getY();
            var newPixel = imgBG.getPixel(x, y);
            outputImage.setPixel(x, y, newPixel);
        }
        else {
            outputImage.setPixel(pixel.getX(), pixel.getY(), pixel);
        }
    }
    outputImage.drawTo(img);
}

function clear() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var context = img1.getContext("2d");
    context.clearRect(0, 0, img1.width, img1.height);
    var context = img2.getContext("2d");
    context.clearRect(0, 0, img2.width, img2.height);
}