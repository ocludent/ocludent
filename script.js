function switchImg(id, img1, img2, img3, img4, img5) {
  var img = document.getElementById(id);

  if (img.src.endsWith(img1)) {
    img.src = img2;
  } else if (img.src.endsWith(img2) && img3 != "") {
    img.src = img3;
  } else if (img.src.endsWith(img3) && img4 != "") {
    img.src = img4;
  } else if (img.src.endsWith(img4) && img5 != "") {
    img.src = img5;
  } else if (img.src.endsWith(img5)) {
    img.src = img1;
  } else {
    img.src = img1;
  }
}
