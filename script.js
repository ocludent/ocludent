function switchImg(acc, id, img1, img2, img3, img4, img5) {
  var img = document.getElementById(id);

  if (img.src.endsWith(img1) && acc === "sig") {
    img.src = img2;
  } else if (img.src.endsWith(img2) && img3 != "" && acc === "sig") {
    img.src = img3;
  } else if (img.src.endsWith(img3) && img4 != "" && acc === "sig") {
    img.src = img4;
  } else if (img.src.endsWith(img4) && img5 != "" && acc === "sig") {
    img.src = img5;
  } else if (img.src.endsWith(img5) && acc === "sig") {
    img.src = img1;
  }if (img.src.endsWith(img1) && img5 != "" && acc === "ant") {
    img.src = img5;
  } else if (img.src.endsWith(img2) && img1 != "" && acc === "ant") {
    img.src = img1;
  } else if (img.src.endsWith(img3) && img2 != "" && acc === "ant") {
    img.src = img2;
  } else if (img.src.endsWith(img4) && img3 != "" && acc === "ant") {
    img.src = img3;
  } else if (img.src.endsWith(img5) && img4 != "" && acc === "ant") {
    img.src = img4;
  }
}
