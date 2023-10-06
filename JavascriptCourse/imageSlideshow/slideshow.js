var images = [
  "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
  "https://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-1.jpg",
  "https://webneel.com/daily/sites/default/files/images/daily/04-2013/3-predator-prey-bird-photography-by-ibrahim-canakci.jpg",
  "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
];

var slideImage = document.getElementById("slideImage");

var count = 0;
//
var slideshowTimer = setInterval(function () {
  count++;
  if (count > images.length - 1) {
    count = 0;
  }
  slideImage.setAttribute("src", images[count]);
}, 5000);

setTimeout(function () {
  clearInterval(slideshowTimer);
}, 20000);
